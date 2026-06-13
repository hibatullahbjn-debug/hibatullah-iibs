const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html') && !f.includes('firebase-seed'));

const btnRegex = /<a href="login\.html" class="nav-item btn-masuk-akun" style="padding: 8px 16px;">Masuk Akun<\/a>/g;
const btnRegex2 = /<div class="nav-item has-dropdown btn-masuk-akun">[\s\S]*?<\/div>\s*<\/div>/g;

let count = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  if (content.match(btnRegex)) {
    content = content.replace(btnRegex, '');
    changed = true;
  }
  if (content.match(btnRegex2)) {
    content = content.replace(btnRegex2, '');
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(file, content);
    count++;
  }
});
console.log(`Removed Masuk Akun from ${count} files.`);
