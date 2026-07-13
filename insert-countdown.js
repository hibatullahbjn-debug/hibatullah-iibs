const fs = require('fs');
let html = fs.readFileSync('ppdb.html', 'utf8');

const newSection = `
  <!-- COUNTDOWN SECTION -->
  <section class="ppdb-countdown-banner" style="background: linear-gradient(135deg, #0a1f5c 0%, #1a3a6b 100%); padding: 60px 20px; text-align: center;">
    <div class="ppdb-countdown-wrap">
      <div class="ppdb-countdown-title" style="color:#fff;"><i class="far fa-clock"></i> Waktu Tersisa Pendaftaran Gel. 1</div>
      <div class="ppdb-countdown-boxes" style="justify-content:center;" id="ppdbCountdown">
        <div class="pc-box"><span id="cd-days">00</span><small>Hari</small></div>
        <div class="pc-box"><span id="cd-hours">00</span><small>Jam</small></div>
        <div class="pc-box"><span id="cd-mins">00</span><small>Menit</small></div>
        <div class="pc-box"><span id="cd-secs">00</span><small>Detik</small></div>
      </div>
    </div>
    <div style="margin-top: 24px;">
      <a href="https://ppdb.hibatullah.sch.id/formulir" target="_blank" class="ph-btn-primary" style="display:inline-flex; align-items:center; gap:8px; background:#fff; color:#1a3a6b; font-size:14px; font-weight:700; padding:13px 26px; border-radius:8px; text-decoration:none;"><i class="fas fa-rocket"></i> Daftar Sekarang</a>
    </div>
  </section>
`;

if (html.includes('ppdb-kenapa') && !html.includes('ppdb-countdown-banner')) {
    const kenapaEnd = html.indexOf('</section>', html.indexOf('ppdb-kenapa')) + 10;
    html = html.substring(0, kenapaEnd) + '\n' + newSection + html.substring(kenapaEnd);
    fs.writeFileSync('ppdb.html', html);
    console.log('Inserted countdown section directly');
} else {
    console.log('Target not found or already exists');
}
