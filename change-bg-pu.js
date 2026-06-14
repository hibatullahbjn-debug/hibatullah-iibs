const fs = require('fs');
let html = fs.readFileSync('program-unggulan-sdih.html', 'utf8');

// Update CSS
html = html.replace('.pu-highlight{background:linear-gradient(135deg,#0a1f5c 0%,#1a3a6b 50%,#1e4d8c 100%);padding:72px 0;position:relative;overflow:hidden}', '.pu-highlight{background:#fff;padding:72px 0;position:relative;overflow:hidden}');
html = html.replace('.pu-highlight::before{content:\'\';position:absolute;top:-100px;right:-100px;width:400px;height:400px;border-radius:50%;border:1px solid rgba(255,255,255,0.06)}', '.pu-highlight::before{display:none;}');

html = html.replace('.pu-hl-card{background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:24px 18px;text-align:center;backdrop-filter:blur(4px);transition:background .2s,transform .2s}', '.pu-hl-card{background:#f8f9fc;border:1px solid #e8eef8;border-radius:14px;padding:24px 18px;text-align:center;transition:transform .2s,box-shadow .2s}');
html = html.replace('.pu-hl-card:hover{background:rgba(255,255,255,0.13);transform:translateY(-5px)}', '.pu-hl-card:hover{transform:translateY(-5px);box-shadow:0 12px 24px rgba(26,58,107,0.08);background:#fff}');
html = html.replace('.pu-hl-card h4{font-size:14px;font-weight:700;color:#fff;margin-bottom:8px}', '.pu-hl-card h4{font-size:14px;font-weight:700;color:#1a1a2e;margin-bottom:8px}');
html = html.replace('.pu-hl-card p{font-size:12px;color:rgba(255,255,255,0.6);line-height:1.6}', '.pu-hl-card p{font-size:12px;color:#666;line-height:1.6}');

// Update HTML
html = html.replace('<div class="pu-sec-label white"><span></span> KEUNGGULAN PROGRAM <span></span></div>', '<div class="pu-sec-label"><span></span> KEUNGGULAN PROGRAM <span></span></div>');
html = html.replace('<h2 class="pu-sec-title white">Mengapa Program Kami <span style="color:#f0c040">Berbeda?</span></h2>', '<h2 class="pu-sec-title">Mengapa Program Kami <span>Berbeda?</span></h2>');
html = html.replace('<p class="pu-sec-sub" style="color:rgba(255,255,255,0.65)">', '<p class="pu-sec-sub">');

fs.writeFileSync('program-unggulan-sdih.html', html);
console.log('Updated program-unggulan-sdih.html');
