# GTI Website — Comprehensive Design & Content Guide

> Dokumen referensi lengkap untuk website **PT Gemilang Tirta Internusa (GTI)**.
> Mencakup **Opsi 1 (Singlepage)** dan **Opsi 2 (Multipage)**.

---

## 1. Tentang Perusahaan

**PT Gemilang Tirta Internusa** adalah entitas lisensi resmi untuk merek teknologi air internasional premium yang didistribusikan di Indonesia. Perusahaan ini beroperasi sebagai *official licensing gateway* bagi merek-merek air global yang ingin memasuki pasar Indonesia.

### Kemitraan Strategis
Bekerja sama secara strategis dengan **PT Benteng Mas Perkasa** (berdiri sejak 1987), yang memiliki jaringan distribusi nasional yang mapan di seluruh Indonesia.

### Distributor Resmi
- **Grundfos** — Pompa & sistem air global
- **Emaux Water Technology** — Teknologi kolam renang & water treatment
- **PoolBright** — Pompa, filter, dan pencahayaan kolam

### Kontak
| Item | Detail |
|------|--------|
| Alamat | Jl. Danau Indah Raya Blok C-3/10, Sunter, Jakarta Utara 14360, DKI Jakarta |
| Telepon | +62 (21) 6583 6677 |
| WhatsApp | +62 877 6583 6677 |
| Email | info@gemilangtirta.com |

---

## 2. Palet Warna (GTI Brand Guidelines — Aturan 60·30·8·2)

| Token | Hex | Nama | Penggunaan |
|-------|-----|------|------------|
| `--color-primary` | `#0F2B6B` | Tirta Deep | Authority & Depth (8%) — heading, CTA bg, footer bg |
| `--color-secondary` | `#1E5AA8` | Wave Blue | Primary Brand Color (30%) — link, icon accent |
| `--color-accent` | `#3B82C4` | Sky Flow | Highlight & Accent — hover, icon highlight |
| `--color-neutral-light` | `#F6F2EB` | Paper | Background netral (60%) |
| `--color-neutral` | `#64748B` | Slate Gray | Text secondary |
| `--color-text` | `#1B1B2E` | Ink | Body text utama |
| `--color-text-light` | `#64748B` | — | Subtitle, caption |
| `--color-white` | `#FFFFFF` | White | Card bg, base bg |
| `--color-border` | `#E2E8F0` | Border | Divider, card border |
| `--color-paper-deep` | `#EFE8DC` | Paper Deep | Cream section bg |
| `--color-ink-soft` | `#1A2A44` | Ink Soft | Dark secondary |
| `--color-silver` | `#A8B2BD` | Silver | Editorial accent (2%) |

### Warna Khusus Section
- **Peran Kami section bg**: `#E8F0F8` (Light blue)
- **Wave divider gradient** (dark→light, top→bottom):
  - Layer 1 (back): `#0F2B6B` opacity 0.6
  - Layer 2: `#1E5AA8` opacity 0.5
  - Layer 3: `#3B82C4` opacity 0.4
  - Layer 4: `#7BAFD4` opacity 0.35
  - Layer 5 (front): `#E8F0F8` solid (transisi ke section bawah)

---

## 3. Tipografi

| Token | Font | Penggunaan |
|-------|------|------------|
| `--font-main` | **Poppins** (300, 400, 500, 600, 700) | Body text, paragraf, label |
| `--font-display` | **Montserrat** (400–900) | Heading, hero title, section title |

### Google Fonts Link
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Icons
Semua icon menggunakan **Font Awesome 6.4.2 Free** via CDN:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
```
Referensi icon: https://fontawesome.com/search?ic=free-collection

---

## 4. Repository & Deployment

| Versi | Repo GitHub | Folder Lokal |
|-------|-------------|--------------|
| **Opsi 1 — Singlepage** | `https://github.com/anomalidigital/GTI_singlepage.git` | `GTI_singlepage/` |
| **Opsi 2 — Multipage** | `https://github.com/anomalidigital/GTI_Multipage.git` | `GTI_multipage/` |

