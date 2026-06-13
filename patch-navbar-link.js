const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && !f.includes('firebase-seed'));

const dropdownRegex = /<div class="nav-item has-dropdown btn-masuk-akun">[\s\S]*?<\/div>\s*<\/div>/g;
const newLink = `<a href="login.html" class="nav-item btn-masuk-akun" style="padding: 8px 16px;">Masuk Akun</a>`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.match(dropdownRegex)) {
    content = content.replace(dropdownRegex, newLink);
    fs.writeFileSync(file, content);
  }
});
console.log('Patched navbars to direct link');
