const fs = require('fs');
let css = fs.readFileSync('ppdb.css', 'utf8');

const targetOld1 = `.ppdb-feat-strip {
  position: relative; z-index: 20;
  background: #fff;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
}`;

const replaceNew1 = `.ppdb-feat-strip {
  position: relative; z-index: 20;
  background: linear-gradient(135deg, #ff7b00, #f5b027); /* Vibrant Orange matching logo */
  box-shadow: 0 15px 35px rgba(255,123,0,0.2);
  padding: 35px 0;
}`;

const targetOld2 = `.ppdb-feat-strip-inner {
  max-width: 1100px; margin: 0 auto; padding: 0 24px;
  display: grid; grid-template-columns: repeat(4,1fr);
}`;

const replaceNew2 = `.ppdb-feat-strip-inner {
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  display: grid; grid-template-columns: repeat(4,1fr);
  gap: 24px;
}`;

const targetOld3 = `.pfs-item {
  display: flex; align-items: center; gap: 14px;
  padding: 22px 20px;
  border-right: 1px solid #eee;
}`;

const replaceNew3 = `.pfs-item {
  display: flex; align-items: center; gap: 14px;
  padding: 22px 24px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  border-right: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.pfs-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}`;

css = css.replace(targetOld1, replaceNew1);
css = css.replace(targetOld2, replaceNew2);
css = css.replace(targetOld3, replaceNew3);

fs.writeFileSync('ppdb.css', css);
console.log('Feature Strip UI upgraded successfully!');
