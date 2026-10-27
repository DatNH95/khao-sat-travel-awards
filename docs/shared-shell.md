# Header/footer và câu chữ khảo sát

- Header/footer được chuyển từ component chung tại `travel-awards-2026/src/components/site-header.tsx`, `site-footer.tsx`, `header-navigation.tsx` và primitive logo. Chỉ đọc dự án tham khảo, không thay source hoặc import xuyên repo.
- Giữ cây thẻ/class, logo gốc, menu, CTA, tiện ích và thông tin VnExpress; tài trợ/Fanpage vẫn giữ trạng thái nguồn. Footer thêm “Khảo sát - Travel Awards 2026”. Logo/home/Facebook/feedback SVG được sao chép nguyên bản vào repo khảo sát.
- Liên kết về trang chính qua `NEXT_PUBLIC_TRAVEL_AWARDS_URL`; mặc định preview là `http://127.0.0.1:3001`. Không tạo route giả `/the-le` hay `/tin-tuc` trong app khảo sát, không dùng chung state/API.
- Bỏ link Design System và Flaticon khỏi shell. UiIcon đổi sang các SVG hình học nội bộ, không dùng glyph/font hoặc stylesheet Flaticon. Các tài nguyên cũ còn trong repo chỉ là bản lưu không được app tải.
- Rút gọn tên bước, hướng dẫn, CTA, thông báo và tóm tắt hoàn tất. Mô tả thẻ dùng `summary` ngắn; tên hạng mục và định nghĩa `description` gốc từ Sheet giữ nguyên.
- Bản xem thử vẫn ghi rõ dữ liệu minh họa và phản hồi chưa gửi; không biến trạng thái hoàn tất front-end thành gửi thật.
- Handoff giữ đường dẫn SVG và CSS mask tương đối tới `public/`; không mang icon font/runtime sang HTML thuần.
- Theo phản hồi mới: tắt Trang chủ (gồm link logo), Thể lệ và Đăng ký ở header/footer. Các mục giữ hình thức component nhưng không có URL hoặc handler, khai báo disabled/aria-disabled và không vào thứ tự Tab. Tin tức và Giải thưởng vẫn giữ cấu hình URL trang chính.

Cập nhật cuối 27.10.2026: header bỏ hoàn toàn menu/CTA, chỉ logo có link landing (`NEXT_PUBLIC_TRAVEL_AWARDS_URL` + `/`). Footer giữ trạng thái đã chốt. Yêu cầu countdown đã hủy.
