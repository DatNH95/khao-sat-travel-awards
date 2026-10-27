import { Container } from '@/components/primitives';
import { CategorySurvey } from '@/components/survey/category-survey';
import { surveyConfig } from '@/config/survey';

export default function HomePage() {
  return <section id="main" role="main" className="section survey-page survey-category-page surface surface--primary section--primary" aria-labelledby="survey-title" tabIndex={-1}><Container>
    <header className="nomination-intro survey-page-intro">
      <div className="nomination-title-row"><div className="nomination-title-copy">
        <h1 id="survey-title" className="type-heading-1">{surveyConfig.title}</h1>
        <p className="type-body-large">{surveyConfig.description}</p>
      </div></div>
    </header>
    <CategorySurvey />
  </Container></section>;
}
