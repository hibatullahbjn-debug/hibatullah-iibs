const fs = require('fs');

let content = fs.readFileSync('prestasi-santri.html', 'utf8');

// replace title
content = content.replace('<title>Rapot Santri | Hibatullah IIBS</title>', '<title>Data Prestasi | Hibatullah IIBS</title>');

// replace breadcrumb text
content = content.replace('Rapot Evaluasi Akademik', 'Data Prestasi Santri');

// replace hero badge and title
content = content.replace('<div class="rh-hero-badge"><i class="fas fa-file-invoice"></i> Santri Hebat</div>', '<div class="rh-hero-badge"><i class="fas fa-trophy"></i> Santri Hebat</div>');
content = content.replace('<h1 class="rh-hero-title">Rapot Santri</h1>', '<h1 class="rh-hero-title">Data Prestasi</h1>');
content = content.replace('<p class="rh-hero-desc">Sistem Informasi Akademik Hibatullah IIBS</p>', '<p class="rh-hero-desc">Sistem Informasi Prestasi Santri Hibatullah IIBS</p>');

// replace body content inside main
const mainStart = content.indexOf('<main>');
const mainEnd = content.indexOf('</main>');

const newMain = `<main>
  <div class="rapot-container" style="min-height: 50vh; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center;">
    <i class="fas fa-tools" style="font-size: 64px; color: #cbd5e1; margin-bottom: 20px;"></i>
    <h2 style="color: #334155; font-size: 28px; margin-bottom: 10px;">Halaman Dalam Pengembangan</h2>
    <p style="color: #64748b; font-size: 16px; max-width: 500px;">Halaman Data Prestasi Santri saat ini sedang dalam tahap pengembangan. Fitur ini akan segera hadir.</p>
  </div>
</main>`;

content = content.substring(0, mainStart) + newMain + content.substring(mainEnd + 7);

fs.writeFileSync('prestasi-santri.html', content);
console.log('updated prestasi-santri.html');