---

## 5. Struktur — Opsi 1: Singlepage

Semua konten berada di satu file `index.html` dengan anchor navigation (`#home`, `#about`, `#why-us`, `#contact`).

### 5.1 Header / Navigasi
- Logo: `logo-gti.png` (kiri, full-color)
- Menu: Beranda | Tentang Kami | Mengapa Kami | Hubungi Kami
- Language switcher: ID/EN (globe icon + dropdown)
- Sticky header saat scroll

### 5.2 Hero Section
- Background: `benner_GTI.png` (full-width banner)
- Dark overlay
- Headline: "Menghadirkan Teknologi Air Berkualitas Global dengan Keahlian Lokal"
- Subtitle: "Pemegang lisensi eksklusif pusat teknologi air kelas dunia di Indonesia..."
- CTA: "Jadilah Mitra Kami" (link WhatsApp)
- Button alignment: **kiri** (sejajar text)
- Single slide (tanpa slider/carousel)

### 5.3 Trust Bar (Distributor Logos)
- Label: "Dipercaya produsen global..."
- 3 cards horizontal: Grundfos, Emaux, PoolBright
- Semua card: white bg + border `#E2E8F0` + logo full-color

### 5.4 Tentang Kami
- Grid 2 kolom: text kiri, placeholder image kanan
- Content tentang entitas lisensi resmi + kemitraan PT BMP

