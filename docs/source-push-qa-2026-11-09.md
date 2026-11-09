# Kiểm tra source trước khi push — 09.11.2026

- Phạm vi: rút gọn tiêu đề bước chọn hạng mục và tên “Điểm đến du lịch của năm”. Không đồng bộ handoff.
- Fetch origin: local main khớp origin/main trước commit.
- `pnpm typecheck` và `git diff --check`: đạt.
- `pnpm build` lỗi nội bộ Turbopack khi khởi tạo tiến trình xử lý PostCSS, tái hiện cả ngoài sandbox. `pnpm build --webpack` hoàn tất thành công; không đổi cấu hình hay dependency để xử lý lỗi công cụ.
- Kiểm tra trang localhost: desktop 1280px và mobile 390px hiển thị câu chữ mới, không tràn ngang. Phím Space chọn hạng mục, có focus và nút Tiếp tục được mở. Console không có error/warning trong phiên kiểm tra.
- Không thay CSS, animation hoặc luồng nghiệp vụ. Không đưa file sinh tự động, screenshot hay artifact vào commit.
