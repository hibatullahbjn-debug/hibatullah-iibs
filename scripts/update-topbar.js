const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const files = fs.readdirSync(root).filter(f => f.endsWith('.html'));

let changed = 0;

files.forEach(f => {
  const fp = path.join(root, f);
  let content = fs.readFileSync(fp, 'utf8');
  const orig = content;

  // Replace topbar email with website link
  content = content.replace(
    /<a href="mailto:hibatullah\.sch\.id@gmail\.com" class="topbar-link">\s*<i class="far fa-envelope"><\/i> hibatullah\.sch\.id@gmail\.com/g,
    '<a href="https://hibatullah.sch.id" class="topbar-link" target="_blank" rel="noopener">\n          <i class="fas fa-globe"></i> hibatullah.sch.id'
  );

  if (content !== orig) {
    fs.writeFileSync(fp, content);
    changed++;
  }
});

// Also update site-footer.js
const footerPath = path.join(root, 'site-footer.js');
if (fs.existsSync(footerPath)) {
  let footer = fs.readFileSync(footerPath, 'utf8');
  // Just in case they want the footer email to also be website link
  footer = footer.replace(/email:\s*'hibatullah\.sch\.id@gmail\.com'/, "email: 'hibatullah.sch.id'");
  footer = footer.replace(/<i class="fas fa-envelope"><\/i><\/span><a href="mailto:' \+ esc\(k\.email\) \+ '" data-sf-email>/, '<i class="fas fa-globe"></i></span><a href="https://' + "hibatullah.sch.id" + '" target="_blank" rel="noopener" data-sf-email>');
  
  fs.writeFileSync(footerPath, footer);
  console.log('Updated site-footer.js');
}

console.log(`Updated topbar in ${changed} HTML files.`);
