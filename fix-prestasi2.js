const fs = require('fs');

let content = fs.readFileSync('prestasi-santri.html', 'utf8');

// replace title
content = content.replace('<title>Rapot Santri - Hibatullah IIBS</title>', '<title>Data Prestasi | Hibatullah IIBS</title>');

// replace breadcrumb text
content = content.replace('Rapot Evaluasi Akademik', 'Data Prestasi Santri');

// replace hero texts exactly
content = content.replace('<div class="rh-hero-badge"><i class="fas fa-file-invoice"></i> Santri Hebat</div>', '<div class="rh-hero-badge"><i class="fas fa-trophy"></i> Santri Hebat</div>');
content = content.replace('<h1>RAPOT <span>SANTRI</span></h1>', '<h1>DATA <span>PRESTASI</span></h1>');
content = content.replace('<p>Sistem informasi akademik dan laporan perkembangan santri Hibatullah IIBS.</p>', '<p>Sistem informasi prestasi dan penghargaan santri Hibatullah IIBS.</p>');

// replace the inside of rapot-container
const searchStart = '      <!-- Search Form -->';
const resultEnd = '      </div> <!-- end result -->';

const idxStart = content.indexOf(searchStart);
const idxEnd = content.indexOf(resultEnd) + resultEnd.length;

if (idxStart !== -1 && idxEnd !== -1) {
  const newInside = `      <div style="min-height: 50vh; display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center;">
        <i class="fas fa-tools" style="font-size: 64px; color: #cbd5e1; margin-bottom: 20px;"></i>
        <h2 style="color: #334155; font-size: 28px; margin-bottom: 10px;">Halaman Dalam Pengembangan</h2>
        <p style="color: #64748b; font-size: 16px; max-width: 500px;">Halaman Data Prestasi Santri saat ini sedang dalam tahap pengembangan. Fitur ini akan segera hadir.</p>
      </div>`;
  content = content.substring(0, idxStart) + newInside + content.substring(idxEnd);
}

fs.writeFileSync('prestasi-santri.html', content);
console.log('done fixing prestasi-santri.html');
