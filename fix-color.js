const fs = require('fs');

let html = fs.readFileSync('program-unggulan-sdih.html', 'utf8');

// Replace exactly
html = html.replace('.pu-sec-title span{color:#3a5bd9}', '.pu-sec-title span{color:#3a5bd9}\n.pu-sec-title.white{color:#fff}');

fs.writeFileSync('program-unggulan-sdih.html', html);
console.log('Fixed pu-sec-title.white missing CSS');
