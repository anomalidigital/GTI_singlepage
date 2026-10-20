// ==========================================================================
// Home - teks halaman, foto, logo merek & form kemitraan
// Teks ditulis berpasangan ["Bahasa Indonesia", "English"]; terjemah()
// (di Script Template Main) memilih sesuai bahasa. Default: English.
// Sumber teks English (termasuk label nama section di atas judul): desain
// konten Ibu Anne (Okt 2026). Bahasa Indonesia:
// naskah resmi di "GTI_Audit_Konten_Website_dan_Arahan_Revisi" bila ada,
// sisanya terjemahan dari teks English.
// ==========================================================================

this.teksHalaman = {
  // Hero
  heroJudul: ["Menjembatani Teknologi Air Global dengan Keunggulan Lokal", "Bridging Global Water Technologies with Local Excellence"],
  heroSub: [
    "GTI menghubungkan prinsipal teknologi air internasional dengan pasar Indonesia melalui lisensi merek, tata kelola merek, dan ekosistem terbuka mitra distribusi dan mitra pasar lokal.",
    "GTI connects international water technology principals with the Indonesian market through brand licensing, brand stewardship, and an open ecosystem of local distribution and market partners.",
  ],
  heroCta: ["Jelajahi Peran GTI", "Explore GTI's Role"],
  heroCta2: ["Bermitra dengan Kami", "Partner With Us"],
  heroFotoAlt: ["Demonstrasi teknologi pompa air bersama mitra", "Water pump technology demonstration with partners"],
  heroSisipAlt: ["Pompa teknologi air", "Water technology pump"],

  // Merek global
  merekLabel: ["Prinsipal Kami", "Our Principals"],
  merekJudul: ["Merek Global & Kemitraan Strategis", "Global Brands & Strategic Partnerships"],
  merekCatatan: [
    "Cakupan kemitraan dapat berbeda untuk setiap merek. GTI mengelola setiap hubungan sesuai kerangka lisensi dan merek yang berlaku.",
    "Partnership scope may vary by brand. GTI manages each relationship according to the relevant licensing and brand framework.",
  ],

  // Tentang
  tentangLabel: ["Tentang Kami", "Who We Are"],
  tentangJudul: ["Gerbang Anda untuk Pasar Teknologi Air Indonesia", "Your Gateway for Indonesia's Water Technology Market"],
  tentangIsi: [
    [
      "PT Gemilang Tirta Internusa adalah gerbang merek strategis yang menghubungkan teknologi air global dengan pasar Indonesia.",
      "PT Gemilang Tirta Internusa is a strategic brand gateway connecting global water technologies with the Indonesian market.",
    ],
    [
      "GTI mengelola hubungan dengan prinsipal, lisensi merek, standar produk, keaslian, serta tata kelola merek jangka panjang. Didukung pengalaman operasional grup sejak 1987, kami memadukan standar global dengan pemahaman praktis tentang pasar lokal.",
      "GTI manages principal relationships, brand licensing, product standards, authenticity, and long-term brand stewardship. Supported by the group's operating experience since 1987, we combine global standards with practical local market understanding.",
    ],
  ],
  tentangPoin: [
    { judul: ["Tata Kelola Merek", "Brand Stewardship"], teks: ["Menjaga integritas merek, standar, dan reputasi jangka panjang.", "Protecting brand integrity, standards, and long-term reputation."] },
    { judul: ["Akses Pasar Terbuka", "Open Market Access"], teks: ["Menghubungkan prinsipal dengan ekosistem mitra lokal terkualifikasi yang lebih luas.", "Connecting principals with a broader ecosystem of qualified local partners."] },
  ],
  tentangFotoAlt: ["Gedung kantor grup di Sunter, Jakarta Utara", "The group's office building in Sunter, North Jakarta"],

  // Peran GTI
  peranLabel: ["Peran Strategis Kami", "Our Strategic Role"],
  peranJudul: ["Yang Dikelola GTI", "What GTI Manages"],
  peranSub: [
    "GTI menyediakan fondasi strategis bagi merek teknologi air internasional yang ingin masuk dan berkembang di Indonesia, didukung tata kelola yang jelas, konsistensi merek, dan akses ke ekosistem mitra lokal yang terbuka.",
    "GTI provides a strategic foundation for international water technology brands looking to enter and scale in Indonesia, backed by clear governance, brand consistency, and access to an open local partner ecosystem.",
  ],
  peran: [
    { ikon: "fa-file-signature", judul: ["Lisensi Merek", "Brand Licensing"], teks: ["Mengelola lisensi merek dan representasi prinsipal dengan tata kelola yang jelas.", "Managing brand licensing and principal representation with clear governance."] },
    { ikon: "fa-shield-halved", judul: ["Tata Kelola Merek", "Brand Stewardship"], teks: ["Menjaga keaslian, reputasi, dan konsistensi standar merek.", "Protecting authenticity, reputation, and consistent brand standards."] },
    { ikon: "fa-list-check", judul: ["Standar & Penyelarasan", "Standards & Alignment"], teks: ["Menyelaraskan persyaratan merek global dengan standar yang berlaku dan kebutuhan pasar di Indonesia.", "Aligning global brand requirements with relevant standards and market needs in Indonesia."] },
    { ikon: "fa-network-wired", judul: ["Penguatan Pasar", "Market Enablement"], teks: ["Menghubungkan prinsipal dengan distributor terkualifikasi, mitra teknis, dan kanal pasar di seluruh Indonesia.", "Connecting principals with qualified distributors, technical partners, and market channels across Indonesia."] },
  ],
  peranFotoAlt: ["Teknisi menyiapkan panel sistem dosing air", "Technician setting up a water dosing system panel"],

  // Ekosistem
  ekoLabel: ["Global → Lokal", "Global → Local"],
  ekoJudul: ["Ekosistem Pasar yang Terbuka dan Terintegrasi", "An Open, Integrated Market Ecosystem"],
  ekoSub: [
    "GTI berada di pusat ekosistem yang terbuka—menghubungkan prinsipal global dengan mitra distribusi, teknis, dan pasar yang terkualifikasi di seluruh Indonesia.",
    "GTI sits at the center of an open ecosystem—connecting global principals with qualified distribution, technical, and market partners across Indonesia.",
  ],
  eko: [
    { ikon: "fa-earth-asia", peran: ["Prinsipal", "Principal"], judul: ["Prinsipal Global", "Global Principals"], butir: [["Teknologi", "Technology"], ["Inovasi", "Innovation"], ["Standar Merek", "Brand Standards"]] },
    { ikon: "fa-archway", peran: ["Gerbang Merek", "Brand Gateway"], judul: "PT Gemilang Tirta Internusa", butir: [["Lisensi", "Licensing"], ["Integritas Merek", "Brand Integrity"], ["Standar", "Standards"], ["Hubungan Prinsipal", "Principal Relations"]] },
    { ikon: "fa-handshake", peran: ["Ekosistem Mitra Terbuka", "Open Partner Ecosystem"], judul: ["Mitra Distribusi & Pasar", "Distribution & Market Partners"], butir: [["Distribusi", "Distribution"], ["Dukungan Teknis", "Technical Support"], ["Akses Pasar", "Market Access"], ["Implementasi", "Implementation"]] },
    { ikon: "fa-city", peran: ["Pasar", "Market"], judul: ["Pasar Indonesia", "Indonesian Market"], butir: [["Residensial", "Residential"], ["Komersial", "Commercial"], ["Perhotelan", "Hospitality"], ["Industri", "Industry"]] },
  ],

  // Dari merek global ke pasar lokal
  pasarLabel: ["Keterlibatan Pasar", "Market Engagement"],
  pasarJudul: ["Dari Merek Global ke Pasar Lokal", "From Global Brand to Local Market"],
  pasarSub: [
    "GTI membantu prinsipal membangun relevansi pasar melalui pengenalan produk, berbagi pengetahuan, keterlibatan teknis, dan kolaborasi dengan jaringan mitra lokal yang terbuka.",
    "GTI helps principals build market relevance through product introductions, knowledge sharing, technical engagement, and collaboration with an open network of local partners.",
  ],
  pasar: [
    { judul: ["Pengenalan Produk & Teknologi", "Product & Technology Introduction"], teks: ["Menciptakan konteks yang tepat bagi merek, teknologi, dan aplikasinya.", "Creating the right context for brands, technologies, and applications."], foto: "gti-workshop-bench.webp", alt: ["Presentasi peluncuran produk Grundfos", "Grundfos product launch presentation"] },
    { judul: ["Transfer Pengetahuan", "Knowledge Transfer"], teks: ["Mendukung prinsipal dalam berbagi pengetahuan produk dengan para pemangku kepentingan pasar lokal.", "Supporting principals in sharing product knowledge with local market stakeholders."], foto: "gti-knowledge-transfer.webp", alt: ["Demonstrasi produk pompa kepada mitra", "Pump product demonstration for partners"] },
    { judul: ["Keterlibatan Pasar & Mitra", "Market & Partner Engagement"], teks: ["Membangun hubungan dengan distributor, konsultan, kontraktor, dan profesional industri.", "Building relationships across distributors, consultants, contractors, and industry professionals."], foto: "gti-market-engagement.webp", alt: ["Peserta seminar mitra dan profesional industri", "Partner and industry professional seminar attendees"] },
  ],
  // Pengantar sektor: diringkas dari naskah UI writing GTI (Mauli, _Editorial)
  // "...increasing demand for advanced water technologies across sectors..."
  sektorJudul: ["Sektor yang Kami Layani", "Sectors We Serve"],
  sektorTeks: [
    "Teknologi air global untuk proyek di berbagai sektor di Indonesia.",
    "Global water technologies for projects across Indonesia.",
  ],
  sektor: [["Residensial", "Residential"], ["Komersial", "Commercial"], ["Perhotelan", "Hospitality"], ["Infrastruktur & Industri", "Infrastructure & Industry"]],

  // Mengapa GTI
  mengapaLabel: ["Mengapa GTI", "Why GTI"],
  mengapaJudul: ["Berbekal Pengalaman, Terbuka untuk Kemitraan", "Built on Experience, Open to Partnership"],
  mengapaSub: [
    "GTI memadukan standar merek global dengan pengalaman industri grup dan pendekatan kemitraan yang terbuka—mendukung prinsipal sekaligus membuka beragam jalur pasar yang terkualifikasi.",
    "GTI combines global brand standards with group industry experience and an open partnership approach—supporting principals while enabling multiple qualified routes to market.",
  ],
  fakta: [
    { nilai: ["Berpengalaman", "Experienced"], teks: ["Pemahaman pasar yang didukung grup", "Group-backed market understanding"] },
    { nilai: "3", teks: ["Merek global dalam portofolio saat ini", "Global brands in the current portfolio"] },
    { nilai: ["Terbuka", "Open"], teks: ["Ekosistem distributor & mitra pasar", "Distributor & market partner ecosystem"] },
  ],
  alasan: [
    { judul: ["Standar Global", "Global Standards"], teks: ["Standar dan reputasi merek internasional dikelola secara konsisten.", "International brand standards and reputation are managed with consistency."] },
    { judul: ["Pemahaman Pasar Lokal", "Local Market Understanding"], teks: ["Wawasan pasar yang praktis, dibentuk oleh pengalaman industri grup yang panjang.", "Practical market insight shaped by the group's long-standing industry experience."] },
    { judul: ["Jaringan Mitra Terbuka", "Open Partner Network"], teks: ["GTI tetap terbuka bagi distributor dan mitra pasar terkualifikasi yang sejalan dengan standar setiap merek.", "GTI remains open to qualified distributors and market partners that align with each brand's standards."] },
  ],

  // Visi & nilai
  visiLabel: ["Visi Kami", "Our Vision"],
  visiTeks: [
    "Menjadi gerbang paling tepercaya yang menghubungkan inovasi air global dengan kebutuhan lokal.",
    "To become the most trusted gateway connecting global water innovation with local needs.",
  ],
  nilaiLabel: ["Dilandasi oleh", "Driven by"],
  nilai: [
    { judul: ["Integritas", "Integrity"], teks: ["Autentik & akuntabel", "Authentic & accountable"] },
    { judul: ["Presisi", "Precision"], teks: ["Akurat & sesuai ketentuan", "Accurate & compliant"] },
    { judul: ["Kolaboratif", "Collaborative"], teks: ["Dibangun atas dukungan bersama", "Built on mutual support"] },
    { judul: ["Keberlanjutan", "Continuity"], teks: ["Andal untuk jangka panjang", "Reliable for the long term"] },
  ],

  // Ajakan bermitra
  kemitraanLabel: ["Kemitraan", "Partnership"],
  // Catatan: kalimat penjelasan di desain terpotong; dipakai naskah penutup
  // resmi dari audit konten Ibu Anne.
  kemitraanJudul: ["Bangun Kehadiran Teknologi Air Anda di Indonesia", "Build Your Water Technology Presence in Indonesia"],
  kemitraanTeks: [
    "Bersama GTI, hubungkan inovasi teknologi air global dengan peluang dan kebutuhan pasar Indonesia melalui kemitraan strategis yang berkelanjutan.",
    "Together with GTI, connect global water technology innovation with the opportunities and needs of the Indonesian market through sustainable strategic partnerships.",
  ],
  kemitraanCta: ["Diskusikan Kemitraan", "Discuss a Partnership"],
  kemitraanCta2: ["Hubungi Tim Kami", "Talk to Our Team"],

  // Hubungi Kami (section form: tidak diubah)
  jadiMitra: ["Jadilah Mitra Kami", "Become Our Partner"],
  infoKontakJudul: ["Informasi Kontak", "Contact Information"],
  infoKontakTeks: ["Jika ingin bermitra segera, silakan temui kami secara langsung atau kirimkan email Anda.", "If you want to partner right away, please see us in person or send us an email."],
  alamatJudul: ["Alamat Kantor", "Office Address"],
  teleponJudul: ["Telepon / WhatsApp", "Phone / WhatsApp"],
  formDesc: ["Tinggalkan pesan Anda dengan mendetail. Mengirimkan pesan dapat langsung dijawab dalam jam kerja operasional bisnis.", "Leave a detailed message. Sending a message will be answered during business operational hours."],
  form: {
    nama: ["Nama Lengkap *", "Full Name *"],
    namaPh: ["Masukkan nama lengkap Anda", "Enter your full name"],
    email: ["Alamat Email *", "Email Address *"],
    emailPh: ["Masukkan alamat email bisnis", "Enter your business email address"],
    perusahaan: ["Nama Perusahaan", "Company Name"],
    perusahaanPh: ["Asal dari Perusahaan Anda", "Your Company Origin"],
    pesan: ["Pesan Anda *", "Your Message *"],
    pesanPh: ["Jelaskan kebutuhan kerjasama atau dukungan", "Explain partnership needs or support requirements"],
    kirim: ["Kirim via WhatsApp", "Send via WhatsApp"],
    terkirim: ["WhatsApp sudah dibuka. Tekan Kirim di WhatsApp untuk mengirim pesan Anda.", "WhatsApp has been opened. Press Send in WhatsApp to deliver your message."],
    pembuka: ["Halo PT Gemilang Tirta Internusa, saya ingin bermitra.", "Hello PT Gemilang Tirta Internusa, I would like to partner with you."],
    labelNama: ["Nama", "Name"],
    labelPerusahaan: ["Perusahaan", "Company"],
    labelPesan: ["Pesan", "Message"],
  },
};
this.t = this.terjemah(this.teksHalaman);

