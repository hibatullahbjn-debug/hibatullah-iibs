const fs = require('fs');

const items = {
  "PBM Akademik Kediknasan": {
    title: "PBM Akademik Kediknasan",
    desc: "Pembelajaran berstandar kurikulum nasional SMP dengan pendekatan interaktif, inkuiri, dan pemecahan masalah. Siswa dibekali ilmu pengetahuan umum secara komprehensif untuk menghadapi ujian dan jenjang pendidikan selanjutnya."
  },
  "PBM Studi Keislaman": {
    title: "PBM Studi Keislaman",
    desc: "Kajian mendalam ilmu-ilmu agama Islam meliputi aqidah, fiqih ibadah, sejarah kebudayaan Islam, dan akhlak. Bertujuan membentuk karakter santri yang memahami agama secara kaffah."
  },
  "Tahsin & Tahfizh Bersanad": {
    title: "Tahsin & Tahfizh Bersanad",
    desc: "Program bimbingan intensif membaca dan menghafal Al-Qur'an secara tartil sesuai kaidah ilmu tajwid. Dibimbing langsung oleh asatidz bersanad untuk menjamin kualitas bacaan."
  },
  "Camp Al-Qur'an": {
    title: "Camp Al-Qur'an",
    desc: "Program karantina khusus di waktu tertentu untuk mengintensifkan muraja'ah (pengulangan) dan ziyadah (penambahan) hafalan Al-Qur'an santri agar mencapai target hafalan mutqin."
  },
  "Camp Bahasa Asing": {
    title: "Camp Bahasa Asing",
    desc: "Program intensif berbahasa Arab dan Inggris dalam lingkungan asrama yang dikondisikan penuh (Language Environment) untuk melancarkan percakapan dan meningkatkan rasa percaya diri."
  },
  "Pelatihan Kepemimpinan": {
    title: "Pelatihan Kepemimpinan",
    desc: "Pembekalan mental dan praktik kepemimpinan organisasi untuk menumbuhkan jiwa pemimpin yang mandiri, berani mengambil keputusan, disiplin, dan bertanggung jawab."
  },
  "Overseas Internasional": {
    title: "Overseas Internasional",
    desc: "Kesempatan emas bagi santri untuk melakukan studi banding dan kunjungan pendidikan ke luar negeri. Program ini bertujuan memperluas wawasan global dan kepekaan sosial."
  },
  "Klub Bahasa": {
    title: "Klub Bahasa",
    desc: "Wadah khusus pengembangan bakat santri yang memiliki minat tinggi dalam mendalami literatur, tata bahasa, hingga retorika (pidato/debat) bahasa Arab maupun Inggris."
  },
  "Bimbingan Lomba": {
    title: "Bimbingan Lomba",
    desc: "Pendampingan dan pelatihan intensif bagi santri terpilih untuk berkompetisi dan meraih prestasi di berbagai ajang perlombaan tingkat regional, nasional, hingga internasional."
  },
  "Pembinaan Kewirausahaan": {
    title: "Pembinaan Kewirausahaan",
    desc: "Pembekalan mindset entrepreneurship melalui seminar dan praktik bisnis riil (bazar/koperasi) yang mengedepankan etika bisnis syariah untuk kemandirian finansial."
  },
  "Achievement Motivation Training": {
    title: "Achievement Motivation Training",
    desc: "Pelatihan psikologis khusus untuk memacu motivasi berprestasi, membangun karakter pantang menyerah, dan mempersiapkan mental tangguh santri dalam belajar."
  },
  "Pembinaan Minat & Bakat": {
    title: "Pembinaan Minat & Bakat",
    desc: "Penyaluran potensi santri melalui berbagai ekstrakurikuler pilihan seperti panahan, bela diri, desain grafis, coding, dan seni islami guna mencetak generasi multitalenta."
  },
  "Tur Edukasi & Kepemimpinan": {
    title: "Tur Edukasi & Kepemimpinan",
    desc: "Kegiatan rihlah ilmiah atau kunjungan lapangan (field trip) ke berbagai institusi pendidikan, industri, dan tempat bersejarah untuk memadukan teori dengan realitas."
  }
};

function processHtml(file) {
  let html = fs.readFileSync(file, 'utf8');

  // 1. Remove the image block
  const imgRegex = /<!-- Left: Image -->\s*<div class="prog-img-card">[\s\S]*?<\/div>\s*<!-- Right: Program List -->/g;
  html = html.replace(imgRegex, '<!-- Program List -->');

  // 2. Update descriptions
  for (const [key, value] of Object.entries(items)) {
    // Regex to match existing title text to update the description paragraph below it
    const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const titleRegex = new RegExp(`(<strong>${escapeRegex(value.title)}<\\/strong>\\s*<p>)[^<]*(<\\/p>)`, 'g');
    if (html.match(titleRegex)) {
      html = html.replace(titleRegex, `$1${value.desc}$2`);
    }
  }

  // 3. Update CSS inline inside program.html if any
  html = html.replace('.prog-card-layout {\n      display: grid;\n      grid-template-columns: 420px 1fr;', '.prog-card-layout {\n      display: block;');
  
  fs.writeFileSync(file, html);
  console.log(`Updated ${file}`);
}

processHtml('index.html');
processHtml('program.html');

// 4. Update style.css grid for .prog-card-layout if it exists there
let styleCss = fs.readFileSync('style.css', 'utf8');
styleCss = styleCss.replace(/grid-template-columns:\s*420px 1fr;/g, '');
styleCss = styleCss.replace(/\.prog-card-layout\s*{\s*display:\s*grid;/g, '.prog-card-layout { display: block;');
// For media queries we can also clear the grid
styleCss = styleCss.replace(/\.prog-card-layout\s*{\s*grid-template-columns:\s*1fr;\s*}/g, '');
fs.writeFileSync('style.css', styleCss);
console.log('Updated style.css');

