const fs = require('fs');

let html = fs.readFileSync('entrepreneurship.html', 'utf8');

const oldVisual = `      <div class="ep-hero-visual">
        <div class="ep-hero-card-float">
          <div class="ep-float-card fc1">
            <i class="fas fa-lightbulb"></i>
            <span>Inovasi</span>
          </div>
          <div class="ep-float-card fc2">
            <i class="fas fa-chart-line"></i>
            <span>Bisnis</span>
          </div>
          <div class="ep-float-card fc3">
            <i class="fas fa-handshake"></i>
            <span>Kolaborasi</span>
          </div>
          <div class="ep-hero-img-wrap">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80" alt="Entrepreneurship" />
          </div>
        </div>
      </div>`;

const newVisual = `      <div class="ep-hero-visual">
        <div class="ep-hero-img-wrap" style="border-radius: 16px; overflow: hidden; box-shadow: 0 15px 35px rgba(26,58,107,0.2);">
          <img src="assets/images/header-sdih.jpeg" alt="Kewirausahaan" style="width: 100%; height: 100%; object-fit: cover; aspect-ratio: 4/3;" />
        </div>
      </div>`;

if (html.includes(oldVisual)) {
  html = html.replace(oldVisual, newVisual);
  fs.writeFileSync('entrepreneurship.html', html);
  console.log('Successfully replaced exactly.');
} else {
  console.log('Error: Could not find exact block to replace.');
}
