const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const targetStr = `  #slide-1 .hero-students {
    background-position: center bottom !important;
  }`;

const injection = `  #slide-1 .hero-students {
    background-position: center bottom !important;
  }
  
  #slide-2 .hero-bg-wrap {
    background-position: 80% center !important;
  }
  
  #slide-3 .hero-bg-wrap {
    background-position: 85% center !important;
  }
  
  #slide-4 .hero-bg-wrap {
    background-position: 80% center !important;
  }`;

css = css.replace(targetStr, injection);
fs.writeFileSync('style.css', css);
console.log('Appended slide specific background positions');

let html = fs.readFileSync('index.html', 'utf8');
const newVersion = Date.now().toString();
html = html.replace(/style\.css\?v=[0-9\-]+/g, `style.css?v=${newVersion}`);
fs.writeFileSync('index.html', html);
console.log('Updated cache buster');
