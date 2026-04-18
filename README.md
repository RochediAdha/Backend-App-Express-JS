# 📦 Backend App Express JS

Repositori ini merupakan proyek pembelajaran untuk membangun aplikasi backend menggunakan **Express.js**. Tujuannya adalah untuk memahami dan mengimplementasikan fitur-fitur utama dalam pengembangan backend, termasuk struktur folder yang modular, routing dinamis, middleware kustom, koneksi ke database, autentikasi, validasi input, logging, error handling, testing, dan deployment.

## 🚀 Fitur Utama

- Struktur folder yang terorganisir dan scalable
- Routing dinamis dengan Express Router
- Middleware kustom untuk autentikasi dan logging
- Koneksi ke database menggunakan Prisma ORM
- Autentikasi dan otorisasi menggunakan Token
- Validasi input menggunakan Joi atau express-validator
- Logging dan error handling yang terstruktur
- Testing menggunakan Jest dan Supertest
- Deployment menggunakan Docker dan Docker Compose

## 🛠️ Instalasi dan Penggunaan

### Prasyarat

- Node.js
- npm atau yarn
- Docker dan Docker Compose (opsional)

### Langkah-langkah

1. Clone repositori:

   ```bash
   git clone https://github.com/RochediAdha/Backend-App-Express-JS.git
   cd Backend-App-Express-JS
   ```

2. Instal dependensi:

   ```bash
   npm install
   ```

3. Konfigurasi variabel lingkungan:

   Salin file `.env.example` menjadi `.env` dan sesuaikan nilainya.

   ```bash
   cp .env.example .env
   ```

4. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

   Aplikasi akan berjalan di `http://localhost:3000` secara default (ubah dengan variabel `PORT` di `.env`).

5. (Opsional) Jalankan dengan Docker:

   ```bash
   docker-compose up
   ```

## 📁 Struktur Proyek

```
├── prisma/                 # Skema, migrasi, dan seed database
├── src/
│   ├── application/        # App Express, database, logging
│   ├── controller/         # Handler HTTP
│   ├── error/              # Kelas error aplikasi
│   ├── middleware/         # Auth, error middleware
│   ├── route/              # Router publik & privat
│   ├── service/            # Logika bisnis & akses data
│   ├── validation/         # Skema Joi
│   └── main.js             # Entry point server
├── test/                   # Jest + Supertest
├── .env.example
├── docker-compose.yaml
├── package.json
└── README.md
```

## 📌 Teknologi yang Digunakan

- [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Jest](https://jestjs.io/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Docker](https://www.docker.com/)

## 🤝 Kontribusi

Kontribusi sangat terbuka! Silakan fork repositori ini dan buat pull request untuk penambahan fitur, perbaikan bug, atau peningkatan dokumentasi.

## 📄 Lisensi

Proyek ini dilisensikan di bawah **ISC** (sesuai `package.json`).

---