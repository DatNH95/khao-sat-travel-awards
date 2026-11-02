import Image from 'next/image';
import { Button } from '@/components/primitives';
import { UiIcon } from '@/components/ui-icon';
import { ProfileScrollList } from './profile-scroll-list';
import { getScreeningCopy } from '@/config/survey-copy';
import { ratingLevels, type CategoryResponse, type SurveyProfile } from '@/config/survey-demo';

export function ProfileScreening({ categoryId, profiles, response, onChange, onBack, onNext }: {
  categoryId: string;
  profiles: readonly SurveyProfile[];
  response: CategoryResponse;
  onChange: (response: CategoryResponse) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const copy = getScreeningCopy(categoryId);
  const allSelected = profiles.length > 0 && profiles.every(profile => response.selected.includes(profile.id));
  function toggleProfile(id: string, checked: boolean) {
    const ratings = { ...response.ratings };
    if (!checked) delete ratings[id];
    onChange({ selected: checked ? [...response.selected, id] : response.selected.filter(value => value !== id), noneUsed: false, ratings, completed: false });
  }
  return <form onSubmit={event => { event.preventDefault(); if (response.noneUsed || response.selected.length) onNext(); }}>
    <fieldset className="nomination-form-section stack">
      <legend className="sr-only">{copy.question}</legend>
      <div className="survey-profile-toolbar"><p>Có thể chọn nhiều hồ sơ.</p><Button variant="secondary" onClick={() => onChange({ ...response, selected: allSelected ? [] : profiles.map(profile => profile.id), noneUsed: false, ratings: allSelected ? {} : response.ratings, completed: false })}>{allSelected ? 'Bỏ chọn tất cả' : `Chọn tất cả (${profiles.length})`}</Button></div>
      <ProfileScrollList count={profiles.length}>{profiles.map((profile, index) => <label className="survey-profile-card" data-selected={response.selected.includes(profile.id)} key={profile.id}>
        <input type="checkbox" name="experienced-profile" value={profile.id} checked={response.selected.includes(profile.id)} onChange={event => toggleProfile(profile.id, event.target.checked)} />
        {profile.image ? <Image className="survey-profile-image" src={profile.image} width={96} height={72} alt="" /> : <span className="survey-profile-image survey-profile-placeholder" aria-hidden="true"><UiIcon name="document" size={28} /></span>}
        <span className="survey-profile-copy"><strong>{index + 1}. {profile.name}</strong><span><UiIcon name="marker" size={14} />{profile.location}</span></span>
        <span className="survey-profile-state" aria-hidden="true">{response.selected.includes(profile.id) ? 'Đã chọn khảo sát' : 'Chưa chọn'}</span>
      </label>)}</ProfileScrollList>
      <p className="survey-choice-divider">{copy.divider}</p>
      <label className="survey-profile-card survey-none-used" data-selected={response.noneUsed}>
        <input type="checkbox" checked={response.noneUsed} onChange={event => onChange({ selected: [], noneUsed: event.target.checked, ratings: {}, completed: false })} />
        <span className="survey-profile-copy"><strong>{copy.noneLabel}</strong><span>Bỏ qua chấm điểm và hoàn tất khảo sát.</span></span>
      </label>
      <p className="type-body-small survey-screening-hint">Vui lòng chọn ít nhất 1 hồ sơ hoặc chọn &quot;{copy.noneLabel}&quot;</p>
    </fieldset>
    <div className="nomination-actions"><Button variant="secondary" onClick={onBack}><UiIcon name="angle-left" size={16} />Chọn lại hạng mục</Button><div className="survey-action-group"><Button className="survey-continue" type="submit" disabled={!response.noneUsed && response.selected.length === 0}>Tiếp tục<UiIcon name="arrow-right" size={18} /></Button></div></div>
  </form>;
}

export function SatisfactionRating({ profiles, response, onChange, onBack, onComplete }: {
  profiles: readonly SurveyProfile[];
  response: CategoryResponse;
  onChange: (response: CategoryResponse) => void;
  onBack: () => void;
  onComplete: () => void;
}) {
  const selected = profiles.filter(profile => response.selected.includes(profile.id));
  const rated = selected.filter(profile => ratingLevels.some(level => level.value === response.ratings[profile.id])).length;
  return <form onSubmit={event => { event.preventDefault(); if (selected.length > 0 && rated === selected.length) onComplete(); }}>
    <div className="survey-profile-toolbar"><p className="type-body-small" role="status">Đã đánh giá {rated}/{selected.length} hồ sơ</p><button className="text-link survey-inline-button" type="button" onClick={() => onChange({ ...response, ratings: Object.fromEntries(selected.map(profile => [profile.id, 5])), completed: false })}>Chọn 5 điểm cho tất cả</button></div>
    <div className="survey-rating-table-wrap"><table className="survey-rating-table">
      <caption>Mức độ hài lòng (Thang điểm 5 mức)</caption>
      <thead><tr><th scope="col">Hồ sơ đã chọn</th>{ratingLevels.map(level => <th key={level.value} scope="col"><span>{level.label}</span><span className="survey-rating-number" aria-label={`${level.value} điểm`}><UiIcon name="star" size={20} /></span></th>)}</tr></thead>
      <tbody>{selected.map(profile => <tr key={profile.id}><th scope="row"><div className="survey-rating-profile">{profile.image && <Image src={profile.image} alt="" width={44} height={32} />}<span><strong>{profile.name}</strong><small>{profile.location}</small></span></div></th>{ratingLevels.map(level => <td key={level.value} data-label={level.label}><label className="survey-rating-control"><input type="radio" required name={`rating-${profile.id}`} value={level.value} checked={response.ratings[profile.id] === level.value} onChange={() => onChange({ ...response, ratings: { ...response.ratings, [profile.id]: level.value }, completed: false })} /><span className="sr-only">{level.label} cho {profile.name}</span><span className="survey-rating-mobile-label" aria-hidden="true">{level.label}</span></label></td>)}</tr>)}</tbody>
    </table></div>
    <div className="nomination-actions"><Button variant="secondary" onClick={onBack}><UiIcon name="angle-left" size={16} />Chọn lại hồ sơ</Button><div className="survey-action-group"><p className="type-body-small">{rated === selected.length ? 'Đã đánh giá đủ' : 'Vui lòng đánh giá tất cả hồ sơ'}</p><Button type="submit" disabled={selected.length === 0 || rated !== selected.length}>Hoàn tất<UiIcon name="arrow-right" size={18} /></Button></div></div>
  </form>;
}

export function SurveyCompletion({ profiles, response, completedCounts, onEdit, onBack, onNext }: {
  profiles: readonly SurveyProfile[];
  response: CategoryResponse;
  completedCounts: readonly { label: string; completed: number; total: number }[];
  onEdit: () => void;
  onBack: () => void;
  onNext?: () => void;
}) {
  return <div className="survey-completion stack">
    <span className="survey-completion-icon"><svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="currentColor"><path d="M2 21 23 12 2 3 2 10 17 12 2 14Z" /></svg></span>
    <h3 className="type-heading-3">Cảm ơn bạn!</h3>
    <p>Đã hoàn tất bản xem thử. Phản hồi chưa được gửi.</p>
    <div className="survey-completion-summary stack"><h4>Phản hồi của bạn</h4>{response.noneUsed ? <p>Chưa trải nghiệm · Không chấm điểm.</p> : <dl>{profiles.filter(profile => response.selected.includes(profile.id)).map(profile => <div key={profile.id}><dt>{profile.name}</dt><dd><strong>{response.ratings[profile.id]}/5</strong> · {ratingLevels.find(level => level.value === response.ratings[profile.id])?.label}</dd></div>)}</dl>}
      <div className="survey-completion-progress">{completedCounts.map(group => <div key={group.label}><p>{group.label}<strong>{group.completed}/{group.total}</strong></p><progress value={group.completed} max={group.total} aria-label={`Tiến trình mẫu ${group.label}`} /></div>)}</div>
    </div>
    <div className="survey-completion-actions"><Button variant="secondary" onClick={onBack}>Về danh sách</Button>{onNext && <Button onClick={onNext}>Hạng mục tiếp theo<UiIcon name="arrow-right" size={18} /></Button>}<button type="button" className="text-link survey-inline-button" onClick={onEdit}>Sửa phản hồi</button></div>
  </div>;
}
