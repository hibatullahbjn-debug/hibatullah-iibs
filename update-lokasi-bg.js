const fs = require('fs');
let css = fs.readFileSync('ppdb.css', 'utf8');

const targetOld = '.ppdb-lokasi { background: #f8f9fc; padding: 72px 0 64px; }';
const replaceNew = `
.ppdb-lokasi { 
  background: linear-gradient(135deg, #ff9d42 0%, #ff7b00 100%); 
  padding: 72px 0 64px; 
}
.ppdb-lokasi .ppdb-sec-title { color: #fff; }
.ppdb-lokasi .ppdb-sec-title span { color: #0d2149; }
.ppdb-lokasi .ppdb-sec-label { color: #fff; }
.ppdb-lokasi .ppdb-sec-label span { background: #fff; }
.lokasi-info-item { box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: none; }
`;

css = css.replace(targetOld, replaceNew);
fs.writeFileSync('ppdb.css', css);
console.log('Lokasi background updated to orange!');
