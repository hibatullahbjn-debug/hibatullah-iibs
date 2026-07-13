const fs = require('fs');
let css = fs.readFileSync('ppdb.css', 'utf8');

const startTag = '/* NEO-BRUTALIST UI UPGRADES FOR LOKASI */';

if (css.includes(startTag)) {
    const startIndex = css.indexOf(startTag);
    // Remove everything from the start tag to the end of the file
    css = css.substring(0, startIndex);
    
    // Add the new premium UI styles
    const premiumStyles = `
/* PREMIUM MODERN UI UPGRADES FOR LOKASI */
.ppdb-lokasi .lokasi-info-item {
  border: 1px solid rgba(26,58,107,0.06) !important;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(13,33,73,0.05) !important;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.ppdb-lokasi .lokasi-info-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(13,33,73,0.12) !important;
}

.ppdb-lokasi .lii-icon {
  border: none;
  box-shadow: none;
  background: #fff1e5 !important;
  color: #ff7b00 !important;
  border-radius: 12px;
}

.ppdb-lokasi .lokasi-btn-maps {
  border: none;
  background: linear-gradient(135deg, #1a56db, #0d2149);
  box-shadow: 0 8px 20px rgba(26,86,219,0.25);
  border-radius: 12px;
  font-weight: 700;
  transition: all 0.3s ease;
}
.ppdb-lokasi .lokasi-btn-wa {
  border: none;
  background: linear-gradient(135deg, #25d366, #1da851);
  box-shadow: 0 8px 20px rgba(37,211,102,0.25);
  border-radius: 12px;
  font-weight: 700;
  transition: all 0.3s ease;
}
.ppdb-lokasi .lokasi-btn-maps:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(26,86,219,0.35);
  background: linear-gradient(135deg, #2563b0, #1a3a6b);
}
.ppdb-lokasi .lokasi-btn-wa:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(37,211,102,0.35);
  background: linear-gradient(135deg, #27ae60, #25d366);
}

/* Premium maps iframe container */
.ppdb-lokasi .lokasi-map-wrap {
  border-radius: 20px;
  overflow: hidden;
  padding: 8px;
  background: #fff;
  box-shadow: 0 15px 45px rgba(13,33,73,0.06);
  border: 1px solid rgba(26,58,107,0.06);
  transition: all 0.4s ease;
}
.ppdb-lokasi .lokasi-map-wrap:hover {
  box-shadow: 0 25px 60px rgba(13,33,73,0.12);
  transform: translateY(-4px);
}
.ppdb-lokasi .lokasi-map-wrap iframe {
  border: none !important;
  border-radius: 14px !important;
  box-shadow: none !important;
  display: block;
  width: 100%;
}
`;
    css += premiumStyles;
    fs.writeFileSync('ppdb.css', css);
    console.log('Swapped Neo-brutalism for Premium Modern UI!');
} else {
    console.log('Could not find the Neo-brutalist block in ppdb.css');
}
