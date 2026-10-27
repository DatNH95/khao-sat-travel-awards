import type { SurveyConfig } from '@/components/survey/types';

// Presentation only: the four-step structure comes from the supplied demo images.
export const surveyConfig: SurveyConfig = {
  title: 'Khảo sát trải nghiệm',
  description: 'Chọn hạng mục và chia sẻ đánh giá của bạn.',
  steps: [
    { id: 'category', title: 'Chọn hạng mục giải thưởng', description: 'Mỗi hạng mục trao giải cho một nhóm đối tượng khác nhau (15 hạng mục).' },
    { id: 'experience', title: 'Chọn các đơn vị đã từng sử dụng', description: 'Bạn đã từng sử dụng sản phẩm/dịch vụ của đơn vị nào dưới đây?' },
    { id: 'rating', title: 'Đánh giá mức độ hài lòng', description: 'Đánh giá trải nghiệm tại các đơn vị đã chọn.' },
    { id: 'completion', title: 'Hoàn thành đánh giá', description: 'Xem lại phản hồi trong bản khảo sát mẫu.' },
  ],
};
