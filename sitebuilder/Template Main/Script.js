// ==========================================================================
// Template Main - Script
// Dipakai bersama oleh semua halaman: bahasa, data kontak, teks navbar &
// footer, menu mobile, animasi muncul saat scroll, dan penanda menu aktif.
// ==========================================================================

// Folder gambar hasil upload situs GTI di sitebuilder (logo, banner).
this.aset = "/uploads/1791267314909MXMNJGN_gemilang-tirta-internusa/";

// --------------------------------------------------------------------------
// Bahasa: satu halaman untuk dua bahasa (cukup isi Content ID-ID di CMS).
// Default ENGLISH; Bahasa Indonesia lewat tombol bahasa. Ganti bahasa langsung
// mengganti teks di halaman, tanpa pindah URL, dan pilihan pengunjung diingat
// di browser-nya.
// Semua teks ditulis berpasangan: ["Bahasa Indonesia", "English"].
// terjemah() mengambil salah satunya sesuai bahasa yang dipilih, sehingga di
// HTML cukup ditulis {{ t.nama }}. Teks yang sama di kedua bahasa ditulis biasa.
// --------------------------------------------------------------------------
this.language = "EN";

this.terjemah = (data) => {
  const i = this.language === "EN" ? 1 : 0;
  const pilih = (v) => {
    if (Array.isArray(v)) return typeof v[0] === "string" ? v[i] : v.map(pilih);
    if (v && typeof v === "object") {
      const hasil = {};
      for (const k in v) hasil[k] = pilih(v[k]);
      return hasil;
    }
    return v;
  };
  return pilih(data);
};

// Dipanggil tombol pilihan bahasa. Teks halaman (this.teksHalaman, diisi
// oleh JS halaman) ikut diterjemahkan ulang.
this.gantiBahasa = (kode) => {
  this.language = kode === "EN" ? "EN" : "ID";
  this.tMain = this.terjemah(this.teksMain);
  if (this.teksHalaman) this.t = this.terjemah(this.teksHalaman);
  if (typeof document !== "undefined") {
    document.documentElement.lang = this.language === "EN" ? "en" : "id";
  }
  try {
    localStorage.setItem("gti_lang", this.language);
  } catch (e) {
    /* mode privat / penyimpanan diblokir: abaikan */
  }
};

// Atribut lang halaman disesuaikan dengan bahasa default (English)
if (typeof document !== "undefined") document.documentElement.lang = "en";

// Dipakai *ngFor supaya elemen tidak dibuat ulang saat ganti bahasa
// (penanda menu aktif & animasi tetap terjaga).
this.lacakIndex = (i) => i;

// --------------------------------------------------------------------------
// Data kontak (dipakai di footer dan section Hubungi Kami)
// Sesuai WEBSITE_GUIDE.md di Z:\Projects\GTI_260417 dan kode situs awal.
// --------------------------------------------------------------------------
this.kontak = {
  alamat: "Jl. Danau Indah Raya Blok C-3/10<br>Sunter, Jakarta Utara 14360<br>DKI Jakarta, Indonesia",
  telepon: { tampil: "+62 (21) 6583 6677", href: "tel:+622165836677" },
  whatsapp: { tampil: "+62 877 6583 6677", href: "https://wa.me/6287765836677" },
  email: { tampil: "info@gemilangtirta.com", href: "mailto:info@gemilangtirta.com" },
};

// Kantor pusat untuk kolom kontak di footer: sama persis dengan data kantor
// pusat di situs BMP (contact.office di Script Template Main BMP).
this.kantorPusat = {
  judul: "Headquarter (Main Office & Service Center)",
  perusahaan: "PT BENTENG MAS PERKASA",
  alamat: "Jl. Danau Indah Raya Blok C-3/10<br>Sunter, Jakarta Utara 14360, Indonesia",
  maps: "https://maps.app.goo.gl/E2p3jsMSiTFg7r5k8",
  telepon: { tampil: "+62 (21) 6583 6677", href: "tel:+622165836677" },
  telepon2: { tampil: "+62 877 6583 6677", href: "https://wa.me/6287765836677" },
  email: { tampil: "cs@bentengmasperkasa.com", href: "mailto:cs@bentengmasperkasa.com" },
};

this.tahun = new Date().getFullYear();

