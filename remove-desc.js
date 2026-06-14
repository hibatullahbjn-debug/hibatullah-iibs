const fs = require('fs');

function removeDescriptions(file) {
  let html = fs.readFileSync(file, 'utf8');
  // Remove the <p> tags inside the prog-list
  html = html.replace(/(<ul class="prog-list">[\s\S]*?<\/ul>)/g, (match) => {
    return match.replace(/\s*<p>.*?<\/p>/g, '');
  });
  
  // We can optionally keep the <strong> and <div class="prog-text"> wrappers, 
  // they just make the text bold, which looks good.
  fs.writeFileSync(file, html);
  console.log('Removed descriptions from', file);
}

removeDescriptions('index.html');
removeDescriptions('program.html');
