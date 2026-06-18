const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const kreatifCSS = `
/* --- SMP KREATIF UI UPGRADE --- */
.sec-kreatif-1 { background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); position: relative; overflow: hidden; padding-bottom: 80px;}
.sec-kreatif-1::before { content: ''; position: absolute; width: 400px; height: 400px; background: rgba(59,130,246,0.05); border-radius: 50%; top: -100px; left: -100px; }
.sec-kreatif-2 { background: #ffffff; position: relative; overflow: hidden; padding-top: 80px; padding-bottom: 120px;}
.sec-kreatif-2::before { content: ''; position: absolute; width: 300px; height: 300px; background: rgba(245,158,11,0.05); border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; bottom: -50px; right: -50px; }
.sec-kreatif-3 { background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); position: relative; overflow: hidden; padding-top: 80px; padding-bottom: 120px;}
.sec-kreatif-3::before { content: ''; position: absolute; width: 500px; height: 500px; background: rgba(255,255,255,0.4); border-radius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); }

/* Program Pendidikan Utama: Zig-Zag Timeline */
.kr-utama-container {
  position: relative;
  max-width: 900px;
  margin: 60px auto 0;
  padding: 20px 0;
}
.kr-utama-container::before {
  content: '';
  position: absolute;
  top: 0; bottom: 0; left: 50%;
  width: 4px;
  background: repeating-linear-gradient(to bottom, #cbd5e1 0, #cbd5e1 10px, transparent 10px, transparent 20px);
  transform: translateX(-50%);
}
.kr-utama-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  position: relative;
}
.kr-utama-item:nth-child(even) {
  flex-direction: row-reverse;
}
.kr-utama-content {
  width: 45%;
  background: #fff;
  padding: 30px;
  border-radius: 20px 40px 20px 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  position: relative;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
  font-size: 16px;
  font-weight: 500;
  color: #334155;
  line-height: 1.6;
}
.kr-utama-item:nth-child(even) .kr-utama-content {
  border-radius: 40px 20px 40px 20px;
}
.kr-utama-content:hover {
  transform: translateY(-5px) scale(1.02);
}
.kr-utama-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px; height: 60px;
  background: #fff;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 24px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  z-index: 2;
  transition: all 0.3s ease;
}
.kr-utama-item:nth-child(odd) .kr-utama-icon {
  right: -80px;
}
.kr-utama-item:nth-child(even) .kr-utama-icon {
  left: -80px;
}
.kr-utama-item:nth-child(1) .kr-utama-content:hover { border-color: #3b82f6; }
.kr-utama-item:nth-child(1) .kr-utama-icon { color: #3b82f6; border: 3px solid #3b82f6; }
.kr-utama-item:nth-child(2) .kr-utama-content:hover { border-color: #f59e0b; }
.kr-utama-item:nth-child(2) .kr-utama-icon { color: #f59e0b; border: 3px solid #f59e0b; }
.kr-utama-item:nth-child(3) .kr-utama-content:hover { border-color: #10b981; }
.kr-utama-item:nth-child(3) .kr-utama-icon { color: #10b981; border: 3px solid #10b981; }
.kr-utama-item:nth-child(4) .kr-utama-content:hover { border-color: #8b5cf6; }
.kr-utama-item:nth-child(4) .kr-utama-icon { color: #8b5cf6; border: 3px solid #8b5cf6; }
.kr-utama-item:nth-child(5) .kr-utama-content:hover { border-color: #ec4899; }
.kr-utama-item:nth-child(5) .kr-utama-icon { color: #ec4899; border: 3px solid #ec4899; }

/* Program Unggulan: Staggered Asymmetric Cards (Blobs) */
.kr-unggulan-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;
}
.kr-unggulan-card {
  width: 300px;
  background: #fff;
  border-radius: 40px 10px 40px 10px;
  padding: 40px 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.06);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.kr-unggulan-card:nth-child(even) {
  transform: translateY(30px);
  border-radius: 10px 40px 10px 40px;
}
.kr-unggulan-card:hover {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 25px 45px rgba(0,0,0,0.1);
}
.kr-unggulan-card:nth-child(even):hover {
  transform: translateY(20px) scale(1.05);
}
.kr-unggulan-blob {
  position: absolute;
  top: -20px; left: -20px;
  width: 150px; height: 150px;
  border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  z-index: 0;
  opacity: 0.15;
  transition: all 0.6s ease;
}
.kr-unggulan-card:hover .kr-unggulan-blob {
  transform: scale(1.5) rotate(45deg);
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  opacity: 0.25;
}
.kr-unggulan-icon {
  font-size: 45px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}
.kr-unggulan-title {
  font-size: 18px;
  font-weight: 800;
  color: #1e293b;
  position: relative;
  z-index: 1;
  line-height: 1.4;
}
.kr-card-1 .kr-unggulan-blob { background: #10b981; } .kr-card-1 .kr-unggulan-icon { color: #059669; }
.kr-card-2 .kr-unggulan-blob { background: #3b82f6; } .kr-card-2 .kr-unggulan-icon { color: #2563eb; }
.kr-card-3 .kr-unggulan-blob { background: #8b5cf6; } .kr-card-3 .kr-unggulan-icon { color: #7c3aed; }
.kr-card-4 .kr-unggulan-blob { background: #ec4899; } .kr-card-4 .kr-unggulan-icon { color: #db2777; }
.kr-card-5 .kr-unggulan-blob { background: #f59e0b; } .kr-card-5 .kr-unggulan-icon { color: #d97706; }

/* Program Tambahan: Playful Mosaic/Cloud */
.kr-tambahan-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  max-width: 900px;
  margin: 50px auto 0;
}
.kr-tambahan-pill {
  background: #fff;
  padding: 15px 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 15px;
  color: #334155;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  cursor: default;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 2px solid transparent;
}
.kr-tambahan-pill:nth-child(1) { font-size: 18px; padding: 20px 35px; border-color: #bfdbfe; color: #1e3a8a;}
.kr-tambahan-pill:nth-child(2) { font-size: 15px; padding: 12px 20px; border-color: #fef08a; color: #854d0e;}
.kr-tambahan-pill:nth-child(3) { font-size: 17px; padding: 18px 30px; border-color: #bbf7d0; color: #166534;}
.kr-tambahan-pill:nth-child(4) { font-size: 14px; padding: 10px 18px; border-color: #fbcfe8; color: #9d174d;}
.kr-tambahan-pill:nth-child(5) { font-size: 16px; padding: 15px 25px; border-color: #e9d5ff; color: #581c87;}
.kr-tambahan-pill:nth-child(6) { font-size: 19px; padding: 22px 38px; border-color: #fed7aa; color: #9a3412;}
.kr-tambahan-pill:hover {
  transform: rotate(-3deg) scale(1.1);
  box-shadow: 0 15px 25px rgba(0,0,0,0.12);
  z-index: 10;
}
.kr-tambahan-pill:nth-child(even):hover {
  transform: rotate(3deg) scale(1.1);
}
.kr-tambahan-icon {
  font-size: 1.3em;
}
@media (max-width: 768px) {
  .kr-utama-container::before { left: 30px; }
  .kr-utama-item, .kr-utama-item:nth-child(even) { flex-direction: column; align-items: flex-start; padding-left: 70px; margin-bottom: 30px;}
  .kr-utama-content { width: 100%; border-radius: 20px !important;}
  .kr-utama-item:nth-child(odd) .kr-utama-icon, .kr-utama-item:nth-child(even) .kr-utama-icon { left: 0; right: auto; width: 50px; height: 50px; font-size: 20px;}
  .kr-unggulan-card:nth-child(even) { transform: none; }
  .kr-unggulan-card:nth-child(even):hover { transform: translateY(-10px) scale(1.05); }
}
`;

