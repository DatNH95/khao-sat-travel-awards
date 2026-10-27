'use client';

import { useId, useRef, useState, type ReactNode } from 'react';
import { Button } from '@/components/primitives';
import { UiIcon } from '@/components/ui-icon';
import { SurveyProgress } from './survey-progress';
import type { SurveyStep } from './types';

/** UI scaffold only. Steps remain mounted to retain native field drafts on Back/Next. */
export function SurveyFlow({ steps, renderStep }: {
  steps: readonly SurveyStep[];
  renderStep: (step: SurveyStep) => ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const uid = useId();
  const activeStep = steps[currentStep];

  function navigate(index: number) {
    if (index < 0 || index >= steps.length) return;
    setCurrentStep(index);
    requestAnimationFrame(() => heading.current?.focus());
  }

  if (!activeStep) return <p role="status">Đang chờ cấu hình các bước khảo sát.</p>;

  return <div className="nomination-layout">
    <SurveyProgress steps={steps} currentStep={currentStep} onBack={navigate} />
    <div className="nomination-content">
      <header className="nomination-step-heading stack">
        <p className="type-body-small" role="status">Bước {currentStep + 1} / {steps.length}</p>
        <h2 id={`${uid}-heading`} ref={heading} tabIndex={-1} className="type-heading-3">{activeStep.title}</h2>
      </header>
      <form aria-labelledby={`${uid}-heading`} onSubmit={event => {
        event.preventDefault();
        if (currentStep < steps.length - 1) navigate(currentStep + 1);
      }}>
        {steps.map((step, index) => <fieldset className="nomination-form-section stack" key={step.id} hidden={index !== currentStep} disabled={index !== currentStep}>
          <legend className="sr-only">{step.title}</legend>
          {step.description && <p>{step.description}</p>}
          {renderStep(step)}
        </fieldset>)}
        <div className="nomination-actions">
          <Button variant="secondary" disabled={currentStep === 0} onClick={() => navigate(currentStep - 1)}><UiIcon name="angle-left" size={16} />Quay lại</Button>
          {currentStep < steps.length - 1
            ? <Button type="submit">Tiếp tục<UiIcon name="angle-right" size={16} /></Button>
            : <Button disabled>Chưa cấu hình gửi</Button>}
        </div>
      </form>
    </div>
  </div>;
}
