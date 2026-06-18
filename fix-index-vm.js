const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const regex = /<!-- HOME VISI MISI -->[\s\S]*?<\/section>/;
const replacement = `<!-- HOME VISI MISI -->
  <section class="home-visi-misi reveal">
    <div class="hvm-inner">
      <h2 class="hvm-title">Visi &amp; Misi <span>Hibatullah IIBS</span></h2>
      <div class="hvm-single-card">
        <div class="hvm-part-visi">
          <div class="hvm-card-header">
            <i class="fas fa-eye"></i>
            <h3>Visi</h3>
          </div>
          <p>"Menjadi lembaga pendidikan unggul dalam menyiapkan generasi beradab dan memiliki kemampuan berkarya pada tahun 2030."</p>
        </div>
        
        <hr class="hvm-divider">

        <div class="hvm-part-misi">
          <div class="hvm-card-header">
            <i class="fas fa-bullseye"></i>
            <h3>Misi</h3>
          </div>
          <ul>
            <li>Menyelenggarakan sistem pesantren modern berbasis penanaman adab—akhlak mulia.</li>
            <li>Mengimplementasikan pendidikan yang inovatif guna menggali dan mengembangkan potensi setiap peserta didik.</li>
            <li>Menciptakan kultur literasi untuk meningkatkan kemampuan berkarya, berpikir kritis, kreatif, dan inovatif.</li>
            <li>Melaksanakan pengelolaan pendidikan yang profesional.</li>
          </ul>
        </div>

        <hr class="hvm-divider">

        <div class="hvm-part-motto">
          <div class="hvm-card-header">
            <i class="fas fa-quote-left"></i>
            <h3>Motto</h3>
          </div>
          <ul>
            <li><strong style="color: #e8a020;">BERADAB</strong> - Generasi rabbani yang memahami dan mengamalkan Al Qur'an dan Hadis dalam kehidupan.</li>
            <li><strong style="color: #e8a020;">BERKARYA</strong> - Memiliki kapasitas pribadi yang kreatif dan inovatif sehingga dapat memberi manfaat bagi diri, keluarga, bangsa, dan agama.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>`;

if (regex.test(html)) {
  html = html.replace(regex, replacement);
  fs.writeFileSync('index.html', html);
  console.log('Fixed index.html Visi Misi and Motto');
} else {
  console.log('Could not find HOME VISI MISI section');
}
