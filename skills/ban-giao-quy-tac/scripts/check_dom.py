"""Validate the default handoff DOM contract using only Python's standard library."""
import argparse
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

VOID = set('area base br col embed hr img input link meta param source track wbr'.split())


class Element:
    def __init__(self, tag, attrs, parent=None):
        self.tag, self.attrs, self.parent, self.children = tag, dict(attrs), parent, []

    def has_class(self, value):
        return value in self.attrs.get('class', '').split()


class DOM(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Element('document', [])
        self.stack, self.nodes = [self.root], []

    def handle_starttag(self, tag, attrs):
        node = Element(tag, attrs, self.stack[-1])
        node.parent.children.append(node)
        self.nodes.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                self.stack = self.stack[:i]
                return


def validate(folder):
    files = sorted(p for p in folder.rglob('*') if p.is_file())
    errors, documents, references = [], {}, 0
    for file in files:
        if file.suffix not in ('.html', '.css'):
            errors.append(f'{file.name}: unexpected file type')
        if file.suffix != '.html':
            continue
        text = file.read_text(encoding='utf-8')
        dom = DOM()
        dom.feed(text)
        documents[file] = dom
        ids = [n.attrs['id'] for n in dom.nodes if 'id' in n.attrs]
        def check(ok, reason):
            if not ok:
                errors.append(f'{file.name}: {reason}')
        check(len(ids) == len(set(ids)), 'duplicate ID')
        body = next((n for n in dom.nodes if n.tag == 'body'), None)
        check(body is not None and body.has_class('home'), 'missing scoped body')
        if body:
            check(sum(n.tag == 'header' and n.has_class('home-header') for n in body.children) == 1, 'header must be direct body child')
            check(sum(n.tag == 'footer' and n.has_class('home-footer') for n in body.children) == 1, 'footer must be direct body child')
        main = next((n for n in dom.nodes if n.attrs.get('id') == 'main'), None)
        check(main is not None and main.tag == 'section' and main.attrs.get('role') == 'main', 'missing section landmark')
        if main:
            check(any(n.has_class('layout-container') for n in main.children), 'missing direct section container')
        check(not any(n.tag in ('script', 'main', 'next-route-announcer') or (n.tag == 'div' and n.has_class('home')) for n in dom.nodes), 'runtime or forbidden wrapper')
        check('/_next/' not in text, 'framework URL')
        for n in dom.nodes:
            if n.tag in ('button', 'input', 'select', 'textarea'):
                check('disabled' in n.attrs, 'interactive control in static export')
            if n.has_class('nomination-layout'):
                navs = [c for c in n.children if c.tag == 'nav' and c.has_class('nomination-progress')]
                if navs:
                    index = n.children.index(navs[0])
                    check(index + 1 < len(n.children) and n.children[index + 1].tag == 'div' and n.children[index + 1].has_class('nomination-content'), 'progress/content sibling contract')
    for file, dom in documents.items():
        for n in dom.nodes:
            for key in ('href', 'src'):
                value = n.attrs.get(key)
                if not value:
                    continue
                url = urlsplit(value)
                if url.scheme or url.netloc:
                    continue
                references += 1
                target = (file.parent / unquote(url.path)).resolve() if url.path else file
                if not target.is_file():
                    errors.append(f'{file.name}: missing reference {value}')
                elif url.fragment and target in documents:
                    if not any(c.attrs.get('id') == unquote(url.fragment) for c in documents[target].nodes):
                        errors.append(f'{file.name}: missing anchor {value}')
    for file in files:
        if file.suffix != '.css':
            continue
        text = file.read_text(encoding='utf-8')
        if re.search(r'@layer\b|@theme\b', text):
            errors.append(f'{file.name}: non-plain CSS')
        for value in re.findall(r'''url\(\s*['"]?([^)'"\s]+)['"]?\s*\)|@import\s+['"]([^'"]+)['"]''', text):
            ref = next(v for v in value if v)
            url = urlsplit(ref)
            if not url.scheme and not url.netloc and url.path and not (file.parent / unquote(url.path)).is_file():
                errors.append(f'{file.name}: missing CSS reference {ref}')
        if file.name not in ('font.css', 'icons.css') and re.search(r'@font-face\b|font-family\s*:', text):
            errors.append(f'{file.name}: font configuration belongs in font.css')
    for name in ('font.css', 'icons.css'):
        if not (folder / 'css' / name).is_file():
            errors.append(f'missing css/{name}')
    return dict(result='FAIL' if errors else 'PASS', html=len(documents), css=sum(p.suffix == '.css' for p in files), local_references=references, errors=errors)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('folder', type=Path)
    parser.add_argument('--report', type=Path)
    args = parser.parse_args()
    result = validate(args.folder.resolve())
    output = json.dumps(result, ensure_ascii=False, indent=2)
    print(output)
    if args.report:
        args.report.write_text(output + '\n', encoding='utf-8')
    raise SystemExit(bool(result['errors']))
