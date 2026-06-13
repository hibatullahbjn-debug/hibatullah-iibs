const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

// Match the entire <header class="navbar"> ... </header> block instead of just <nav>, 
// so the logo and links are 100% identical.
const headerMatch = indexHtml.match(/<header class="navbar">([\s\S]*?)<\/header>/);
if (!headerMatch) {
  console.error("Header not found in index.html");
  process.exit(1);
}
const newHeader = headerMatch[0];

let changedCount = 0;
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const f of files) {
  if (f === 'index.html') continue;
  
  let html = fs.readFileSync(f, 'utf8');
  const oldHeaderMatch = html.match(/<header class="navbar">([\s\S]*?)<\/header>/);
  
  if (oldHeaderMatch) {
    if (oldHeaderMatch[0] !== newHeader) {
      html = html.replace(oldHeaderMatch[0], newHeader);
      fs.writeFileSync(f, html);
      changedCount++;
      console.log('Updated ' + f);
    }
  }
}

console.log('Total files updated: ' + changedCount);
