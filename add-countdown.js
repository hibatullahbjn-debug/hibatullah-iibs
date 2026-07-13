const fs = require('fs');
let html = fs.readFileSync('ppdb.html', 'utf8');

const targetStr = `<div class="ppdb-hero-btns">
          <a href="https://ppdb.hibatullah.sch.id/formulir" target="_blank" class="ph-btn-primary"><i class="fas fa-rocket"></i> Daftar & Info Pendaftaran</a>
          <a href="#tentang" class="ph-btn-outline"><i class="fas fa-play-circle"></i> Tentang Kami</a>
        </div>`;

const insertStr = `
        <div class="ppdb-countdown-wrap">
          <div class="ppdb-countdown-title"><i class="far fa-clock"></i> Waktu Tersisa Pendaftaran Gel. 1</div>
          <div class="ppdb-countdown-boxes" id="ppdbCountdown">
            <div class="pc-box"><span id="cd-days">00</span><small>Hari</small></div>
            <div class="pc-box"><span id="cd-hours">00</span><small>Jam</small></div>
            <div class="pc-box"><span id="cd-mins">00</span><small>Menit</small></div>
            <div class="pc-box"><span id="cd-secs">00</span><small>Detik</small></div>
          </div>
        </div>
`;

if (html.includes('ppdb-hero-btns')) {
    html = html.replace(targetStr, targetStr + insertStr);
    fs.writeFileSync('ppdb.html', html);
    console.log('Added HTML');
} else {
    console.log('Target string not found!');
}
