const fs = require('fs');

const items = {
  "PBM Akademik Kediknasan": {
    title: "PBM Akademik Kediknasan",
    desc: "Pembelajaran kurikulum nasional SMP dengan pendekatan interaktif dan inovatif."
  },
  "PBM Studi Keislaman": {
    title: "PBM Studi Keislaman",
    desc: "Kajian mendalam ilmu agama, aqidah, fiqih, dan akhlak ala Ahlus Sunnah."
  },
  "Tahsin dan Tahfizh Al Quran bestandar sanad": {
    title: "Tahsin & Tahfizh Bersanad",
    desc: "Bimbingan membaca dan menghafal Al-Qur'an secara tartil dengan sanad guru yang jelas."
  },
  "Camp Al Qur'an": {
    title: "Camp Al-Qur'an",
    desc: "Karantina khusus untuk akselerasi dan penguatan hafalan Al-Qur'an santri."
  },
  "Camp Bahasa Asing": {
    title: "Camp Bahasa Asing",
    desc: "Program intensif percakapan bahasa Arab dan Inggris di lingkungan yang dikondisikan."
  },
  "Pelatihan Kepemimpinan": {
    title: "Pelatihan Kepemimpinan",
    desc: "Pembentukan jiwa pemimpin yang mandiri, disiplin, dan bertanggung jawab."
  },
  "Overseas Iternasional": {
    title: "Overseas Internasional",
    desc: "Program studi banding ke luar negeri untuk memperluas wawasan global santri."
  },
  "Klub Bahasa": {
    title: "Klub Bahasa",
    desc: "Wadah pengembangan minat santri dalam mendalami literatur dan retorika bahasa."
  },
  "Lomba-Lomba": {
    title: "Bimbingan Lomba",
    desc: "Pendampingan intensif bagi santri untuk berkompetisi di tingkat regional hingga nasional."
  },
  "Pembinaan kewirausahaan": {
    title: "Pembinaan Kewirausahaan",
    desc: "Pembekalan mindset dan praktik bisnis riil (entrepreneurship) berbasis syariat Islam."
  },
  "Achievment Motivation Training": {
    title: "Achievement Motivation Training",
    desc: "Pelatihan untuk memacu motivasi berprestasi dan membangun mental tangguh."
  },
  "Pembinaan Minat dan Bakat": {
    title: "Pembinaan Minat & Bakat",
    desc: "Penyaluran potensi santri melalui berbagai pilihan kegiatan ekstrakurikuler."
  },
  "Tur Edukasi dan Kepemimpinan": {
    title: "Tur Edukasi & Kepemimpinan",
    desc: "Kegiatan rihlah (kunjungan) ilmiah ke berbagai institusi dan tempat bersejarah."
  }
};

function processHtml(file) {
  let html = fs.readFileSync(file, 'utf8');
  let count = 0;
  
  for (const [key, value] of Object.entries(items)) {
    // Regex to match the old format:
    // <li>
    //   <div class="prog-bullet"><i class="fas fa-chevron-right"></i></div>
    //   [key]
    // </li>
    // Note: there might be varying whitespaces
    
    // We will do a generic replacement for the text inside <li>
    const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    
    const regex = new RegExp(`(<div class="prog-bullet"><i class="fas fa-chevron-right"><\\/i><\\/div>)\\s*${escapeRegex(key)}`, 'g');
    
    const replacement = `$1\n                <div class="prog-text">\n                  <strong>${value.title}</strong>\n                  <p>${value.desc}</p>\n                </div>`;
    
    if (html.match(regex)) {
      html = html.replace(regex, replacement);
      count++;
    }
  }
  
  fs.writeFileSync(file, html);
  console.log(`Updated ${count} items in ${file}`);
}

processHtml('index.html');
processHtml('program.html');

// Add CSS to style.css
const css = `
/* --- Added for Prog Descriptions --- */
.prog-list li { align-items: flex-start !important; margin-bottom: 8px; }
.prog-list li .prog-bullet { margin-top: 2px; }
.prog-text { display: flex; flex-direction: column; gap: 4px; }
.prog-text strong { font-size: 14.5px; font-weight: 700; color: #1a3a6b; display: block; line-height: 1.3; }
.prog-text p { font-size: 12.5px; color: #555; line-height: 1.5; margin: 0; }
`;

let styleCss = fs.readFileSync('style.css', 'utf8');
if (!styleCss.includes('.prog-text')) {
  fs.appendFileSync('style.css', css);
  console.log('Appended CSS to style.css');
}
