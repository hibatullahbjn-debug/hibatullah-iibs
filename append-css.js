const fs = require('fs');

const cssToAdd = `
/* --- FIX FOR VISI MISI HOME PAGE --- */
.hvm-single-card {
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
  content: '\\2022';
  color: #f59e0b;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 24px;
  line-height: 1.2;
}
`;

fs.appendFileSync('style.css', cssToAdd);
