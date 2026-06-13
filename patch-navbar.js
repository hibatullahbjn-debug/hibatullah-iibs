const fs = require('fs');

const css = `
/* MASUK AKUN NAVBAR */
.btn-masuk-akun {
  background: #1a3a6b !important;
  color: #ffffff !important;
  border-radius: 6px;
  padding: 8px 16px !important;
  margin-left: 10px;
}
.btn-masuk-akun:hover {
  background: #0f2548 !important;
}
.btn-masuk-akun i {
  color: #f0c040;
}
.btn-masuk-akun .dropdown {
  background: #ffffff;
  border-top: 3px solid #f0c040;
}
.btn-masuk-akun .dropdown a.btn-login-drop {
  color: #1a3a6b;
  font-weight: 600;
}
.btn-masuk-akun .dropdown a.btn-login-drop:hover {
  background: #e8f0fe;
  color: #1a3a6b;
}
.btn-masuk-akun .dropdown a.btn-daftar-drop {
  color: #f0c040;
  font-weight: 600;
}
.btn-masuk-akun .dropdown a.btn-daftar-drop:hover {
  background: #fff8e1;
  color: #f0c040;
}
`;

fs.appendFileSync('style.css', css);

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && !f.includes('firebase-seed'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  const target = '<a href="galeri.html" class="nav-item">Galeri</a>';
  const replacement = `<a href="galeri.html" class="nav-item">Galeri</a>
        <div class="nav-item has-dropdown btn-masuk-akun">
          Masuk Akun <i class="fas fa-chevron-down"></i>
          <div class="dropdown">
            <a href="#" class="btn-login-drop">Login</a>
            <a href="#" class="btn-daftar-drop">Daftar</a>
          </div>
        </div>`;
  
  // check for exact string to avoid duplicating
  if (content.includes(target) && !content.includes('btn-masuk-akun')) {
    content = content.replace(target, replacement);
    fs.writeFileSync(file, content);
  }
});
console.log('Navbar updated');
