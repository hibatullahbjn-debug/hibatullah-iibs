const fs = require('fs');

let html = fs.readFileSync('entrepreneurship.html', 'utf8');

const oldImage = 'assets/images/header-sdih.jpeg';
const newImage = 'assets/images/3.jpg.jpeg';

if (html.includes(oldImage)) {
  html = html.replace(oldImage, newImage);
  fs.writeFileSync('entrepreneurship.html', html);
  console.log('Fixed broken image!');
} else {
  console.log('Could not find broken image path');
}
