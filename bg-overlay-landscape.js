const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const regex = /\/\* ===========================\n   TABLET \/ IPAD FIX[\s\S]*?(?=\n\/\* ===========================|$)/g;

const finalLandscapeFix = `/* ===========================
   TABLET / IPAD FIX (up to 1200px)
=========================== */
/* FOR PORTRAIT TABLETS & MOBILES */
@media (max-width: 1200px) and (orientation: portrait), (max-width: 900px) {
  .hero-slides {
    min-height: 900px !important;
  }
  
  .hero-slide.active {
    display: block !important;
    position: relative !important;
    min-height: 900px !important;
  }
  
  .hero-bg-wrap {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background-size: cover !important; 
    background-position: center 10% !important;
  }

  .hero-students {
    width: 100% !important;
    height: 70% !important;
    right: 0 !important;
    top: 5% !important;
    position: absolute !important;
    background-size: contain !important;
    background-position: center bottom !important;
    background-repeat: no-repeat !important;
    z-index: 0 !important;
  }

  .hero-bg-color {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    background: linear-gradient(to top, 
      rgba(13,34,68,1) 0%, 
      rgba(13,34,68,0.95) 40%, 
      rgba(13,34,68,0.4) 70%, 
      rgba(13,34,68,0) 100%) !important;
    z-index: 1 !important;
  }

  .hero-content {
    position: absolute !important;
    bottom: 40px !important;
    top: auto !important;
    left: 0 !important;
    width: 100% !important;
    padding: 30px 40px !important;
    z-index: 10 !important;
    background: none !important;
    transform: none !important;
    text-align: left !important;
  }

  .hero-title {
    font-size: 38px !important;
    line-height: 1.25 !important;
    margin-bottom: 16px !important;
    max-width: 100% !important;
  }

  .hero-desc {
    font-size: 16px !important;
    line-height: 1.6 !important;
    margin-bottom: 24px !important;
    max-width: 90% !important;
  }

  .hero-badge {
    font-size: 13px !important;
    padding: 6px 14px !important;
    margin-bottom: 16px !important;
  }

  .hero-btns {
    flex-direction: row !important;
    gap: 12px !important;
  }
  
  .hero-slider-btn {
    width: 44px !important;
    height: 44px !important;
    z-index: 20 !important;
    top: 45% !important;
    transform: translateY(-50%) !important;
  }
  .hero-slider-btn.prev {
    left: 15px !important;
  }
  .hero-slider-btn.next {
    right: 15px !important;
  }
}

/* FOR LANDSCAPE TABLETS (IPAD HELD HORIZONTALLY) */
/* The user wants "rata kanan kiri gambarnya" (full width image left-to-right) */
@media (max-width: 1200px) and (min-width: 901px) and (orientation: landscape) {
  .hero-slide.active {
    display: block !important;
    position: relative !important;
    min-height: 600px !important;
  }
  .hero-bg-wrap {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    background-size: cover !important; 
    background-position: right center !important;
  }
  .hero-students {
    /* Image stretches full width (rata kanan kiri) */
    width: 100% !important;
    height: 100% !important;
    right: 0 !important;
    top: 0 !important;
    position: absolute !important;
    background-size: cover !important;
    /* Ensure the students on the right side are not cut off */
    background-position: right center !important;
  }
  .hero-bg-color {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    /* Dark gradient over the left side so text is readable */
    background: linear-gradient(to right, 
      rgba(13,34,68,1) 0%, 
      rgba(13,34,68,0.85) 45%, 
      rgba(13,34,68,0.2) 100%) !important;
    z-index: 1 !important;
  }
  .hero-content {
    position: absolute !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    left: 0 !important;
    width: 100% !important;
    padding: 30px 40px 30px 60px !important;
    z-index: 10 !important;
    background: none !important;
    bottom: auto !important;
  }
  .hero-title {
    font-size: 36px !important;
  }
  .hero-desc {
    font-size: 15px !important;
    max-width: 600px !important;
  }
  .hero-slider-btn {
    width: 44px !important;
    height: 44px !important;
    z-index: 20 !important;
  }
}

/* Specific adjustment for smaller mobiles */
@media (max-width: 600px) {
  .hero-slides, .hero-slide.active {
    min-height: 700px !important;
  }
  .hero-bg-wrap {
    background-position: center top !important;
  }
  .hero-title {
    font-size: 28px !important;
  }
  .hero-desc {
    font-size: 14px !important;
  }
  .hero-content {
    padding: 24px !important;
    bottom: 20px !important;
  }
  .hero-slider-btn {
    width: 36px !important;
    height: 36px !important;
  }
}
`;

css = css.replace(regex, finalLandscapeFix);
fs.writeFileSync('style.css', css);
console.log('Applied rata kanan kiri fix for landscape');

let html = fs.readFileSync('index.html', 'utf8');
const newVersion = Date.now().toString();
html = html.replace(/style\.css\?v=[0-9\-]+/g, `style.css?v=${newVersion}`);
fs.writeFileSync('index.html', html);
console.log('Updated cache buster');
