# Ringkasan Frontend

Aplikasi frontend ini adalah SPA yang dibuat dengan Create React App, lalu dikustomisasi menggunakan CRACO agar konfigurasi Webpack, Babel, dan Tailwind bisa dioverride tanpa perlu eject. Seluruh perintah menggunakan **Yarn Classic** (lihat `package.json` -> `packageManager`).

## Tumpukan Teknologi

- **Kerangka inti** - React 19 dengan React DOM dan React Router DOM 7 untuk routing sisi klien.
- **Styling & theming** - Tailwind CSS 3, tailwindcss-animate, tailwind-merge, class-variance-authority, clsx, dan next-themes. Konfigurasi berada di `tailwind.config.js`, `postcss.config.js`, dan `craco.config.js`.
- **UI kit & efek** - Radix UI primitives, inspirasi shadcn, cmdk, embla-carousel-react, lucide-react, sonner, vaul, dan react-resizable-panels.
- **Form & validasi** - react-hook-form + @hookform/resolvers + zod, plus input-otp dan react-day-picker untuk input khusus.
- **Utilities** - axios (untuk integrasi API bila dibutuhkan), date-fns, serta helper kecil lain di `package.json`.

## Variabel Lingkungan

Salin atau sesuaikan `frontend/.env` sebelum menjalankan aplikasi:

```
REACT_APP_BACKEND_URL=<URL backend (opsional)>
WDS_SOCKET_PORT=443
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

Saat ini data masih mock, tetapi `REACT_APP_BACKEND_URL` sudah disiapkan untuk integrasi API di masa depan.

## Menjalankan Secara Lokal

```bash
cd frontend
yarn install    # instal dependensi
yarn start      # dev server di http://localhost:3000
yarn build      # bundel produksi pada folder build/
yarn test       # CRA test runner
```

Hot reload aktif pada `yarn start`, sedangkan CRACO otomatis menerapkan plugin tambahan di folder `plugins/`.

## Skrip NPM/Yarn

Semua skrip berada di `package.json`:

- `yarn start` -> `craco start` (dev server dengan HMR).
- `yarn build` -> `craco build` (bundel produksi).
- `yarn test` -> `craco test` (Jest watch mode).

Jalankan semuanya dengan Yarn agar versi dependensi konsisten dengan `yarn.lock`.
