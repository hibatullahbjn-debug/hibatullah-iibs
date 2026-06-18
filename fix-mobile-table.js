const fs = require('fs');

// 1. UPDATE PRESTASI.JS TO INCLUDE data-label
let js = fs.readFileSync('prestasi.js', 'utf8');

const oldTr = \`      tr.innerHTML = \\\`
        <td style="color:#94a3b8; font-weight:600;">\\\${index + 1}</td>
        <td>
          <div class="dbt-nama-col">
            <div class="dbt-avatar">\\\${initials}</div>
            <span class="dbt-nama">\\\${data.nama}</span>
          </div>
        </td>
        <td style="font-weight:500; color:#475569;">\\\${data.lomba}</td>
        <td><span class="p-badge p-badge-tingkat" style="display:inline-flex;">\\\${data.tingkat}</span></td>
        <td><span class="p-badge \\\${juaraBadgeClass}" style="display:inline-flex;">Juara \\\${data.juara}</span></td>
      \\\`;\`;

const newTr = \`      tr.innerHTML = \\\`
        <td data-label="No" style="color:#94a3b8; font-weight:600;">\\\${index + 1}</td>
        <td data-label="Nama Santri">
          <div class="dbt-nama-col">
            <div class="dbt-avatar">\\\${initials}</div>
            <span class="dbt-nama" style="text-align:left;">\\\${data.nama}</span>
          </div>
        </td>
        <td data-label="Cabang Lomba" style="font-weight:500; color:#475569;">\\\${data.lomba}</td>
        <td data-label="Tingkat"><span class="p-badge p-badge-tingkat" style="display:inline-flex;">\\\${data.tingkat}</span></td>
        <td data-label="Pencapaian"><span class="p-badge \\\${juaraBadgeClass}" style="display:inline-flex;">Juara \\\${data.juara}</span></td>
      \\\`;\`;

if (js.includes('<td style="color:#94a3b8; font-weight:600;">')) {
    js = js.replace(/tr\.innerHTML = `[\s\S]*?`;/, newTr);
    fs.writeFileSync('prestasi.js', js);
    console.log('Updated prestasi.js with data-label attributes');
} else {
    console.log('Could not find innerHTML string in prestasi.js');
}

// 2. APPEND RESPONSIVE TABLE CSS
let css = fs.readFileSync('style.css', 'utf8');
const mobileCss = \`
/* --- RESPONSIVE MOBILE TABLE --- */
@media (max-width: 768px) {
  .table-responsive {
    overflow-x: hidden !important; /* Disable horizontal scroll entirely */
  }
  .db-table thead {
    display: none;
  }
  .db-table, .db-table tbody, .db-table tr, .db-table td {
    display: block;
    width: 100%;
  }
  .db-table tr {
    margin-bottom: 16px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background: #fff;
    padding: 8px 16px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.02);
  }
  .db-table td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f1f5f9;
    padding: 12px 0;
    text-align: right;
  }
  .db-table td:last-child {
    border-bottom: none;
  }
  .db-table td::before {
    content: attr(data-label);
    font-size: 11.5px;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    text-align: left;
    margin-right: 16px;
    flex-shrink: 0;
  }
  .db-table td[data-label="No"] {
    display: none; /* Hide numbering on mobile to save space */
  }
  .dbt-nama-col {
    flex-direction: row-reverse;
    gap: 10px;
    justify-content: flex-start;
  }
  .dbt-nama {
    text-align: right !important;
  }
}
\`;

if (!css.includes('/* --- RESPONSIVE MOBILE TABLE --- */')) {
    fs.appendFileSync('style.css', mobileCss);
    console.log('Appended mobile table CSS to style.css');
}
