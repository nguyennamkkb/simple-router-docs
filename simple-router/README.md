# Simple Router Documentation

Đây là mã nguồn của trang tài liệu Simple Router.

## Cấu trúc thư mục
- `index.html`: File chính (Shell) của ứng dụng SPA.
- `js/main.js`: Chứa logic điều hướng (Router) và các chức năng UI.
- `partials/`: Chứa nội dung của từng trang chi tiết.
  - `home.html`: Trang giới thiệu.
  - `claude-code.html`: Hướng dẫn Claude Code.
  - `openai-codex.html`: Hướng dẫn OpenAI (Placeholder).
  - `gemini-code.html`: Hướng dẫn Gemini (Placeholder).

## Cách chạy dự án
Vì trình duyệt chặn việc tải các file partials khi mở trực tiếp (lỗi CORS), bạn cần chạy thông qua một web server nhẹ.

### Cách 1: Sử dụng NodeJS (Khuyên dùng)
Mở terminal tại thư mục này và chạy:
```bash
npx serve .
```

### Cách 2: Sử dụng Python
```bash
python3 -m http.server 8080
```

Sau đó truy cập địa chỉ được cung cấp (thường là `http://localhost:3000` hoặc `http://localhost:8080`).
