const fs = require('fs');
const xlsx = require('xlsx');

// 1. Parse Excel
const workbook = xlsx.readFile('lomba/lomba.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

const lombaData = [];
// Assuming row 0 is headers: ['Nama Santri', 'Nama Lomba', 'Tingkat', 'Juara']
for (let i = 1; i < data.length; i++) {
  if (data[i] && data[i][0]) {
    lombaData.push({
      nama: data[i][0],
      lomba: data[i][1],
      tingkat: data[i][2],
      juara: data[i][3]
    });
  }
}

fs.writeFileSync('lomba-data.js', `const lombaData = ${JSON.stringify(lombaData, null, 2)};`);
console.log('Generated lomba-data.js');

// 2. Add CSS
let styleCss = fs.readFileSync('style.css', 'utf8');
const prestasiCss = `
/* --- PRESTASI UI --- */
.prestasi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
  margin-top: 20px;
}
.prestasi-card {
  background: #fff;
  border-radius: 20px;
  padding: 30px 25px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(26, 58, 107, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
}
.prestasi-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(26, 58, 107, 0.12);
  border-color: #cbd5e1;
}
.prestasi-card::before {
  content: '\\f091';
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 140px;
  color: rgba(245, 158, 11, 0.05);
  transform: rotate(-15deg);
  transition: all 0.5s ease;
  z-index: 0;
}
.prestasi-card:hover::before {
  color: rgba(245, 158, 11, 0.15);
  transform: rotate(0deg) scale(1.1);
}
.prestasi-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.prestasi-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: linear-gradient(135deg, #fef3c7, #fde68a);
  color: #d97706;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(217, 119, 6, 0.15);
}
.prestasi-nama {
  font-size: 18px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 5px;
  line-height: 1.3;
}
.prestasi-lomba {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}
.prestasi-badges {
  display: flex;
  gap: 10px;
  margin-top: auto;
}
.p-badge {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
}
.p-badge-tingkat {
  background: #e0f2fe;
  color: #0369a1;
}
.p-badge-juara {
  background: #fce7f3;
  color: #be185d;
}
`;

if (!styleCss.includes('.prestasi-grid')) {
  fs.appendFileSync('style.css', prestasiCss);
  console.log('Appended Prestasi CSS to style.css');
}

// 3. Update HTML
let html = fs.readFileSync('prestasi-santri.html', 'utf8');

const regex = /<div style="min-height: 50vh;[\s\S]*?<\/div>/;
const newHtml = `<!-- PRESTASI GRID -->
      <div class="prestasi-header" style="text-align: center; margin-bottom: 40px;">
        <h2 style="font-size: 32px; font-weight: 800; color: #1e293b;">Daftar <span style="color: #3b82f6;">Penghargaan</span></h2>
        <p style="color: #64748b; max-width: 600px; margin: 10px auto 0;">Bukti nyata dedikasi dan prestasi santri Hibatullah IIBS di berbagai ajang perlombaan.</p>
      </div>
      <div class="prestasi-grid" id="prestasiContainer">
        <!-- Cards will be dynamically injected here -->
      </div>`;

html = html.replace(regex, newHtml);

// Ensure scripts are loaded
if (!html.includes('lomba-data.js')) {
  html = html.replace('</body>', '  <script src="lomba-data.js"></script>\n  <script src="prestasi.js"></script>\n</body>');
}

fs.writeFileSync('prestasi-santri.html', html);
console.log('Updated prestasi-santri.html');

// 4. Create prestasi.js
const jsContent = `document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prestasiContainer');
  if (!container) return;

  if (typeof lombaData === 'undefined' || lombaData.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#64748b; grid-column: 1/-1;">Belum ada data prestasi.</p>';
    return;
  }

  container.innerHTML = '';
  
  lombaData.forEach(data => {
    const card = document.createElement('div');
    card.className = 'prestasi-card';
    
    // Add visual mapping for juara (medal colors)
    let trophyColorClass = 'text-amber-500'; 
    let iconHTML = '<i class="fas fa-trophy"></i>';
    
    if(String(data.juara).includes('1')) {
      iconHTML = '<i class="fas fa-medal" style="color: #fbbf24;"></i>'; // Gold
    } else if(String(data.juara).includes('2')) {
      iconHTML = '<i class="fas fa-medal" style="color: #94a3b8;"></i>'; // Silver
    } else if(String(data.juara).includes('3')) {
      iconHTML = '<i class="fas fa-medal" style="color: #b45309;"></i>'; // Bronze
    }

    card.innerHTML = \`
      <div class="prestasi-content">
        <div class="prestasi-icon-wrapper">
          \${iconHTML}
        </div>
        <h3 class="prestasi-nama">\${data.nama}</h3>
        <div class="prestasi-lomba"><i class="fas fa-bullseye"></i> \${data.lomba}</div>
        
        <div class="prestasi-badges">
          <span class="p-badge p-badge-tingkat"><i class="fas fa-map-marker-alt"></i> \${data.tingkat}</span>
          <span class="p-badge p-badge-juara"><i class="fas fa-award"></i> Juara \${data.juara}</span>
        </div>
      </div>
    \`;
    container.appendChild(card);
  });
});`;

fs.writeFileSync('prestasi.js', jsContent);
console.log('Generated prestasi.js');
