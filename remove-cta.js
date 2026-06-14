const fs = require('fs');

let sdih = fs.readFileSync('kurikulum-sdih.html', 'utf8');
const sdihRegex = /<!-- CTA -->\s*<section class="ksdih-cta">[\s\S]*?<\/section>/g;
if (sdih.match(sdihRegex)) {
  sdih = sdih.replace(sdihRegex, '');
  fs.writeFileSync('kurikulum-sdih.html', sdih);
  console.log('Removed CTA from kurikulum-sdih.html');
}

let kur = fs.readFileSync('kurikulum.html', 'utf8');
const kurRegex = /<!-- ===== CTA ===== -->\s*<section class="kur-cta">[\s\S]*?<\/section>/g;
if (kur.match(kurRegex)) {
  kur = kur.replace(kurRegex, '');
  fs.writeFileSync('kurikulum.html', kur);
  console.log('Removed CTA from kurikulum.html');
}
