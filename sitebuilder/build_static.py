"""Bangun versi HTML statis (GitHub Pages) dari hasil render sitebuilder lokal.
python build_static.py <folder-repo>
Butuh preview lokal jalan di 127.0.0.1:8793.
"""
import os, re, sys, time, shutil, json, urllib.request
from selenium import webdriver

REPO = sys.argv[1]
SB = "Z:/Projects/AnomaliSitebuilder/gemilangtirtainternusa.com"
URL = "http://127.0.0.1:8793/"
PREFIX = "/uploads/1791267314909MXMNJGN_gemilang-tirta-internusa/"
DISTRIBUTOR = {
    "/uploads/1753328024352KLZGGHK_benteng-mas-perkasa/grundfos-blue.png": "grundfos-blue.png",
    "/uploads/1757477593668QFTBRFL_emaux/logo.png": "emaux.png",
    "/uploads/1753328024352KLZGGHK_benteng-mas-perkasa/pool-bright.png": "pool-bright.png",
}

# --- aset
aset = os.path.join(REPO, "assets")
os.makedirs(os.path.join(aset, "logo-distributor"), exist_ok=True)
for f in os.listdir(os.path.join(SB, "_Asset", "Upload")):
    if f.endswith(".webp"):
        shutil.copy2(os.path.join(SB, "_Asset", "Upload", f), os.path.join(aset, f))
for src, nama in DISTRIBUTOR.items():
    req = urllib.request.Request("https://bentengmasperkasa.com" + src, headers={"User-Agent": "Mozilla/5.0"})
    open(os.path.join(aset, "logo-distributor", nama), "wb").write(urllib.request.urlopen(req, timeout=60).read())

# --- css
os.makedirs(os.path.join(REPO, "css"), exist_ok=True)
css = open(os.path.join(SB, "code_main", "Template Main", "Style.css"), encoding="utf-8").read() + "\n" + \
      open(os.path.join(SB, "code_main", "Home", "Home.css"), encoding="utf-8").read()
open(os.path.join(REPO, "css", "gti.css"), "w", encoding="utf-8", newline="\n").write(
    "/* Hasil gabungan Template Main/Style.css + Home/Home.css (sitebuilder/). Jangan diedit langsung. */\n" + css)

# --- render HTML
o = webdriver.ChromeOptions()
o.binary_location = "C:/Program Files/Google/Chrome/Application/chrome.exe"
for a in ("--headless=new", "--disable-gpu"):
    o.add_argument(a)
d = webdriver.Chrome(options=o)
hasil = {}
try:
    d.execute_cdp_cmd("Emulation.setDeviceMetricsOverride", {"width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False})
    for lang in ("EN", "ID"):
        d.get(URL)
        d.execute_script("localStorage.setItem('gti_lang', arguments[0])", lang)
        d.get(URL)
        time.sleep(5)
        hasil[lang] = d.execute_script("return document.querySelector('header.header').parentElement.innerHTML")
finally:
    d.quit()

head_tag = open(os.path.join(SB, "code_main", "Template Main", "HeadTag.html"), encoding="utf-8").read()
head_tag = head_tag.replace("<!-- Warna bilah browser di HP -->\n", "").replace("<!-- Data perusahaan untuk mesin pencari (Google) -->\n", "")

META = {
    "EN": ("PT Gemilang Tirta Internusa | Bridging Global Water Technologies with Local Excellence",
           "GTI connects international water technology principals with the Indonesian market through brand licensing, brand stewardship, and an open ecosystem of local distribution and market partners."),
    "ID": ("PT Gemilang Tirta Internusa | Menjembatani Teknologi Air Global dengan Keunggulan Lokal",
           "GTI menghubungkan prinsipal teknologi air internasional dengan pasar Indonesia melalui lisensi merek, tata kelola merek, dan ekosistem terbuka mitra distribusi dan mitra pasar lokal."),
}


def bersihkan(h):
    h = re.sub(r"<!--.*?-->", "", h, flags=re.S)
    h = re.sub(r'\s_ng(content|host)-[\w-]+=""', "", h)
    h = re.sub(r'\sng-reflect-[\w-]+="[^"]*"', "", h)
    h = re.sub(r'\sng-version="[^"]*"', "", h)
    h = re.sub(r'\sdata-render="[^"]*"', "", h)
    h = re.sub(r'\snovalidate=""', "", h)
    h = re.sub(r'\s?ng-(untouched|pristine|valid|invalid|touched|dirty|submitted)\b', "", h)
    h = h.replace(" fade-siap", "")
    h = re.sub(r'(class="nav-link) active"', r'\1"', h)
    h = re.sub(r'\saria-current="true"', "", h)
    for src, nama in DISTRIBUTOR.items():
        h = h.replace('src="' + src + '"', 'src="assets/logo-distributor/' + nama + '"')
    h = h.replace('src="' + PREFIX, 'src="assets/')
    h = h.replace('href="/#', 'href="#')
    h = h.replace('href="/"', 'href="#home"')
    h = re.sub(r'class="\s*"', "", h)
    h = re.sub(r"[ \t]+\n", "\n", h)
    h = re.sub(r"\n{3,}", "\n\n", h)
    return h.strip()


for lang, berkas in (("EN", "index.html"), ("ID", "id.html")):
    judul, desk = META[lang]
    body = bersihkan(hasil[lang])
    assert "/uploads/" not in body, "masih ada path /uploads/"
    html = f"""<!doctype html>
<html lang="{lang.lower()}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{judul}</title>
<meta name="description" content="{desk}">
<link rel="icon" href="assets/gemilang-tirta-internusa-icon.webp" type="image/webp">
<link rel="alternate" hreflang="en" href="index.html">
<link rel="alternate" hreflang="id" href="id.html">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
<link rel="stylesheet" href="css/gti.css">
{head_tag.strip()}
</head>
<body>
<!-- Versi statis untuk GitHub Pages: dirender dari kode sitebuilder/ (lihat README). -->
{body}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
<script src="js/gti.js"></script>
</body>
</html>
"""
    open(os.path.join(REPO, berkas), "w", encoding="utf-8", newline="\n").write(html)
    print(berkas, len(html))
