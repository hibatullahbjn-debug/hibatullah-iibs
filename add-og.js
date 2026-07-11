const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
const tags = `
  <!-- SEO & OpenGraph Meta Tags -->
  <meta name="description" content="Pendidikan Islam Berkualitas Internasional. Program unggulan tahfidz, bilingual, dan pembinaan karakter untuk mencetak generasi muslim yang berdaya saing." />
  <meta name="thumbnail" content="https://hibatullah.sch.id/assets/images/poster-pmb-elfan.jpeg" />
  <meta property="og:title" content="Hibatullah IIBS - International Islamic Boarding School" />
  <meta property="og:description" content="Pendidikan Islam Berkualitas Internasional. Program unggulan tahfidz, bilingual, dan pembinaan karakter untuk mencetak generasi muslim yang berdaya saing." />
  <meta property="og:image" content="https://hibatullah.sch.id/assets/images/poster-pmb-elfan.jpeg" />
  <meta property="og:url" content="https://hibatullah.sch.id" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://hibatullah.sch.id/assets/images/poster-pmb-elfan.jpeg" />
`;
if (!content.includes('og:title')) {
    content = content.replace('</head>', tags + '</head>');
    fs.writeFileSync('index.html', content);
    console.log('Tags added');
}
