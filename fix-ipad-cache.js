const fs = require('fs');

// 1. Update style.css media query from 1024 to 1200
let css = fs.readFileSync('style.css', 'utf8');
css = css.replace(/@media \(min-width: 769px\) and \(max-width: 1024px\)/g, '@media (min-width: 769px) and (max-width: 1200px)');
fs.writeFileSync('style.css', css);
console.log('Updated style.css media query up to 1200px');

// 2. Update cache buster in index.html
let html = fs.readFileSync('index.html', 'utf8');
const newVersion = Date.now().toString(); // always unique
html = html.replace(/style\.css\?v=[0-9\-]+/g, `style.css?v=${newVersion}`);
fs.writeFileSync('index.html', html);
console.log('Updated cache buster in index.html');
