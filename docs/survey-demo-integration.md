# Ghép file khảo sát — 26.10.2026

Nguồn: `C:/Users/haidat/Desktop/code trang khao sat.html`, giữ bản tham khảo tại `references/survey-demo/source.html`.
SHA-256: `47CA73D8A9A2CA5954D4CBACCF138AF99F14C9AB9F2E1B36AF5E1EF84C7EB8B9`.

Đọc file như dữ liệu; không thực thi script nguồn. Trích literal hồ sơ và bốn thumbnail tự chứa. Chuyển các khối chọn hồ sơ, đánh giá và hoàn tất sang React với CSS semantic hiện có, không dùng CDN/font/palette của file demo.

Giữ cấu trúc Tech và danh sách 6 Trụ cột/9 Tiên phong từ Sheet. Dữ liệu demo ánh xạ: hotel←tc-1, tour-operator←tc-2, airline←tc-3, resort←tc-5, culinary-experience←tc-6, digital←tp-1, sustainability←tp-2, tourism-campaign←tp-7, travel-experience←tp-8. Các hồ sơ không khớp nhóm chính thức bị loại; sáu hạng mục khác dùng ô minh họa trung tính, chờ nội dung thực.

Đã ghép: chọn nhiều, chọn tất cả, loại trừ với chưa từng sử dụng, bỏ qua bước đánh giá, Likert 5 mức, chỉ hiện hồ sơ đã chọn, điền nhanh khi người dùng bấm, validation đủ điểm, tóm tắt phản hồi, tiến trình mẫu theo nhóm, sửa phản hồi, quay lại/đổi hạng mục giữ bản nháp. Không tự điền điểm lúc khởi tạo và không có request gửi dữ liệu.

Không ghép: header/footer riêng, modal sitemap/inspect/reset dữ liệu, phần sơ đồ giải thích hai nhánh, Tailwind v3 runtime, font Google hoặc nội dung thông báo đã gửi/bình chọn thật. Handoff tiếp tục chỉ HTML/CSS tĩnh; luồng tương tác review tại localhost.

## Cập nhật giao diện theo HTML — 27.10.2026

Theo yêu cầu mới, phần khảo sát kế thừa bố cục, màu xanh mint, bo góc, thẻ tiến trình, trạng thái chọn hồ sơ, bảng Likert và màn hoàn tất của HTML. Các màu chỉ override trong section khảo sát; header/footer và foundation vẫn độc lập. Font Arial/Helvetica theo Design System hiện hành. Tên/thứ tự hạng mục giữ theo Sheet đã chốt; không thay bằng danh sách demo.

Nút Tiếp tục cao 48px. Thanh hành động ở cuối nội dung theo file HTML, không tự thêm fixed overlay. Giữ nhánh chọn nhiều → chấm điểm → hoàn tất; chưa từng sử dụng → bỏ qua chấm điểm. Không mang modal debug/sitemap, script CDN hoặc thông báo gửi dữ liệu thật vào sản phẩm.

Header chỉ còn logo, liên kết landing page qua NEXT_PUBLIC_TRAVEL_AWARDS_URL. Không có countdown theo phản hồi cuối của người dùng.

## Demo hồ sơ thực và danh sách dài — 27.10.2026

- Hạng mục destination có 8 điểm đến thực kèm ảnh: Đà Nẵng, Phú Quốc, Nha Trang, Hạ Long, Huế, Đà Lạt, Hà Nội, Sa Pa. Đây là dữ liệu xem giao diện, không phải danh sách dự thi/đề cử thật, không sửa danh sách hạng mục chuẩn từ Sheet.
- creative-product có VinWonders Phú Quốc, VinWonders Nam Hội An và Vinpearl Safari Phú Quốc, kèm ảnh đúng cơ sở từ website chính thức. Các hạng mục chưa có nguồn phù hợp tiếp tục giữ trạng thái chờ, không tự gán địa điểm/đơn vị vào nhóm cá nhân hay nghiệp vụ khác.
- Nguồn tên/ảnh: https://vietnam.travel/place-to-go/ và https://vinwonders.com/vi/ ; URL/credit từng ảnh nằm trong survey-photo-sources.json. Ảnh dùng cho review local, không có xác nhận quyền xuất bản công khai.
- Danh sách hơn 5 hồ sơ cuộn nội bộ, lớp fade trắng không nhận tương tác và biến mất ở cuối; hỗ trợ focus bàn phím. Chọn tất cả đổi thành Bỏ chọn tất cả khi đủ lựa chọn; bỏ hết cũng xóa điểm cũ. Câu hướng dẫn cạnh Tiếp tục hiển thị đúng nội dung người dùng yêu cầu.
- Dấu tick checkbox căn giữa; tiêu đề khảo sát 36px. Header cuộn bình thường; gradient trang đặt gần header.
