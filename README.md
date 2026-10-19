# PT Gemilang Tirta Internusa — website

- **`sitebuilder/`** — kode resmi untuk Anomali Sitebuilder (Template Main + Home) dan aset webp yang diupload ke CMS. Panduan tempel: `sitebuilder/README.md`.
- **`index.html` (English) & `id.html` (Bahasa Indonesia)** — versi statis untuk GitHub Pages, dirender dari kode `sitebuilder/` (CSS gabungan di `css/gti.css`, interaksi di `js/gti.js`, gambar di `assets/`). Form di versi ini hanya membuka WhatsApp, tidak menyimpan ke CMS.
- **`arsip/single-page-lama/`** — versi single page sebelumnya.

Setiap kali kode `sitebuilder/` berubah, versi statis dibangun ulang dengan `sitebuilder/build_static.py` (butuh preview lokal sitebuilder).
