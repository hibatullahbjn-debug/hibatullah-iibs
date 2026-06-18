const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// The butchered part is right after `.hvm-part-visi .hvm-card-header i { color: #ffffff; background: #3b82f6;`
// And goes until `font-style: italic; font-weight: 500; margin: 0;`

// Let's use a regex to replace that area
const regex = /\.hvm-part-visi \.hvm-card-header i \{\s*color: #ffffff;\s*background: #3b82f6;\s*font-style: italic;/g;

const replacement = `.hvm-part-visi .hvm-card-header i {
  color: #ffffff;
  background: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
.hvm-part-visi .hvm-card-header h3 {
  color: #3b82f6;
}
.hvm-part-misi .hvm-card-header i {
  color: #ffffff;
  background: #f59e0b;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}
.hvm-part-misi .hvm-card-header h3 {
  color: #f59e0b;
}
.hvm-part-motto .hvm-card-header i {
  color: #ffffff;
  background: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
.hvm-part-motto .hvm-card-header h3 {
  color: #3b82f6;
}
.hvm-part-visi p {
  color: #334155;
  line-height: 1.85;
  font-size: 18px;
  font-style: italic;`;

if (regex.test(css)) {
  css = css.replace(regex, replacement);
  fs.writeFileSync('style.css', css);
  console.log('Restored and updated style.css');
} else {
  console.log('Could not find the damaged area to replace');
}
