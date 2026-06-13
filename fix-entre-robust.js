const fs = require('fs');

let html = fs.readFileSync('entrepreneurship.html', 'utf8');

// Match from <div class="ep-hero-visual"> up to its closing </div>
const oldVisualRegex = /<div class="ep-hero-visual">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

// Actually, let's be more precise.
const specificVisualRegex = /<div class="ep-hero-visual">[\s\S]*?<div class="ep-hero-img-wrap">[\s\S]*?<\/div>[\s\S]*?<\/div>[\s\S]*?<\/div>/;

// Let's just use string replace with substring index to be extremely safe
const startTag = '<div class="ep-hero-visual">';
const endTag = '<!-- ===========================';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
  const newVisual = `      <div class="ep-hero-visual">
        <div class="ep-hero-img-wrap" style="border-radius: 16px; overflow: hidden; box-shadow: 0 15px 35px rgba(26,58,107,0.2);">
          <img src="assets/images/3.jpg.jpeg" alt="Kewirausahaan" style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 4/3;" />
        </div>
      </div>
    </div>
  </section>

  `;

  html = html.substring(0, startIndex) + newVisual + html.substring(endIndex);
  fs.writeFileSync('entrepreneurship.html', html);
  console.log('Successfully replaced entrepreneurship visual!');
} else {
  console.log('Could not find tags in entrepreneurship.html');
}
