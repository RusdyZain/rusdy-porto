# rusdy-porto

Repositori ini memuat kode frontend portofolio Rifki Rusdi Satma Putra yang dibangun dengan React + CRACO + Tailwind. Seluruh UI saat ini menggunakan data statis dan tidak lagi memiliki dependensi ke backend mana pun.

## Struktur Proyek

- `frontend/` - aplikasi React lengkap (komponen, konfigurasi CRACO, Tailwind, dan aset publik).
- `tests/` - artefak pengujian otomatis dari Emergent Agent (tidak wajib dijalankan).
- `contracts.md`, `test_result.md` - dokumentasi tambahan bawaan repositori.

## Versi Aplikasi

Versi aplikasi frontend saat ini mengikuti pola **Semantic Versioning** (MAJOR.MINOR.PATCH) dan berada pada `1.0.0`. Angka pertama berubah saat ada rilis besar/ breaking change, angka kedua untuk fitur baru yang kompatibel, dan angka ketiga untuk perbaikan bug.

## Menjalankan Frontend

```bash
cd frontend
yarn install    # instal dependensi
yarn start      # jalankan mode pengembangan di http://localhost:3000
```

Perintah lain:

- `yarn build` - membuat bundel produksi pada folder `build/`.
- `yarn test` - menjalankan test runner Create React App.

Pastikan file `.env` di `frontend/.env` berisi `REACT_APP_BACKEND_URL` yang sesuai jika nanti menambahkan akses API baru.

## Teknologi Utama

- React 19, React Router DOM 7, dan CRACO sebagai pengganti konfigurasi CRA standar.
- Tailwind CSS 3 dan utilitas pendukung (tailwindcss-animate, tailwind-merge, class-variance-authority).
- Radix UI, shadcn utils, cmdk, embla-carousel, lucide-react, dan sonner untuk elemen UI siap pakai.
- react-hook-form + zod untuk formulir beserta validasinya.
- Axios sudah disiapkan pada dependensi untuk akses API jika dibutuhkan.

## Status Backend

Folder backend bawaan Emergent telah dihapus karena frontend belum menggunakan API. Bila membutuhkan backend baru, silakan buat layanan terpisah dan hubungkan melalui variabel lingkungan `REACT_APP_BACKEND_URL`.
