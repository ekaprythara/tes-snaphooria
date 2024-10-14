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