### 5.5 Wave Divider (Tentang Kami → Peran Kami)
- SVG 5-layer overlapping sinusoidal wave
- **Warna gelap di atas, warna terang di bawah** (transisi gradasi)
- Atas: background putih (#FFFFFF), Bawah: seamless ke `#E8F0F8`
- CSS: height 120px, viewBox: `0 0 1440 120`
- Tidak ada gap antara wave dan section di bawah

### 5.6 Peran Kami
- Background: `#E8F0F8`
- 4 role cards (2×2 grid): Lisensi, Regulasi, Keaslian, Distribusi

### 5.7 Mengapa Memilih Kami
- 5 advantage items (icon kiri, text kanan, vertical list)

### 5.8 Cara Kerja (Ecosystem Flow)
- 4 node horizontal: Produsen Global → PT GTI → PT BMP → Pengguna Akhir
- GTI node highlighted

### 5.9 Visi & Misi
- 2 card side-by-side (navy bg, white text)
- Visi: paragraf singkat | Misi: numbered list (01–04)

### 5.10 CTA, Contact, Footer, WhatsApp Float
- CTA: "Bangun Eksistensi Anda di Indonesia Bersama Kami"
- Contact: 2 panel (info dark + form white)
- Footer: logo-gti-white.png, 3 kolom
- WhatsApp: fixed bottom-right green button → `wa.me/6287765836677`

---

## 6. Struktur — Opsi 2: Multipage

Konten yang sama di-split ke 4 halaman HTML terpisah. **Visual layout berbeda** dari singlepage, namun warna, font, icon, dan konten teks identik.

### Perbedaan Visual dari Singlepage

| Aspek | Singlepage | Multipage |
|-------|------------|-----------|
| Hero | Full-screen single slide | Full-width + diagonal gradient overlay + badge |
| Trust Bar | Static logo row | Logo cards dengan hover effect + greyscale filter |
| Tentang Kami | Grid 2 kolom | Full card dengan rounded corners |
| Peran Kami | 2×2 icon grid | **Vertical timeline** dengan garis + dot icons |
| 5 Keunggulan | Vertical list | **3+2 card grid** dengan hover lift |
| Cara Kerja | Horizontal flow (→) | **Vertical numbered stepper** |
| Visi & Misi | Side-by-side cards | **Stacked cards** (atas bawah) |
| Navigation | Anchor scroll | Page links (about.html, why-us.html, dll) |
| Homepage | Semua konten | Preview cards → link ke subpage |
| Page Hero | Tidak ada | Strip biru gradient di subpages |

### 6.1 `index.html` — Beranda
- Hero: full-width banner + diagonal gradient overlay + "Pemegang Lisensi Resmi" badge
- Trust bar: 3 distributor cards dengan hover
- Preview section: 3 cards (Tentang Perusahaan, Mengapa Kami, Hubungi Kami) → link ke subpage
- CTA section + Footer

### 6.2 `about.html` — Tentang Kami
- Page hero strip (gradient biru + breadcrumb)
- Company profile (2 kolom)
- Wave divider (sama dari singlepage)
- Peran Kami: **vertical timeline** (4 items dengan dot icon + line)
- Footer

### 6.3 `why-us.html` — Mengapa Kami
- Page hero strip + breadcrumb
- 5 Keunggulan: **card grid 3+2** dengan hover lift effect
- Cara Kerja: **vertical stepper** (numbered 1–4)
- Visi & Misi: **stacked navy cards**
- CTA section + Footer

### 6.4 `contact.html` — Hubungi Kami
- Page hero strip + breadcrumb
- Contact: 2 panel (info gradient + form white) rounded
- Footer

---

## 7. Asset List

| File | Lokasi | Keterangan |
|------|--------|------------|
| `logo-gti.png` | `assets/images/` | Logo GTI terbaru untuk header (full-color, biru) |
| `logo-gti-white.png` | `assets/images/` | Logo GTI untuk footer (putih) |
| `benner_GTI.png` | `assets/benner/` | Banner hero section |
| `grundfos.png` | `assets/Logo distributor/` | Logo Grundfos full-color |
| `emaux.png` | `assets/Logo distributor/` | Logo Emaux Water Technology |
| `pool-bright.png` | `assets/Logo distributor/` | Logo PoolBright |

### ⚠️ Banner — Perlu Regenerasi

Banner saat ini (`benner_GTI.png`) masih menggunakan **logo lama** di dinding reception.

**Yang perlu diperbarui:**
- Logo di belakang reception diganti menjadi **logo baru** (`logo-gti.png`) — logo GTI terbaru
- Warna logo pada banner tetap **silver** (metalik/chrome), sesuai estetika reception wall
- **Angle, perspektif, pencahayaan, dan komposisi banner tetap sama** — hanya logo yang berubah
- Hasil banner baru menggantikan `benner_GTI.png` di kedua versi (singlepage & multipage)

---

## 8. Fitur Bilingual (ID/EN)

Semua text elemen memiliki atribut `data-lang-id` dan `data-lang-en`. JavaScript (`main.js`) menangani switching bahasa melalui dropdown di header. Bahasa default: **Bahasa Indonesia (ID)**.

Bahasa tersimpan di `localStorage` dengan key `gti_lang` sehingga persist antar halaman (penting untuk multipage).

---

## 9. Desain Keputusan Penting

1. **Minimalis & Profesional**: Menghindari animasi berlebihan, fokus pada konten
2. **Wave Divider**: Hanya antara Tentang Kami → Peran Kami, warna gelap di atas → terang di bawah
3. **Divider garis**: Antara section Mengapa Memilih Kami & Cara Kerja (HR sederhana) — singlepage only
4. **Visi Misi**: Tanpa icon, clean numbered format
5. **Distributor cards**: Semua white background, uniform
6. **Font Poppins** untuk body, **Montserrat** untuk display/heading
7. **60-30-8-2 color rule**: Paper 60%, Wave Blue 30%, Tirta Deep 8%, Silver 2%
8. **Multipage layout berbeda visual**: Timeline, stepper, card grid — memberikan pengalaman yang berbeda dari singlepage
9. **Hero text & buttons di kiri**: Konsisten di singlepage maupun multipage
10. **Icons hanya dari Font Awesome 6.4.2 Free**: https://fontawesome.com/search?ic=free-collection
