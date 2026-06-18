const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

// Replace .hvm-part-misi ul selectors with both .hvm-part-misi ul and .hvm-part-motto ul
css = css.replace('.hvm-part-misi ul {', '.hvm-part-misi ul,\n.hvm-part-motto ul {');
css = css.replace('.hvm-part-misi ul li {', '.hvm-part-misi ul li,\n.hvm-part-motto ul li {');
css = css.replace('.hvm-part-misi ul li::before {', '.hvm-part-misi ul li::before,\n.hvm-part-motto ul li::before {');

// Add Motto header styling right after Misi header styling
const targetStr = `.hvm-part-misi .hvm-card-header h3 {
  color: #f59e0b;
}`;

const replacementStr = `.hvm-part-misi .hvm-card-header h3 {
  color: #f59e0b;
}
.hvm-part-motto .hvm-card-header i {
  color: #ffffff;
  background: #8b5cf6;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}
.hvm-part-motto .hvm-card-header h3 {
  color: #8b5cf6;
}`;

if (css.includes(targetStr)) {
  css = css.replace(targetStr, replacementStr);
  fs.writeFileSync('style.css', css);
  console.log('Successfully updated style.css for motto');
} else {
  console.log('Failed to find target string in style.css');
}
