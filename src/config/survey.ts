import type { SurveyConfig } from '@/components/survey/types';

// Presentation only: the four-step structure comes from the supplied demo images.
export const surveyConfig: SurveyConfig = {
  title: 'Khảo sát trải nghiệm',
  description: 'Chọn hạng mục và chia sẻ đánh giá của bạn.',
  steps: [
    { id: 'category', title: 'Giải thưởng', description: 'Chọn hạng mục khảo sát.' },
    { id: 'experience', title: 'Chọn hồ sơ', description: 'Chọn các hồ sơ phù hợp với trải nghiệm hoặc hiểu biết của bạn.' },
    { id: 'rating', title: 'Đánh giá', description: 'Đánh giá các hồ sơ đã chọn.' },
    { id: 'completion', title: 'Hoàn thành', description: 'Xem lại phản hồi trong bản khảo sát mẫu.' },
  ],
};
