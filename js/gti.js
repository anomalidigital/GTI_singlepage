// Interaksi versi statis (GitHub Pages). Di sitebuilder, perilaku yang sama
// dijalankan oleh Template Main/Script.js dan Home/Home.js.
(function () {
  var lang = document.documentElement.lang === "id" ? "ID" : "EN";
  var halaman = { ID: "id.html", EN: "index.html" };

  // Bahasa: English default; pilihan pengunjung diingat seperti di sitebuilder
  try {
    if (localStorage.getItem("gti_lang") === "ID" && lang === "EN") {
      location.replace(halaman.ID + location.hash);
      return;
    }
  } catch (e) { /* localStorage diblokir */ }

  document.querySelectorAll(".lang-option").forEach(function (tombol) {
    tombol.addEventListener("click", function () {
      var tujuan = tombol.getAttribute("lang") === "id" ? "ID" : "EN";
      try { localStorage.setItem("gti_lang", tujuan); } catch (e) { /* abaikan */ }
      if (tujuan !== lang) location.href = halaman[tujuan] + location.hash;
    });
  });

  // Menu HP
  var menu = document.getElementById("nav-menu");
  var toggle = document.querySelector(".mobile-toggle");
  function aturMenu(buka) {
    menu.classList.toggle("active", buka);
    toggle.setAttribute("aria-expanded", buka ? "true" : "false");
  }
  toggle.addEventListener("click", function () { aturMenu(!menu.classList.contains("active")); });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { aturMenu(false); });
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") aturMenu(false); });

  // Menu aktif = section yang tepat berada di bawah header
  var links = Array.prototype.slice.call(document.querySelectorAll(".nav-link[data-section]"));
  var bagian = links.map(function (l) { return document.getElementById(l.getAttribute("data-section")); }).filter(Boolean);
  function saatScroll() {
    var aktif = "";
    bagian.forEach(function (sec) {
      var r = sec.getBoundingClientRect();
      if (r.top <= 100 && r.bottom > 100) aktif = sec.id;
    });
    links.forEach(function (l) {
      var ya = l.getAttribute("data-section") === aktif;
      l.classList.toggle("active", ya);
      if (ya) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
    });
  }
  window.addEventListener("scroll", saatScroll, { passive: true });
  saatScroll();

  // Form kemitraan -> WhatsApp (di GitHub Pages tidak disimpan ke CMS)
  var teks = {
    ID: { pembuka: "Halo PT Gemilang Tirta Internusa, saya ingin bermitra.", nama: "Nama", perusahaan: "Perusahaan", pesan: "Pesan",
          terkirim: "WhatsApp sudah dibuka. Tekan Kirim di WhatsApp untuk mengirim pesan Anda." },
    EN: { pembuka: "Hello PT Gemilang Tirta Internusa, I would like to partner with you.", nama: "Name", perusahaan: "Company", pesan: "Message",
          terkirim: "WhatsApp has been opened. Press Send in WhatsApp to deliver your message." },
  }[lang];
  var form = document.querySelector("#contact form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (n) { var el = form.elements[n]; return el ? el.value.trim() : ""; };
      if (v("website")) return; // jebakan bot
      var pesan = teks.pembuka + "\n\n" + teks.nama + ": " + v("name") + "\nEmail: " + v("email") + "\n" +
        teks.perusahaan + ": " + (v("company") || "-") + "\n\n" + teks.pesan + ":\n" + v("message");
      var url = "https://wa.me/6287765836677?text=" + encodeURIComponent(pesan);
      var jendela = window.open(url, "_blank");
      if (jendela) jendela.opener = null; else location.href = url;
      form.reset();
      var status = form.querySelector(".form-status");
      if (status) status.textContent = teks.terkirim;
    });
  }
})();
