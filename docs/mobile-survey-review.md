# Kiểm tra mobile — 09.11.2026

- Chữ tên hạng mục/hồ sơ 16px, mô tả/đơn vị 14px; heading bước 20px, title trang 32px. Timeline 13px, giữ một hàng 4 bước.
- Thanh thao tác mobile hai nút cạnh nhau, tối thiểu cao 48px, có safe-area; bước chọn hạng mục giữ dòng đang chọn cùng nút Tiếp tục.
- Đánh giá mobile hiển thị mỗi hồ sơ với 5 ô số và chú giải một lần, không cần cuộn ngang. Ô điểm trên màn hình 320px rộng tối thiểu 44.3px, cao 48px.
- Đã thao tác chọn hồ sơ, chấm điểm, dùng phím mũi tên đổi điểm, hoàn thành và mở lịch sử; kết quả giữ sau reload. Không sửa dữ liệu Travel Awards gốc.
- Kiểm tra viewport 320, 375, 390, 430, 768px và desktop: không tràn ngang. Đã sửa timeline tablet 768px vốn bị chia hai hàng làm đường nối tràn ra ngoài.
- Console không có lỗi trong luồng kiểm tra. Reduced motion giữ các override tắt transition/animation hiện có; không thêm chuyển động.
- `pnpm typecheck` và `pnpm build --webpack`: đạt. Không đồng bộ hand-off.

## Đóng gói GitHub và handoff theo yêu cầu

- Chạy lại `pnpm typecheck`, `pnpm build` và `pnpm handoff:sync`: đạt.
- CSS handoff khớp source sau chuyển đường dẫn asset; chỉ HTML/CSS, không runtime Next/script, điều khiển cần JavaScript disabled. ID không trùng, 12 tham chiếu nội bộ và asset CSS hợp lệ; kiểm tra whitespace đạt.
- Lần đóng gói kiểm tra build và cấu trúc file; không chạy lại browser QA đã ghi ở trên. Handoff chỉ xuất trạng thái đầu từ SSR, không chứa dữ liệu lịch sử cá nhân.
