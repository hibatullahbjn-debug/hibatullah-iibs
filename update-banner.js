const fs = require('fs');
let html = fs.readFileSync('ppdb.html', 'utf8');

const bannerStart = html.indexOf('<!-- COUNTDOWN SECTION -->');
const bannerEnd = html.indexOf('</section>', bannerStart) + 10;

if (bannerStart > -1 && bannerEnd > -1) {
    const newHtml = `
  <!-- COUNTDOWN SECTION -->
  <section class="ppdb-countdown-banner" style="background: linear-gradient(135deg, #0a1f5c 0%, #1a3a6b 100%); padding: 60px 20px; overflow: hidden; position: relative;">
    <div style="max-width: 1000px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 40px; flex-wrap: wrap;">
      <!-- Gambar Brosur (Kiri) dengan Animasi Mengambang -->
      <div style="flex: 1; min-width: 300px; text-align: center; animation: floatAnim 4s ease-in-out infinite;">
        <img src="assets/images/poster-pmb-elfan.jpeg" alt="Brosur PPDB" style="max-width: 100%; border-radius: 12px; box-shadow: 0 15px 35px rgba(0,0,0,0.3); border: 3px solid rgba(255,255,255,0.2);">
      </div>
      
      <!-- Countdown & Tombol (Kanan) -->
      <div style="flex: 1; min-width: 300px; text-align: center; color: #fff;">
        <h3 style="font-size: 28px; font-weight: 800; margin-bottom: 15px; line-height: 1.3;">Ayo Segera Bergabung!</h3>
        <p style="color: rgba(255,255,255,0.8); margin-bottom: 25px;">Kuota sangat terbatas. Pastikan putra/putri Anda mendapatkan kursi di Pesantren Hibatullah IIBS sebelum waktu pendaftaran berakhir.</p>
        
        <div class="ppdb-countdown-wrap" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 20px; backdrop-filter: blur(8px); display: inline-block;">
          <div class="ppdb-countdown-title" style="font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.9); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px;"><i class="far fa-clock"></i> Waktu Tersisa Pendaftaran Gel. 1</div>
          <div class="ppdb-countdown-boxes" style="display: flex; gap: 15px; justify-content: center;" id="ppdbCountdown">
            <div class="pc-box" style="background: rgba(0,0,0,0.3); border-radius: 8px; min-width: 65px; padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);">
              <span id="cd-days" style="display: block; font-size: 28px; font-weight: 800; line-height: 1; margin-bottom: 6px;">00</span><small style="display: block; font-size: 11px; color: rgba(255,255,255,0.6); text-transform: uppercase; font-weight: 600;">Hari</small>
            </div>
            <div class="pc-box" style="background: rgba(0,0,0,0.3); border-radius: 8px; min-width: 65px; padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);">
              <span id="cd-hours" style="display: block; font-size: 28px; font-weight: 800; line-height: 1; margin-bottom: 6px;">00</span><small style="display: block; font-size: 11px; color: rgba(255,255,255,0.6); text-transform: uppercase; font-weight: 600;">Jam</small>
            </div>
            <div class="pc-box" style="background: rgba(0,0,0,0.3); border-radius: 8px; min-width: 65px; padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);">
              <span id="cd-mins" style="display: block; font-size: 28px; font-weight: 800; line-height: 1; margin-bottom: 6px;">00</span><small style="display: block; font-size: 11px; color: rgba(255,255,255,0.6); text-transform: uppercase; font-weight: 600;">Menit</small>
            </div>
            <div class="pc-box" style="background: rgba(0,0,0,0.3); border-radius: 8px; min-width: 65px; padding: 12px; text-align: center; border: 1px solid rgba(255,255,255,0.1);">
              <span id="cd-secs" style="display: block; font-size: 28px; font-weight: 800; line-height: 1; margin-bottom: 6px;">00</span><small style="display: block; font-size: 11px; color: rgba(255,255,255,0.6); text-transform: uppercase; font-weight: 600;">Detik</small>
            </div>
          </div>
        </div>
        
        <div style="margin-top: 30px;">
          <a href="https://ppdb.hibatullah.sch.id/formulir" target="_blank" class="ph-btn-primary" style="display:inline-flex; align-items:center; gap:8px; background:#fff; color:#1a3a6b; font-size:15px; font-weight:700; padding:15px 35px; border-radius:8px; text-decoration:none; box-shadow: 0 4px 15px rgba(255,255,255,0.2); transition: transform 0.2s;"><i class="fas fa-rocket"></i> Daftar Sekarang</a>
        </div>
      </div>
    </div>
    <style>
      @keyframes floatAnim {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
      .ph-btn-primary:hover { transform: translateY(-3px) scale(1.02); }
    </style>
  </section>`;
    
    html = html.substring(0, bannerStart) + newHtml + html.substring(bannerEnd);
    fs.writeFileSync('ppdb.html', html);
    console.log('Banner updated with image and animation!');
} else {
    console.log('Banner section not found');
}
