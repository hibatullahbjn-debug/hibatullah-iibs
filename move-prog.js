const fs = require('fs');

try {
  // 1. Get HTML from program.html
  const progHtml = fs.readFileSync('program.html', 'utf8');
  const sectionHtmlMatch = progHtml.match(/<!-- MAIN CONTENT -->\s*(<section class="prog-section">[\s\S]*?<\/section>)/);
  if (!sectionHtmlMatch) throw new Error("Could not find prog-section in program.html");
  const sectionHtml = sectionHtmlMatch[1];

  // 2. Insert into index.html
  let indexHtml = fs.readFileSync('index.html', 'utf8');
  const target = '<!-- MEDIA SOSIAL -->';
  if (!indexHtml.includes(target)) throw new Error("Could not find MEDIA SOSIAL in index.html");
  
  // Only insert if not already there
  if (!indexHtml.includes('class="prog-section"')) {
    indexHtml = indexHtml.replace(target, '<!-- PROGRAM PESANTREN -->\n  ' + sectionHtml + '\n\n  ' + target);
    fs.writeFileSync('index.html', indexHtml);
    console.log('Inserted section into index.html');
  } else {
    console.log('Section already exists in index.html');
  }

  // 3. Extract CSS from program.html and put in style.css
  const cssMatch = progHtml.match(/\/\* MAIN SECTION \*\/([\s\S]*?)\/\* CTA \*\//);
  if (cssMatch) {
    let cssToAdd = '\n/* --- PROGRAM PESANTREN SECTION --- */\n' + cssMatch[1];
    cssToAdd += `
@media (max-width: 900px) {
  .prog-card-layout { grid-template-columns: 1fr; }
  .prog-img-card { min-height: 280px; }
}
@media (max-width: 480px) {
  .prog-content-card { padding: 24px 20px; }
}
`;
    const styleCss = fs.readFileSync('style.css', 'utf8');
    if (!styleCss.includes('.prog-card-layout')) {
      fs.appendFileSync('style.css', cssToAdd);
      console.log('Appended CSS to style.css');
    } else {
      console.log('CSS already exists in style.css');
    }
  }

} catch (e) {
  console.error(e);
}
