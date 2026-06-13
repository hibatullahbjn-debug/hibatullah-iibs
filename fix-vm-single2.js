const fs = require('fs');

let html = fs.readFileSync('visi-misi-sdih.html', 'utf8');

const startTag = '<div class="sdih-vm-container">'; // The container we created previously
let startIndex = html.indexOf(startTag);

if (startIndex === -1) {
  // Try to find the original
  startIndex = html.indexOf('<div class="sdih-visi-card">');
}

let endIndex = html.indexOf('<!-- NILAI-NILAI SECTION -->');

if (startIndex !== -1 && endIndex !== -1) {
  const newContent = `<div class="sdih-vm-single-card">
        <!-- VISI -->
        <div class="sdih-vm-part">
          <div class="sdih-visi-header">
            <div class="sdih-visi-icon"><i class="fas fa-eye"></i></div>
            <h3>Visi</h3>
          </div>
          <p class="sdih-visi-text">"Menjadi sekolah dasar Islam unggulan yang mencetak generasi Qur'ani, berakhlak mulia, cerdas, dan berwawasan global"</p>
        </div>

        <hr class="sdih-vm-divider">

        <!-- MISI -->
        <div class="sdih-vm-part">
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
  </section>

  `;
  
  html = html.substring(0, startIndex) + newContent + html.substring(endIndex);
}

// Rename title
const regexOldTitle = /<div class="sdih-sec-label"><span><\/span> VISI SEKOLAH <span><\/span><\/div>[\s\S]*?<p class="sdih-sec-sub">Cita-cita besar yang menjadi arah dan tujuan pendidikan kami<\/p>/g;
html = html.replace(regexOldTitle, \`<div class="sdih-sec-label"><span></span> VISI & MISI <span></span></div>
      <h2 class="sdih-sec-title">Visi & Misi <span>SMP Hibatullah</span></h2>
      <p class="sdih-sec-sub">Fondasi utama dalam mencetak generasi Qur'ani yang berakhlak mulia</p>\`);

// Add CSS
const cssToInject = \`
.sdih-vm-single-card { background: #fff; border-radius: 16px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border-top: 4px solid #3a5bd9; text-align: left; margin-bottom: 48px; }
.sdih-vm-divider { border: 0; height: 1px; background: #eee; margin: 32px 0; }
.sdih-visi-header, .sdih-misi-header { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
.sdih-visi-icon { width: 48px; height: 48px; border-radius: 12px; background: #3a5bd9; display: flex; align-items: center; justify-content: center; font-size: 22px; color: #fff; }
.sdih-misi-icon { width: 48px; height: 48px; border-radius: 12px; background: #f59e0b; display: flex; align-items: center; justify-content: center; font-size: 22px; color: #fff; }
.sdih-visi-header h3 { font-size: 22px; font-weight: 800; color: #3a5bd9; margin: 0; }
.sdih-misi-header h3 { font-size: 22px; font-weight: 800; color: #f59e0b; margin: 0; }
.sdih-visi-text { font-size: 16px; color: #555; line-height: 1.8; max-width: none; font-weight: 400; margin: 0; }
.sdih-misi-list { list-style: none; padding: 0; margin: 0; }
.sdih-misi-list li { font-size: 14px; color: #555; line-height: 1.8; margin-bottom: 16px; position: relative; padding-left: 24px; }
.sdih-misi-list li::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; background: #f59e0b; border-radius: 50%; }
\`;

html = html.replace('</style>', cssToInject + '\\n</style>');

fs.writeFileSync('visi-misi-sdih.html', html);
