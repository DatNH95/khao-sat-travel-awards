# QA luồng ghép — 26.10.2026

- Build production và TypeScript: đạt.
- Hai nhóm giữ đủ 6/9 tên hạng mục theo Sheet, không thay bằng tên demo trong HTML.
- Bước 2: ban đầu không chọn sẵn, khóa Tiếp tục; chọn nhiều hoạt động. Chọn chưa từng sử dụng xóa các hồ sơ; chọn lại hồ sơ bỏ lựa chọn chưa sử dụng.
- Bước 3 chỉ có các hồ sơ đã chọn; chưa đủ điểm thì nút hoàn tất khóa. Chấm từng hồ sơ rồi hoàn tất cho kết quả tóm tắt đúng 5/5 và 3/5 trong bài kiểm tra desktop.
- Nhánh chưa sử dụng chuyển thẳng bước 4; bước 3 hiển thị Đã bỏ qua, không chấm điểm giả.
- Trụ cột và Tiên phong được kiểm tra độc lập; tiến trình mẫu tương ứng 1/6 và 1/9. Mở lại và hoàn tất cùng phản hồi không tăng lặp.
- Sửa câu trả lời loại bỏ trạng thái hoàn tất cũ. Chọn tất cả sau nhánh chưa sử dụng có 5 hồ sơ và 0 điểm đã chọn, không tự gán điểm mặc định.
- Mobile 390px: danh sách/bảng Likert/hoàn tất không tràn ngang; bảng đổi thành từng hồ sơ với 5 lựa chọn có nhãn. Đã sửa caption khỏi trạng thái co hẹp khi table chuyển block.
- Desktop: bảng ma trận đúng thứ tự 5 mức, focus tiêu đề khi chuyển bước. Console không có error/warning trong bản đã kiểm tra.
- Handoff chỉ HTML/CSS, không script/runtime/CDN font; CSS giống app. Ảnh minh họa tự chứa, không tải từ bên thứ ba.
- File HTML người dùng gửi được giữ nguyên hash; không thực thi script nguồn, không thay source Travel Awards, không thêm API/storage.
- Preview localhost được mở về bước đầu để người dùng review; reload xóa state mẫu.