// Logo distributor: memakai file yang sudah ada di situs BMP & Emaux
// (server upload sitebuilder sama, jadi tidak perlu upload ulang).
this.distributor = [
  { gambar: "/uploads/1753328024352KLZGGHK_benteng-mas-perkasa/grundfos-blue.png", nama: "Grundfos", lebar: 1920, tinggi: 278 },
  { gambar: "/uploads/1757477593668QFTBRFL_emaux/logo.png", nama: "Emaux Water Technology", lebar: 200, tinggi: 72 },
  { gambar: "/uploads/1753328024352KLZGGHK_benteng-mas-perkasa/pool-bright.png", nama: "PoolBright", lebar: 197, tinggi: 61 },
];

// --------------------------------------------------------------------------
// Form kemitraan -> WhatsApp + tersimpan di form CMS (tidak diubah)
// --------------------------------------------------------------------------
const FORM_MITRA_ID = "1791340566655HHLCWYS";

this.formTerkirim = false;

this.kirimMitra = (form) => {
  const nilai = form.form.value;
  if (nilai.website) return; // jebakan bot terisi: abaikan

  const f = this.t.form;
  const pesan = f.pembuka + "\n\n" + f.labelNama + ": " + (nilai.name || "").trim() + "\n" + "Email: " + (nilai.email || "").trim() + "\n" + f.labelPerusahaan + ": " + ((nilai.company || "").trim() || "-") + "\n\n" + f.labelPesan + ":\n" + (nilai.message || "").trim();

  const url = this.kontak.whatsapp.href + "?text=" + encodeURIComponent(pesan);
  const jendela = window.open(url, "_blank");
  if (jendela) jendela.opener = null;
  else window.location.href = url; // popup diblokir: buka di tab ini

  if (FORM_MITRA_ID) {
    this.submitForm(FORM_MITRA_ID, form, { text: f.terkirim, timer: 0 });
  } else {
    form.resetForm();
  }
  this.formTerkirim = true;
};
