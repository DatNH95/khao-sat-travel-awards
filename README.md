# Khảo sát độc lập

Giao diện khảo sát độc lập theo hai ảnh demo người dùng cung cấp, dùng Design System Travel Awards và cấu trúc HTML/CSS Tech.

## Chạy local

Node.js 20.9+, pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Mở `http://127.0.0.1:3001`. Cổng riêng tránh trùng dự án tham khảo.

```sh
pnpm typecheck
pnpm build
pnpm handoff:sync
pnpm start
```

## Cấu trúc

- `src/config/survey.ts`: 4 nhãn bước theo ảnh demo.
- `src/config/survey-categories.ts`: đủ 6 Trụ cột và 9 Tiên phong theo Google Sheet người dùng cung cấp ngày 23.10.2026. Nguồn và vùng ô được ghi ở `docs/award-categories-source.json`; dữ liệu tĩnh, không kết nối Sheet trong runtime.
- `src/components/survey/category-survey.tsx`: chọn hạng mục, bộ lọc, bản nháp và tiến trình mẫu riêng từng hạng mục; state chỉ trong component.
- `src/components/survey/survey-experience.tsx`: chọn hồ sơ, nhánh chưa từng trải nghiệm, đánh giá 5 mức và hoàn tất mẫu từ file HTML người dùng gửi.
- `src/config/survey-demo.ts`: 45 hồ sơ nguồn ánh xạ vào 9 hạng mục tương ứng; 6 hạng mục còn lại dùng ô minh họa trung tính. Không phải danh sách đề cử chính thức.
- `src/components/survey/`: khung nhiều bước, tiến trình, kiểu dữ liệu; Back/Next, native validation và focus tiêu đề. Panel giữ mounted để giữ input trong phiên, không lưu bền vững.
- `src/components/primitives.tsx`: Container, Surface, Button.
- `src/components/site-header.tsx`, `site-footer.tsx`: bản sao độc lập header/footer Travel Awards; giữ logo/menu và thông tin VnExpress, footer có nhãn Khảo sát - Travel Awards 2026. Đặt `NEXT_PUBLIC_TRAVEL_AWARDS_URL` khi địa chỉ website chính thay đổi (xem `.env.example`).
- `src/components/ui-icon.tsx`: SVG nội bộ; không dùng Flaticon font hoặc link credit.
- `src/styles/tokens.css`: bản sao độc lập của tokens UI dùng chung.
- `public/css/theme.css`, `mobile_theme.css`: CSS thuần dùng chung cho app và HTML bàn giao, theo cấu trúc file Tech.
- `/design-system`: foundation và hai bước minh họa, không phải khảo sát chính thức.
- `hand-off/`: chỉ HTML/CSS thuần, không cần React/Next/Tailwind runtime; chạy `pnpm build` rồi `pnpm handoff:sync` để xuất HTML và CSS từ implementation hiện tại. Bản Design System tĩnh khóa các điều khiển cần JavaScript.
- `references/HTML-PC/`: HTML/CSS/SCSS gốc trích từ file Tech, chỉ làm tài liệu tham chiếu; xem `docs/html-css-reference.md`.
- `AGENTS.md`: quy tắc chung đã lọc khỏi nghiệp vụ Travel Awards, bổ sung cấu trúc Tech.

## Phạm vi hiện tại

Trang `/` có đủ luồng 4 bước mẫu theo file HTML người dùng cung cấp: chọn hạng mục, chọn nhiều hồ sơ, đánh giá mức độ hài lòng và hoàn tất mẫu. “Chưa từng sử dụng” loại trừ chọn hồ sơ và bỏ qua chấm điểm. Chỉ hoàn tất khi đủ câu trả lời; bản nháp và bộ đếm giữ trong phiên, reload reset. Bản xem thử ghi rõ dữ liệu minh họa và chưa gửi phản hồi. Không có API, database, tài khoản, analytics hay lưu bền vững. Chưa triển khai website công khai.

Không import, symlink hoặc dùng dữ liệu/cấu hình từ repo Travel Awards. Dependencies được cài riêng; file tham chiếu không được đưa vào public hoặc thực thi.

Khi có brief mới, xác định nội dung, số bước, validation và hợp đồng gửi dữ liệu rồi mới triển khai. Mọi trang tiếp theo dùng cấu trúc HTML/CSS Tech và cùng Design System.
