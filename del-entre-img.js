const fs = require('fs');

let html = fs.readFileSync('entrepreneurship.html', 'utf8');

const oldVisualRegex = /<div class="ep-hero-visual">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

// Since I just set it exactly to:
const exactVisual = `      <div class="ep-hero-visual">
        <div class="ep-hero-img-wrap" style="border-radius: 16px; overflow: hidden; box-shadow: 0 15px 35px rgba(26,58,107,0.2);">
          <img src="assets/images/3.jpg.jpeg" alt="Kewirausahaan" style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 4/3;" />
        </div>
      </div>`;

html = html.replace(/\r\n/g, '\n');

if (html.includes(exactVisual)) {
  html = html.replace(exactVisual, '');
  fs.writeFileSync('entrepreneurship.html', html);
  console.log('Successfully deleted the image box!');
} else {
  console.log('Error: Could not find exact box to delete.');
}
