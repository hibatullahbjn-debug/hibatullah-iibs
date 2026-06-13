const fs = require('fs');

let html = fs.readFileSync('entrepreneurship.html', 'utf8');

const statsRegex = /<div class="ep-hero-stats">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div class="ep-hero-btns">/;

const statsStart = html.indexOf('<div class="ep-hero-stats">');
const btnsStart = html.indexOf('<div class="ep-hero-btns">');

if (statsStart !== -1 && btnsStart !== -1) {
  html = html.substring(0, statsStart) + html.substring(btnsStart);
  fs.writeFileSync('entrepreneurship.html', html);
  console.log('Successfully deleted the stats box!');
} else {
  console.log('Error: Could not find stats box.');
}
