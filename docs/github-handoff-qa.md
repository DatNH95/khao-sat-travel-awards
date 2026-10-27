# Kiểm tra bàn giao GitHub — 27.10.2026

- Remote được fetch và kiểm tra trước lần push đầu tiên: chưa có nhánh/commit trên remote.
- `pnpm typecheck`, `pnpm build`, `pnpm handoff:sync`: đạt.
- Bản production desktop 1280px: chọn hạng mục, khóa Tiếp tục khi chưa chọn hồ sơ, nhánh chưa sử dụng bỏ qua chấm điểm và hoàn tất mẫu đạt. Mở sửa phản hồi, chọn Đà Nẵng, dùng phím Space chọn 3 điểm rồi hoàn tất: hiển thị đúng 3/5, bộ đếm Trụ cột vẫn 1/6.
- Tiêu đề nhận focus khi chuyển bước; console không có error/warning, không tràn ngang ở màn hoàn tất desktop.
- Responsive mobile 390px đã có báo cáo ở `docs/survey-demo-qa.md`; đợt đóng gói này không thay CSS hay source giao diện và chưa kiểm tra lại viewport mobile trực tiếp.
- Handoff sinh từ build vừa chạy: 6 file chỉ HTML/CSS; 12 tham chiếu nội bộ hợp lệ, asset CSS tồn tại, không trùng ID, không script/runtime Next hoặc wrapper main; điều khiển cần JavaScript đều disabled. Kiểm tra cấu trúc bằng file, chưa mở bản handoff trong browser.
- Sửa export token để chuẩn hóa CRLF và không để biểu thức xóa token wildcard nuốt newline. Kiểm tra whitespace cho source/handoff bỏ qua blank line cuối file; reference và CSS bên thứ ba giữ nguyên dù có whitespace gốc.
- Kiểm tra mẫu credential phổ biến trong source/tài liệu/reference không phát hiện secret; `.env.example` chỉ có URL localhost. Không đưa node_modules, build, log, screenshot hoặc file môi trường riêng vào commit.
- Asset và tài liệu tham khảo được giữ cùng source để Tech đối chiếu. Ảnh demo giữ thông tin nguồn/giới hạn sử dụng ở `docs/survey-photo-sources.json`; bản bàn giao phục vụ review giao diện, chưa triển khai công khai.