// --------------------------------------------------------------------------
// Teks navbar & footer
// --------------------------------------------------------------------------
this.teksMain = {
  langsungKeKonten: ["Langsung ke konten", "Skip to content"],
  navigasi: ["Navigasi utama", "Main navigation"],
  pilihBahasa: ["Pilih bahasa", "Choose language"],
  bukaMenu: ["Buka menu", "Open menu"],
  tutupMenu: ["Tutup menu", "Close menu"],
  menu: [
    { id: "about", label: ["Tentang GTI", "About GTI"] },
    { id: "roles", label: ["Peran GTI", "Our Role"] },
    { id: "brands", label: ["Merek Global", "Global Brands"] },
    { id: "ecosystem", label: ["Ekosistem", "Ecosystem"] },
  ],
  hubungiKamiTombol: ["Hubungi Kami", "Contact Us"],
  footerDesc: [
    "PT Gemilang Tirta Internusa berspesialisasi dalam sistem pompa air industri dan solusi teknologi air distribusi premium di Indonesia. Produk dijamin asli, andal, dan didukung penuh.",
    "PT Gemilang Tirta Internusa specializes in water pump systems, industrial pumps, and advanced water technology distribution in Indonesia, ensuring every product is authentic and fully supported.",
  ],
  tautanCepat: ["Tautan Cepat", "Quick Links"],
  footerMenu: [
    { id: "about", label: ["Tentang Kami", "About Us"] },
    { id: "why-us", label: ["Mengapa Memilih Kami", "Why Choose Us"] },
    { id: "contact", label: ["Kontak & Mitra", "Contact & Partnership"] },
  ],
  hubungiKami: ["Hubungi Kami", "Contact"],
  hakCipta: ["Hak cipta dilindungi undang-undang.", "All rights reserved."],
  slogan: ["Lisensi Teknologi Air Global untuk Indonesia", "Licensing Global Water Technologies for Indonesia"],
};
this.tMain = this.terjemah(this.teksMain);

// --------------------------------------------------------------------------
// Menu mobile & pindah ke section
// --------------------------------------------------------------------------
this.menuBuka = false;

this.keSection = (event, id) => {
  if (event) event.preventDefault();
  this.menuBuka = false;
  const tujuan = document.getElementById(id);
  if (!tujuan) return;
  tujuan.scrollIntoView(); // halus/tidak mengikuti CSS (scroll-behavior)
  if (id === "main") tujuan.focus({ preventScroll: true });
};

// --------------------------------------------------------------------------
// Animasi muncul saat scroll (.fade-in) & penanda menu aktif
// Berjalan setelah template selesai dirender (ditandai data-render di
// footer). Konten yang sudah terlihat saat halaman dibuka langsung tampil;
// sisanya disembunyikan lalu muncul saat di-scroll. Tanpa JavaScript (dan
// di hasil SSR) semua konten tetap terlihat.
// --------------------------------------------------------------------------
this.idRender = "r" + Date.now() + Math.floor(Math.random() * 1000);

this.siapkanTampilan = (percobaan = 0) => {
  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return;

  const penanda = document.querySelector('[data-render="' + this.idRender + '"]');
  if (!penanda) {
    if (percobaan < 100) setTimeout(() => this.siapkanTampilan(percobaan + 1), 50);
    return;
  }
  const akar = penanda.parentElement;

  // Lepas pengamat dari render sebelumnya (mis. setelah pindah halaman)
  (window.__gtiPengamat || []).forEach((p) => p.disconnect());
  window.__gtiPengamat = [];

  const muncul = new IntersectionObserver((entries, pengamat) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        pengamat.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  akar.querySelectorAll(".fade-in").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      el.classList.add("visible");
    } else {
      el.classList.add("fade-siap");
      muncul.observe(el);
    }
  });

  const links = Array.from(akar.querySelectorAll(".nav-link[data-section]"));
  const setAktif = (id) => {
    links.forEach((link) => {
      const aktif = link.getAttribute("data-section") === id;
      link.classList.toggle("active", aktif);
      if (aktif) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };
  // Menu aktif = section yang sedang berada tepat di bawah header. Section
  // pendek (mis. Global Brands) tetap terdeteksi; di section lain menu kosong.
  const bagian = links
    .map((link) => akar.querySelector("#" + link.getAttribute("data-section")))
    .filter(Boolean);
  const GARIS = 100; // sedikit di bawah scroll-padding-top (90px)
  // Cukup ringan (4 section) untuk dijalankan langsung di setiap scroll
  const saatScroll = () => {
    const kena = bagian.find((sec) => {
      const r = sec.getBoundingClientRect();
      return r.top <= GARIS && r.bottom > GARIS;
    });
    setAktif(kena ? kena.id : "");
  };
  window.addEventListener("scroll", saatScroll, { passive: true });
  saatScroll();
  const spy = { disconnect: () => window.removeEventListener("scroll", saatScroll) };

  window.__gtiPengamat.push(muncul, spy);
};

setTimeout(() => this.siapkanTampilan(), 0);

// Bahasa yang dipilih pengunjung sebelumnya. Diterapkan setelah halaman
// tampil, bukan saat render pertama, supaya tetap cocok dengan hasil SSR
// (server selalu merender bahasa default, English).
setTimeout(() => {
  let tersimpan = null;
  try {
    tersimpan = localStorage.getItem("gti_lang");
  } catch (e) {
    /* tidak ada localStorage (SSR / diblokir) */
  }
  if (tersimpan === "ID") this.gantiBahasa("ID");
}, 0);
