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

   Aplikasi akan berjalan di `http://localhost:3000` secara default.

5. (Opsional) Jalankan dengan Docker:

   ```bash
   docker-compose up
   ```

## 📁 Struktur Proyek

```
├── prisma/                 # Skema dan migrasi database
├── src/
|   |── appliation/         # File aplikasi
│   ├── controllers/        # Logika bisnis dan kontroler
│   ├── error/              # Error handling
│   ├── middlewares/        # Middleware kustom
│   ├── route/              # Definisi routing
│   ├── service/            # Definisi model data
│   ├── validation          # Validasi
│   └── main.js             # Inisialisasi aplikasi Express
├── test/                   # Pengujian unit dan integrasi
├── .env.example            # Contoh konfigurasi lingkungan
├── docker-compose.yaml     # Konfigurasi Docker Compose
├── package.json            # Informasi proyek dan dependensi
└── README.md               # Dokumentasi proyek
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

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---