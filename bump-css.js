const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const time = new Date().getTime();

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/style\.css\?v=\d+/g, `style.css?v=${time}`);
  fs.writeFileSync(file, content);
});

console.log('Bumped style.css version');
