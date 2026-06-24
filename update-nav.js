const fs = require('fs');
const path = require('path');

const dir = 'd:/hibatullah iibs';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  content = content.replace(/<div class="topbar">[\s\S]*?(?=<!-- NAVBAR -->|<header class="navbar">)/g, '');
  content = content.replace(/<!-- NAVBAR -->[\s\S]*?<\/header>/g, '');
  content = content.replace(/<header class="navbar">[\s\S]*?<\/header>/g, '');

  if (!content.includes('navbar.css')) {
    content = content.replace(/<\/head>/, '  <link rel="stylesheet" href="navbar.css">\n</head>');
  }

  if (!content.includes('navbar.js')) {
    content = content.replace(/<\/body>/, '  <script src="navbar.js"></script>\n</body>');
  }

  if (!content.includes('id="card-nav-root"')) {
    content = content.replace(/<body[^>]*>/, '$&\n  <!-- CARD NAV ROOT -->\n  <div id="card-nav-root"></div>');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + file);
  }
});
