# Lịch sử khảo sát

- Theo yêu cầu ghi nhớ khi quay lại trang: lưu các hạng mục hoàn thành trong localStorage với khóa `travel-awards-survey:completed:v1`. Bản nháp vẫn chỉ giữ trong bộ nhớ.
- Box lịch sử nhóm theo Trụ cột/Tiên phong, hiển thị tổng số hạng mục/hồ sơ và danh sách hồ sơ cùng mức đánh giá. Hạng mục hoàn thành chỉ được xem, không sửa.
- Nhánh chưa từng sử dụng được ghi nhận riêng, không tính thành hồ sơ đã đánh giá.
- Chỉ ghi nhớ trên cùng trình duyệt và origin; không đồng bộ tài khoản/thiết bị, không gửi API. Xóa dữ liệu trình duyệt sẽ mất lịch sử. Không khôi phục các kết quả trước khi tính năng này được thêm.
- Khi đọc dữ liệu, loại hạng mục/hồ sơ không còn tồn tại và điểm không hợp lệ. Khi trình duyệt chặn lưu trữ, giao diện thông báo kết quả chỉ giữ trong phiên.

## Kiểm tra

- `pnpm typecheck`, `pnpm build --webpack`: đạt.
- Kiểm tra parser: dữ liệu lỗi, bản nháp, ID không hợp lệ, điểm ngoài 1–5, hồ sơ trùng, nhánh bỏ qua và roundtrip: đạt.
- Trình duyệt: hoàn thành Đà Nẵng (4/5), Phú Quốc (5/5), tải lại trang; lịch sử giữ đủ 2 hồ sơ, bộ đếm 1/6 và hạng mục hoàn thành bị khóa.
- Desktop và mobile 320px: box mở rộng đọc được, không tràn ngang. Danh sách dùng details/summary native hỗ trợ bàn phím.
