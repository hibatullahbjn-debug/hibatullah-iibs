const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// The block to replace
const regex = /\/\* ===========================\n   TABLET \/ IPAD FIX[\s\S]*?(?=\n\/\* ===========================|$)/g;

const newTabletFix = `/* ===========================
   TABLET / IPAD FIX (768px - 1024px)
=========================== */
@media (min-width: 769px) and (max-width: 1024px) {
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
    width: 80% !important;
    right: -5% !important;
    top: 5% !important;
  }

  /* Full overlay gradient to separate text from background cleanly */
  .hero-bg-color {
    display: block !important;
    position: absolute !important;
    inset: 0 !important;
    background: linear-gradient(90deg, 
      rgba(13,34,68,1) 0%, 
      rgba(13,34,68,0.9) 55%, 
      rgba(13,34,68,0.2) 100%) !important;
    z-index: 1 !important;
  }

  .hero-content {
    position: absolute !important;
    bottom: auto !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    left: 0 !important;
    width: 100% !important;
    padding: 40px 60px 40px 80px !important;
    z-index: 10 !important;
    background: none !important;
    max-width: 800px;
  }

  .hero-title {
    font-size: 38px !important;
    line-height: 1.25 !important;
    margin-bottom: 16px !important;
  }

  .hero-desc {
    font-size: 16px !important;
    line-height: 1.6 !important;
    margin-bottom: 24px !important;
    max-width: 90%;
  }

  .hero-badge {
    margin-bottom: 16px !important;
  }

  .hero-btns {
    flex-direction: row !important;
    gap: 12px !important;
  }
  
  /* Fix slider arrows so they don't touch text */
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

css = css.replace(regex, newTabletFix);
fs.writeFileSync('style.css', css);
console.log('Replaced iPad fix in style.css');
