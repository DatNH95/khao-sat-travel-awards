import type { Metadata } from 'next';
import { Button, Container, Surface } from '@/components/primitives';
import { UiIcon, uiIconNames } from '@/components/ui-icon';
import { FlowPreview } from './flow-preview';

export const metadata: Metadata = { title: 'Design System' };

export default function DesignSystemPage() {
  return <section id="main" role="main" className="section survey-page surface surface--primary section--primary" aria-labelledby="foundation-title" tabIndex={-1}>
    <Container>
      <header className="nomination-intro"><div className="nomination-title-row"><div className="nomination-title-copy">
        <h1 className="type-heading-1" id="foundation-title">Design System</h1>
        <p>Foundation và cấu trúc giao diện dùng chung cho dự án khảo sát.</p>
      </div></div></header>
      <section className="foundation-section stack" aria-labelledby="surfaces-title">
        <h2 className="type-heading-3" id="surfaces-title">Surface và màu semantic</h2>
        <div className="foundation-swatches">{(['primary', 'brand-soft', 'brand-deep'] as const).map(tone => <Surface key={tone} tone={tone} className="foundation-swatch stack"><p>{tone}</p><span>Văn bản theo surface</span></Surface>)}</div>
      </section>
      <section className="foundation-section stack" aria-labelledby="typography-title">
        <h2 className="type-heading-3" id="typography-title">Typography</h2>
        <p className="type-heading-2">Tiêu đề · Arial / Helvetica</p>
        <p className="type-body-large">Nội dung lớn · 18px</p><p>Nội dung cơ bản · 16px</p><p className="type-body-small">Chú thích · 14px</p>
      </section>
      <section className="foundation-section stack" aria-labelledby="controls-title">
        <h2 className="type-heading-3" id="controls-title">Button và icon</h2>
        <div className="foundation-actions"><Button disabled>Primary</Button><Button variant="secondary" disabled>Secondary</Button></div>
        <p className="type-body-small">Nút minh họa đang khóa vì chưa gắn hành động.</p>
        <div className="foundation-actions">{uiIconNames.map(name => <span key={name} title={name}><UiIcon name={name} /><span className="sr-only">{name}</span></span>)}</div>
      </section>
      <section className="foundation-section stack" aria-labelledby="flow-title">
        <h2 className="type-heading-3" id="flow-title">Khung nhiều bước</h2>
        <p>Hai bước minh họa để kiểm tra cấu trúc và điều hướng. Số bước khảo sát chính thức chưa được xác định.</p>
        <FlowPreview />
      </section>
    </Container>
  </section>;
}
