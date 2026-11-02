import { Container } from '@/components/primitives';
import { CategorySurvey } from '@/components/survey/category-survey';
import { surveyConfig } from '@/config/survey';
import { travelAwardsUrl } from '@/config/site';
import { UiIcon } from '@/components/ui-icon';

export default function HomePage() {
  return <section id="main" role="main" className="section survey-page survey-category-page surface surface--primary section--primary" aria-labelledby="survey-title" tabIndex={-1}><Container>
    <header className="nomination-intro survey-page-intro">
      <div className="nomination-title-row"><div className="nomination-title-copy">
        <h1 id="survey-title" className="type-heading-1">{surveyConfig.title}</h1>
      </div><div className="survey-project-intro">
        <p>Travel Awards tôn vinh những điểm đến, doanh nghiệp và dịch vụ tiêu biểu,<br />góp phần định hình tương lai du lịch Việt Nam.</p>
        <a className="text-link" href={travelAwardsUrl('/the-le')}>Xem chi tiết<UiIcon name="arrow-up-right" size={16} /></a>
      </div></div>
    </header>
    <CategorySurvey />
  </Container></section>;
}
