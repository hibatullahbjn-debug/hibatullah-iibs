const fs = require('fs');

// 1. REWRITE THE JS FILE TO OUTPUT LIST HTML
const jsContent = `document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prestasiContainer');
  if (!container) return;

  if (typeof lombaData === 'undefined' || lombaData.length === 0) {
    container.innerHTML = '<p style="text-align:center; color:#64748b;">Belum ada data prestasi.</p>';
    return;
  }

  container.innerHTML = '';
  
  lombaData.forEach((data, index) => {
    const item = document.createElement('div');
    item.className = 'prestasi-list-item';
    item.style.animationDelay = \`\${index * 0.05}s\`;
    
    // Add visual mapping for juara (medal colors)
    let iconHTML = '<i class="fas fa-trophy"></i>';
    let iconBg = 'linear-gradient(135deg, #fef3c7, #fde68a)';
    let iconColor = '#d97706';
    let juaraBadgeClass = 'p-badge-juara';
    
    if(String(data.juara).includes('1')) {
      iconHTML = '<i class="fas fa-medal"></i>'; 
      iconBg = 'linear-gradient(135deg, #FFDF00, #D4AF37)'; // Gold
      iconColor = '#fff';
      juaraBadgeClass = 'p-badge-gold';
    } else if(String(data.juara).includes('2')) {
      iconHTML = '<i class="fas fa-medal"></i>';
      iconBg = 'linear-gradient(135deg, #E0E0E0, #9E9E9E)'; // Silver
      iconColor = '#fff';
      juaraBadgeClass = 'p-badge-silver';
    } else if(String(data.juara).includes('3')) {
      iconHTML = '<i class="fas fa-medal"></i>';
      iconBg = 'linear-gradient(135deg, #CD7F32, #8B4513)'; // Bronze
      iconColor = '#fff';
      juaraBadgeClass = 'p-badge-bronze';
    }

    item.innerHTML = \`
      <div class="plist-left">
        <div class="plist-icon" style="background: \${iconBg}; color: \${iconColor};">
          \${iconHTML}
        </div>
        <div class="plist-info">
          <h3 class="plist-nama">\${data.nama}</h3>
          <div class="plist-lomba"><i class="fas fa-bullseye"></i> \${data.lomba}</div>
        </div>
      </div>
      
      <div class="plist-right">
        <span class="p-badge p-badge-tingkat"><i class="fas fa-map-marker-alt"></i> \${data.tingkat}</span>
        <span class="p-badge \${juaraBadgeClass}"><i class="fas fa-award"></i> Juara \${data.juara}</span>
      </div>
    \`;
    container.appendChild(item);
  });
});`;

fs.writeFileSync('prestasi.js', jsContent);
console.log('Rewrote prestasi.js for list layout');

// 2. APPEND CSS FOR LIST LAYOUT
let styleCss = fs.readFileSync('style.css', 'utf8');

// First, remove the old grid if possible or just change the container class
// Wait, I will just add the new CSS and change the HTML container class

const newCss = `
/* --- PRESTASI LIST UI --- */
.prestasi-list-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.prestasi-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  border: 1px solid #f1f5f9;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  animation: slideInRight 0.5s ease backwards;
  position: relative;
  overflow: hidden;
}

.prestasi-list-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #3b82f6;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.prestasi-list-item:hover {
  transform: translateX(8px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.1);
  border-color: #cbd5e1;
}

.prestasi-list-item:hover::before {
  opacity: 1;
}

.plist-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.plist-icon {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.plist-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.plist-nama {
  font-size: 17px;
  font-weight: 800;
  color: #1e293b;
  margin: 0;
  line-height: 1.2;
}

.plist-lomba {
  font-size: 13.5px;
  color: #64748b;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
}
.plist-lomba i { color: #3b82f6; font-size: 12px; }

.plist-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Custom Badges for List */
.p-badge-gold { background: #FFDF00; color: #8B6508; box-shadow: 0 2px 8px rgba(255,223,0,0.3); }
.p-badge-silver { background: #E0E0E0; color: #424242; box-shadow: 0 2px 8px rgba(224,224,224,0.3); }
.p-badge-bronze { background: #CD7F32; color: #4E2C0F; box-shadow: 0 2px 8px rgba(205,127,50,0.3); }

@media (max-width: 768px) {
  .prestasi-list-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .plist-right {
    width: 100%;
    justify-content: flex-start;
    padding-left: 74px; /* Align with text */
  }
}
`;

if (!styleCss.includes('.prestasi-list-item')) {
  fs.appendFileSync('style.css', newCss);
  console.log('Appended list CSS to style.css');
}

// 3. CHANGE HTML CLASS
let html = fs.readFileSync('prestasi-santri.html', 'utf8');
if (html.includes('class="prestasi-grid"')) {
  html = html.replace('class="prestasi-grid"', 'class="prestasi-list-container"');
  fs.writeFileSync('prestasi-santri.html', html);
  console.log('Updated html to use list container');
}
