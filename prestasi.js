document.addEventListener('DOMContentLoaded', () => {
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
      tr.className = 'animated-list-item';
      tr.style.animationDelay = `${index * 0.05}s`;
      
      // Badges
      let juaraBadgeClass = 'p-badge-juara';
      if(String(data.juara).includes('1')) juaraBadgeClass = 'p-badge-gold';
      else if(String(data.juara).includes('2')) juaraBadgeClass = 'p-badge-silver';
      else if(String(data.juara).includes('3')) juaraBadgeClass = 'p-badge-bronze';

      tr.innerHTML = `
        <td data-label="No" style="color:#94a3b8; font-weight:600;">${index + 1}</td>
        <td data-label="Nama Santri">
          <div class="dbt-nama-col">
            <span class="dbt-nama" style="text-align:left;">${data.nama}</span>
          </div>
        </td>
        <td data-label="Cabang Lomba" style="font-weight:500; color:#475569;">${data.lomba}</td>
        <td data-label="Tingkat"><span class="p-badge p-badge-tingkat" style="display:inline-flex;">${data.tingkat}</span></td>
        <td data-label="Pencapaian"><span class="p-badge ${juaraBadgeClass}" style="display:inline-flex;">Juara ${data.juara}</span></td>
      `;
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
});