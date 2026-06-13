const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');
const ROOT = path.join(__dirname, '..');

// Ekstensi file yang akan disalin
const EXTENSIONS = ['.html', '.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp', '.woff', '.woff2', '.ttf', '.eot', '.mp4'];

// Folder & file yang diabaikan
const IGNORE = ['node_modules', '.git', '.vscode', 'dist', 'scripts', 'package.json', 'package-lock.json', '.gitignore'];

function cleanDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    if (IGNORE.includes(entry.name)) continue;

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        fs.copyFileSync(srcPath, destPath);
        fileCount++;
      }
    }
  }
}

let fileCount = 0;

console.log('');
console.log('========================================');
console.log('  BUILD — Hibatullah IIBS Website');
console.log('========================================');
console.log('');
console.log('Membersihkan folder dist/...');
cleanDir(DIST);

console.log('Menyalin file website ke dist/...');
copyRecursive(ROOT, DIST);

console.log('');
console.log(`✅ Build selesai! ${fileCount} file disalin ke folder dist/`);
console.log('');
console.log('Selanjutnya, upload SEMUA isi folder dist/ ke');
console.log('Hostinger File Manager → public_html');
console.log('========================================');
console.log('');
