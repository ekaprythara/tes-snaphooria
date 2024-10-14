# 1. Soal Database
Buatlah struktur database **mysql** untuk mengelola data buku yang mencakup atribut berikut:
- `id`: Integer, Primary Key, Auto Increment
- `judul`: String, tidak boleh null
- `penulis`: String, tidak boleh null
- `tahun_terbit`: Integer, tidak boleh null

# 2. Laravel API Endpoint
Implementasikan endpoint berikut untuk API:

**POST /buku**

- Deskripsi: Menambahkan buku baru.
- Body Request:
```
{
    "judul": "Contoh Judul",
    "penulis": "Contoh Penulis",
    "tahun_terbit": 2023
}
```
**GET /buku**

- Deskripsi: Mengambil semua buku.
- Respon:
```
[
    {
        "id": 1,
        "judul": "Contoh Judul",
        "penulis": "Contoh Penulis",
        "tahun_terbit": 2023
    }
]
```
# 3. Validasi Data Next.js
- Buatlah form input untuk pendaftaran pengguna. Implementasikan validasi untuk memastikan semua field `(nama, email, password)` terisi dan email memiliki format yang benar.

# 4. Query SQL Mencari Ponsel Dalam Database
Sebuah tabel menyimpan data-data ponsel yang terdiri dari beberapa kolom:

![image](https://github.com/user-attachments/assets/beb2bdd4-69b6-4c13-95d0-3071fddb4014)

Tim anda ingin mendapatkan data-data semua Merek dan jumlah dari model yang diterbitkan merek tersebut yang merupakan tipe DualSim, Apakah Kueri SQL yang ada di bawahini benar? Jika salah, apa kueri yang benar?
```
SELECT Ponsel.Merek, COUNT(Ponsel.Model)FROM PonselWHERE Ponsel.DualSim = TRUE
```

# 5. Soal Next.js: Mengambil dan Menampilkan Data
**Deskripsi:**
Buatlah aplikasi Next.js sederhana yang mengambil data buku dari API eksternal dan menampilkannya dalam daftar. Setiap buku harus memiliki judul, penulis, dan tahun terbit.

**Ambil Data dari API**:
- Gunakan `getStaticProps` atau `getServerSideProps` untuk mengambil data buku dari API eksternal (misalnya, API publik atau dummy seperti JSONPlaceholder atau API buku lainnya).

### 6. Logika **Algoritma Pemrograman**
1. Buatlah sebuah fungsi yang dapat menemukan angka terbesar dari sebuah array. Contoh: Jika array yang diberikan adalah `[1, 5, 3, 7, 2],` maka hasilnya adalah `7` ***dalam bahasa PHP atau Next.js.***
2. Buatlah sebuah fungsi untuk mengurutkan angka dalam sebuah array dari yang terkecil ke yang terbesar. Contoh: Jika array yang diberikan adalah `[3, 1, 5, 2, 4],` maka hasilnya adalah  `[1, 2, 3, 4, 5]` ***dalam bahasa PHP atau Next.js***.
