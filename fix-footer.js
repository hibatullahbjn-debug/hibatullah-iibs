const fs = require('fs');

let js = fs.readFileSync('site-footer.js', 'utf8');

const targetStr = "'<li><a href=\"program-unggulan-sdih.html#prog-tahsin\" target=\"_blank\"><span class=\"sf-prog-icon\" style=\"background:rgba(232,160,32,0.2);color:#f0c040\"><i class=\"fas fa-quran\"></i></span> Tahsin & Tahfidz Al Qur\\'an</a></li>' +";
const replacementStr = "'<li><a href=\"program-unggulan-sdih.html#prog-tahsin\" target=\"_blank\"><span class=\"sf-prog-icon\" style=\"background:rgba(232,160,32,0.2);color:#f0c040\"><i class=\"fas fa-quran\"></i></span> Tahsin & Tahfidz Al Qur\\'an</a></li>' +".replace("Qur\\'an", "Qur\\'an"); // Actually I just need to output a single slash. Let's write the string with double quotes.

const newStr = '"<li><a href=\\"program-unggulan-sdih.html#prog-tahsin\\" target=\\"_blank\\"><span class=\\"sf-prog-icon\\" style=\\"background:rgba(232,160,32,0.2);color:#f0c040\\"><i class=\\"fas fa-quran\\"></i></span> Tahsin & Tahfidz Al Qur\\'an</a></li>" +';

// We just replace the line using split
const lines = js.split('\\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Tahsin & Tahfidz Al Qur')) {
    lines[i] = '            ' + newStr;
  }
}

fs.writeFileSync('site-footer.js', lines.join('\\n'));
console.log('Fixed syntax error cleanly');
