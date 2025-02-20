# 🚀 API Chatbot AI Google - Gemini 2.0 Flash

API ini menggunakan **Google Generative AI (Gemini 2.0 Flash)** untuk menghasilkan respons berbasis teks yang lebih personal. Tujuannya adalah untuk memberikan pengalaman interaksi yang lebih alami dan bersahabat.

## 🚀 Fitur Utama

- Menggunakan **Google Generative AI** untuk merespons input pengguna.
- Mengintegrasikan **ledger** yang berisi biodata dan preferensi pengguna untuk memberikan respons yang lebih personal.
- Menggunakan **Express.js API handler** untuk memproses permintaan.
- Mendukung bahasa **Indonesia** dengan gaya komunikasi yang ramah.

## 🚀 Instalasi

Pastikan **Node.js** dan **npm** sudah terinstal di sistemmu.

1. **Clone Repository** (jika menggunakan GitHub):
   ```bash
   git clone https://github.com/username/repository-name.git
   cd repository-name
   Instal Dependensi:
   ```
   ```bash
   npm install
   ```
   Buat file `.env` dan tambahkan API key dari Google Generative AI:
   ```ini
   GOOGLE_API_KEY=your_google_api_key_here
   ```

## 🚀 Cara Penggunaan

1. Menjalankan API
   Jalankan API menggunakan perintah berikut:
   ```bash
   node index.js
   ```
2. Endpoint API
   API ini memiliki endpoint utama yang dapat digunakan untuk mendapatkan respons dari chatbot.

3. POST /api/chat
   Deskripsi: Mengirimkan prompt ke chatbot dan mendapatkan respons berdasarkan konteks yang sudah ditentukan dalam ledger.
   Request Body (JSON):
   ```json
   {
     "prompt": "Halo, ceritakan tentang web development!"
   }
   ```
   Response (JSON):
   ```json
   {
     "response": "Web development adalah proses membangun dan mengelola situs web..."
   }
   ```
   🔧 Struktur Kode
   Berikut adalah gambaran umum dari struktur kode:
   ```bash
   📂 project-folder
   ├── 📄 index.js # File utama untuk menjalankan API
   ├── 📄 apiHandler.js # File yang menangani request API
   ├── 📄 package.json # File konfigurasi npm
   ├── 📄 .env # File environment (API key)
   ├── 📂 node_modules # Folder dependensi
   ```

## 🚀 Teknologi yang Digunakan

- Node.js
- Express.js
- Google Generative AI (Gemini 2.0 Flash)
- dotenv (untuk mengelola API key)
  💡 Catatan
  Pastikan API key Google Generative AI valid sebelum menjalankan aplikasi.
  API ini bisa diperluas dengan fitur tambahan seperti memory chat, custom response style, dan lain-lain.

## 🚀 Kontak

Jika ada pertanyaan atau saran, hubungi saya di:
📧 Email: alipurnama@gmail.com
🔗 LinkedIn: Ali Purnama Alam
📷 Instagram: @alianama\_
🚀 Happy coding! 🚀
