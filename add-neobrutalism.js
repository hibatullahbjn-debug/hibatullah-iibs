const fs = require('fs');
let css = fs.readFileSync('ppdb.css', 'utf8');

const neoBrutalistStyles = `
/* NEO-BRUTALIST UI UPGRADES FOR LOKASI */
.ppdb-lokasi .lokasi-info-item {
  border: 3px solid #111 !important;
  border-radius: 12px;
  box-shadow: 6px 6px 0px #111 !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.ppdb-lokasi .lokasi-info-item:hover {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0px #111 !important;
}

.ppdb-lokasi .lii-icon {
  border: 2px solid #111;
  box-shadow: 2px 2px 0px #111;
}

.ppdb-lokasi .lokasi-btn-maps,
.ppdb-lokasi .lokasi-btn-wa {
  border: 3px solid #111;
  box-shadow: 5px 5px 0px #111;
  transition: all 0.2s ease;
  font-weight: 800;
}
.ppdb-lokasi .lokasi-btn-maps:hover,
.ppdb-lokasi .lokasi-btn-wa:hover {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0px #111;
}

/* Override maps iframe */
.ppdb-lokasi .lokasi-map-wrap iframe {
  border: 4px solid #111 !important;
  border-radius: 16px !important;
  box-shadow: 8px 8px 0px #111 !important;
  transition: all 0.2s ease;
}
.ppdb-lokasi .lokasi-map-wrap iframe:hover {
  transform: translate(4px, 4px);
  box-shadow: 4px 4px 0px #111 !important;
}
`;

if (!css.includes('NEO-BRUTALIST UI UPGRADES')) {
    css += '\n' + neoBrutalistStyles;
    fs.writeFileSync('ppdb.css', css);
    console.log('Neo-brutalist styles added to Lokasi!');
} else {
    console.log('Styles already present.');
}
