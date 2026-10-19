# PANDUAN UTAMA CODEBASE GTI (code_main)

Folder `code_main` ini adalah **Single Source of Truth (SSOT)** resmi untuk website **PT Gemilang Tirta Internusa** di production (https://gemilangtirtainternusa.com/).

Folder ini menggabungkan dan menyempurnakan struktur dari `New design`, `Home`, dan `Template Main`, sehingga tim tidak perlu bingung lagi memilih versi mana yang benar dan terbaru.

---

## 1. Arsitektur Pemisahan: Template Main vs Home

Website ini berjalan di atas sistem CMS **Anomali Sitebuilder** berbasis **Angular SSR** dan **Bootstrap 5**. Di CMS, kode sengaja dipisahkan menjadi dua bagian utama:

```
code_main/
├── Template Main/        --> Shell Global (Navbar, Footer, Global Style & Script)
│   ├── Content.html      --> Header, Navigasi, Slot [ROUTE], Footer, Floating WhatsApp
│   ├── Style.css         --> Variabel desain, Bootstrap reset, CSS Header & Footer
│   ├── Script.js         --> Engine terjemah ID/EN, Navigasi halus, Observer animasi
│   └── HeadTag.html      --> Meta theme-color & Google Schema.org (JSON-LD)
│
└── Home/                 --> Isi Halaman (Disisipkan otomatis ke slot [ROUTE])
    ├── Home.html         --> Hero, Merek, Tentang, Peran, Ekosistem, Pasar, Mengapa, Visi, Kemitraan, Form
    ├── Home.css          --> Styling khusus komponen-komponen halaman Home
    └── Home.js           --> Kamus teks ID/EN halaman, data distributor, kirim form WhatsApp
```

### Bagaimana Keduanya Terhubung?
Di dalam `Template Main/Content.html`, terdapat penanda slot:
```html
<main id="main" tabindex="-1">
[ROUTE]
</main>
```
Saat pengunjung membuka halaman, CMS secara otomatis mengambil konten dari `Home/Home.html` dan menyisipkannya tepat di posisi `[ROUTE]`.

---

## 2. Peta File ke Editor CMS Anomali Sitebuilder

Jika melakukan pembaruan di CMS, gunakan panduan mapping berikut:

| File Sumber | Kolom / Tab di CMS Sitebuilder | Keterangan |
|---|---|---|
| `Template Main/Content.html` | **Template Main** > Content ID-ID | Berisi Header, `[ROUTE]`, Footer |
| `Template Main/Style.css` | **Template Main** > Style | CSS global & reset Bootstrap |
| `Template Main/Script.js` | **Template Main** > Script | Logika navigasi & bahasa |
| `Template Main/HeadTag.html` | **Template Main** > Head Tag | SEO & Structured Data |
| `Home/Home.html` | **Halaman: Home** > HTML ID-ID | Konten isi (slug: kosong) |
| `Home/Home.css` | **Halaman: Home** > CSS | Style section Home |
| `Home/Home.js` | **Halaman: Home** > JS | Teks & WhatsApp Handler |

> **Catatan Penting**: Di CMS cukup menggunakan bahasa **ID-ID**. Bahasa English sudah terintegrasi secara dinamis di dalam kode (dwibahasa reaktif).

---

## 3. Fitur Utama & Aturan Kode

1. **Sistem Dwibahasa Reaktif (ID / EN)**:
   - Semua teks ditulis berpasangan dalam array: `["Bahasa Indonesia", "English"]`.
   - **Bahasa default: English.** Pengunjung yang pernah memilih Bahasa Indonesia akan dibuka dalam ID (pilihan tersimpan di `localStorage ('gti_lang')`).
   - Mengganti bahasa langsung merender ulang teks tanpa memuat ulang URL.
2. **Navigasi Seksi & `<base href="/public/">`**:
   - CMS menggunakan `<base href="/public/">`. Oleh karena itu, navigasi seksi menggunakan fungsi `(click)="keSection($event, 'seksi')"` agar tidak tersasar ke URL `/public/#seksi`.
3. **Form Kemitraan (WhatsApp + CMS Logging)**:
   - `FORM_MITRA_ID = "1791340566655HHLCWYS"`: Form akan otomatis membuka WhatsApp dengan format pesan rapi, dan menyimpan data pengirim ke database CMS.
   - Dilengkapi **Honeypot Anti-Bot** (`name="website"`).
4. **Footer – Hubungi Kami**: memakai data kantor pusat BMP (`this.kantorPusat` di `Script.js`), sama seperti footer bentengmasperkasa.com.

---

## 4. Desain Halaman Home (redesain Oktober 2026)

- Semua kelas baru berawalan `gti-` (lihat `Home.css`). Bagian kontak/form (`#contact`) tidak diubah.
- Warna: semua biru satu rona dengan logo, Corporate Navy `#125798` (token `--gti-*` di `Style.css`): navy gelap `#0B3760` (pita Peran, panel kontak), `#061F37` (footer), hover `#0E4477`. Kode navy lama guideline v01 (`#0F2B6B`, `#1E5AA8`, `#0A1A3E`) tidak dipakai lagi. Judul: **Mulish 800/900** (nama Google Fonts untuk Muli Black), teks: Poppins.
- Motif: gerbang/lengkung (foto hero + foto pompa sisipan, puncak kolom PT GTI di Ekosistem, garis lengkung di Hero & Kemitraan).
- Ikon section Peran & Ekosistem: Font Awesome Free (`ikon` di `t.peran` / `t.eko`, Home.js). Simpul PT GTI di diagram Ekosistem memakai `gemilang-tirta-internusa-icon.webp` (dibuat putih lewat CSS), jadi file ikon itu wajib ada di folder upload.
- Label nama section di atas judul (WHO WE ARE, WHY GTI, dst.) = kelas `gti-label`, teks `...Label` di Home.js (sesuai desain Ibu Anne; hero sengaja tanpa label).
- Menu aktif di navbar mengikuti section yang tepat berada di bawah header.

### Aset yang dipakai (folder `_Asset/Upload`, unggah ke CMS dengan nama yang sama)

`gti-hero-engagement.webp`, `gti-building-facade.webp`, `gti-market-intro.webp`, `gti-knowledge-transfer.webp`, `gti-market-engagement.webp`, `gti-pump-inset.webp`, `gti-workshop-bench.webp`, `gemilang-tirta-internusa-icon.webp` (favicon sekaligus simpul GTI di Ekosistem), plus logo yang sudah ada.

Backup sebelum redesain: `_Backup/gemilangtirtainternusa.com/2026-10-19_sebelum-redesain/`.
