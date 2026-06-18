const fs = require('fs');

// 1. Create jenjang-smp.html
let baseHtml = fs.readFileSync('standar-kompetensi-lulusan.html', 'utf8');

// Change Title
baseHtml = baseHtml.replace('<title>Standar Kompetensi Lulusan - Hibatullah IIBS</title>', '<title>Jenjang Pendidikan SMP - Hibatullah IIBS</title>');

// Change Breadcrumb
baseHtml = baseHtml.replace('<span>Standar Kompetensi Lulusan</span>', '<span>Jenjang Pendidikan SMP</span>');

// Change Hero
baseHtml = baseHtml.replace('<div class="skl-hero-badge"><i class="fas fa-graduation-cap"></i> Standar Lulusan</div>', '<div class="skl-hero-badge"><i class="fas fa-school"></i> Jenjang Pendidikan</div>');
baseHtml = baseHtml.replace('<h1 class="skl-hero-title">Standar Kompetensi Lulusan<br><span>Hibatullah</span></h1>', '<h1 class="skl-hero-title">Jenjang Pendidikan<br><span>SMP Hibatullah</span></h1>');
baseHtml = baseHtml.replace('<p class="skl-hero-desc">Profil lulusan SMP Hibatullah yang komprehensif — mencakup dimensi sikap, pengetahuan, dan keterampilan yang siap menghadapi jenjang pendidikan berikutnya.</p>', '<p class="skl-hero-desc">Program pendidikan komprehensif selama 3 tahun dengan sistem asrama, menggabungkan kurikulum nasional, pesantren, dan program unggulan.</p>');
baseHtml = baseHtml.replace('<div class="skl-hero-pills">\n        <span><i class="fas fa-check-circle"></i> Dimensi Sikap</span>\n        <span><i class="fas fa-check-circle"></i> Dimensi Pengetahuan</span>\n        <span><i class="fas fa-check-circle"></i> Dimensi Keterampilan</span>\n      </div>', '<div class="skl-hero-pills">\n        <span><i class="fas fa-check-circle"></i> Program Pendidikan</span>\n        <span><i class="fas fa-check-circle"></i> Program Unggulan</span>\n        <span><i class="fas fa-check-circle"></i> Program Tambahan</span>\n      </div>');

// Replace the content section
const regex = /<!-- KOMPETENSI SMPH -->[\s\S]*?<\/section>/;

const newContent = `<!-- PROGRAM PENDIDIKAN -->
  <section class="skl-smph-section" style="background: #ffffff; padding-bottom: 40px;">
    <div class="skl-sec-inner">
      <div class="skl-sec-label"><span></span> SMP HIBATULLAH <span></span></div>
      <h2 class="skl-sec-title">Program Pendidikan <span>Utama</span></h2>
      <p class="skl-sec-sub">Fondasi dasar yang diberikan selama masa pembelajaran di SMP Hibatullah</p>
      
      <div class="smph-komp-grid">
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-calendar-alt"></i></div>
          <p>Program pendidikan selama 3 tahun</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-book-open"></i></div>
          <p>Pendidikan berbasis Ta'dib (penanaman adab dan akhlak Islami)</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-clock"></i></div>
          <p>Pembiasaan disiplin</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-seedling"></i></div>
          <p>Penanaman ekosistem dan semangat belajar yang berkelanjutan di setiap waktu dan tempat.</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-language"></i></div>
          <p>Penanaman kemampuan berbahasa Arab dan Inggris serta keterampilan membaca kitab dasar.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM UNGGULAN -->
  <section class="skl-smph-section" style="padding-top: 40px; padding-bottom: 40px;">
    <div class="skl-sec-inner">
      <div class="skl-sec-label"><span></span> KEUNGGULAN <span></span></div>
      <h2 class="skl-sec-title">Program <span>Unggulan</span></h2>
      <p class="skl-sec-sub">Program khusus yang membedakan santri SMP Hibatullah</p>
      
      <div class="smph-komp-grid">
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-quran"></i></div>
          <p>Tahsin dan Tahfizh Al Quran berstandar sanad</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-campground"></i></div>
          <p>Camp Bahasa Arab & Inggris</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-users"></i></div>
          <p>Leadership</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-microphone"></i></div>
          <p>Public Speaking</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-chart-line"></i></div>
          <p>Entrepreneurship</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM TAMBAHAN -->
  <section class="skl-smph-section" style="background: #ffffff; padding-top: 40px;">
    <div class="skl-sec-inner">
      <div class="skl-sec-label"><span></span> EKSTRAKULIKULER <span></span></div>
      <h2 class="skl-sec-title">Program <span>Tambahan</span></h2>
      <p class="skl-sec-sub">Aktivitas pendukung untuk mengembangkan minat dan bakat santri</p>
      
      <div class="smph-komp-grid">
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-bus"></i></div>
          <p>Rihlah Ilmiah</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-plane-departure"></i></div>
          <p>Study Abroad</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-hands-helping"></i></div>
          <p>Baksos Ramadhan</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-cow"></i></div>
          <p>Penyembelihan hewan Qurban</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-book"></i></div>
          <p>Kunjungan ke Islamic Book Fair</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-bullseye"></i></div>
          <p>Memanah</p>
        </div>
      </div>
    </div>
  </section>`;

baseHtml = baseHtml.replace(regex, newContent);

// Also fix the active link in navbar (this is jenjang-smp.html now)
// We will fix navbar links in the next step globally

fs.writeFileSync('jenjang-smp.html', baseHtml);
console.log('Created jenjang-smp.html');

// 2. Update navbar across all HTML files
const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  const searchStr = '<a href="#">Jenjang Pendidikan SMP</a>';
  const replaceStr = '<a href="jenjang-smp.html">Jenjang Pendidikan SMP</a>';

  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
    modified = true;
  }

  // Handle if they visit jenjang-smp.html, it should have the active class correctly?
  // We'll just leave 'active' on Beranda for simplicity or remove it, standard practice.

  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Updated navbar in ${file}`);
  }
});
