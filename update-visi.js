const fs = require('fs');

// 1. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
const oldIndexText = `Menjadi sekolah dasar Islam unggulan yang mencetak generasi Qur'ani, berakhlak mulia, cerdas, dan berwawasan global`;
const newText = `Menjadi lembaga pendidikan unggul dalam menyiapkan generasi yang beradab dan memiliki kemampuan berkarya`;

if (indexHtml.includes(oldIndexText)) {
    indexHtml = indexHtml.replace(oldIndexText, newText);
    fs.writeFileSync('index.html', indexHtml);
    console.log('Updated index.html Visi');
} else {
    console.log('Could not find old text in index.html');
}

// 2. Update visi-misi-sdih.html
let visiHtml = fs.readFileSync('visi-misi-sdih.html', 'utf8');
const oldVisiText = `"Menjadi lembaga pendidikan unggul dalam menyiapkan generasi beradab dan memiliki kemampuan berkarya."`;
const newVisiText = `"Menjadi lembaga pendidikan unggul dalam menyiapkan generasi yang beradab dan memiliki kemampuan berkarya."`;

if (visiHtml.includes(oldVisiText)) {
    visiHtml = visiHtml.replace(oldVisiText, newVisiText);
    fs.writeFileSync('visi-misi-sdih.html', visiHtml);
    console.log('Updated visi-misi-sdih.html Visi');
} else {
    // Try without the period just in case
    const oldVisiText2 = `"Menjadi lembaga pendidikan unggul dalam menyiapkan generasi beradab dan memiliki kemampuan berkarya"`;
    const newVisiText2 = `"Menjadi lembaga pendidikan unggul dalam menyiapkan generasi yang beradab dan memiliki kemampuan berkarya"`;
    if (visiHtml.includes(oldVisiText2)) {
        visiHtml = visiHtml.replace(oldVisiText2, newVisiText2);
        fs.writeFileSync('visi-misi-sdih.html', visiHtml);
        console.log('Updated visi-misi-sdih.html Visi (without period)');
    } else {
        console.log('Could not find old text in visi-misi-sdih.html');
    }
}
