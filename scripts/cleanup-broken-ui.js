/**
 * Hapus footer lama & menu mobile duplikat dari semua halaman HTML.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const FOOTER_PLACEHOLDER =
  '  <footer id="site-footer" class="site-footer" aria-label="Footer situs"></footer>\n';

const files = fs.readdirSync(root).filter((f) => f.endsWith('.html'));

files.forEach((file) => {
  const fp = path.join(root, file);
  let html = fs.readFileSync(fp, 'utf8');
  let changed = false;

  if (html.includes('<!-- MOBILE HAMBURGER -->')) {
    html = html.replace(
      /\s*<!-- MOBILE HAMBURGER -->[\s\S]*?getElementById\('mobileMenuBtn'\)[\s\S]*?<\/script>\s*/g,
      '\n'
    );
    changed = true;
  }

  if (/<footer class="ppdb-footer">/.test(html)) {
    html = html.replace(/<footer class="ppdb-footer">[\s\S]*?<\/footer>/g, FOOTER_PLACEHOLDER.trim());
    changed = true;
  }

  if (/<footer class="footer">/.test(html)) {
    html = html.replace(/<footer class="footer">[\s\S]*?<\/footer>/g, FOOTER_PLACEHOLDER.trim());
    changed = true;
  }

  if (!html.includes('footer.css') && html.includes('style.css')) {
    html = html.replace(
      /<link rel="stylesheet" href="style\.css" \/>/,
      '<link rel="stylesheet" href="style.css" />\n  <link rel="stylesheet" href="footer.css" />'
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(fp, html, 'utf8');
    console.log('Updated:', file);
  }
});

console.log('Done.');
