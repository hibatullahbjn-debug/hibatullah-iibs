const fs = require('fs');

// 1. UPDATE HTML
let html = fs.readFileSync('ppdb.html', 'utf8');

const oldHtmlStart = html.indexOf('<section class="ppdb-lokasi">');
const oldHtmlEnd = html.indexOf('</section>', oldHtmlStart) + 10;
const oldHtml = html.substring(oldHtmlStart, oldHtmlEnd);

const newHtml = `<section class="ppdb-lokasi">
    <div class="lokasi-map-bg">
      <iframe src="https://maps.google.com/maps?q=-7.1340806,111.6243778&z=17&hl=id&output=embed" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Peta Lokasi Hibatullah IIBS"></iframe>
      <div class="lokasi-overlay"></div>
    </div>
    <div class="ppdb-sec-inner">
      <div class="lokasi-glass-panel">
        <div class="ppdb-sec-label" style="justify-content: flex-start; margin-bottom: 12px;"><span></span>LOKASI KAMI<span></span></div>
        <h2 class="ppdb-sec-title" style="text-align: left; margin-bottom: 32px;">Lokasi <span style="color:#ff7b00;">Hibatullah IIBS</span></h2>
        
        <div class="lokasi-info-wrap">
          <div class="lokasi-info-item"><div class="lii-icon"><i class="fas fa-map-marker-alt"></i></div><div><strong>Alamat Lengkap</strong><p>Jl. Wonosari, Ds. Sambeng, Kec. Kasiman,<br>Kab. Bojonegoro, Jawa Timur</p></div></div>
          <div class="lokasi-info-item"><div class="lii-icon"><i class="fas fa-crosshairs"></i></div><div><strong>Koordinat</strong><p>7°08'02.69"S 111°37'27.76"E</p></div></div>
          <div class="lokasi-info-item"><div class="lii-icon"><i class="fas fa-phone"></i></div><div><strong>Hubungi Kami</strong><p><a href="https://wa.me/6282262263434">0822 6226 3434</a></p></div></div>
          
          <div class="lokasi-btns">
            <a href="https://www.google.com/maps?q=-7.1340806,111.6243778" target="_blank" rel="noopener" class="lokasi-btn-maps"><i class="fas fa-map-marker-alt"></i> Buka di Google Maps</a>
            <a href="https://wa.me/6282262263434" class="lokasi-btn-wa"><i class="fab fa-whatsapp"></i> Chat via WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

html = html.replace(oldHtml, newHtml);
fs.writeFileSync('ppdb.html', html);

// 2. UPDATE CSS
let css = fs.readFileSync('ppdb.css', 'utf8');

// Strip out the previous lokas CSS
const cssStart = css.indexOf('/* ===========================\n   LOKASI\n=========================== */');
const footerStart = css.indexOf('/* ===========================\n   FOOTER\n=========================== */');
if (cssStart > -1 && footerStart > -1) {
    const oldCss = css.substring(cssStart, footerStart);
    const newCss = `/* ===========================
   LOKASI - ULTRA MODERN MAP BACKGROUND
=========================== */
.ppdb-lokasi {
  position: relative;
  width: 100%;
  min-height: 700px;
  overflow: hidden;
  background: #f0f4f8;
}

.lokasi-map-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.lokasi-map-bg iframe {
  width: 100%;
  height: 100%;
  border: none;
  filter: grayscale(20%) contrast(1.1);
}

.lokasi-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 35%, rgba(255,255,255,0.1) 100%);
  z-index: 2;
  pointer-events: none;
}

.ppdb-lokasi .ppdb-sec-inner {
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;
  align-items: center;
  min-height: 700px;
}

.lokasi-glass-panel {
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
}

.lokasi-info-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.lokasi-info-item {
  background: #fff;
  border-radius: 16px;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border: 1px solid rgba(26,58,107,0.06);
  box-shadow: 0 10px 25px rgba(13,33,73,0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.lokasi-info-item:hover {
  transform: translateX(5px);
  box-shadow: 0 15px 35px rgba(13,33,73,0.08);
  border-color: #ff7b00;
}

.lii-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #fff1e5;
  color: #ff7b00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.lokasi-info-item strong {
  font-size: 14px;
  font-weight: 800;
  color: #1a3a6b;
  display: block;
  margin-bottom: 4px;
}

.lokasi-info-item p {
  font-size: 13px;
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.lokasi-info-item p a { color: #25d366; font-weight: 700; }
.lokasi-info-item p a:hover { text-decoration: underline; }

.lokasi-btns { display: flex; flex-direction: column; gap: 12px; margin-top: 10px; }

.lokasi-btn-maps, .lokasi-btn-wa {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  color: #fff; font-size: 14px; font-weight: 700;
  padding: 14px; border-radius: 14px; transition: all 0.3s ease;
  text-decoration: none; border: none;
}
.lokasi-btn-maps {
  background: linear-gradient(135deg, #1a56db, #0d2149);
  box-shadow: 0 8px 20px rgba(26,86,219,0.25);
}
.lokasi-btn-wa {
  background: linear-gradient(135deg, #25d366, #1da851);
  box-shadow: 0 8px 20px rgba(37,211,102,0.25);
}
.lokasi-btn-maps:hover {
  transform: translateY(-3px); box-shadow: 0 12px 25px rgba(26,86,219,0.35);
}
.lokasi-btn-wa:hover {
  transform: translateY(-3px); box-shadow: 0 12px 25px rgba(37,211,102,0.35);
}

@media (max-width: 900px) {
  .lokasi-overlay {
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.6) 100%);
  }
  .lokasi-glass-panel { max-width: 100%; }
}
@media (max-width: 480px) {
  .lokasi-glass-panel { padding: 24px; }
  .ppdb-lokasi .ppdb-sec-inner { padding: 40px 16px; }
}

`;
    css = css.replace(oldCss, newCss);
    
    // Also remove the old premium / neobrutalist block if it's still at the bottom
    const premiumStart = css.indexOf('/* PREMIUM MODERN UI UPGRADES FOR LOKASI */');
    if (premiumStart > -1) {
        css = css.substring(0, premiumStart);
    }
    
    fs.writeFileSync('ppdb.css', css);
    console.log('Successfully upgraded Lokasi UI/UX to Ultra Modern!');
} else {
    console.log('Error finding CSS block to replace.');
}
