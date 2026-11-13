// Render presentation fixtures through the existing components, without a browser
// or private localStorage. React/TypeScript are export-time dependencies only.
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const { transformSync } = require('next/dist/build/swc');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const root = path.resolve(__dirname, '..');
const h = React.createElement;
const noop = () => {};

for (const ext of ['.ts', '.tsx']) {
  require.extensions[ext] = (mod, filename) => {
    const result = transformSync(fs.readFileSync(filename, 'utf8'), {
      filename,
      jsc: { parser: { syntax: 'typescript', tsx: ext === '.tsx' }, target: 'es2020', transform: { react: { runtime: 'automatic' } } },
      module: { type: 'commonjs' },
    });
    mod._compile(result.code, filename);
  };
}
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, ...args) {
  return resolve.call(this, request.startsWith('@/') ? path.join(root, 'src', request.slice(2)) : request, ...args);
};
const load = Module._load;
Module._load = function (request, ...args) {
  if (request === 'next/image') return function StaticImage({ unoptimized, priority, loader, quality, fill, ...props }) {
    return h('img', props);
  };
  if (request === 'next/link') return function StaticLink({ prefetch, replace, scroll, ...props }) { return h('a', props); };
  return load.call(this, request, ...args);
};

const { SiteHeader, SiteFooter } = require('../src/components/site-shell.tsx');
const { ProfileScreening, SatisfactionRating, SurveyCompletion } = require('../src/components/survey/survey-experience.tsx');
const { SurveyHistory } = require('../src/components/survey/survey-history.tsx');
const { SurveyProgress } = require('../src/components/survey/survey-progress.tsx');
const { categoryGroups } = require('../src/config/survey-categories.ts');
const { getSurveyProfiles, emptyResponse } = require('../src/config/survey-demo.ts');
const { getScreeningCopy } = require('../src/config/survey-copy.ts');
const { surveyConfig } = require('../src/config/survey.ts');
const pages = [];

function writePage(filename, title, content) {
  let html = '<!doctype html>' + renderToStaticMarkup(h('html', { lang: 'vi' },
    h('head', null, h('meta', { charSet: 'utf-8' }), h('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      h('meta', { name: 'robots', content: 'noindex,nofollow' }), h('title', null, title), h('link', { rel: 'stylesheet', href: 'css/styles.css' })),
    h('body', { className: 'home survey' }, h('a', { className: 'skip-link', href: '#main' }, 'Đến nội dung chính'), h(SiteHeader),
      h('section', { id: 'main', role: 'main', className: 'section survey-page survey-category-page surface surface--primary section--primary', 'aria-labelledby': 'survey-title', tabIndex: -1 },
        h('div', { className: 'layout-container' }, h('header', { className: 'nomination-intro survey-page-intro' },
          h('div', { className: 'nomination-title-row' }, h('div', { className: 'nomination-title-copy' }, h('h1', { id: 'survey-title', className: 'type-heading-1' }, surveyConfig.title)),
            h('div', { className: 'survey-project-intro' }, h('p', null, 'Travel Awards tôn vinh những điểm đến, doanh nghiệp và dịch vụ tiêu biểu,', h('br'), 'góp phần định hình tương lai du lịch Việt Nam.')))), content)), h(SiteFooter))));
  html = html.replace(/<link\b(?=[^>]*rel="preload")[^>]*>/g, '')
    .replace(/src="\/assets\//g, 'src="../public/assets/')
    .replace(/href="\/design-system"/g, 'href="design-system.html"').replace(/href="\/"/g, 'href="index.html"')
    .replace(/<(button|input|select|textarea)\b([^>]*)>/gi, (tag, name, attrs) => /\bdisabled(?:\s|=|$)/i.test(attrs) ? tag : `<${name}${attrs.replace(/\/$/, '')} disabled="">`);
  if (/<script\b|\/_next\/|(?:src|href)="\/(?!\/)/i.test(html)) throw Error('Runtime or unresolved URL: ' + filename);
  fs.writeFileSync(path.join(root, 'hand-off', filename), html.replace(/></g, '>\n<') + '\n');
  pages.push({ filename, title });
}

function workspace(category, step, component, history, skipped = false) {
  const copy = getScreeningCopy(category.id);
  const titles = ['', copy.question, copy.ratingTitle, 'Hoàn thành'];
  return h('div', { className: 'nomination-layout survey-workspace', 'data-step': step },
    h(SurveyProgress, { steps: surveyConfig.steps.map((item, i) => i === 1 ? { ...item, title: copy.stepTitle } : item), currentStep: step, onBack: noop, allowBack: false, variant: 'timeline', skippedSteps: skipped ? [2] : [] }),
    h('div', { className: 'nomination-content survey-body' }, h('header', { className: 'nomination-step-heading survey-body-heading' },
      h('div', { className: 'nomination-title-copy' }, h('h2', { className: 'type-heading-3', tabIndex: -1 }, titles[step]), h('p', { className: 'survey-body-lead' }, h('strong', null, category.title)))), component),
    h(SurveyHistory, { responses: history, ready: true, storageFailed: false }));
}

const histories = {};
for (const group of categoryGroups) for (const category of group.categories) {
  const profiles = getSurveyProfiles(category.id);
  const selected = profiles.slice(0, 2).map(profile => profile.id);
  const response = { selected, noneUsed: false, ratings: Object.fromEntries(selected.map((id, i) => [id, i ? 3 : 5])), completed: true };
  const unused = { selected: [], noneUsed: true, ratings: {}, completed: true };
  histories[category.id] = response;
  const counts = categoryGroups.map(item => ({ label: item.label, total: item.categories.length, completed: item.id === group.id ? 1 : 0 }));
  writePage(`${category.id}-profiles.html`, `${category.title} · Chọn hồ sơ`, workspace(category, 1,
    h(ProfileScreening, { categoryId: category.id, profiles, response: emptyResponse(), onChange: noop, onBack: noop, onNext: noop }), {}));
  writePage(`${category.id}-rating.html`, `${category.title} · Đánh giá`, workspace(category, 2,
    h(SatisfactionRating, { profiles, response: { ...response, ratings: {}, completed: false }, onChange: noop, onBack: noop, onComplete: noop }), {}));
  for (const [suffix, fixture] of [['complete', response], ['unused', unused]]) {
    writePage(`${category.id}-${suffix}.html`, `${category.title} · ${suffix === 'unused' ? 'Chưa sử dụng' : 'Hoàn thành'}`,
      workspace(category, 3, h(SurveyCompletion, { profiles, response: fixture, completedCounts: counts, onBack: noop, onNext: noop }), { [category.id]: fixture }, suffix === 'unused'));
  }
}
for (const [suffix, responses, failed] of [['filled', histories, false], ['empty', {}, false], ['unavailable', {}, true]]) {
  writePage(`history-${suffix}.html`, `Lịch sử · ${suffix}`, h('div', { className: 'nomination-layout survey-workspace' }, h(SurveyHistory, { responses, ready: true, storageFailed: failed })));
}
console.log(`Exported ${pages.length} additional static screens, including all category states and history variants.`);
