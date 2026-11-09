import { useId } from 'react';
import { categoryGroups } from '@/config/survey-categories';
import { getSurveyProfiles, ratingLevels, type CategoryResponse } from '@/config/survey-demo';
import { getScreeningCopy } from '@/config/survey-copy';
import { UiIcon } from '@/components/ui-icon';

export function SurveyHistory({ responses, ready, storageFailed }: {
  responses: Record<string, CategoryResponse>;
  ready: boolean;
  storageFailed: boolean;
}) {
  const headingId = useId();
  const completed = Object.values(responses).filter(response => response.completed);
  const totalProfiles = completed.reduce((total, response) => total + response.selected.length, 0);
  return <section className="survey-history" aria-labelledby={headingId}>
    <header className="survey-history-heading">
      <div><h2 id={headingId}>Lịch sử khảo sát</h2>{storageFailed && <p>Trình duyệt chưa cho phép lưu lịch sử. Kết quả chỉ được giữ trong phiên này.</p>}</div>
      <p className="survey-history-total"><strong>{completed.length}</strong> hạng mục <span aria-hidden="true">·</span> <strong>{totalProfiles}</strong> hồ sơ đã đánh giá</p>
    </header>
    {!ready ? <p className="survey-history-empty" role="status">Đang tải lịch sử…</p> : !completed.length ? <p className="survey-history-empty">Chưa có hạng mục hoàn thành. Các hồ sơ đã đánh giá sẽ xuất hiện tại đây.</p> : <div className="survey-history-groups">{categoryGroups.map(group => {
      const categories = group.categories.filter(category => responses[category.id]?.completed);
      if (!categories.length) return null;
      return <div className="survey-history-group" key={group.id}>
        <h3>{group.title}<span>{categories.length}/{group.categories.length} hạng mục</span></h3>
        {categories.map(category => {
          const response = responses[category.id];
          const profiles = getSurveyProfiles(category.id).filter(profile => response.selected.includes(profile.id));
          return <details className="survey-history-category" key={category.id}>
            <summary><span className="survey-history-category-name"><UiIcon name="check" size={16} />{category.title}</span><span className="survey-history-count">{response.noneUsed ? 'Đã hoàn thành · Không chấm điểm' : `${profiles.length} hồ sơ đã đánh giá`}</span></summary>
            {response.noneUsed ? <p className="survey-history-none">{getScreeningCopy(category.id).noneLabel} · Không chấm điểm.</p> : <ul>{profiles.map(profile => {
              const score = response.ratings[profile.id];
              return <li key={profile.id}><span>{profile.name}</span><span className="survey-history-score" data-rating-tone={score <= 2 ? 'negative' : score >= 4 ? 'positive' : 'neutral'}><strong>{score}/5</strong> · {ratingLevels.find(level => level.value === score)?.label}</span></li>;
            })}</ul>}
          </details>;
        })}
      </div>;
    })}</div>}
  </section>;
}
