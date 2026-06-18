const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const smpCSS = `
/* --- SMP UI UPGRADE --- */
/* Program Utama */
.smp-utama-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
  margin: 40px auto 0;
}
.smp-utama-item {
  display: flex;
  align-items: center;
  gap: 24px;
  background: #fff;
  padding: 24px 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  transition: all 0.3s ease;
  border-left: 4px solid #3b82f6;
}
.smp-utama-item:hover {
  transform: translateX(8px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.1);
  border-left-color: #f59e0b;
}
.smp-utama-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #eff6ff;
  color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}
.smp-utama-item:hover .smp-utama-icon {
  background: #fef3c7;
  color: #f59e0b;
}
.smp-utama-text {
  font-size: 17px;
  color: #334155;
  font-weight: 500;
  line-height: 1.6;
}

/* Program Unggulan */
.smp-unggulan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 40px;
}
.smp-unggulan-card {
  position: relative;
  border-radius: 20px;
  padding: 40px 32px;
  overflow: hidden;
  color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  z-index: 1;
}
.smp-unggulan-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}
.smp-unggulan-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0));
  z-index: -1;
}
.smp-unggulan-bg-icon {
  position: absolute;
  bottom: -20px;
  right: -20px;
  font-size: 140px;
  color: rgba(255,255,255,0.12);
  z-index: -1;
  transform: rotate(-15deg);
  transition: transform 0.5s ease;
}
.smp-unggulan-card:hover .smp-unggulan-bg-icon {
  transform: rotate(0deg) scale(1.1);
}
.smp-unggulan-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: rgba(255,255,255,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 24px;
  backdrop-filter: blur(4px);
}
.smp-unggulan-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  margin: 0;
}
/* Colors */
.card-tahsin { background: linear-gradient(135deg, #059669, #10b981); }
.card-camp { background: linear-gradient(135deg, #2563eb, #3b82f6); }
.card-leader { background: linear-gradient(135deg, #7c3aed, #8b5cf6); }
.card-public { background: linear-gradient(135deg, #db2777, #ec4899); }
.card-entrepreneur { background: linear-gradient(135deg, #d97706, #f59e0b); }

/* Program Tambahan */
.smp-tambahan-section {
  background: #0f172a;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}
.smp-tambahan-section .skl-sec-title {
  color: #fff;
}
.smp-tambahan-section .skl-sec-sub {
  color: rgba(255,255,255,0.6);
}
.smp-tambahan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
}
.smp-tambahan-pill {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
}
.smp-tambahan-pill:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(59, 130, 246, 0.5);
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2), inset 0 0 15px rgba(59, 130, 246, 0.2);
}
.smp-tambahan-pill-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.15);
  color: #60a5fa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
  transition: all 0.3s ease;
}
.smp-tambahan-pill:hover .smp-tambahan-pill-icon {
  background: #3b82f6;
  color: #fff;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.6);
}
.smp-tambahan-pill-text {
  font-size: 16px;
  font-weight: 500;
  color: #e2e8f0;
}
@media (max-width: 768px) {
  .smp-utama-item {
    flex-direction: column;
    text-align: center;
    padding: 24px;
    border-left: none;
    border-top: 4px solid #3b82f6;
  }
  .smp-utama-item:hover {
    transform: translateY(-8px);
    border-top-color: #f59e0b;
  }
  .smp-unggulan-grid {
    grid-template-columns: 1fr;
  }
}
`;

if (!css.includes('.smp-utama-list')) {
  fs.appendFileSync('style.css', smpCSS);
  console.log('Appended SMP CSS to style.css');
}

// Read jenjang-smp.html
let html = fs.readFileSync('jenjang-smp.html', 'utf8');

// Fix the Hero section pills
html = html.replace(/<div class="skl-hero-pills">[\s\S]*?<\/div>/, `<div class="skl-hero-pills">
        <span><i class="fas fa-check-circle"></i> Program Pendidikan</span>
        <span><i class="fas fa-check-circle"></i> Program Unggulan</span>
        <span><i class="fas fa-check-circle"></i> Program Tambahan</span>
      </div>`);

// Replace the content section
const regex = /<!-- PROGRAM PENDIDIKAN -->[\s\S]*?<!-- FOOTER -->/;

