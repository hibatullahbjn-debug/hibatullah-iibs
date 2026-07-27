const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// We will replace "background-position: center 10% !important;" with "background-position: 85% 10% !important;"
css = css.replace(/background-position: center 10% !important;/g, "background-position: 85% 10% !important;");

// We will also replace "background-position: center bottom !important;" in hero-students with "background-position: 85% bottom !important;" for portrait
css = css.replace(/background-position: center bottom !important;/g, "background-position: 85% bottom !important;");

fs.writeFileSync('style.css', css);
console.log('Fixed background position to show faces in portrait');

let html = fs.readFileSync('index.html', 'utf8');
const newVersion = Date.now().toString();
html = html.replace(/style\.css\?v=[0-9\-]+/g, `style.css?v=${newVersion}`);
fs.writeFileSync('index.html', html);
console.log('Updated cache buster');
