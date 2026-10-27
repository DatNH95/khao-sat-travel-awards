# Danh sách giải thưởng — 23.10.2026

- Nguồn: Google Sheet `Form đăng ký Travel Awards 2026` do người dùng chỉ định.
- Tên và thứ tự: `form đăng ký!B8:B13` (6 Trụ cột), `B16:B24` (9 Tiên phong).
- Đối chiếu trùng khớp toàn bộ tên/thứ tự với `Tiêu chí!B3:B8` và `B10:B18`.
- Mô tả dùng nguyên văn định nghĩa ở `Tiêu chí!D3:D8`, `D10:D18`; không lấy điều kiện đăng ký hay tỷ trọng chấm giải.
- Đã thay tên demo, bỏ ba placeholder; 15 radio trong app đều có thể chọn.
- Heading nhóm là Trụ cột và Tiên phong, các hạng mục nằm bên dưới. Số lượng bộ lọc tính từ cấu hình.
- `pnpm build`, `pnpm typecheck`, xuất HTML/CSS: đạt.
- Trình duyệt desktop 1280px: hai nhóm 6/9 đúng tên, không tràn ngang. Bộ lọc Tiên phong hiện đúng 9 mục.
- Dùng bàn phím chọn Chiến dịch quảng bá du lịch của năm, mở bước 2, quay lại: giữ đúng lựa chọn.
- Mobile 390px: một cột, cả hai nhóm hiển thị, không tràn ngang, giữ lựa chọn khi đổi bộ lọc; console không có error/warning.
- Handoff chứa đủ 15 tên khớp nguồn; không còn placeholder, không có script/runtime, CSS khớp app.
- Dữ liệu là snapshot tĩnh; không ghi hoặc sửa Google Sheet, không kết nối dữ liệu trong runtime và không sửa repo Travel Awards.
