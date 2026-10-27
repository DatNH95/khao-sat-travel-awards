'use client';

import { useId, useRef, useState } from 'react';
import { Button } from '@/components/primitives';
import { UiIcon } from '@/components/ui-icon';
import { categoryGroups, totalCategories } from '@/config/survey-categories';
import { surveyConfig } from '@/config/survey';
import { SurveyProgress } from './survey-progress';
import { ProfileScreening, SatisfactionRating, SurveyCompletion } from './survey-experience';
import { emptyResponse, getSurveyProfiles, ratingLevels, type CategoryResponse } from '@/config/survey-demo';

export function CategorySurvey() {
  const [selection, setSelection] = useState('');
  const [step, setStep] = useState(0);
  const [responses, setResponses] = useState<Record<string, CategoryResponse>>({});
  const heading = useRef<HTMLHeadingElement>(null);
  const uid = useId();
  const selectedGroup = categoryGroups.find(group => group.categories.some(category => category.id === selection));
  const selectedCategory = selectedGroup?.categories.find(category => category.id === selection);
  const response = responses[selection] ?? emptyResponse();
  const profiles = getSurveyProfiles(selection);
  const completedCounts = categoryGroups.map(group => ({ label: group.label, completed: group.categories.filter(category => responses[category.id]?.completed).length, total: group.categories.length }));
  const nextCategory = categoryGroups.flatMap(group => group.categories).find(category => !responses[category.id]?.completed && category.id !== selection);
  const stepTitles = ['Chọn hạng mục giải thưởng để khảo sát hồ sơ dự thi', 'Bạn đã từng sử dụng sản phẩm/dịch vụ của đơn vị nào dưới đây?', 'Vui lòng đánh giá mức độ hài lòng với các đơn vị đã chọn.', 'Hoàn thành đánh giá'];

  function updateResponse(next: CategoryResponse) {
    setResponses(current => ({ ...current, [selection]: next }));
  }

  function complete() {
    const validRatings = response.selected.length > 0 && response.selected.every(id => ratingLevels.some(level => level.value === response.ratings[id]));
    if (!response.noneUsed && !validRatings) return;
    updateResponse({ ...response, completed: true });
    navigate(3);
  }

  function navigate(next: number) {
    if (next > 3 || next < 0 || (next > 0 && !selectedCategory)) return;
    if (next === 2 && (response.noneUsed || response.selected.length === 0)) return;
    setStep(next);
    requestAnimationFrame(() => heading.current?.focus());
  }

  return <div className="nomination-layout survey-workspace" data-step={step}>
    <SurveyProgress steps={surveyConfig.steps} currentStep={step} onBack={navigate} variant="timeline" skippedSteps={step === 3 && response.noneUsed ? [2] : []} />
    <div className="nomination-content survey-body">
      <header className="nomination-step-heading survey-body-heading">
        <div className="nomination-title-copy">
          <h2 ref={heading} tabIndex={-1} id={`${uid}-title`} className="type-heading-3">{stepTitles[step]}</h2>
          <p className="survey-body-lead">{step === 0
            ? <>{totalCategories} hạng mục · <strong>Trụ cột</strong> ({categoryGroups[0].categories.length}) và <strong>Tiên phong</strong> ({categoryGroups[1].categories.length}).</>
            : <strong>{selectedCategory?.title}</strong>}</p>
        </div>
      </header>

      {step === 0 ? <form aria-labelledby={`${uid}-title`} onSubmit={event => { event.preventDefault(); if (selectedCategory) navigate(1); }}>
        <fieldset className="nomination-form-section survey-category-fieldset">
          <legend className="sr-only">Chọn một hạng mục khảo sát</legend>
          <div className="survey-category-groups" data-filter="all">
            {categoryGroups.map(group => <section className="survey-category-group" data-group={group.id} key={group.id} aria-labelledby={`${uid}-${group.id}`}>
              <header className="survey-group-heading">
                <div><h3 id={`${uid}-${group.id}`}>{group.title}</h3></div>
                <span className="survey-group-count"><strong>{completedCounts[categoryGroups.findIndex(item => item.id === group.id)].completed}/{group.categories.length}</strong> hoàn tất</span>
              </header>
              <div className="survey-category-list" tabIndex={0} role="region" aria-label={`Danh sách ${group.label}`}>
                {group.categories.map(category => <label className="nomination-category survey-category" data-selected={selection === category.id} data-completed={responses[category.id]?.completed || undefined} key={category.id}>
                  <input type="radio" name="survey-category" value={category.id} checked={selection === category.id} required onChange={() => setSelection(category.id)} aria-describedby={`${uid}-${category.id}-description`} />
                  <span className="survey-category-icon"><UiIcon name={category.icon} size={23} /></span>
                  <span className="survey-category-copy"><span className="survey-category-title">{category.title}</span><span className="survey-category-description" id={`${uid}-${category.id}-description`}>{responses[category.id]?.completed ? 'Đã hoàn tất · Xem lại' : category.summary ?? category.description}</span></span>
                  <span className="survey-category-arrow"><UiIcon name={selection === category.id || responses[category.id]?.completed ? 'check' : 'angle-right'} size={16} /></span>
                </label>)}
              </div>
            </section>)}
          </div>
        </fieldset>
        <div className="nomination-actions survey-category-actions">
          <div className="survey-selection" role="status" aria-live="polite"><span>Đang chọn</span>{selectedCategory ? <strong>{selectedCategory.title}</strong> : <p>Chưa chọn hạng mục</p>}</div>
          <Button className="survey-continue" type="submit" disabled={!selectedCategory}>Tiếp tục khảo sát hạng mục này<UiIcon name="arrow-right" size={18} /></Button>
        </div>
      </form> : step === 1 ? <ProfileScreening profiles={profiles} response={response} onChange={updateResponse} onBack={() => navigate(0)} onNext={() => response.noneUsed ? complete() : navigate(2)} />
        : step === 2 ? <SatisfactionRating profiles={profiles} response={response} onChange={updateResponse} onBack={() => navigate(1)} onComplete={complete} />
        : <SurveyCompletion profiles={profiles} response={response} completedCounts={completedCounts} onEdit={() => navigate(1)} onBack={() => navigate(0)} onNext={nextCategory ? () => { setSelection(nextCategory.id); setStep(1); requestAnimationFrame(() => heading.current?.focus()); } : undefined} />}
    </div>
  </div>;
}
