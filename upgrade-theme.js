const fs = require('fs');
let css = fs.readFileSync('ppdb.css', 'utf8');

// The new palette:
// Deep Blue: #0d2149
// Vibrant Blue: #1a56db
// Bright Orange: #ff7b00
// Soft Orange: #ff9d42
// Gold/Yellow-Orange: #f5b027

// 1. Update Hero Gradient to a very premium deep blue gradient
css = css.replace(
  /background: linear-gradient\(135deg, #0a1f5c 0%, #1a3a6b 45%, #1e4d8c 75%, #2563b0 100%\);/g,
  'background: linear-gradient(135deg, #061129 0%, #0d2149 50%, #1a3a6b 100%);'
);

// 2. Replace feature strip colors
// From: .pfs-icon.orange { background: #fff3e0; color: #e8a020; }
//       .pfs-icon.green { background: #e8f8ee; color: #27ae60; }
//       .pfs-icon.purple { background: #f3e8ff; color: #8e44ad; }
css = css.replace(/\.pfs-icon\.orange \{ background: #[a-f0-9]+; color: #[a-f0-9]+; \}/g, '.pfs-icon.orange { background: #fff1e5; color: #ff7b00; }');
css = css.replace(/\.pfs-icon\.green \{ background: #[a-f0-9]+; color: #[a-f0-9]+; \}/g, '.pfs-icon.green { background: #e5f0ff; color: #1a56db; }');
css = css.replace(/\.pfs-icon\.purple \{ background: #[a-f0-9]+; color: #[a-f0-9]+; \}/g, '.pfs-icon.purple { background: #fff8e5; color: #f5b027; }');
// primary icon
css = css.replace(/\.pfs-icon \{[^\}]+\}/g, (match) => {
    return match.replace('#e8f0fe', '#e5f0ff').replace('#1a3a6b', '#1a56db');
});

// 3. Kenapa Memilih section colors
// .kenapa-icon-wrap.red { background: #fde8e8; color: #c0392b; }
css = css.replace(/\.kenapa-icon-wrap\.red \{ background: #[a-f0-9]+; color: #[a-f0-9]+; \}/g, '.kenapa-icon-wrap.red { background: #fff1e5; color: #ff7b00; }');
css = css.replace(/\.kenapa-icon-wrap\.blue \{ background: #[a-f0-9]+; color: #[a-f0-9]+; \}/g, '.kenapa-icon-wrap.blue { background: #e5f0ff; color: #1a56db; }');
css = css.replace(/\.kenapa-icon-wrap\.orange \{ background: #[a-f0-9]+; color: #[a-f0-9]+; \}/g, '.kenapa-icon-wrap.orange { background: #fff8e5; color: #f5b027; }');
css = css.replace(/\.kenapa-icon-wrap\.green \{ background: #[a-f0-9]+; color: #[a-f0-9]+; \}/g, '.kenapa-icon-wrap.green { background: #ffeae5; color: #ff5722; }'); // using a deeper orange instead of green

// 4. Update the section labels (the small tags like "KEUNGGULAN KAMI")
css = css.replace(/\.ppdb-sec-label \{[^\}]+\}/g, (match) => {
    return match.replace('#3a5bd9', '#ff7b00').replace('#eef2ff', '#fff1e5');
});
css = css.replace(/\.ppdb-sec-label span \{[^\}]+\}/g, (match) => {
    return match.replace('#3a5bd9', '#ff7b00');
});

// 5. Update primary buttons to a vibrant orange gradient
css = css.replace(/\.ph-btn-primary \{([^}]+)\}/g, (match, p1) => {
    let newProps = p1.replace(/background:\s*[^;]+;/, 'background: linear-gradient(135deg, #ff9d42, #ff7b00);');
    newProps = newProps.replace(/color:\s*[^;]+;/, 'color: #fff;');
    if (!newProps.includes('box-shadow')) {
        newProps += ' box-shadow: 0 10px 20px rgba(255,123,0,0.3); border: none;';
    }
    return `.ph-btn-primary {${newProps}}`;
});
css = css.replace(/\.ph-btn-primary:hover \{([^}]+)\}/g, (match, p1) => {
    let newProps = p1.replace(/background:\s*[^;]+;/, 'background: linear-gradient(135deg, #ff7b00, #e66a00);');
    newProps = newProps.replace(/color:\s*[^;]+;/, 'color: #fff;');
    newProps = newProps.replace(/box-shadow:\s*[^;]+;/, 'box-shadow: 0 15px 25px rgba(255,123,0,0.4);');
    return `.ph-btn-primary:hover {${newProps}}`;
});

// 6. Fix Hero title blue color to Orange
css = css.replace(/\.ph-blue \{ color: #7eb8f7; \}/g, '.ph-blue { color: #ff9d42; text-shadow: 0 2px 10px rgba(255,157,66,0.4); }');

// 7. General Box Shadow enhancements for Cards to look more modern
css = css.replace(/box-shadow: 0 4px 15px rgba\(0,0,0,0\.05\);/g, 'box-shadow: 0 15px 35px rgba(13,33,73,0.05); border: 1px solid rgba(26,58,107,0.05); transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);');
css = css.replace(/box-shadow: 0 10px 25px rgba\(0,0,0,0\.08\);/g, 'box-shadow: 0 25px 50px rgba(13,33,73,0.1); transform: translateY(-8px);');

// 8. Make Program Tabs orange/blue
css = css.replace(/\.prog-tab\.active \{[^\}]+\}/g, '.prog-tab.active { background: #ff7b00; color: #fff; box-shadow: 0 8px 15px rgba(255,123,0,0.3); }');

// 9. Fasilitas items icons
css = css.replace(/\.f-icon \{[^\}]+\}/g, (match) => {
    return match.replace('#1a3a6b', '#1a56db').replace('#e8eef8', '#e5f0ff');
});

// 10. Update Section Titles highlight color
css = css.replace(/\.ppdb-sec-title span \{[^\}]+\}/g, (match) => {
    return match.replace('#1a3a6b', '#1a56db');
});

// 11. Add a global font-family rule to ensure Poppins is used everywhere in PPDB
if (!css.includes("font-family: 'Poppins'")) {
    css = `body { font-family: 'Poppins', sans-serif; }\n` + css;
}

fs.writeFileSync('ppdb.css', css);
console.log('PPDB CSS Theme Upgraded to Orange & Blue Premium!');
