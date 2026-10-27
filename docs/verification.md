# Kiểm tra bộ khung — 20.10.2026

- `pnpm build`: đạt; hai route `/` và `/design-system` render tĩnh.
- `pnpm typecheck`: đạt.
- `node scripts/sync-handoff.mjs`: xuất hai trang HTML và CSS dùng chung thành công.
- Handoff chỉ chứa `.html`/`.css`; không có script, `/_next/`, wrapper main hoặc URL nội bộ tuyệt đối. Các link/asset tương đối tồn tại.
- Hash `theme.css` và `mobile_theme.css` giữa app/handoff giống nhau.
- Trình duyệt: desktop 1280px và mobile 390px không tràn ngang; progress/form từ hai cột chuyển một cột.
- Next/Back mẫu chuyển đúng bước, đưa focus về heading; bước tương lai và nút gửi bị khóa. Không có câu hỏi hoặc gửi dữ liệu.
- Console không có error/warning trên hai trang được kiểm tra.
- Shell DOM: header.home-header, section nội dung và footer.home-footer trực tiếp body; giữ layout-container, surface, type và class form Tech.
- Reduced motion có override tắt animation/transition/smooth scrolling; chưa kiểm tra riêng preference hệ điều hành bằng trình duyệt.
- 50 file HTML/CSS/SCSS tham chiếu giữ hash theo `references/manifest.json`; không import/execute reference trong app.
- Mọi thao tác ghi của công việc này nằm trong repo khảo sát. Source Travel Awards chỉ được đọc để tham khảo; không dùng chung data, state, API, storage, auth hoặc deployment.

Phạm vi QA là foundation và khung điều hướng. Chưa có kiểm tra câu hỏi, validation nghiệp vụ hay submit vì chưa có brief.
