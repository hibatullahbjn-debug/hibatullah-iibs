const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const regex = /\s*<span class="hp-tag"[^>]*>.*?<\/span>/g;
html = html.replace(regex, '');

fs.writeFileSync('index.html', html);
console.log('Removed all hp-tags from index.html');
