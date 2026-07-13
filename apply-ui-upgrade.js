const fs = require('fs');
let html = fs.readFileSync('ppdb.html', 'utf8');

const bannerStart = html.indexOf('<!-- COUNTDOWN SECTION -->');
const bannerEnd = html.indexOf('</section>', bannerStart) + 10;

if (bannerStart > -1 && bannerEnd > -1) {
    const newHtml = `
  <!-- COUNTDOWN SECTION -->
  <section class="ppdb-countdown-banner" style="position: relative; background: linear-gradient(135deg, #09194f 0%, #173260 100%); padding: 80px 20px; overflow: hidden; font-family: 'Poppins', sans-serif;">
    <!-- Glowing background elements -->
    <div style="position: absolute; width: 300px; height: 300px; background: rgba(126, 184, 247, 0.2); border-radius: 50%; filter: blur(80px); top: -100px; left: -100px; z-index: 0;"></div>
    <div style="position: absolute; width: 400px; height: 400px; background: rgba(240, 192, 64, 0.15); border-radius: 50%; filter: blur(100px); bottom: -150px; right: -100px; z-index: 0;"></div>

    <div style="position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: center; gap: 60px; flex-wrap: wrap;">
      
      <!-- Gambar Brosur (Kiri) dengan Animasi Mengambang -->
      <div style="flex: 1; min-width: 320px; text-align: center; animation: floatAnim 5s ease-in-out infinite;">
        <div style="position: relative; display: inline-block;">
          <div style="position: absolute; inset: -10px; background: linear-gradient(45deg, #f0c040, #ff7e5f); filter: blur(20px); opacity: 0.3; border-radius: 20px; animation: pulseGlow 3s infinite alternate;"></div>
          <img src="assets/images/poster-pmb-elfan.jpeg" alt="Brosur PPDB" style="position: relative; max-width: 100%; border-radius: 16px; box-shadow: 0 25px 50px rgba(0,0,0,0.5); border: 4px solid rgba(255,255,255,0.15); z-index: 2;">
        </div>
      </div>
      
      <!-- Countdown & Tombol (Kanan) -->
      <div style="flex: 1.2; min-width: 320px; text-align: left; color: #fff;">
        <div style="display: inline-block; padding: 6px 16px; background: rgba(240, 192, 64, 0.2); border: 1px solid rgba(240, 192, 64, 0.5); color: #f0c040; border-radius: 30px; font-size: 12px; font-weight: 700; letter-spacing: 1px; margin-bottom: 20px; text-transform: uppercase; box-shadow: 0 4px 15px rgba(240, 192, 64, 0.2);">
          <i class="fas fa-bell" style="margin-right: 6px;"></i> Pendaftaran Segera Ditutup
        </div>
        <h3 style="font-size: 38px; font-weight: 800; margin-bottom: 20px; line-height: 1.2; background: linear-gradient(to right, #ffffff, #b3d4ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          Amankan Kursi<br>Putra-Putri Anda!
        </h3>
        <p style="color: rgba(255,255,255,0.85); font-size: 16px; line-height: 1.7; margin-bottom: 35px; max-width: 90%;">
          Kuota penerimaan santri baru <strong>sangat terbatas</strong>. Jangan lewatkan kesempatan emas untuk mendidik buah hati Anda di lingkungan pesantren bertaraf internasional.
        </p>
        
        <!-- Premium Glassmorphism Countdown -->
        <div class="ppdb-countdown-wrap" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 25px; backdrop-filter: blur(12px); box-shadow: 0 15px 35px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.05); display: inline-block; margin-bottom: 35px;">
          <div class="ppdb-countdown-title" style="font-size: 13px; font-weight: 700; color: #7eb8f7; margin-bottom: 18px; text-transform: uppercase; letter-spacing: 1.5px; display: flex; align-items: center; justify-content: center; gap: 8px;">
            <i class="far fa-clock"></i> Waktu Tersisa Gelombang 1
          </div>
          <div class="ppdb-countdown-boxes" style="display: flex; gap: 12px; justify-content: center;" id="ppdbCountdown">
            <div class="pc-box" style="background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border-radius: 12px; min-width: 75px; padding: 15px 10px; text-align: center; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 20px rgba(0,0,0,0.15);">
              <span id="cd-days" style="display: block; font-size: 32px; font-weight: 800; line-height: 1; margin-bottom: 8px; color: #fff; text-shadow: 0 2px 10px rgba(255,255,255,0.3);">00</span>
              <small style="display: block; font-size: 10px; color: rgba(255,255,255,0.7); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Hari</small>
            </div>
            <div class="pc-box" style="background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border-radius: 12px; min-width: 75px; padding: 15px 10px; text-align: center; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 20px rgba(0,0,0,0.15);">
              <span id="cd-hours" style="display: block; font-size: 32px; font-weight: 800; line-height: 1; margin-bottom: 8px; color: #fff; text-shadow: 0 2px 10px rgba(255,255,255,0.3);">00</span>
              <small style="display: block; font-size: 10px; color: rgba(255,255,255,0.7); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Jam</small>
            </div>
            <div class="pc-box" style="background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border-radius: 12px; min-width: 75px; padding: 15px 10px; text-align: center; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 20px rgba(0,0,0,0.15);">
              <span id="cd-mins" style="display: block; font-size: 32px; font-weight: 800; line-height: 1; margin-bottom: 8px; color: #fff; text-shadow: 0 2px 10px rgba(255,255,255,0.3);">00</span>
              <small style="display: block; font-size: 10px; color: rgba(255,255,255,0.7); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Menit</small>
            </div>
            <div class="pc-box" style="background: linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border-radius: 12px; min-width: 75px; padding: 15px 10px; text-align: center; border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 8px 20px rgba(0,0,0,0.15);">
              <span id="cd-secs" style="display: block; font-size: 32px; font-weight: 800; line-height: 1; margin-bottom: 8px; color: #f0c040; text-shadow: 0 2px 10px rgba(240,192,64,0.4);">00</span>
              <small style="display: block; font-size: 10px; color: rgba(255,255,255,0.7); text-transform: uppercase; font-weight: 700; letter-spacing: 1px;">Detik</small>
            </div>
          </div>
        </div>
        
        <!-- Premium Call to Action -->
        <div>
          <a href="https://ppdb.hibatullah.sch.id/formulir" target="_blank" class="ph-btn-premium">
            <span style="position: relative; z-index: 2; display: flex; align-items: center; gap: 10px;">
              Daftar Sekarang <i class="fas fa-arrow-right btn-arrow"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
    <style>
      @keyframes floatAnim {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
      }
      @keyframes pulseGlow {
        0% { opacity: 0.3; transform: scale(1); }
        100% { opacity: 0.6; transform: scale(1.05); }
      }
      .ph-btn-premium {
        position: relative;
        display: inline-flex;
        align-items: center;
        background: linear-gradient(135deg, #f0c040, #f7a01a);
        color: #1a3a6b !important;
        font-size: 16px;
        font-weight: 800;
        padding: 16px 40px;
        border-radius: 50px;
        text-decoration: none;
        overflow: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 10px 25px rgba(240, 192, 64, 0.4);
      }
      .ph-btn-premium::before {
        content: '';
        position: absolute;
        top: 0; left: -100%;
        width: 100%; height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        transition: all 0.5s ease;
        z-index: 1;
      }
      .ph-btn-premium:hover {
        transform: translateY(-4px);
        box-shadow: 0 15px 35px rgba(240, 192, 64, 0.6);
      }
      .ph-btn-premium:hover::before {
        left: 100%;
      }
      .ph-btn-premium .btn-arrow {
        transition: transform 0.3s ease;
      }
      .ph-btn-premium:hover .btn-arrow {
        transform: translateX(6px);
      }
      
      @media (max-width: 768px) {
        .ppdb-countdown-banner > div { flex-wrap: wrap; text-align: center !important; }
        .ppdb-countdown-banner > div > div:nth-child(2) { text-align: center !important; }
        .ppdb-countdown-banner h3 { font-size: 30px !important; }
        .ppdb-countdown-banner p { margin: 0 auto 30px !important; }
      }
    </style>
  </section>
`;
    
    html = html.substring(0, bannerStart) + newHtml + html.substring(bannerEnd);
    fs.writeFileSync('ppdb.html', html);
    console.log('Banner UI/UX upgraded successfully!');
} else {
    console.log('Banner section not found');
}
