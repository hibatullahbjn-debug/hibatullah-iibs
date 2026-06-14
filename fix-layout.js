const fs = require('fs');
let html = fs.readFileSync('program.html', 'utf8');

// Use regex to find and replace the grid rules in program.html
html = html.replace(/display:\s*grid;\s*grid-template-columns:\s*420px 1fr;/g, 'display: block;');
html = html.replace(/grid-template-columns:\s*1fr;/g, '');

fs.writeFileSync('program.html', html);
console.log('Fixed program.html grid layout');
