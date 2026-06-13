const fs = require('fs');
const path = require('path');

const directory = '.';

// Define target block using regex with more flexible matching
const searchPattern = /<div class="dropdown">\s*<a href="sekolah\.html"[^>]*>Sekolah<\/a>\s*<a href="program\.html"[^>]*>Program<\/a>\s*<a href="asrama\.html"[^>]*>Asrama<\/a>\s*<a href="kurikulum\.html"[^>]*>Kurikulum<\/a>\s*<a href="regulasi-harian\.html"[^>]*>Regulasi Harian<\/a>\s*<\/div>/g;

const replacementBlock = `<div class="dropdown">
            <a href="program.html">Program</a>
            <a href="asrama.html">Fasilitas Asrama</a>
            <a href="sekolah.html">Fasilitas Sekolah</a>
            <a href="kurikulum.html">Kurikulum</a>
            <a href="regulasi-harian.html">Regulasi Harian</a>
          </div>`;

fs.readdirSync(directory).forEach(file => {
    if (file.endsWith('.html')) {
        const filepath = path.join(directory, file);
        let content = fs.readFileSync(filepath, 'utf8');
        
        if (searchPattern.test(content)) {
            const newContent = content.replace(searchPattern, replacementBlock);
            fs.writeFileSync(filepath, newContent, 'utf8');
            console.log(`Updated navbar in ${file} (pass 2)`);
        }
    }
});
