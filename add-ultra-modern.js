const fs = require('fs');
let css = fs.readFileSync('ppdb.css', 'utf8');

const newCss = `/* ===========================
   LOKASI - ULTRA MODERN MAP BACKGROUND
=========================== */
.ppdb-lokasi {
  position: relative;
  width: 100%;
  min-height: 700px;
  overflow: hidden;
  background: #f0f4f8;
  padding: 0 !important;
}

.lokasi-map-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.lokasi-map-bg iframe {
  width: 100%;
  height: 100%;
  border: none !important;
  border-radius: 0 !important;
  filter: grayscale(10%) contrast(1.1);
}

.lokasi-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 35%, rgba(255,255,255,0) 100%);
  z-index: 2;
  pointer-events: none;
}

.ppdb-lokasi .ppdb-sec-inner {
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
  display: flex;
  align-items: center;
  min-height: 700px;
}

.lokasi-glass-panel {
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
}

.lokasi-glass-panel .ppdb-sec-label span { background: #ff7b00; }
.lokasi-glass-panel .ppdb-sec-label { color: #ff7b00; }
.lokasi-glass-panel .ppdb-sec-title { color: #0d2149; }

.lokasi-info-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.lokasi-info-item {
  background: #fff;
  border-radius: 16px;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border: 1px solid rgba(26,58,107,0.06);
  box-shadow: 0 10px 25px rgba(13,33,73,0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.lokasi-info-item:hover {
  transform: translateX(5px);
  box-shadow: 0 15px 35px rgba(13,33,73,0.08);
  border-color: #ff7b00;
}

.lii-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #fff1e5;
  color: #ff7b00;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
}

.lokasi-info-item strong {
  font-size: 14px;
  font-weight: 800;
  color: #1a3a6b;
  display: block;
  margin-bottom: 4px;
}

.lokasi-info-item p {
  font-size: 13px;
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.lokasi-info-item p a { color: #25d366; font-weight: 700; }
.lokasi-info-item p a:hover { text-decoration: underline; }

.lokasi-btns { display: flex; flex-direction: column; gap: 12px; margin-top: 10px; }

.lokasi-btn-maps, .lokasi-btn-wa {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  color: #fff; font-size: 14px; font-weight: 700;
  padding: 14px; border-radius: 14px; transition: all 0.3s ease;
  text-decoration: none; border: none;
}
.lokasi-btn-maps {
  background: linear-gradient(135deg, #1a56db, #0d2149);
  box-shadow: 0 8px 20px rgba(26,86,219,0.25);
}
.lokasi-btn-wa {
  background: linear-gradient(135deg, #25d366, #1da851);
  box-shadow: 0 8px 20px rgba(37,211,102,0.25);
}
.lokasi-btn-maps:hover {
  transform: translateY(-3px); box-shadow: 0 12px 25px rgba(26,86,219,0.35); color: #fff;
}
.lokasi-btn-wa:hover {
  transform: translateY(-3px); box-shadow: 0 12px 25px rgba(37,211,102,0.35); color: #fff;
}

@media (max-width: 900px) {
  .lokasi-overlay {
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.6) 100%);
  }
  .lokasi-glass-panel { max-width: 100%; }
}
@media (max-width: 480px) {
  .lokasi-glass-panel { padding: 24px; }
  .ppdb-lokasi .ppdb-sec-inner { padding: 40px 16px; }
}
`;

css += '\n' + newCss;
fs.writeFileSync('ppdb.css', css);
console.log('Appended Ultra Modern UI CSS!');
