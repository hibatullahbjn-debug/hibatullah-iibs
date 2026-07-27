const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const regex = /\/\* ===========================\n   TABLET \/ IPAD FIX[\s\S]*?(?=\n\/\* ===========================|$)/g;

const revertedTabletFix = `/* ===========================
   TABLET / IPAD FIX (768px - 1200px)
=========================== */
@media (min-width: 769px) and (max-width: 1200px) {
  .hero-slide.active {
    display: flex !important;
    align-items: center !important;
    min-height: 550px !important;
  }
  
  /* Reset bg-wrap to default */
  .hero-bg-wrap {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  /* Make gradient semi-transparent so the school background image is visible! */
  .hero-bg-color {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    background: linear-gradient(90deg, 
      rgba(13,34,68,0.85) 0%, 
      rgba(13,34,68,0.7) 45%, 
      rgba(13,34,68,0) 100%) !important;
    z-index: 1 !important;
  }

  /* Students image on the right */
  .hero-students {
    width: 50% !important;
    right: -5% !important;
    top: 0 !important;
    position: absolute !important;
  }

  /* Text on the left */
  .hero-content {
    position: relative !important;
    width: 60% !important;
    padding: 60px 20px 60px 80px !important;
    z-index: 10 !important;
    background: none !important;
    transform: none !important;
    top: auto !important;
    bottom: auto !important;
  }

  .hero-title {
    font-size: 34px !important;
    line-height: 1.25 !important;
    margin-bottom: 16px !important;
  }

  .hero-desc {
    font-size: 14px !important;
    line-height: 1.6 !important;
    margin-bottom: 24px !important;
  }

  .hero-badge {
    margin-bottom: 16px !important;
  }

  .hero-btns {
    flex-direction: row !important;
    gap: 12px !important;
  }
  
  /* Fix slider arrows */
  .hero-slider-btn {
    width: 44px !important;
    height: 44px !important;
    z-index: 20 !important;
  }
  .hero-slider-btn.prev {
    left: 15px !important;
  }
  .hero-slider-btn.next {
    right: 15px !important;
  }
}

/* Fix for Portrait Tablet (under 768px) */
@media (min-width: 481px) and (max-width: 768px) {
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
  }
  
  .hero-students {
    width: 100% !important;
    right: 0 !important;
  }

  .hero-bg-color {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    background: linear-gradient(to top, 
      rgba(13,34,68,1) 0%, 
      rgba(13,34,68,0.8) 50%, 
      rgba(13,34,68,0.2) 100%) !important;
    z-index: 1 !important;
  }

  .hero-content {
    position: absolute !important;
    bottom: 0 !important;
    top: auto !important;
    left: 0 !important;
    width: 100% !important;
    padding: 40px !important;
    z-index: 10 !important;
    background: none !important;
    transform: none !important;
  }

  .hero-title {
    font-size: 32px !important;
  }
  .hero-desc {
    font-size: 15px !important;
  }
}
`;

css = css.replace(regex, revertedTabletFix);
fs.writeFileSync('style.css', css);
console.log('Reverted to side-by-side but with transparent background');

// Update cache buster
let html = fs.readFileSync('index.html', 'utf8');
const newVersion = Date.now().toString();
html = html.replace(/style\.css\?v=[0-9\-]+/g, `style.css?v=${newVersion}`);
fs.writeFileSync('index.html', html);
console.log('Updated cache buster in index.html');
