# Đồng bộ handoff — 06.11.2026

- `pnpm typecheck`, `pnpm build`, `pnpm handoff:sync`: đạt; xuất cả trang khảo sát và Design System từ bản build hiện tại.
- Handoff chỉ gồm HTML/CSS; không script/runtime Next, không wrapper main; section nội dung giữ landmark và skip-link.
- Kiểm tra file: không trùng ID; 12 đường dẫn nội bộ và các asset CSS tồn tại; các điều khiển cần JavaScript đều disabled. CSS theme/mobile khớp source sau chuyển đường dẫn asset.
- Bản tĩnh không đọc localStorage: thay trạng thái tải lịch sử bằng thông báo chỉ xem lịch sử trong ứng dụng trên trình duyệt đã lưu. Không xuất dữ liệu lịch sử cá nhân.
- Source kèm dòng hướng dẫn đăng nhập MyVNEID hiện có; không thêm tích hợp đăng nhập hoặc backend.
- Đợt này kiểm tra cấu trúc file và build; chưa chạy lại browser QA desktop/mobile. Giữ CSS responsive và các báo cáo kiểm tra giao diện đã có.
