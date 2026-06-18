const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const regex = /(<a href="index\.html" class="nav-item.*?">Beranda<\/a>)/g;
  
  if (regex.test(content)) {
    // Only add if it's not already there
    if (!content.includes('>Jenjang Pendidikan SMP</a>')) {
      content = content.replace(regex, '$1\n        <a href="#" class="nav-item">Jenjang Pendidikan SMP</a>');
      fs.writeFileSync(file, content);
      console.log(`Updated ${file}`);
    }
  }
});
