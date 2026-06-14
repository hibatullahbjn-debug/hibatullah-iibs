const fs = require('fs');

// Remove from all HTML files
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
let htmlCount = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const ctaRegex = /<!--.*?CTA.*?-->\s*<section class="[\w-]+-cta">[\s\S]*?<\/section>/gi;
  if (content.match(ctaRegex)) {
    content = content.replace(ctaRegex, '');
    fs.writeFileSync(file, content);
    htmlCount++;
  } else {
    // some might not have <!-- CTA --> comment
    const ctaRegex2 = /<section class="[\w-]+-cta">[\s\S]*?<\/section>/gi;
    if (content.match(ctaRegex2)) {
      content = content.replace(ctaRegex2, '');
      fs.writeFileSync(file, content);
      htmlCount++;
    }
  }
});
console.log(`Removed CTA from ${htmlCount} HTML files.`);

// Remove from asrama-page.js
try {
  let asrama = fs.readFileSync('asrama-page.js', 'utf8');
  const asramaCta = /'<section class="as-cta">'\s*\+[\s\S]*?'<\/section>';/g;
  if (asrama.match(asramaCta)) {
    // remove the trailing + from previous line
    asrama = asrama.replace(/<\/section>'\s*\+\s*'<section class="as-cta">'\s*\+[\s\S]*?'<\/section>';/g, "</section>';");
    fs.writeFileSync('asrama-page.js', asrama);
    console.log('Removed CTA from asrama-page.js');
  }
} catch (e) { console.error(e) }

// Remove from site-footer.js
try {
  let footer = fs.readFileSync('site-footer.js', 'utf8');
  const footerCta = /'<div class="sf-cta-strip">'\s*\+[\s\S]*?'<\/div>'\s*\+\s*'<div class="sf-bottom">'/g;
  if (footer.match(footerCta)) {
    footer = footer.replace(footerCta, "'<div class=\"sf-bottom\">'");
    fs.writeFileSync('site-footer.js', footer);
    console.log('Removed CTA from site-footer.js');
  }
} catch(e) { console.error(e) }
