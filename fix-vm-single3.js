const fs = require('fs');
let html = fs.readFileSync('visi-misi-sdih.html', 'utf8');

const oldHtmlSection = '      <div class="sdih-vm-container">';
const endOfGrid = '      </div>\r\n    </div>\r\n  </section>';

const startIndex = html.indexOf(oldHtmlSection);
const endIndex = html.indexOf('  <!-- NILAI-NILAI SECTION -->');

if (startIndex !== -1 && endIndex !== -1) {
  const newHtml = '      <div class="sdih-sec-label"><span></span> VISI & MISI <span></span></div>\r\n' +
'      <h2 class="sdih-sec-title">Visi & Misi <span>SMP Hibatullah</span></h2>\r\n' +
'      <p class="sdih-sec-sub">Fondasi utama dalam mencetak generasi Qur\\'ani yang berakhlak mulia</p>\r\n' +
'\r\n' +
'      <div class="sdih-vm-single-card">\r\n' +
'        <!-- VISI -->\r\n' +
'        <div class="sdih-vm-part">\r\n' +
'          <div class="sdih-visi-header">\r\n' +
'            <div class="sdih-visi-icon"><i class="fas fa-eye"></i></div>\r\n' +
'            <h3>Visi</h3>\r\n' +
'          </div>\r\n' +
'          <p class="sdih-visi-text">"Menjadi sekolah dasar Islam unggulan yang mencetak generasi Qur\\'ani, berakhlak mulia, cerdas, dan berwawasan global"</p>\r\n' +
'        </div>\r\n' +
'\r\n' +
'        <hr class="sdih-vm-divider">\r\n' +
'\r\n' +
'        <!-- MISI -->\r\n' +
'        <div class="sdih-vm-part">\r\n' +
'          <div class="sdih-misi-header">\r\n' +
'            <div class="sdih-misi-icon"><i class="fas fa-bullseye"></i></div>\r\n' +
'            <h3>Misi</h3>\r\n' +
'          </div>\r\n' +
'          <ul class="sdih-misi-list">\r\n' +
'            <li>Menyelenggarakan pendidikan Al-Qur\\'an yang komprehensif melalui program tahfidz, tilawah, dan pemahaman makna Al-Qur\\'an sejak usia dini dengan metode yang menyenangkan dan terstruktur.</li>\r\n' +
'            <li>Membentuk karakter dan akhlak mulia siswa berdasarkan nilai-nilai Islam melalui keteladanan, pembiasaan, dan lingkungan sekolah yang kondusif dan Islami dalam setiap aspek kehidupan.</li>\r\n' +
'            <li>Mengintegrasikan kurikulum nasional dengan kurikulum pesantren secara harmonis sehingga siswa memiliki kompetensi akademik yang kuat sekaligus pemahaman agama yang mendalam.</li>\r\n' +
'            <li>Mengembangkan potensi, bakat, dan minat setiap siswa melalui program talenta yang beragam, mulai dari seni, olahraga, sains, bahasa, hingga kewirausahaan berbasis nilai Islami.</li>\r\n' +
'            <li>Membangun kemampuan komunikasi dalam bahasa Arab dan bahasa Inggris sebagai bekal siswa untuk berwawasan global dan mampu bersaing di tingkat nasional maupun internasional.</li>\r\n' +
'            <li>Menciptakan lingkungan belajar yang inovatif, menyenangkan, dan berbasis teknologi modern dengan tetap menjunjung tinggi nilai-nilai Islam sebagai landasan seluruh proses pembelajaran.</li>\r\n' +
'          </ul>\r\n' +
'        </div>\r\n' +
'      </div>\r\n' +
'    </div>\r\n' +
'  </section>\r\n\r\n';

  html = html.substring(0, html.indexOf('      <div class="sdih-sec-label"><span></span> VISI SEKOLAH <span></span></div>')) + newHtml + html.substring(endIndex);

  // Now inject the CSS rules
  const cssInjection = '\n.sdih-vm-single-card { background: #fff; border-radius: 16px; padding: 40px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border-top: 4px solid #3a5bd9; text-align: left; margin-bottom: 48px; }\n' +
'.sdih-vm-divider { border: 0; height: 1px; background: #eee; margin: 32px 0; }\n' +
'.sdih-visi-header, .sdih-misi-header { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }\n' +
'.sdih-visi-icon { width: 48px; height: 48px; border-radius: 12px; background: #3a5bd9; display: flex; align-items: center; justify-content: center; font-size: 22px; color: #fff; }\n' +
'.sdih-misi-icon { width: 48px; height: 48px; border-radius: 12px; background: #f59e0b; display: flex; align-items: center; justify-content: center; font-size: 22px; color: #fff; }\n' +
'.sdih-visi-header h3 { font-size: 22px; font-weight: 800; color: #3a5bd9; margin: 0; }\n' +
'.sdih-misi-header h3 { font-size: 22px; font-weight: 800; color: #f59e0b; margin: 0; }\n' +
'.sdih-visi-text { font-size: 16px; color: #555; line-height: 1.8; max-width: none; font-weight: 400; margin: 0; }\n' +
'.sdih-misi-list { list-style: none; padding: 0; margin: 0; }\n' +
'.sdih-misi-list li { font-size: 14px; color: #555; line-height: 1.8; margin-bottom: 16px; position: relative; padding-left: 24px; }\n' +
'.sdih-misi-list li::before { content: ""; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; background: #f59e0b; border-radius: 50%; }\n';
  
  html = html.replace('</style>', cssInjection + '</style>');

  fs.writeFileSync('visi-misi-sdih.html', html);
  console.log("Success");
} else {
  console.log("Not found");
}
