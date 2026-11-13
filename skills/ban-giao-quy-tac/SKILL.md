---
name: ban-giao-quy-tac
description: Chuẩn hóa DOM và xuất HTML/CSS bàn giao DEV. Dùng khi khởi tạo dự án giao diện web mới để đặt hợp đồng DOM, khi người dùng yêu cầu handoff/bàn giao HTML CSS hoặc đẩy code kèm đồng bộ handoff. Push source thông thường không tự xuất handoff.
---

# Bàn giao quy tắc

## Phạm vi và lựa chọn

- Đọc AGENTS.md và hợp đồng DOM/template của chính dự án. Yêu cầu người dùng và template đích được ưu tiên. Không sao chép thương hiệu, nghiệp vụ, dữ liệu, hosting hoặc dependency từ dự án tham khảo.
- Khi khởi tạo giao diện web: đặt hợp đồng DOM/CSS trong AGENTS.md của repo và thiết kế công cụ xuất để bảo toàn hợp đồng. Không tự tạo một bộ handoff trước khi có giao diện hoặc yêu cầu xuất.
- Khi xuất handoff: đọc implementation hiện tại, liệt kê route và trạng thái quan trọng. Bàn giao đầy đủ màn đầu, bước form, xác nhận, nhánh bỏ qua và lỗi/trống/lịch sử nếu có. Dùng fixture được ghi rõ là minh họa; không đọc dữ liệu người dùng hoặc tạo thêm nghiệp vụ.
- “Đẩy lên” chỉ push source theo quy ước repo; chỉ đồng bộ handoff khi được yêu cầu rõ. Skill không cấp quyền push/deploy. Không tự gửi link diff, tạo CHANGELOG, trang mục lục hoặc hướng dẫn lấy file khi người dùng không yêu cầu.

## Hợp đồng DOM mặc định cho web handoff

- `body.home > header.home-header`, vùng nội dung, rồi `body > footer.home-footer`. Header/footer là con trực tiếp body; không có `div.home` hoặc `main` bọc toàn trang. Scope bổ sung theo dự án đặt trên body.
- Nội dung trang con: `body > section > .layout-container`; section chính có `id="main"`, `role="main"`, heading liên kết và skip link hợp lệ. Giữ thứ tự nội dung, ID, class, aria/label, input name, data-state và hook cần cho DEV ghép handler.
- Chỉ với Homepage dùng template Travel Awards: `body > div.wrap-homepage.width_common > section`, giữ class section đã chốt. Không đưa wrapper Homepage vào form hoặc trang con.
- Form nhiều bước giữ cây template đã duyệt, ví dụ `.nomination-layout > nav.nomination-progress + div.nomination-content`, intro, heading, fieldset và action. Tên class không mang theo nghiệp vụ gốc.
- Xóa hydration/RSC scripts, preload framework, node Next dư/ẩn, route announcer và class tự sinh không dùng. Chỉ bỏ phần chắc chắn là artifact; không xóa nội dung SSR, asset/ID đang được dùng hoặc node ẩn có ý nghĩa accessibility.
- Link nội bộ trỏ đúng file HTML tương đối, giữ query/anchor; không thay link website ngoài thành route local. Link/ảnh CSS phải resolve được trong gói bàn giao.

## CSS và xuất file

- Xuất CSS thuần, không Tailwind/React/Next runtime và không `@layer`. Giữ cascade/thứ tự rule, responsive, hover/active/disabled/focus và reduced motion. Không flatten layer bằng regex nếu làm đổi precedence.
- `css/font.css` chứa font-face, token/font-family nền; `css/icons.css` chứa định nghĩa icon/glyph dùng chung. CSS component giữ bố cục/trạng thái theo ngữ cảnh, không duplicate định nghĩa font/icon. SVG nội bộ có thể giữ inline, không phát minh icon font mới.
- Tái sử dụng component hiện có ở thời điểm export; giữ compiler/dependency trong công cụ xuất, không để vào file bàn giao. Không thêm package nếu công cụ hiện có đủ dùng.
- Theo quy ước repo về asset và định dạng thư mục. Nếu thư mục chỉ chứa HTML/CSS, giữ asset ngoài đó và kiểm tra đường dẫn tương đối; không tự sao chép toàn bộ thư viện/reference hoặc file không dùng.
- Pure HTML/CSS: nút/field cần JavaScript khóa ở bản tĩnh, trạng thái chờ bất tận đổi thành ghi chú tĩnh chính xác. Không giả vờ submit/lưu/đăng nhập thành công. Chỉ thêm JS thuần nếu người dùng cho phép và thật sự cần.
- Sửa công cụ xuất để lần sau tái tạo đúng, không chỉ vá output. Không sửa giao diện nguồn để phục vụ việc chuyển đổi trừ khi có lỗi source cần sửa trong phạm vi yêu cầu.

## Kiểm tra và kết thúc

- Chạy build/typecheck của repo rồi xuất từ build mới. Kiểm tra DOM bằng parser: header/footer trực tiếp body, wrapper, cây form, landmark, ID duy nhất và reference/anchor xuyên file.
- Với hợp đồng DOM mặc định và handoff chỉ HTML/CSS, chạy `python scripts/check_dom.py <handoff-folder>` từ thư mục skill; thêm `--report <repo>/docs/handoff-dom-qa.json` để lưu kết quả. Script chỉ dùng thư viện chuẩn, không sửa output. Nếu dự án có hợp đồng khác, điều chỉnh kiểm tra theo hợp đồng đó thay vì ép đổi giao diện.
- Kiểm tra file chỉ đúng định dạng, không framework/runtime/@layer, CSS font/icon được tách và import đúng thứ tự, asset tồn tại, không bí mật hoặc dữ liệu cá nhân.
- So sánh giao diện source và handoff ở desktop/mobile, focus/bàn phím, overflow và reduced motion khi liên quan. Kiểm tra các nhánh/states xuất ra; nếu chưa chạy browser thì nêu đúng giới hạn, không báo đã kiểm tra trực quan.
- Giữ báo cáo QA ngắn ở docs ngoài thư mục handoff. Không thêm test chỉ lặp lại wording hoặc code; không đưa screenshot/build/cache vào commit.
- Khi được yêu cầu push: fetch/status, bảo toàn thay đổi local, dừng khi conflict, stage đúng phạm vi, không force push. Xác nhận hash remote sau push; báo ngắn gọn hash và phạm vi/giới hạn quan trọng.
