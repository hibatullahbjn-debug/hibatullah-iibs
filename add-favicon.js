const fs = require('fs');
const path = require('path');

// 1. Rename logo
if (fs.existsSync('Logo only.png') && !fs.existsSync('favicon.png')) {
    fs.copyFileSync('Logo only.png', 'favicon.png');
    console.log('Copied Logo only.png to favicon.png');
}

// 2. Add favicon to all HTML files
const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') || f.endsWith('.php'));
let count = 0;
for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('rel="icon"')) {
        content = content.replace(/<\/head>/i, '  <link rel="icon" href="favicon.png" type="image/png" />\n</head>');
        fs.writeFileSync(file, content);
        count++;
    }
}
console.log('Updated ' + count + ' files with favicon link.');
