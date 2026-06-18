const fs = require('fs');

// 1. UPDATE rapot-santri.html
let html = fs.readFileSync('rapot-santri.html', 'utf8');

const emptyStateRegex = /<div id="semester2" class="semester-content reveal">[\s\S]*?<\/div>\n\s*<\/div>\n\s*<!-- FOOTER -->/;

const newSemester2Content = `<div id="semester2" class="semester-content reveal">
          <div class="table-responsive">
            <table class="rapot-table" id="rapotTable2">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Mata Pelajaran</th>
                  <th>Nilai Akhir</th>
                </tr>
              </thead>
              <tbody id="rapotTableBody2">
                <!-- Data akan diisi oleh Javascript -->
              </tbody>
            </table>
          </div>
          
          <div class="rapot-footer-grid" style="margin-top: 20px;">
            <div class="attendance-card" style="text-align:center;">
              <h4 style="display:block; border-bottom: none; margin-bottom: 12px; color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;"><i class="fas fa-chart-pie" style="margin-right: 10px; color: #3a5bd9; font-size: 18px;"></i> Total Nilai</h4>
              <strong style="font-size: 36px; font-weight: 800; color: #1e293b;" id="studentTotal2">0</strong>
            </div>
            <div class="attendance-card" style="text-align:center;">
              <h4 style="display:block; border-bottom: none; margin-bottom: 12px; color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;"><i class="fas fa-star" style="margin-right: 10px; color: #27ae60; font-size: 18px;"></i> Rata-rata</h4>
              <strong style="font-size: 36px; font-weight: 800; color: #1e293b;" id="studentAvg2">0</strong>
            </div>
            <div class="attendance-card" style="text-align:center;">
              <h4 style="display:block; border-bottom: none; margin-bottom: 12px; color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;"><i class="fas fa-trophy" style="margin-right: 10px; color: #f59e0b; font-size: 18px;"></i> Peringkat</h4>
              <strong style="font-size: 36px; font-weight: 800; color: #1e293b;" id="studentRank2">-</strong>
            </div>
          </div>
        </div>
      </div>
      
      <!-- FOOTER -->`;

if(html.match(emptyStateRegex)) {
  html = html.replace(emptyStateRegex, newSemester2Content);
  fs.writeFileSync('rapot-santri.html', html);
  console.log('Updated rapot-santri.html to include semester 2 table');
} else {
  console.log('Could not find semester2 empty state in rapot-santri.html');
}

// 2. UPDATE rapot.js
let js = fs.readFileSync('rapot.js', 'utf8');

const oldJsLogic = /if\(foundStudent\) {[\s\S]*?resultArea\.scrollIntoView/m;

const newJsLogic = `if(foundStudent) {
            // Update UI with student data
            document.getElementById('studentName').innerText = foundStudent.nama;
            document.getElementById('studentNisn').innerText = foundStudent.nisn || foundStudent.nis;
            
            // Helper function to populate a semester table
            const populateSemester = (semData, tbodyId, totalId, avgId, rankId) => {
                const tbody = document.getElementById(tbodyId);
                const totalEl = document.getElementById(totalId);
                const avgEl = document.getElementById(avgId);
                const rankEl = document.getElementById(rankId);
                
                tbody.innerHTML = '';
                
                if (!semData) {
                    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center; color:#e74c3c; font-weight:600;">Belum ada data nilai untuk semester ini.</td></tr>';
                    totalEl.innerText = '-';
                    avgEl.innerText = '-';
                    rankEl.innerText = '-';
                    return;
                }
                
                let counter = 1;
                for (const [mapel, nilai] of Object.entries(semData.nilai)) {
                    let badgeClass = 'badge-b';
                    let n = Number(nilai);
                    if(n >= 90) badgeClass = 'badge-a';
                    else if(n >= 80) badgeClass = 'badge-b';
                    else if(n >= 70) badgeClass = 'badge-c';
                    else badgeClass = 'badge-d';

                    const tr = document.createElement('tr');
                    tr.innerHTML = \`
                        <td style="font-weight:600; color:#64748b;">\${counter++}</td>
                        <td style="font-weight:600; color:#1e293b;">\${mapel}</td>
                        <td><span class="badge-predikat \${badgeClass}" style="font-size:15px; padding:6px 16px; display:inline-block; min-width: 50px;">\${nilai}</span></td>
                    \`;
                    tbody.appendChild(tr);
                }
                
                totalEl.innerText = semData.ringkasan.jumlah;
                const avg = Number(semData.ringkasan.rataRata);
                avgEl.innerText = isNaN(avg) ? '-' : avg.toFixed(1);
                rankEl.innerText = semData.ringkasan.peringkat;
            };

            // Populate Semester 1
            populateSemester(foundStudent.semester1, 'rapotTableBody', 'studentTotal', 'studentAvg', 'studentRank');
            
            // Populate Semester 2
            populateSemester(foundStudent.semester2, 'rapotTableBody2', 'studentTotal2', 'studentAvg2', 'studentRank2');

            // Show result
            resultArea.style.display = 'block';
            resultArea.scrollIntoView`;

if (js.match(oldJsLogic)) {
  js = js.replace(oldJsLogic, newJsLogic);
  fs.writeFileSync('rapot.js', js);
  console.log('Updated rapot.js with new semester logic');
} else {
  console.log('Could not find logic in rapot.js to replace');
}
