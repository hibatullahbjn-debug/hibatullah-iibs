const fs = require('fs');

let html = fs.readFileSync('kurikulum-sdih.html', 'utf8');

html = html.replace('.ksdih-hero-inner{position:relative;z-index:10;max-width:1100px;margin:0 auto;padding:72px 24px 80px;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}', '.ksdih-hero-inner{position:relative;z-index:10;max-width:1100px;margin:0 auto;padding:72px 24px 80px;display:flex;flex-direction:column;align-items:center;text-align:center;}');

html = html.replace('.ksdih-hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);color:#fff;font-size:12px;font-weight:600;padding:6px 16px;border-radius:20px;margin-bottom:20px;backdrop-filter:blur(4px)}', '.ksdih-hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.2);color:#fff;font-size:12px;font-weight:600;padding:6px 16px;border-radius:20px;margin-bottom:20px;backdrop-filter:blur(4px);margin-left:auto;margin-right:auto;}');

html = html.replace('.ksdih-hero-pills{display:flex;gap:10px;flex-wrap:wrap}', '.ksdih-hero-pills{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;}');

html = html.replace('.ksdih-hero-visual{display:flex;justify-content:center;align-items:center}', '.ksdih-hero-visual{display:none;}');

fs.writeFileSync('kurikulum-sdih.html', html);
console.log('Patched kurikulum-sdih.html to center the hero section.');
