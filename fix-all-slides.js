const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const regex = /\/\* specifically center slide 1 \*\/[\s\S]*?(?=\}\s*\/\* FOR LANDSCAPE)/g;

const explicitSlidePositions = `/* Specific background positions for each slide in portrait mode to ensure faces are not cut off */
  #slide-1 .hero-bg-wrap {
    background-position: center top !important; /* 3 students are in the center */
  }
  #slide-1 .hero-students {
    background-position: center bottom !important;
  }
  
  #slide-2 .hero-bg-wrap {
    background-position: 80% center !important; /* Boy scouts are on the right */
  }
  
  #slide-3 .hero-bg-wrap {
    background-position: 85% center !important; /* Boy with trophy is on the far right */
  }
  
  #slide-4 .hero-bg-wrap {
    background-position: 80% center !important; /* Girls are on the right */
  }
`;

css = css.replace(regex, explicitSlidePositions);
fs.writeFileSync('style.css', css);
console.log('Applied explicit background positions for all slides in portrait mode');

let html = fs.readFileSync('index.html', 'utf8');
const newVersion = Date.now().toString();
html = html.replace(/style\.css\?v=[0-9\-]+/g, `style.css?v=${newVersion}`);
fs.writeFileSync('index.html', html);
console.log('Updated cache buster');
