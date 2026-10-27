# Kiểm tra shell và câu chữ — 26.10.2026

- TypeScript: `pnpm typecheck` đạt.
- Build: `pnpm build --webpack` đạt. Turbopack gặp lỗi tạo tiến trình xử lý CSS trong môi trường hiện tại; dùng tùy chọn Webpack được Next hỗ trợ, không thay cấu hình/dependency dự án.
- Đồng bộ HTML/CSS từ bản build bằng `pnpm handoff:sync`; không còn script/runtime, link Design System hoặc Flaticon. Asset dùng đường dẫn tương đối về public.
- Desktop và mobile 390/320px: logo tải đủ, không tràn ngang, header/footer giữ bố cục responsive. Khoảng cuộn anchor tính thêm chiều cao sticky header.
- Trải nghiệm nhánh chọn một hồ sơ/chấm điểm/hoàn tất/sửa phản hồi và nhánh chưa trải nghiệm: giữ bản nháp, khóa hoàn tất khi thiếu điểm, không tăng trùng bộ đếm khi sửa cùng hạng mục.
- Chỉ hiển thị hoàn tất bản xem thử, không gửi dữ liệu. Reload đặt lại phiên.
- Tắt Trang chủ/Thể lệ/Đăng ký theo yêu cầu; logo không còn link. Không thay source dự án tham khảo.
- Tin tức/Giải thưởng vẫn trỏ URL trang chính cấu hình ở `NEXT_PUBLIC_TRAVEL_AWARDS_URL`, mặc định localhost:3001; máy chủ này chưa chạy khi kiểm tra.

## Kiểm tra cập nhật 27.10.2026

- `pnpm typecheck`, `pnpm build --webpack`, `pnpm handoff:sync` đạt với giao diện mới theo HTML.
- Trình duyệt: cả nhánh có trải nghiệm/chấm 4 điểm và chưa từng sử dụng/skip bước 3 đều hoàn tất; sửa cùng hạng mục không tăng bộ đếm trùng.
- Mobile 390px/320px không tràn ngang; đo nút Tiếp tục cao 48px. Header chỉ có một link logo về URL landing cấu hình.
- Console không có warning/error trong lần kiểm tra. Reload khôi phục trạng thái ban đầu. Không thêm countdown.
- Bản HTML/CSS đã xuất lại từ build mới, các nút tương tác khóa trong bản tĩnh.

## Timeline và nhãn hạng mục — 27.10.2026

- Timeline đổi thành 4 nút tròn nối nhau, bước hiện tại có pulse, bước đã qua có dấu check và đường nối xanh; chỉ bước đã qua cho phép quay lại. Reduced motion tắt pulse/transition.
- Bỏ tiền tố chữ cái trước tên hạng mục; phần Đang chọn chỉ chứa tên hạng mục, nền trong suốt, không có tên nhóm. Bỏ dòng thông báo bản xem thử trên body.
- `pnpm typecheck`, `pnpm build --webpack`, `pnpm handoff:sync` đạt. Trình duyệt xác nhận 4 chấm, không còn prefix/notice, chuyển bước đúng; mobile 320px vẫn đủ 4 cột, không tràn ngang.

## Nền trang và lọc nhóm — 27.10.2026

- Bỏ nhãn Bước 1/4 ở màn chọn hạng mục, bỏ bộ lọc Tất cả/Trụ cột/Tiên phong; hai nhóm luôn hiển thị.
- Dùng public/assets/BG1.png làm nền trang trí section, khối nội dung trắng giữ tương phản. Gradient tròn lan nhẹ ở mé trái section, bên ngoài layout-container, tham khảo home-participate trong home.css dự án Travel Awards (chỉ đọc). Pseudo-element không nhận thao tác, không thêm wrapper; giảm chuyển động tắt animation.
- Typecheck/build Webpack/handoff sync đạt. Desktop/mobile 390px không overflow; browser xác nhận không còn nhãn bước đầu/bộ lọc và tải BG1 đúng URL. Handoff sửa URL ảnh sang đường dẫn tương đối public.

## Hồ sơ cuộn và tinh chỉnh — 27.10.2026

- Typecheck, build Webpack và handoff sync đạt. Bỏ toàn bộ nhãn Bước n/4 khỏi body; vẫn có timeline aria-current.
- Browser kiểm tra danh sách 8 điểm đến, ảnh tải đủ, fade còn ở phía dưới khi chưa tới cuối và tắt khi remaining scroll <2px. Control+End/Home thao tác trong vùng focus được.
- Chọn tất cả chọn đủ 8, nút đổi Bỏ chọn tất cả; bỏ hết về 0 và Tiếp tục disabled. Thông báo hướng dẫn cố định đúng câu người dùng cung cấp, không còn đếm số hồ sơ cạnh Tiếp tục.
- Tiêu đề đo 36px, header position static, tâm gradient ở 128px gần đầu section. Mobile390 không overflow, danh sách cuộn cao tối đa420px. Tick xác nhận trực quan giữa ô; console không warning/error.
- Dữ liệu thật cho demo ở destination (8) và creative-product (3), nguồn ảnh lưu survey-photo-sources.json. Không gọi là hồ sơ dự thi chính thức, không gửi dữ liệu.
