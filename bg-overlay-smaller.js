const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const regex = /\/\* ===========================\n   TABLET \/ IPAD FIX[\s\S]*?(?=\n\/\* ===========================|$)/g;

const backgroundOverlayFixSmaller = `/* ===========================
   TABLET / IPAD FIX (768px - 1200px)
=========================== */
@media (min-width: 769px) and (max-width: 1200px) {
  .hero-slide.active {
    display: block !important;
    position: relative !important;
    min-height: 550px !important;
  }
  
  .hero-bg-wrap {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  /* Make students image the FULL background */
  .hero-students {
    width: 100% !important;
    height: 100% !important;
    right: 0 !important;
    top: 0 !important;
    position: absolute !important;
    background-size: cover !important;
    background-position: center !important;
  }

  /* Dark overlay covering the whole background */
  .hero-bg-color {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    background: linear-gradient(to right, 
      rgba(13,34,68,0.95) 0%, 
      rgba(13,34,68,0.7) 60%, 
      rgba(13,34,68,0.3) 100%) !important;
    z-index: 1 !important;
  }

  /* Text in front of the background, sized proportionally smaller */
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
    font-size: 32px !important;
    line-height: 1.25 !important;
    margin-bottom: 14px !important;
    max-width: 600px !important;
  }

  .hero-desc {
    font-size: 14px !important;
    line-height: 1.5 !important;
    margin-bottom: 20px !important;
    max-width: 500px !important;
  }

  .hero-badge {
    font-size: 11px !important;
    padding: 4px 10px !important;
    margin-bottom: 12px !important;
  }

  .hero-btns {
    flex-direction: row !important;
    gap: 10px !important;
  }

  .btn-primary, .btn-outline {
    font-size: 13px !important;
    padding: 10px 16px !important;
  }
  
  /* Fix slider arrows */
  .hero-slider-btn {
    width: 38px !important;
    height: 38px !important;
    z-index: 20 !important;
  }
  .hero-slider-btn.prev {
    left: 10px !important;
  }
  .hero-slider-btn.next {
    right: 10px !important;
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
    background-size: cover !important;
    background-position: center top !important;
  }

  .hero-bg-color {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    background: linear-gradient(to top, 
      rgba(13,34,68,1) 0%, 
      rgba(13,34,68,0.85) 60%, 
      rgba(13,34,68,0.3) 100%) !important;
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
    font-size: 28px !important;
  }
  .hero-desc {
    font-size: 14px !important;
  }
}
`;

css = css.replace(regex, backgroundOverlayFixSmaller);
fs.writeFileSync('style.css', css);
console.log('Applied smaller sizes for overlay layout');

// Update cache buster
let html = fs.readFileSync('index.html', 'utf8');
const newVersion = Date.now().toString();
html = html.replace(/style\.css\?v=[0-9\-]+/g, `style.css?v=${newVersion}`);
fs.writeFileSync('index.html', html);
console.log('Updated cache buster in index.html');
