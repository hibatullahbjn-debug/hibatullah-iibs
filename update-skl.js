const fs = require('fs');

let html = fs.readFileSync('standar-kompetensi-lulusan.html', 'utf8');

// Update Hero subtitle
html = html.replace(
  '<h1 class="skl-hero-title">Standar Kompetensi Lulusan<br><span>SMP Hibatullah</span></h1>',
  '<h1 class="skl-hero-title">Standar Kompetensi Lulusan<br><span>SMPH</span></h1>'
);

// We need to replace everything from <!-- 3 DIMENSI SKL --> to the end of <!-- TARGET CAPAIAN --> section
// Let's use a regex that matches from <!-- 3 DIMENSI SKL --> to </section> before <!-- FOOTER -->
const regex = /<!-- 3 DIMENSI SKL -->[\s\S]*?<\/section>\s*<!-- TARGET CAPAIAN -->[\s\S]*?<\/section>/;

const newContent = `<!-- KOMPETENSI SMPH -->
  <section class="skl-smph-section">
    <div class="skl-sec-inner">
      <div class="skl-sec-label"><span></span> KOMPETENSI <span></span></div>
      <h2 class="skl-sec-title">Standar Kompetensi Lulusan <span>SMPH</span></h2>
      <p class="skl-sec-sub">Pencapaian kompetensi yang menjadi standar kelulusan santri SMP Hibatullah</p>
      
      <div class="smph-komp-grid">
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-check-circle"></i></div>
          <p>Beraqidah Lurus.</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-check-circle"></i></div>
          <p>Beribadah dengan baik dan benar.</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-check-circle"></i></div>
          <p>Memahami dan mengamalkan adab-adab Islami.</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-check-circle"></i></div>
          <p>Membaca al-Qur'an dengan baik.</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-check-circle"></i></div>
          <p>Memahami Ilmu Agama tingkat dasar dengan baik.</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-check-circle"></i></div>
          <p>Lancar berkomunikasi dengan Bahasa Inggris.</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-check-circle"></i></div>
          <p>Membaca kitab-kitab bahasa Arab tingkat dasar.</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-check-circle"></i></div>
          <p>Memiliki kemampuan bela diri tingkat dasar.</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-check-circle"></i></div>
          <p>Menghapal 6 juz al-Qur'an + surat-surat pilihan (berstandar sanad).</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-check-circle"></i></div>
          <p>Menghapal 40 Hadits.</p>
        </div>
        <div class="smph-komp-item">
          <div class="smph-komp-icon"><i class="fas fa-check-circle"></i></div>
          <p>Mampu menyampaikan kultum dan mengajar pelajaran dasar.</p>
        </div>
      </div>
    </div>
  </section>`;

if (regex.test(html)) {
  html = html.replace(regex, newContent);
  fs.writeFileSync('standar-kompetensi-lulusan.html', html);
  console.log('HTML updated successfully');
} else {
  console.log('Regex did not match HTML sections');
}

// Now append CSS to style.css
let css = fs.readFileSync('style.css', 'utf8');
const newCSS = `
/* SMPH STANDAR KOMPETENSI */
.skl-smph-section {
  padding: 80px 0;
  background: #f8fafc;
}
.smph-komp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
}
.smph-komp-item {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  border-left: 4px solid #3b82f6;
}
.smph-komp-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  border-left-color: #f59e0b;
}
.smph-komp-icon {
  font-size: 24px;
  color: #3b82f6;
}
.smph-komp-item:hover .smph-komp-icon {
  color: #f59e0b;
}
.smph-komp-item p {
  margin: 0;
  font-size: 16px;
  color: #334155;
  font-weight: 500;
  line-height: 1.5;
}
`;

if (!css.includes('.skl-smph-section')) {
  fs.appendFileSync('style.css', newCSS);
  console.log('CSS updated successfully');
} else {
  console.log('CSS already exists');
}
