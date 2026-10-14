# Task Decomposition: HW1 Production Portfolio

## M1: WCAG 2.2 AA audit

- Mục tiêu: trang đạt chuẩn tương phản màu và có landmark đúng
- Việc làm: chạy axe/Lighthouse Accessibility, sửa contrast, thêm header/nav/main/footer
- Hoàn thành khi: axe không còn lỗi mức AA
- Commit: fix(a11y): contrast & landmarks

## M2: Focus trap audit

- Mục tiêu: dùng được toàn bộ trang chỉ bằng bàn phím
- Việc làm: đi hết trang bằng Tab/Shift+Tab/Esc, sửa chỗ bị kẹt
- Hoàn thành khi: không có chỗ nào kẹt focus, focus luôn nhìn thấy
- Commit: fix(nav): keyboard trap prevention

## M3: Strict CSP, không inline handler

- Mục tiêu: không còn onclick=... hay script inline
- Việc làm: chuyển sự kiện sang addEventListener trong file JS, thêm CSP
- Hoàn thành khi: console không báo vi phạm CSP
- Commit: (theo đề, ví dụ: fix(security): strict CSP, remove inline handlers)

## M4: Lighthouse 100

- Mục tiêu: đạt điểm 100
- Việc làm: nén ảnh, lazy-load, rút gọn CSS/JS
- Hoàn thành khi: Lighthouse báo 100
- Commit: perf: optimize assets
