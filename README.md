# GreenSeed - Mầm Xanh
Web bán cây (React + Vite + Tailwind + Firebase): đăng ký / đăng nhập / quên mật khẩu, đặt mua, chat với admin, trang /admin.

## Chạy thử trên máy
1. `npm install`
2. `npm run dev` rồi mở http://localhost:5173
3. Trang admin: http://localhost:5173/admin

## Ghi chú
- Cấu hình Firebase nằm trong `.env` (mẫu các biến: VITE_FIREBASE_*, VITE_ADMIN_EMAIL).
- Luật bảo mật Firestore: nội dung file `firestore.rules`, dán vào Firebase > Firestore > Rules.
- Deploy GitHub Pages: `.github/workflows/deploy.yml` (Settings > Pages > Source: GitHub Actions).
- Deploy Netlify: `netlify.toml` (build `npm run build`, publish `dist`).
