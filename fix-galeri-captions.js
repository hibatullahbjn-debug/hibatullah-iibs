const fs = require('fs');

let html = fs.readFileSync('galeri.html', 'utf8');

// Replace the zoom icons with texts sequentially
const replacements = [
  "<span>Juara 1 Lomba Tapak Suci</span>",
  "<span>Juara 2 Pencak Silat</span>",
  "<span>Juara 3 Tapak Suci Putri</span>",
  "<span>Medali Perak Tapak Suci Putra</span>",
  "<span>Medali Perunggu Pencak Silat Putra</span>",
  "<span>Kegiatan Muroja'ah Santri Pagi</span>",
  "<span>Pembinaan Kedisiplinan & Adab</span>",
  "<span>Aktivitas Belajar dan Praktik Mandiri</span>"
];

let currentIndex = 0;

html = html.replace(/<div class="galeri-overlay"><i class="fas fa-expand"><\/i><\/div>/g, (match) => {
  if (currentIndex < replacements.length) {
    const replacement = `<div class="galeri-overlay">${replacements[currentIndex]}</div>`;
    currentIndex++;
    return replacement;
  }
  return match;
});

fs.writeFileSync('galeri.html', html);
console.log('Updated galeri.html');
