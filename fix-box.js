const fs = require('fs');

// 1. Update style.css to make the box not "terlalu jauh" (too wide/spaced out)
let styleCss = fs.readFileSync('style.css', 'utf8');

// Change .prog-card-layout to be centered and narrower
styleCss = styleCss.replace(/\.prog-card-layout {\s*display: block;/, `.prog-card-layout { 
      display: block;
      max-width: 800px;
      margin: 0 auto;`);

// Reduce gap between sections
styleCss = styleCss.replace(/\.prog-content-card {[\s\S]*?}/, `.prog-content-card {
      padding: 32px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }`);

fs.writeFileSync('style.css', styleCss);
console.log('Updated style.css');

// 2. Add the "Selengkapnya" button to index.html ONLY
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Check if button already exists to avoid duplicates
if (!indexHtml.includes('>Selengkapnya</a>')) {
  const btnHtml = `
            <!-- Tombol Selengkapnya -->
            <div style="text-align: center; margin-top: 24px;">
              <a href="program.html" class="btn-primary" style="display: inline-block; padding: 12px 32px; background: #3a5bd9; color: #fff; font-weight: 700; border-radius: 50px; text-decoration: none; box-shadow: 0 4px 12px rgba(58, 91, 217, 0.3);">Lihat Selengkapnya</a>
            </div>
          </div>
          <!-- END REGULER/NON REGULER WRAPPER -->`;
          
  // We need to inject it before the closing </div> of .prog-content-card
  indexHtml = indexHtml.replace(/(<\/div>\s*<\/section>)/, (match) => {
    return `  <div style="text-align: center; margin-top: 20px; padding-bottom: 10px;">
              <a href="program.html" style="display: inline-block; padding: 12px 36px; background-color: #3a5bd9; color: #fff; font-weight: 700; border-radius: 50px; text-decoration: none; box-shadow: 0 4px 15px rgba(58, 91, 217, 0.3); transition: transform 0.3s ease;">Selengkapnya</a>
            </div>
          </div>
        </section>`;
  });
  
  fs.writeFileSync('index.html', indexHtml);
  console.log('Added Selengkapnya button to index.html');
}