const newContent = `<!-- PROGRAM PENDIDIKAN -->
  <section class="skl-smph-section" style="background: #f8fafc; padding-bottom: 60px;">
    <div class="skl-sec-inner">
      <div class="skl-sec-label"><span></span> SMP HIBATULLAH <span></span></div>
      <h2 class="skl-sec-title">Program Pendidikan <span>Utama</span></h2>
      <p class="skl-sec-sub">Fondasi dasar yang diberikan selama masa pembelajaran di SMP Hibatullah</p>
      
      <div class="smp-utama-list">
        <div class="smp-utama-item">
          <div class="smp-utama-icon"><i class="fas fa-calendar-alt"></i></div>
          <div class="smp-utama-text">Program pendidikan selama 3 tahun</div>
        </div>
        <div class="smp-utama-item">
          <div class="smp-utama-icon"><i class="fas fa-book-open"></i></div>
          <div class="smp-utama-text">Pendidikan berbasis Ta'dib (penanaman adab dan akhlak Islami)</div>
        </div>
        <div class="smp-utama-item">
          <div class="smp-utama-icon"><i class="fas fa-clock"></i></div>
          <div class="smp-utama-text">Pembiasaan disiplin</div>
        </div>
        <div class="smp-utama-item">
          <div class="smp-utama-icon"><i class="fas fa-seedling"></i></div>
          <div class="smp-utama-text">Penanaman ekosistem dan semangat belajar yang berkelanjutan di setiap waktu dan tempat.</div>
        </div>
        <div class="smp-utama-item">
          <div class="smp-utama-icon"><i class="fas fa-language"></i></div>
          <div class="smp-utama-text">Penanaman kemampuan berbahasa Arab dan Inggris serta keterampilan membaca kitab dasar.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM UNGGULAN -->
  <section class="skl-smph-section" style="background: #ffffff; padding-top: 60px; padding-bottom: 80px;">
    <div class="skl-sec-inner">
      <div class="skl-sec-label"><span></span> KEUNGGULAN <span></span></div>
      <h2 class="skl-sec-title">Program <span>Unggulan</span></h2>
      <p class="skl-sec-sub">Program khusus yang membedakan kualitas santri SMP Hibatullah</p>
      
      <div class="smp-unggulan-grid">
        <div class="smp-unggulan-card card-tahsin">
          <i class="fas fa-quran smp-unggulan-bg-icon"></i>
          <div class="smp-unggulan-icon"><i class="fas fa-quran"></i></div>
          <h3 class="smp-unggulan-title">Tahsin dan Tahfizh Al Quran berstandar sanad</h3>
        </div>
        <div class="smp-unggulan-card card-camp">
          <i class="fas fa-campground smp-unggulan-bg-icon"></i>
          <div class="smp-unggulan-icon"><i class="fas fa-campground"></i></div>
          <h3 class="smp-unggulan-title">Camp Bahasa Arab & Inggris</h3>
        </div>
        <div class="smp-unggulan-card card-leader">
          <i class="fas fa-users smp-unggulan-bg-icon"></i>
          <div class="smp-unggulan-icon"><i class="fas fa-users"></i></div>
          <h3 class="smp-unggulan-title">Leadership</h3>
        </div>
        <div class="smp-unggulan-card card-public">
          <i class="fas fa-microphone smp-unggulan-bg-icon"></i>
          <div class="smp-unggulan-icon"><i class="fas fa-microphone"></i></div>
          <h3 class="smp-unggulan-title">Public Speaking</h3>
        </div>
        <div class="smp-unggulan-card card-entrepreneur">
          <i class="fas fa-chart-line smp-unggulan-bg-icon"></i>
          <div class="smp-unggulan-icon"><i class="fas fa-chart-line"></i></div>
          <h3 class="smp-unggulan-title">Entrepreneurship</h3>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM TAMBAHAN -->
  <section class="smp-tambahan-section">
    <div class="skl-sec-inner">
      <div class="skl-sec-label white"><span></span> EKSTRAKULIKULER <span></span></div>
      <h2 class="skl-sec-title">Program <span>Tambahan</span></h2>
      <p class="skl-sec-sub">Aktivitas pendukung untuk mengembangkan minat dan bakat santri</p>
      
      <div class="smp-tambahan-grid">
        <div class="smp-tambahan-pill">
          <div class="smp-tambahan-pill-icon"><i class="fas fa-bus"></i></div>
          <div class="smp-tambahan-pill-text">Rihlah Ilmiah</div>
        </div>
        <div class="smp-tambahan-pill">
          <div class="smp-tambahan-pill-icon"><i class="fas fa-plane-departure"></i></div>
          <div class="smp-tambahan-pill-text">Study Abroad</div>
        </div>
        <div class="smp-tambahan-pill">
          <div class="smp-tambahan-pill-icon"><i class="fas fa-hands-helping"></i></div>
          <div class="smp-tambahan-pill-text">Baksos Ramadhan</div>
        </div>
        <div class="smp-tambahan-pill">
          <div class="smp-tambahan-pill-icon"><i class="fas fa-cow"></i></div>
          <div class="smp-tambahan-pill-text">Penyembelihan hewan Qurban</div>
        </div>
        <div class="smp-tambahan-pill">
          <div class="smp-tambahan-pill-icon"><i class="fas fa-book"></i></div>
          <div class="smp-tambahan-pill-text">Kunjungan ke Islamic Book Fair</div>
        </div>
        <div class="smp-tambahan-pill">
          <div class="smp-tambahan-pill-icon"><i class="fas fa-bullseye"></i></div>
          <div class="smp-tambahan-pill-text">Memanah</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->`;

html = html.replace(regex, newContent);

fs.writeFileSync('jenjang-smp.html', html);
console.log('Updated jenjang-smp.html');
