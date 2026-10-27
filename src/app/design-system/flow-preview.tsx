'use client';

import { SurveyFlow } from '@/components/survey/survey-flow';
import type { SurveyStep } from '@/components/survey/types';

const previewSteps: readonly SurveyStep[] = [
  { id: 'structure-a', title: 'Bước minh họa 01' },
  { id: 'structure-b', title: 'Bước minh họa 02' },
];

export function FlowPreview() {
  return <SurveyFlow steps={previewSteps} renderStep={() => <p>Vùng nội dung bước. Chưa có câu hỏi hoặc chức năng gửi dữ liệu.</p>} />;
}
