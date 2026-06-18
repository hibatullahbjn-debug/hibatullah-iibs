document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('rapotSearchForm');
  const resultArea = document.getElementById('rapotResult');
  const errorArea = document.getElementById('searchError');
  const tabs = document.querySelectorAll('.semester-tab');
  const contents = document.querySelectorAll('.semester-content');
  
  // rapotData is loaded globally from rapot-data.js

  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput').value.trim();
      const nisnInput = document.getElementById('nisnInput').value.trim();
      const btn = form.querySelector('button');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mencari...';
      btn.disabled = true;
      errorArea.style.display = 'none';
      resultArea.style.display = 'none';
      
      // Simulate network request delay
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        if(!searchInput || !nisnInput) return;

        // Search in data
        const queryLower = searchInput.toLowerCase();
        let foundStudent = null;

        for(let i = 0; i < rapotData.length; i++) {
           const s = rapotData[i];
           // Remove leading zeros for number comparison to handle Excel stripping them
           const cleanSearchNisn = nisnInput.replace(/^0+/, '');
           const cleanNisn = s.nisn.replace(/^0+/, '');
           const cleanNis = s.nis.replace(/^0+/, '');
           
           const nameMatches = s.nama.toLowerCase() === queryLower;
           const nisnMatches = (cleanNisn === cleanSearchNisn) || (cleanNis === cleanSearchNisn);
           
           if(nameMatches && nisnMatches) {
               foundStudent = s;
               break;
           }
        }

        if(foundStudent) {
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
                    tr.innerHTML = `
                        <td style="font-weight:600; color:#64748b;">${counter++}</td>
                        <td style="font-weight:600; color:#1e293b;">${mapel}</td>
                        <td><span class="badge-predikat ${badgeClass}" style="font-size:15px; padding:6px 16px; display:inline-block; min-width: 50px;">${nilai}</span></td>
                    `;
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
            resultArea.scrollIntoView({behavior: 'smooth', block: 'start'});
        } else {
            // Show error
            errorArea.style.display = 'block';
        }

      }, 800);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      
      this.classList.add('active');
      const targetId = this.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if(targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});
