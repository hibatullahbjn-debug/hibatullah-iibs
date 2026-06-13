const fs = require('fs');
let html = fs.readFileSync('visi-misi-sdih.html', 'utf8');

const oldHtml = `<div class="sdih-visi-card">
        <div class="sdih-visi-icon"><i class="fas fa-star"></i></div>
        <h3>VISI</h3>
        <p>"Menjadi sekolah dasar Islam unggulan yang mencetak generasi Qur'ani, berakhlak mulia, cerdas, dan berwawasan global"</p>
      </div>`;

const newHtml = `<div class="sdih-visi-card">
        <div class="sdih-visi-header">
          <div class="sdih-visi-icon"><i class="fas fa-eye"></i></div>
          <h3>Visi</h3>
        </div>
        <p>"Menjadi sekolah dasar Islam unggulan yang mencetak generasi Qur'ani, berakhlak mulia, cerdas, dan berwawasan global"</p>
      </div>`;

html = html.replace(oldHtml, newHtml);

const oldCss = `.sdih-visi-card{background:linear-gradient(135deg,#1a3a6b 0%,#2563b0 100%);border-radius:20px;padding:48px 40px;text-align:center;margin-bottom:48px;position:relative;overflow:hidden}
.sdih-visi-card::before{content:'';position:absolute;top:-80px;right:-80px;width:300px;height:300px;border-radius:50%;border:1px solid rgba(255,255,255,0.08)}
.sdih-visi-icon{width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;font-size:30px;color:#f0c040;margin:0 auto 20px;border:2px solid rgba(255,255,255,0.2)}
.sdih-visi-card h3{font-size:13px;font-weight:700;color:rgba(255,255,255,0.6);letter-spacing:3px;margin-bottom:16px}
.sdih-visi-card p{font-size:18px;font-weight:700;color:#fff;line-height:1.7;max-width:700px;margin:0 auto;font-style:italic;position:relative;z-index:1}`;

const newCss = `.sdih-visi-card{background:#fff;border-radius:16px;padding:40px;margin-bottom:48px;box-shadow:0 10px 40px rgba(0,0,0,0.05);border-top:4px solid #3a5bd9;text-align:left}
.sdih-visi-header{display:flex;align-items:center;gap:16px;margin-bottom:24px}
.sdih-visi-icon{width:48px;height:48px;border-radius:12px;background:#3a5bd9;display:flex;align-items:center;justify-content:center;font-size:22px;color:#fff;margin:0;border:none}
.sdih-visi-card h3{font-size:22px;font-weight:800;color:#3a5bd9;margin:0;letter-spacing:0}
.sdih-visi-card p{font-size:16px;color:#555;line-height:1.8;max-width:800px;font-weight:400;font-style:normal;margin:0}`;

html = html.replace(oldCss, newCss);

fs.writeFileSync('visi-misi-sdih.html', html);
