const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// I will inject a specific rule for slide-1 into the portrait media query to keep it centered
const targetString = `background-position: 85% bottom !important;
    background-repeat: no-repeat !important;
    z-index: 0 !important;
  }`;

const injection = `background-position: 85% bottom !important;
    background-repeat: no-repeat !important;
    z-index: 0 !important;
  }
  
  /* specifically center slide 1 */
  #slide-1 .hero-bg-wrap {
    background-position: center top !important;
  }
  #slide-1 .hero-students {
    background-position: center bottom !important;
  }`;

css = css.replace(targetString, injection);
fs.writeFileSync('style.css', css);
console.log('Fixed slide-1 portrait background position to center');

let html = fs.readFileSync('index.html', 'utf8');
const newVersion = Date.now().toString();
html = html.replace(/style\.css\?v=[0-9\-]+/g, `style.css?v=${newVersion}`);
fs.writeFileSync('index.html', html);
console.log('Updated cache buster');
