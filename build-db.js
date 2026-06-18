const fs = require('fs');

// 1. UPDATE HTML
let html = fs.readFileSync('prestasi-santri.html', 'utf8');

const oldRegex = /<!-- PRESTASI GRID -->[\s\S]*?<\/div>\n      <\/div>/;

const newHtml = `<!-- PRESTASI DASHBOARD -->
      <div class="prestasi-header" style="text-align: center; margin-bottom: 30px;">
        <h2 style="font-size: 32px; font-weight: 800; color: #1e293b;">Data <span style="color: #3b82f6;">Prestasi Santri</span></h2>
        <p style="color: #64748b; max-width: 600px; margin: 10px auto 0;">Sistem Pencatatan dan Informasi Penghargaan Siswa Berprestasi Hibatullah IIBS.</p>
      </div>
      
      <!-- Dashboard Stats -->
      <div class="db-stats">
        <div class="db-stat-card">
          <div class="dbs-icon" style="background:#e0f2fe; color:#0ea5e9;"><i class="fas fa-chart-line"></i></div>
          <div class="dbs-info">
            <span class="dbs-label">Total Prestasi</span>
            <strong class="dbs-val" id="statTotal">0</strong>
          </div>
        </div>
        <div class="db-stat-card">
          <div class="dbs-icon" style="background:#fef3c7; color:#d97706;"><i class="fas fa-medal"></i></div>
          <div class="dbs-info">
            <span class="dbs-label">Peraih Emas (Juara 1)</span>
            <strong class="dbs-val" id="statGold">0</strong>
          </div>
        </div>
        <div class="db-stat-card">
          <div class="dbs-icon" style="background:#f3e8ff; color:#9333ea;"><i class="fas fa-users"></i></div>
          <div class="dbs-info">
            <span class="dbs-label">Total Santri Tampil</span>
            <strong class="dbs-val" id="statSantri">0</strong>
          </div>
        </div>
      </div>
      
      <!-- Search & Table Wrap -->
      <div class="db-table-wrapper">
        <div class="db-toolbar">
          <h3 class="db-title"><i class="fas fa-table"></i> Direktori Penghargaan</h3>
          <div class="db-search">
            <i class="fas fa-search"></i>
            <input type="text" id="searchPrestasi" placeholder="Cari nama santri atau lomba..." />
          </div>
        </div>
        
        <div class="table-responsive">
          <table class="db-table" id="prestasiTable">
            <thead>
              <tr>
                <th width="5%">No</th>
                <th width="35%">Nama Santri</th>
                <th width="25%">Cabang Lomba</th>
                <th width="15%">Tingkat</th>
                <th width="20%">Pencapaian</th>
              </tr>
            </thead>
            <tbody id="prestasiTableBody">
              <!-- Data Javascript -->
            </tbody>
          </table>
        </div>
        <div id="noDataMessage" style="display:none; text-align:center; padding: 40px; color:#94a3b8; font-weight:500;">
          <i class="fas fa-folder-open" style="font-size:40px; color:#cbd5e1; margin-bottom:10px; display:block;"></i>
          Data tidak ditemukan.
        </div>
      </div>`;

if(html.match(oldRegex)) {
  html = html.replace(oldRegex, newHtml);
  fs.writeFileSync('prestasi-santri.html', html);
  console.log('Updated html to dashboard layout');
} else {
  // Try another approach if the previous regex doesn't match
  const fallbackRegex = /<div class="prestasi-list-container" id="prestasiContainer">[\s\S]*?<\/div>/;
  if(html.match(fallbackRegex)) {
      html = html.replace(/<div class="prestasi-header"[\s\S]*?<\/div>\s*<div class="prestasi-list-container" id="prestasiContainer">[\s\S]*?<\/div>/, newHtml);
      fs.writeFileSync('prestasi-santri.html', html);
      console.log('Updated html to dashboard layout (fallback match)');
  } else {
      console.log('Could not find list container to replace');
  }
}

// 2. CSS APPEND
let css = fs.readFileSync('style.css', 'utf8');

