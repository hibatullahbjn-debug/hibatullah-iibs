const fs = require('fs');

const htmlContent = `
  <!-- MAIN RAPOT -->
  <section class="rapot-section">
    <div class="rapot-container">
      
      <!-- Search Form -->
      <div class="rapot-search-card">
        <h2>Pencarian Data Santri</h2>
        <p>Masukkan Nama Santri (lengkap) atau NISN untuk melihat hasil evaluasi akademik.</p>
        <form id="rapotSearchForm" class="rapot-form">
          <input type="text" id="searchInput" placeholder="Masukkan Nama Lengkap atau NISN" required />
          <button type="submit" class="btn-search-rapot"><i class="fas fa-search"></i> Cari Data</button>
        </form>
        <div id="searchError" style="color: #e74c3c; margin-top: 15px; font-weight: 600; display: none;">Data santri tidak ditemukan. Pastikan ejaan nama atau NISN sudah benar.</div>
      </div>

      <!-- Result Area (Hidden initially) -->
      <div id="rapotResult" class="rapot-result" style="display: none;">
        
        <!-- Student Info Card -->
        <div class="student-info-card reveal">
          <div class="student-avatar">
            <i class="fas fa-user-graduate"></i>
          </div>
          <div class="student-details">
            <h3 id="studentName">Ahmad Fulan bin Fulan</h3>
            <div class="student-meta">
              <span><i class="fas fa-id-card"></i> NIS/NISN: <strong id="studentNisn">123456789</strong></span>
              <span><i class="fas fa-school"></i> Kelas: <strong id="studentClass">Kelas SMP</strong></span>
              <span><i class="fas fa-calendar-alt"></i> Tahun Ajaran: <strong>2025/2026</strong></span>
            </div>
          </div>
        </div>

        <!-- Semester Tabs -->
        <div class="semester-tabs reveal">
          <button type="button" class="semester-tab active" data-target="semester1">Semester 1 (Ganjil)</button>
          <button type="button" class="semester-tab" data-target="semester2">Semester 2 (Genap)</button>
        </div>

        <!-- Semester 1 Content -->
        <div id="semester1" class="semester-content active reveal">
          <div class="table-responsive">
            <table class="rapot-table" id="rapotTable">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Mata Pelajaran</th>
                  <th>Nilai Akhir</th>
                </tr>
              </thead>
              <tbody id="rapotTableBody">
                <!-- Data akan diisi oleh Javascript -->
              </tbody>
            </table>
          </div>
          
          <div class="rapot-footer-grid" style="margin-top: 20px;">
            <div class="attendance-card" style="text-align:center;">
              <h4 style="display:block; border-bottom: none; margin-bottom: 5px;">Jumlah Total Nilai</h4>
              <strong style="font-size: 28px; color: #3a5bd9;" id="studentTotal">0</strong>
            </div>
            <div class="attendance-card" style="text-align:center;">
              <h4 style="display:block; border-bottom: none; margin-bottom: 5px;">Rata-rata Nilai</h4>
              <strong style="font-size: 28px; color: #27ae60;" id="studentAvg">0</strong>
            </div>
            <div class="attendance-card" style="text-align:center;">
              <h4 style="display:block; border-bottom: none; margin-bottom: 5px;">Peringkat (Rank)</h4>
              <strong style="font-size: 28px; color: #f59e0b;" id="studentRank">-</strong>
            </div>
          </div>
        </div>

        <!-- Semester 2 Content -->
        <div id="semester2" class="semester-content reveal">
           <div class="empty-state">
             <i class="fas fa-lock"></i>
             <h3>Belum Tersedia</h3>
             <p>Data Semester 2 belum tersedia atau masa penilaian belum selesai.</p>
           </div>
        </div>

      </div> <!-- end result -->

    </div>
  </section>
`;

let targetFile = 'rapot-santri.html';
let content = fs.readFileSync(targetFile, 'utf8');

// Replace everything between <!-- MAIN RAPOT --> or <!-- MAIN --> and </section>
let startIndex = content.indexOf('<!-- MAIN RAPOT -->');
if (startIndex === -1) startIndex = content.indexOf('<!-- MAIN -->');

if(startIndex !== -1) {
  const searchSectionEnd = content.indexOf('</section>', startIndex);
  if(searchSectionEnd !== -1) {
    const endIndex = searchSectionEnd + '</section>'.length;
    content = content.substring(0, startIndex) + htmlContent + content.substring(endIndex);
  }
}

fs.writeFileSync(targetFile, content);
console.log('HTML updated');
