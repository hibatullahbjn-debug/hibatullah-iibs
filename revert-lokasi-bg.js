const fs = require('fs');
let css = fs.readFileSync('ppdb.css', 'utf8');

// Target the orange gradient block
const targetOld = `.ppdb-lokasi { 
  background: linear-gradient(135deg, #ff9d42 0%, #ff7b00 100%); 
  padding: 72px 0 64px; 
}
.ppdb-lokasi .ppdb-sec-title { color: #fff; }
.ppdb-lokasi .ppdb-sec-title span { color: #0d2149; }
.ppdb-lokasi .ppdb-sec-label { color: #fff; }
.ppdb-lokasi .ppdb-sec-label span { background: #fff; }
.lokasi-info-item { box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: none; }`;

const replaceNew = `.ppdb-lokasi { 
  background: #fff; 
  padding: 72px 0 64px; 
}
/* Removed white text overrides so it falls back to the default dark text */
`;

if (css.includes(targetOld)) {
    css = css.replace(targetOld, replaceNew);
    fs.writeFileSync('ppdb.css', css);
    console.log('Lokasi background updated to white!');
} else {
    console.log('Target string not found in ppdb.css. Fallback replace strategy...');
    // Fallback: replace using regex if whitespace differs
    css = css.replace(/background: linear-gradient\(135deg, #ff9d42 0%, #ff7b00 100%\);/g, 'background: #fff;');
    css = css.replace(/\.ppdb-lokasi \.ppdb-sec-title \{ color: #fff; \}/g, '');
    css = css.replace(/\.ppdb-lokasi \.ppdb-sec-title span \{ color: #0d2149; \}/g, '');
    css = css.replace(/\.ppdb-lokasi \.ppdb-sec-label \{ color: #fff; \}/g, '');
    css = css.replace(/\.ppdb-lokasi \.ppdb-sec-label span \{ background: #fff; \}/g, '');
    fs.writeFileSync('ppdb.css', css);
    console.log('Fallback replace complete!');
}
