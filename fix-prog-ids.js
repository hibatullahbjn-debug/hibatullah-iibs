const fs = require('fs');

let html = fs.readFileSync('program-unggulan-sdih.html', 'utf8');

const idList = [
  'id="prog-language"',
  'id="prog-leadership"',
  'id="prog-publicspeaking"',
  'id="prog-entrepreneurship"',
  'id="prog-lifeskill"'
];

let i = 0;
// We start from index 220 since line 210 is already updated for prog-tahsin
html = html.substring(0, 215) + html.substring(215).replace(/<div class="pu-prog-card">/g, (match) => {
  if (i < idList.length) {
    const replacement = `<div class="pu-prog-card" ${idList[i]}>`;
    i++;
    return replacement;
  }
  return match;
});

fs.writeFileSync('program-unggulan-sdih.html', html);
console.log('Added IDs to program-unggulan-sdih.html');
