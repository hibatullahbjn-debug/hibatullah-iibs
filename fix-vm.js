const fs = require('fs');
let html = fs.readFileSync('visi-misi-sdih.html', 'utf8');

// The HTML block to replace: from <!-- VISI & MISI SECTION --> down to </section>
const oldHtmlSection = `  <!-- VISI & MISI SECTION -->
  <section class="sdih-visi-section">
    <div class="sdih-sec-inner">
      <div class="sdih-sec-label"><span></span> VISI SEKOLAH <span></span></div>
      <h2 class="sdih-sec-title">Visi <span>SMP Hibatullah</span></h2>
      <p class="sdih-sec-sub">Cita-cita besar yang menjadi arah dan tujuan pendidikan kami</p>

      <div class="sdih-visi-card">
        <div class="sdih-visi-header">
          <div class="sdih-visi-icon"><i class="fas fa-eye"></i></div>
          <h3>Visi</h3>
        </div>
        <p>"Menjadi sekolah dasar Islam unggulan yang mencetak generasi Qur'ani, berakhlak mulia, cerdas, dan berwawasan global"</p>
      </div>

      <div class="sdih-sec-label"><span></span> MISI SEKOLAH <span></span></div>
      <h2 class="sdih-sec-title">Misi <span>SMP Hibatullah</span></h2>
      <p class="sdih-sec-sub">Langkah-langkah nyata dalam mewujudkan visi pendidikan Islam yang unggul</p>

      <div class="sdih-misi-grid">
        <div class="sdih-misi-card">
          <div class="sdih-misi-num">01</div>
          <div>
            <h4>Menyelenggarakan Pendidikan Qur'ani</h4>
            <p>Menyelenggarakan pendidikan Al-Qur'an yang komprehensif melalui program tahfidz, tilawah, dan pemahaman makna Al-Qur'an sejak usia dini dengan metode yang menyenangkan dan terstruktur.</p>
          </div>
        </div>
        <div class="sdih-misi-card">
          <div class="sdih-misi-num">02</div>
          <div>
            <h4>Membentuk Akhlak Mulia</h4>
            <p>Membentuk karakter dan akhlak mulia siswa berdasarkan nilai-nilai Islam melalui keteladanan, pembiasaan, dan lingkungan sekolah yang kondusif dan Islami dalam setiap aspek kehidupan.</p>
          </div>
        </div>
        <div class="sdih-misi-card">
          <div class="sdih-misi-num">03</div>
          <div>
            <h4>Mengintegrasikan Kurikulum Nasional &amp; Pesantren</h4>
            <p>Mengintegrasikan kurikulum nasional dengan kurikulum pesantren secara harmonis sehingga siswa memiliki kompetensi akademik yang kuat sekaligus pemahaman agama yang mendalam.</p>
          </div>
        </div>
        <div class="sdih-misi-card">
          <div class="sdih-misi-num">04</div>
          <div>
            <h4>Mengembangkan Potensi dan Bakat Siswa</h4>
            <p>Mengembangkan potensi, bakat, dan minat setiap siswa melalui program talenta yang beragam, mulai dari seni, olahraga, sains, bahasa, hingga kewirausahaan berbasis nilai Islami.</p>
          </div>
        </div>
        <div class="sdih-misi-card">
          <div class="sdih-misi-num">05</div>
          <div>
            <h4>Membangun Kemampuan Bahasa Internasional</h4>
            <p>Membangun kemampuan komunikasi dalam bahasa Arab dan bahasa Inggris sebagai bekal siswa untuk berwawasan global dan mampu bersaing di tingkat nasional maupun internasional.</p>
          </div>
        </div>
        <div class="sdih-misi-card">
          <div class="sdih-misi-num">06</div>
          <div>
            <h4>Menciptakan Lingkungan Belajar yang Inovatif</h4>
            <p>Menciptakan lingkungan belajar yang inovatif, menyenangkan, dan berbasis teknologi modern dengan tetap menjunjung tinggi nilai-nilai Islam sebagai landasan seluruh proses pembelajaran.</p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const newHtmlSection = `  <!-- VISI & MISI SECTION -->
  <section class="sdih-visi-section">
    <div class="sdih-sec-inner">
      <div class="sdih-vm-container">
      
        <!-- VISI CARD -->
        <div class="sdih-visi-card">
          <div class="sdih-visi-header">
            <div class="sdih-visi-icon"><i class="fas fa-eye"></i></div>
            <h3>Visi</h3>
          </div>
          <p>"Menjadi sekolah dasar Islam unggulan yang mencetak generasi Qur'ani, berakhlak mulia, cerdas, dan berwawasan global"</p>
        </div>

        <!-- MISI CARD -->
        <div class="sdih-misi-card-single">
          <div class="sdih-misi-header">
            <div class="sdih-misi-icon"><i class="fas fa-bullseye"></i></div>
            <h3>Misi</h3>
          </div>
          <ul class="sdih-misi-list">
            <li>Menyelenggarakan pendidikan Al-Qur'an yang komprehensif melalui program tahfidz, tilawah, dan pemahaman makna Al-Qur'an sejak usia dini dengan metode yang menyenangkan dan terstruktur.</li>
            <li>Membentuk karakter dan akhlak mulia siswa berdasarkan nilai-nilai Islam melalui keteladanan, pembiasaan, dan lingkungan sekolah yang kondusif dan Islami dalam setiap aspek kehidupan.</li>
            <li>Mengintegrasikan kurikulum nasional dengan kurikulum pesantren secara harmonis sehingga siswa memiliki kompetensi akademik yang kuat sekaligus pemahaman agama yang mendalam.</li>
            <li>Mengembangkan potensi, bakat, dan minat setiap siswa melalui program talenta yang beragam, mulai dari seni, olahraga, sains, bahasa, hingga kewirausahaan berbasis nilai Islami.</li>
            <li>Membangun kemampuan komunikasi dalam bahasa Arab dan bahasa Inggris sebagai bekal siswa untuk berwawasan global dan mampu bersaing di tingkat nasional maupun internasional.</li>
            <li>Menciptakan lingkungan belajar yang inovatif, menyenangkan, dan berbasis teknologi modern dengan tetap menjunjung tinggi nilai-nilai Islam sebagai landasan seluruh proses pembelajaran.</li>
          </ul>
        </div>
        
      </div>
    </div>
  </section>`;

// Replace HTML
html = html.replace(oldHtmlSection, newHtmlSection);

// We need to inject the CSS for sdih-vm-container and sdih-misi-card-single before </style>
const cssToInject = `
.sdih-vm-container { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 48px; }
.sdih-visi-card { margin-bottom: 0 !important; }
.sdih-misi-card-single { background: #fff; border-radius: 16px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border-top: 4px solid #f59e0b; text-align: left; }
.sdih-misi-header { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
.sdih-misi-icon { width: 48px; height: 48px; border-radius: 12px; background: #f59e0b; display: flex; align-items: center; justify-content: center; font-size: 22px; color: #fff; }
.sdih-misi-card-single h3 { font-size: 22px; font-weight: 800; color: #f59e0b; margin: 0; }
.sdih-misi-list { list-style: none; padding: 0; margin: 0; }
.sdih-misi-list li { font-size: 14px; color: #555; line-height: 1.8; margin-bottom: 16px; position: relative; padding-left: 24px; }
.sdih-misi-list li::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; background: #f59e0b; border-radius: 50%; }
@media(max-width: 768px) { .sdih-vm-container { grid-template-columns: 1fr; } }
`;

html = html.replace('</style>', cssToInject + '\n</style>');

fs.writeFileSync('visi-misi-sdih.html', html);
