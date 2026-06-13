const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const oldCss = `.hvm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.hvm-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(26, 58, 107, 0.08);
  border-top: 4px solid #1a3a6b;
  transition: transform 0.3s;
}
.hvm-card:hover {
  transform: translateY(-5px);
}
.hvm-card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}
.hvm-card-header i {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 20px;
}
.hvm-card:nth-child(1) { border-top-color: #3b82f6; }
.hvm-card:nth-child(1) .hvm-card-header i {
  color: #ffffff;
  background: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
.hvm-card:nth-child(1) .hvm-card-header h3 {
  color: #3b82f6;
}
.hvm-card:nth-child(2) { border-top-color: #f59e0b; }
.hvm-card:nth-child(2) .hvm-card-header i {
  color: #ffffff;
  background: #f59e0b;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}
.hvm-card-header h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}
.hvm-single-card p {
  color: #4b5563;
  line-height: 1.8;
  font-size: 16px;
  margin: 0;
}
.hvm-single-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.hvm-single-card ul li {
  color: #4b5563;
  line-height: 1.8;
  font-size: 15px;
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
}
.hvm-single-card ul li::before {
  content: '•';
  color: #f59e0b;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 24px;
  line-height: 1.2;
}`;

const newCss = `.hvm-single-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(26, 58, 107, 0.08);
  border-top: 4px solid #3b82f6;
  transition: transform 0.3s;
  text-align: left;
}
.hvm-single-card:hover {
  transform: translateY(-5px);
}
.hvm-divider {
  border: 0;
  height: 1px;
  background: #eee;
  margin: 32px 0;
}
.hvm-part-visi .hvm-card-header i {
  color: #ffffff;
  background: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
.hvm-part-visi .hvm-card-header h3 {
  color: #3b82f6;
}
.hvm-part-misi .hvm-card-header i {
  color: #ffffff;
  background: #f59e0b;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
}
.hvm-part-misi .hvm-card-header h3 {
  color: #f59e0b;
}
.hvm-card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}
.hvm-card-header i {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 20px;
}
.hvm-card-header h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}
.hvm-part-visi p {
  color: #4b5563;
  line-height: 1.8;
  font-size: 16px;
  margin: 0;
}
.hvm-part-misi ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.hvm-part-misi ul li {
  color: #4b5563;
  line-height: 1.8;
  font-size: 15px;
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
}
.hvm-part-misi ul li::before {
  content: '•';
  color: #f59e0b;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 24px;
  line-height: 1.2;
}`;

css = css.replace(oldCss, newCss);
fs.writeFileSync('style.css', css);
