const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // 1. Remove the previously added top-level item
  const topLevelRegex = /[ \t]*<a href="#" class="nav-item">Jenjang Pendidikan SMP<\/a>\r?\n/g;
  if (topLevelRegex.test(content)) {
    content = content.replace(topLevelRegex, '');
    modified = true;
  }

  // 2. Add it inside the Hibatullah IIBS dropdown
  // Target: <div class="dropdown">\n            <a href="kurikulum-sdih.html">Kurikulum</a>
  const dropdownRegex = /(<div class="nav-item has-dropdown">\s*Hibatullah IIBS <i class="fas fa-chevron-down"><\/i>\s*<div class="dropdown">)/g;
  
  if (dropdownRegex.test(content)) {
    // Only add if not already there
    if (!content.includes('>Jenjang Pendidikan SMP</a>') || modified) {
      content = content.replace(dropdownRegex, '$1\n            <a href="#">Jenjang Pendidikan SMP</a>');
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
