const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const tabletFix = `\n/* ===========================
   TABLET / IPAD FIX (768px - 1024px)
=========================== */
@media (min-width: 769px) and (max-width: 1024px) {
  .hero-slides {
    min-height: 500px !important;
  }
  .hero-content {
    width: 70% !important;
    padding: 60px 40px 60px 80px !important;
    background: none !important;
  }
  .hero-title {
    font-size: 34px !important;
    line-height: 1.2 !important;
    margin-bottom: 16px !important;
  }
  .hero-desc {
    font-size: 15px !important;
    line-height: 1.6 !important;
    margin-bottom: 24px !important;
  }
  .hero-badge {
    margin-bottom: 16px !important;
  }
  /* Push students image to the right so it doesn't block text */
  .hero-students {
    width: 60% !important;
    right: -10% !important;
  }
  /* Stronger gradient overlay so text is highly readable even if it overlaps */
  .hero-bg-color {
    background: linear-gradient(90deg, #0a1f5c 0%, rgba(10,31,92,0.95) 55%, rgba(10,31,92,0.2) 100%) !important;
  }
  
  /* Fix slider arrows so they don't touch text */
  .hero-slider-btn {
    width: 40px !important;
    height: 40px !important;
  }
  .hero-slider-btn.prev {
    left: 15px !important;
  }
  .hero-slider-btn.next {
    right: 15px !important;
  }
}

/* Fix for Portrait Tablet (under 768px) just in case */
@media (min-width: 481px) and (max-width: 768px) {
  .hero-content {
    width: 80% !important;
    padding: 40px 20px 40px 60px !important;
  }
  .hero-title {
    font-size: 28px !important;
  }
  .hero-bg-color {
    background: linear-gradient(90deg, #0a1f5c 0%, rgba(10,31,92,0.95) 70%, rgba(10,31,92,0.4) 100%) !important;
  }
}
`;

if (!css.includes('TABLET / IPAD FIX')) {
    fs.writeFileSync('style.css', css + tabletFix);
    console.log('Appended Tablet Fix to style.css');
} else {
    console.log('Tablet fix already exists. I will replace it.');
    const regex = /\/\* ===========================\n   TABLET \/ IPAD FIX[\s\S]*?(?=\n\/\* ===========================|$)/g;
    css = css.replace(regex, tabletFix.trim());
    fs.writeFileSync('style.css', css);
}
