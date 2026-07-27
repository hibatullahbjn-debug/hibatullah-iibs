const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const regex = /\/\* ===========================\n   TABLET \/ IPAD FIX[\s\S]*?(?=\n\/\* ===========================|$)/g;
// I will replace both the Tablet and Portrait tablet media queries with one unified max-width: 1200px query.

const bottomOverlayFix = `/* ===========================
   TABLET / IPAD FIX (up to 1200px)
=========================== */
@media (max-width: 1200px) {
  .hero-slides {
    min-height: 800px !important; /* Make it tall enough for portrait */
  }
  
  .hero-slide.active {
    display: block !important;
    position: relative !important;
    min-height: 800px !important;
  }
  
  .hero-bg-wrap {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  /* Students image placed in the middle/top */
  .hero-students {
    width: 100% !important;
    height: 75% !important; /* Leave space at bottom for text */
    right: 0 !important;
    top: 5% !important;
    position: absolute !important;
    background-size: contain !important;
    background-position: center bottom !important;
    background-repeat: no-repeat !important;
    z-index: 0 !important;
  }

  /* Dark overlay from bottom to top */
  .hero-bg-color {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    background: linear-gradient(to top, 
      rgba(13,34,68,1) 0%, 
      rgba(13,34,68,0.95) 35%, 
      rgba(13,34,68,0.4) 65%, 
      rgba(13,34,68,0.1) 100%) !important;
    z-index: 1 !important;
  }

  /* Text at the bottom, left aligned */
  .hero-content {
    position: absolute !important;
    bottom: 30px !important;
    top: auto !important;
    left: 0 !important;
    width: 100% !important;
    padding: 20px 40px !important;
    z-index: 10 !important;
    background: none !important;
    transform: none !important;
    text-align: left !important;
  }

  .hero-title {
    font-size: 36px !important;
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
    font-size: 12px !important;
    padding: 6px 12px !important;
    margin-bottom: 16px !important;
  }

  .hero-btns {
    flex-direction: row !important;
    gap: 12px !important;
  }
  
  /* Slider arrows */
  .hero-slider-btn {
    width: 44px !important;
    height: 44px !important;
    z-index: 20 !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
  }
  .hero-slider-btn.prev {
    left: 15px !important;
  }
  .hero-slider-btn.next {
    right: 15px !important;
  }
}

/* Specific adjustment for smaller mobiles */
@media (max-width: 600px) {
  .hero-slides, .hero-slide.active {
    min-height: 650px !important;
  }
  .hero-title {
    font-size: 28px !important;
  }
  .hero-desc {
    font-size: 14px !important;
  }
  .hero-content {
    padding: 20px !important;
    bottom: 20px !important;
  }
  .hero-slider-btn {
    width: 36px !important;
    height: 36px !important;
  }
}
`;

css = css.replace(regex, bottomOverlayFix);
fs.writeFileSync('style.css', css);
console.log('Applied bottom overlay layout for all tablets/mobiles');

// Update cache buster
let html = fs.readFileSync('index.html', 'utf8');
const newVersion = Date.now().toString();
html = html.replace(/style\.css\?v=[0-9\-]+/g, `style.css?v=${newVersion}`);
fs.writeFileSync('index.html', html);
console.log('Updated cache buster in index.html');
