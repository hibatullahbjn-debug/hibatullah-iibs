const fs = require('fs');
let html = fs.readFileSync('berita-pesantren.html', 'utf8');

html = html.replace('<title>Berita Pesantren Hibatullah - Hibatullah IIBS</title>', '<title>Berita Hibatullah - Hibatullah IIBS</title>');
html = html.replace('<span>Berita Pesantren</span>', '<span>Berita Hibatullah</span>');
html = html.replace('<h1>Berita Pesantren <span>Hibatullah</span></h1>', '<h1>Berita <span>Hibatullah</span></h1>');
html = html.replace('<p>Kumpulan berita dan informasi terbaru seputar kegiatan, prestasi, dan aktivitas Pesantren Hibatullah IIBS.</p>', '<p>Kumpulan berita dan informasi terbaru seputar kegiatan, prestasi, dan aktivitas Hibatullah IIBS.</p>');

fs.writeFileSync('berita-pesantren.html', html);
