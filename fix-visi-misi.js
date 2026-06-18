const fs = require('fs');

let html = fs.readFileSync('visi-misi-sdih.html', 'utf8');

const replacementStr = `          <div class="sdih-visi-header">
            <div class="sdih-visi-icon"><i class="fas fa-eye"></i></div>
            <h3>Visi</h3>
          </div>
          <p class="sdih-visi-text">"Menjadi lembaga pendidikan unggul dalam menyiapkan generasi beradab dan memiliki kemampuan berkarya pada tahun 2030."</p>
        </div>

        <hr class="sdih-vm-divider">

        <!-- MISI -->
        <div class="sdih-vm-part">
          <div class="sdih-misi-header">
            <div class="sdih-misi-icon"><i class="fas fa-bullseye"></i></div>
            <h3>Misi</h3>
          </div>
          <ul class="sdih-misi-list">
            <li>Menyelenggarakan sistem pesantren modern berbasis penanaman adab—akhlak mulia.</li>
            <li>Mengimplementasikan pendidikan yang inovatif guna menggali dan mengembangkan potensi setiap peserta didik.</li>
            <li>Menciptakan kultur literasi untuk meningkatkan kemampuan berkarya, berpikir kritis, kreatif, dan inovatif.</li>
            <li>Melaksanakan pengelolaan pendidikan yang profesional.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- NILAI-NILAI SECTION -->
  <section class="sdih-nilai-section">
    <div class="sdih-sec-inner" style="position:relative;z-index:1">
      <div class="sdih-sec-label white"><span></span> NILAI-NILAI KAMI <span></span></div>
      <h2 class="sdih-sec-title white">Nilai-Nilai <span style="color:#7eb8f7">SMP Hibatullah</span></h2>
      <p class="sdih-sec-sub" style="color:rgba(255,255,255,0.65)">Empat pilar nilai yang menjadi fondasi karakter setiap siswa kami</p>
      <div class="sdih-nilai-grid">`;

// Instead of string literal exact match, use regex to match from <div class="sdih-visi-header"> down to <div class="sdih-nilai-grid">
const regex = /<div class="sdih-visi-header">[\s\S]*?<div class="sdih-nilai-grid">/;
html = html.replace(regex, replacementStr);

fs.writeFileSync('visi-misi-sdih.html', html);
console.log('Fixed visi-misi-sdih.html with regex');