const dashboardCss = `
/* --- DATA DASHBOARD UI --- */
.db-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto 30px;
}
.db-stat-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  border: 1px solid #f1f5f9;
}
.dbs-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.dbs-info {
  display: flex;
  flex-direction: column;
}
.dbs-label {
  font-size: 13px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 2px;
}
.dbs-val {
  font-size: 26px;
  font-weight: 800;
  color: #0f172a;
  line-height: 1;
}

.db-table-wrapper {
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  max-width: 1100px;
  margin: 0 auto;
  border: 1px solid #e2e8f0;
}
.db-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 16px;
}
.db-title {
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 8px;
}
.db-title i { color: #3b82f6; }
.db-search {
  position: relative;
  width: 100%;
  max-width: 350px;
}
.db-search i {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  font-size: 14px;
}
.db-search input {
  width: 100%;
  padding: 12px 16px 12px 42px;
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  font-size: 14px;
  font-family: inherit;
  color: #334155;
  transition: all 0.3s;
  background: #f8fafc;
}
.db-search input:focus {
  outline: none;
  border-color: #3b82f6;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

.db-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
.db-table th {
  background: #f8fafc;
  color: #475569;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 16px;
  text-align: left;
  border-bottom: 2px solid #e2e8f0;
}
.db-table th:first-child { border-top-left-radius: 10px; border-bottom-left-radius: 10px; }
.db-table th:last-child { border-top-right-radius: 10px; border-bottom-right-radius: 10px; }

.db-table td {
  padding: 18px 16px;
  border-bottom: 1px solid #f1f5f9;
  color: #334155;
  font-size: 14.5px;
  vertical-align: middle;
}
.db-table tr {
  transition: background 0.2s;
}
.db-table tbody tr:hover {
  background: #fbfdff;
}
.db-table tbody tr:last-child td { border-bottom: none; }

.dbt-nama-col {
  display: flex;
  align-items: center;
  gap: 12px;
}
.dbt-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e0e7ff;
  color: #4338ca;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 15px;
  flex-shrink: 0;
}
.dbt-nama {
  font-weight: 700;
  color: #0f172a;
}
`;

if (!css.includes('.db-stats')) {
  fs.appendFileSync('style.css', dashboardCss);
  console.log('Appended dashboard CSS');
}

// 3. JAVASCRIPT LOGIC
const jsScript = `document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.getElementById('prestasiTableBody');
  const searchInput = document.getElementById('searchPrestasi');
  const noDataMsg = document.getElementById('noDataMessage');
  const table = document.getElementById('prestasiTable');
  
  const statTotal = document.getElementById('statTotal');
  const statGold = document.getElementById('statGold');
  const statSantri = document.getElementById('statSantri');

  if (!tbody || typeof lombaData === 'undefined') return;

  function renderTable(dataArray) {
    tbody.innerHTML = '';
    
    if (dataArray.length === 0) {
      table.style.display = 'none';
      noDataMsg.style.display = 'block';
      return;
    }
    
    table.style.display = 'table';
    noDataMsg.style.display = 'none';

    dataArray.forEach((data, index) => {
      const tr = document.createElement('tr');
      
      // Initials
      const initials = data.nama.substring(0, 1).toUpperCase();
      
      // Badges
      let juaraBadgeClass = 'p-badge-juara';
      if(String(data.juara).includes('1')) juaraBadgeClass = 'p-badge-gold';
      else if(String(data.juara).includes('2')) juaraBadgeClass = 'p-badge-silver';
      else if(String(data.juara).includes('3')) juaraBadgeClass = 'p-badge-bronze';

      tr.innerHTML = \`
        <td style="color:#94a3b8; font-weight:600;">\${index + 1}</td>
        <td>
          <div class="dbt-nama-col">
            <div class="dbt-avatar">\${initials}</div>
            <span class="dbt-nama">\${data.nama}</span>
          </div>
        </td>
        <td style="font-weight:500; color:#475569;">\${data.lomba}</td>
        <td><span class="p-badge p-badge-tingkat" style="display:inline-flex;">\${data.tingkat}</span></td>
        <td><span class="p-badge \${juaraBadgeClass}" style="display:inline-flex;">Juara \${data.juara}</span></td>
      \`;
      tbody.appendChild(tr);
    });
  }

  function updateStats(dataArray) {
    statTotal.innerText = dataArray.length;
    
    const goldCount = dataArray.filter(d => String(d.juara).includes('1')).length;
    statGold.innerText = goldCount;
    
    const uniqueNames = new Set(dataArray.map(d => d.nama));
    statSantri.innerText = uniqueNames.size;
  }

  // Initial Render
  renderTable(lombaData);
  updateStats(lombaData);

  // Live Search
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = lombaData.filter(d => 
      d.nama.toLowerCase().includes(term) || 
      d.lomba.toLowerCase().includes(term)
    );
    renderTable(filtered);
    updateStats(filtered);
  });
});`;

fs.writeFileSync('prestasi.js', jsScript);
console.log('Rewrote prestasi.js to handle DataTable logic');
