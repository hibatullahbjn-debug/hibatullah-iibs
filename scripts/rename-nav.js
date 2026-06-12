const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const files = fs.readdirSync(root).filter(f => f.endsWith('.html'));

let changed = 0;

files.forEach(f => {
  const fp = path.join(root, f);
  let content = fs.readFileSync(fp, 'utf8');
  const orig = content;

  // 1. Rename "SMP Hibatullah" navbar item -> "Hibatullah IIBS"
  content = content.replace(
    /SMP Hibatullah\s*<i class="fas fa-chevron-down"><\/i>/g,
    'Hibatullah IIBS <i class="fas fa-chevron-down"></i>'
  );

  // 2. Rename the OLD "Hibatullah IIBS" dropdown (the one with sejarah/penasehat/stakeholders) -> "History"
  // This is the SECOND occurrence of a dropdown that contains sejarah.html
  // We target it by looking for the pattern: "Hibatullah IIBS <i" followed by sejarah.html
  content = content.replace(
    /([\s\S]*?Hibatullah IIBS <i class="fas fa-chevron-down"><\/i>[\s\S]*?)Hibatullah IIBS\s*<i class="fas fa-chevron-down"><\/i>([\s\S]*?sejarah\.html)/,
    '$1History <i class="fas fa-chevron-down"></i>$2'
  );

  if (content !== orig) {
    fs.writeFileSync(fp, content);
    changed++;
    console.log('Updated:', f);
  }
});

// Also update mobile-nav.js
const mnPath = path.join(root, 'mobile-nav.js');
let mnContent = fs.readFileSync(mnPath, 'utf8');
const mnOrig = mnContent;

// Rename SMP Hibatullah -> Hibatullah IIBS in mobile nav
mnContent = mnContent.replace(
  /SMP Hibatullah/g,
  'Hibatullah IIBS'
);

// Rename the second Hibatullah IIBS group (the one with sejarah) -> History
// In mobile-nav.js, groups are identified by their title
// Find pattern: first occurrence = keep as Hibatullah IIBS, second = rename to History
let count = 0;
mnContent = mnContent.replace(/Hibatullah IIBS<\/p>/g, (match) => {
  count++;
  if (count === 2) return 'History</p>';
  return match;
});

if (mnContent !== mnOrig) {
  fs.writeFileSync(mnPath, mnContent);
  console.log('Updated: mobile-nav.js');
}

console.log(`Done. ${changed} HTML files updated.`);
