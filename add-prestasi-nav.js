const fs = require('fs');
const path = require('path');

const searchString = '<a href="rapot-santri.html">Rapot Santri</a>';
const replaceString = '<a href="rapot-santri.html">Rapot Santri</a>\n            <a href="prestasi-santri.html">Data Prestasi</a>';

function updateFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules') continue;
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isFile() && file.endsWith('.html')) {
            let content = fs.readFileSync(filePath, 'utf8');
            if (content.includes(searchString) && !content.includes('prestasi-santri.html')) {
                content = content.replace(new RegExp(searchString, 'g'), replaceString);
                fs.writeFileSync(filePath, content);
                console.log('Updated ' + file);
            }
        }
    }
}

updateFiles('.');