if (!css.includes('.kr-utama-container')) {
  fs.appendFileSync('style.css', kreatifCSS);
  console.log('Appended Kreatif CSS to style.css');
}

// Update jenjang-smp.html
let html = fs.readFileSync('jenjang-smp.html', 'utf8');

const regex = /<!-- PROGRAM PENDIDIKAN -->[\s\S]*?<!-- FOOTER -->/;

const newContent = `<!-- PROGRAM PENDIDIKAN -->
  <section class="skl-smph-section sec-kreatif-1">
    <div class="skl-sec-inner">
      <div class="skl-sec-label"><span></span> SMP HIBATULLAH <span></span></div>
      <h2 class="skl-sec-title">Program Pendidikan <span>Utama</span></h2>
      <p class="skl-sec-sub">Perjalanan fondasi dasar selama masa pembelajaran di SMP Hibatullah</p>
      
      <div class="kr-utama-container">
        <div class="kr-utama-item">
          <div class="kr-utama-content">Program pendidikan komprehensif yang dirancang secara khusus selama 3 tahun.</div>
          <div class="kr-utama-icon"><i class="fas fa-calendar-alt"></i></div>
        </div>
        <div class="kr-utama-item">
          <div class="kr-utama-content">Pendidikan berbasis Ta'dib, berfokus kuat pada penanaman adab dan akhlak Islami sejak dini.</div>
          <div class="kr-utama-icon"><i class="fas fa-book-open"></i></div>
        </div>
        <div class="kr-utama-item">
          <div class="kr-utama-content">Pembiasaan tata tertib dan disiplin sebagai budaya dasar santri dalam aktivitas sehari-hari.</div>
          <div class="kr-utama-icon"><i class="fas fa-clock"></i></div>
        </div>
        <div class="kr-utama-item">
          <div class="kr-utama-content">Penanaman ekosistem dan semangat belajar yang berkelanjutan di setiap waktu dan tempat.</div>
          <div class="kr-utama-icon"><i class="fas fa-seedling"></i></div>
        </div>
        <div class="kr-utama-item">
          <div class="kr-utama-content">Penanaman kemampuan berbahasa Arab dan Inggris serta keterampilan membaca kitab dasar.</div>
          <div class="kr-utama-icon"><i class="fas fa-language"></i></div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM UNGGULAN -->
  <section class="skl-smph-section sec-kreatif-2">
    <div class="skl-sec-inner">
      <div class="skl-sec-label"><span></span> KEUNGGULAN <span></span></div>
      <h2 class="skl-sec-title">Program <span>Unggulan</span></h2>
      <p class="skl-sec-sub">Program dinamis yang membedakan kualitas santri SMP Hibatullah</p>
      
      <div class="kr-unggulan-grid">
        <div class="kr-unggulan-card kr-card-1">
          <div class="kr-unggulan-blob"></div>
          <div class="kr-unggulan-icon"><i class="fas fa-quran"></i></div>
          <h3 class="kr-unggulan-title">Tahsin dan Tahfizh Al Quran berstandar sanad</h3>
        </div>
        <div class="kr-unggulan-card kr-card-2">
          <div class="kr-unggulan-blob"></div>
          <div class="kr-unggulan-icon"><i class="fas fa-campground"></i></div>
          <h3 class="kr-unggulan-title">Camp Bahasa Arab & Inggris</h3>
        </div>
        <div class="kr-unggulan-card kr-card-3">
          <div class="kr-unggulan-blob"></div>
          <div class="kr-unggulan-icon"><i class="fas fa-users"></i></div>
          <h3 class="kr-unggulan-title">Leadership</h3>
        </div>
        <div class="kr-unggulan-card kr-card-4">
          <div class="kr-unggulan-blob"></div>
          <div class="kr-unggulan-icon"><i class="fas fa-microphone"></i></div>
          <h3 class="kr-unggulan-title">Public Speaking</h3>
        </div>
        <div class="kr-unggulan-card kr-card-5">
          <div class="kr-unggulan-blob"></div>
          <div class="kr-unggulan-icon"><i class="fas fa-chart-line"></i></div>
          <h3 class="kr-unggulan-title">Entrepreneurship</h3>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAM TAMBAHAN -->
  <section class="skl-smph-section sec-kreatif-3">
    <div class="skl-sec-inner">
      <div class="skl-sec-label"><span></span> EKSTRAKULIKULER <span></span></div>
      <h2 class="skl-sec-title">Program <span>Tambahan</span></h2>
      <p class="skl-sec-sub">Aktivitas seru pendukung untuk mengembangkan minat dan bakat santri</p>
      
      <div class="kr-tambahan-container">
        <div class="kr-tambahan-pill">
          <i class="fas fa-bus kr-tambahan-icon"></i> Rihlah Ilmiah
        </div>
        <div class="kr-tambahan-pill">
          <i class="fas fa-plane-departure kr-tambahan-icon"></i> Study Abroad
        </div>
        <div class="kr-tambahan-pill">
          <i class="fas fa-hands-helping kr-tambahan-icon"></i> Baksos Ramadhan
        </div>
        <div class="kr-tambahan-pill">
          <i class="fas fa-cow kr-tambahan-icon"></i> Penyembelihan hewan Qurban
        </div>
        <div class="kr-tambahan-pill">
          <i class="fas fa-book kr-tambahan-icon"></i> Kunjungan ke Islamic Book Fair
        </div>
        <div class="kr-tambahan-pill">
          <i class="fas fa-bullseye kr-tambahan-icon"></i> Memanah
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->`;

html = html.replace(regex, newContent);

fs.writeFileSync('jenjang-smp.html', html);
console.log('Updated jenjang-smp.html with Kreatif design');
