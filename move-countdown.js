const fs = require('fs');
let html = fs.readFileSync('ppdb.html', 'utf8');

// Find the countdown wrap
const startIdx = html.indexOf('<div class="ppdb-countdown-wrap">');
const endStr = '</div>\n        </div>\n      </div>';
const endIdx = html.indexOf('</div>', html.indexOf('</div>', html.indexOf('ppdb-countdown-boxes')) + 5) + 6;

if (startIdx > -1 && endIdx > -1) {
    let cdHtml = html.substring(startIdx, endIdx);
    
    // Sometimes there's extra divs, let's just grab the whole block safely
    const fullBlockStr = html.substring(startIdx, html.indexOf('</div>', html.lastIndexOf('pc-box')) + 25);
    // Actually better to use regex or string replace. Let's do string split.
    const beforeStr = html.substring(0, startIdx);
    let afterStr = html.substring(startIdx);
    // find end of ppdb-countdown-wrap
    const afterWrapEnd = afterStr.indexOf('</div>', afterStr.indexOf('</div>', afterStr.indexOf('</div>', afterStr.indexOf('</div>', afterStr.indexOf('</div>') + 5) + 5) + 5) + 5) + 6;
    
    cdHtml = afterStr.substring(0, afterWrapEnd);
    html = beforeStr + afterStr.substring(afterWrapEnd);
    
    // Create new section
    const newSection = `
  <!-- COUNTDOWN SECTION -->
  <section class="ppdb-countdown-banner" style="background: linear-gradient(135deg, #0a1f5c 0%, #1a3a6b 100%); padding: 60px 20px; text-align: center;">
    ${cdHtml}
    <div style="margin-top: 24px;">
      <a href="https://ppdb.hibatullah.sch.id/formulir" target="_blank" class="ph-btn-primary" style="display:inline-flex; align-items:center; gap:8px; background:#fff; color:#1a3a6b; font-size:14px; font-weight:700; padding:13px 26px; border-radius:8px; text-decoration:none;"><i class="fas fa-rocket"></i> Daftar Sekarang</a>
    </div>
  </section>
  `;
    
    // Insert after ppdb-kenapa
    const kenapaEnd = html.indexOf('</section>', html.indexOf('ppdb-kenapa')) + 10;
    html = html.substring(0, kenapaEnd) + '\n' + newSection + html.substring(kenapaEnd);
    
    fs.writeFileSync('ppdb.html', html);
    console.log('Moved countdown!');
} else {
    console.log('Countdown wrap not found');
}
