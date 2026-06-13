const fs = require('fs');

let template = fs.readFileSync('galeri.html', 'utf8');

// remove everything between <!-- HERO GALERI --> and <!-- FOOTER -->
const startIndex = template.indexOf('<!-- BREADCRUMB -->');
const endIndex = template.indexOf('<!-- FOOTER -->');

const before = template.substring(0, startIndex);
const after = template.substring(endIndex);

const loginMain = `
  <!-- LOGIN BREADCRUMB -->
  <div class="galeri-breadcrumb" style="background: #1a3a6b;">
    <div class="galeri-breadcrumb-inner">
      <i class="fas fa-home"></i>
      <a href="index.html">Beranda</a>
      <i class="fas fa-chevron-right"></i>
      <span>Masuk Akun</span>
    </div>
  </div>

  <!-- LOGIN SECTION -->
  <section style="min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 60px 20px; background: #f8fafc;">
    <div style="background: #fff; width: 100%; max-width: 450px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); overflow: hidden;">
      
      <!-- HEADER -->
      <div style="background: #1a3a6b; padding: 30px 20px; text-align: center; color: #fff; border-bottom: 4px solid #f0c040;">
        <h2 style="margin: 0; font-size: 24px; font-weight: 700;">Masuk Akun</h2>
        <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.8;">Hibatullah International Islamic Boarding School</p>
      </div>

      <!-- BODY -->
      <div style="padding: 30px;">
        
        <!-- Toggle Tabs -->
        <div style="display: flex; border-bottom: 1px solid #e2e8f0; margin-bottom: 24px;">
          <button id="tab-login" onclick="switchTab('login')" style="flex: 1; background: none; border: none; padding: 12px; font-weight: 600; color: #1a3a6b; border-bottom: 3px solid #1a3a6b; cursor: pointer; font-family: 'Poppins', sans-serif;">Login</button>
          <button id="tab-daftar" onclick="switchTab('daftar')" style="flex: 1; background: none; border: none; padding: 12px; font-weight: 600; color: #94a3b8; border-bottom: 3px solid transparent; cursor: pointer; font-family: 'Poppins', sans-serif;">Daftar</button>
        </div>

        <!-- LOGIN FORM -->
        <div id="form-login">
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 13px; font-weight: 600; color: #1e293b; margin-bottom: 6px;">Email</label>
            <input type="email" placeholder="Masukkan email Anda" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-family: 'Poppins', sans-serif; box-sizing: border-box; outline: none;" />
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 13px; font-weight: 600; color: #1e293b; margin-bottom: 6px;">Password</label>
            <input type="password" placeholder="Masukkan password Anda" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-family: 'Poppins', sans-serif; box-sizing: border-box; outline: none;" />
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; font-size: 13px;">
            <label style="display: flex; align-items: center; gap: 6px; color: #64748b; cursor: pointer;">
              <input type="checkbox" /> Ingat saya
            </label>
            <a href="#" style="color: #f0c040; font-weight: 600; text-decoration: none;">Lupa Password?</a>
          </div>
          <button style="width: 100%; background: #1a3a6b; color: #fff; border: none; padding: 14px; border-radius: 6px; font-weight: 600; font-family: 'Poppins', sans-serif; cursor: pointer; transition: 0.2s;">
            Login Sekarang
          </button>

          <div style="margin: 24px 0; text-align: center; position: relative;">
            <hr style="border: none; border-top: 1px solid #e2e8f0;" />
            <span style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: #fff; padding: 0 10px; font-size: 12px; color: #94a3b8;">Atau masuk dengan</span>
          </div>

          <button onclick="window.location.href='index.html'" style="width: 100%; background: #fff; color: #475569; border: 1px solid #cbd5e1; padding: 12px; border-radius: 6px; font-weight: 600; font-family: 'Poppins', sans-serif; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: 0.2s;">
            <i class="fab fa-google" style="color: #ea4335;"></i> Google
          </button>
        </div>

        <!-- DAFTAR FORM -->
        <div id="form-daftar" style="display: none;">
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 13px; font-weight: 600; color: #1e293b; margin-bottom: 6px;">Nama Lengkap</label>
            <input type="text" placeholder="Nama lengkap Anda" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-family: 'Poppins', sans-serif; box-sizing: border-box; outline: none;" />
          </div>
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 13px; font-weight: 600; color: #1e293b; margin-bottom: 6px;">Email</label>
            <input type="email" placeholder="Alamat email aktif" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-family: 'Poppins', sans-serif; box-sizing: border-box; outline: none;" />
          </div>
          <div style="margin-bottom: 24px;">
            <label style="display: block; font-size: 13px; font-weight: 600; color: #1e293b; margin-bottom: 6px;">Password</label>
            <input type="password" placeholder="Buat password baru" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-family: 'Poppins', sans-serif; box-sizing: border-box; outline: none;" />
          </div>
          <button style="width: 100%; background: #f0c040; color: #1a3a6b; border: none; padding: 14px; border-radius: 6px; font-weight: 700; font-family: 'Poppins', sans-serif; cursor: pointer; transition: 0.2s;">
            Daftar Sekarang
          </button>
        </div>

      </div>
    </div>
  </section>

  <script>
    function switchTab(tab) {
      document.getElementById('form-login').style.display = tab === 'login' ? 'block' : 'none';
      document.getElementById('form-daftar').style.display = tab === 'daftar' ? 'block' : 'none';
      
      var tabLogin = document.getElementById('tab-login');
      var tabDaftar = document.getElementById('tab-daftar');
      
      if(tab === 'login') {
        tabLogin.style.color = '#1a3a6b';
        tabLogin.style.borderBottomColor = '#1a3a6b';
        tabDaftar.style.color = '#94a3b8';
        tabDaftar.style.borderBottomColor = 'transparent';
      } else {
        tabDaftar.style.color = '#f0c040';
        tabDaftar.style.borderBottomColor = '#f0c040';
        tabLogin.style.color = '#94a3b8';
        tabLogin.style.borderBottomColor = 'transparent';
      }
    }
  </script>
`;

// we also need to change <title>
let out = before + loginMain + after;
out = out.replace('<title>Galeri - Hibatullah IIBS</title>', '<title>Masuk Akun - Hibatullah IIBS</title>');

// We also need to fix the navbar inside login.html and ALL other html files.
// Let's replace the dropdown with a simple link.
const dropdownRegex = /<div class="nav-item has-dropdown btn-masuk-akun">[\s\S]*?<\/div>\s*<\/div>/g;
const newLink = `<a href="login.html" class="nav-item btn-masuk-akun" style="padding: 8px 16px;">Masuk Akun</a>`;

out = out.replace(dropdownRegex, newLink);

fs.writeFileSync('login.html', out);
console.log('Created login.html');
