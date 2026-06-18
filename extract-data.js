const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('file rapot/Laporan Hasil Belajar.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Read as 2D array to process cleanly
const rawData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

// The header is at row index 3 (0-indexed, so 4th row)
// Data starts at row index 4 (5th row)

const cleanData = [];

for (let i = 0; i < rawData.length; i++) {
  const row = rawData[i];
  if (!row || row.length === 0 || !row[1] || row[1] === 'NIS') continue; // Skip empty rows or header

  const student = {
    nis: String(row[1] || '').trim(),
    nisn: String(row[2] || '').trim(),
    nama: (row[3] || '').trim(),
    nilai: {
      'Pendidikan Agama Islam': row[4] || 0,
      'Pendidikan Kewarganegaraan': row[5] || 0,
      'Bahasa Indonesia': row[6] || 0,
      'Matematika': row[7] || 0,
      'Ilmu Pengetahuan Alam': row[8] || 0,
      'Ilmu Pengetahuan Sosial': row[9] || 0,
      'Bahasa Inggris': row[10] || 0,
      'Prakarya': row[11] || 0,
      'Pendidikan Jasmani & Olahraga': row[12] || 0,
      'Bahasa Jawa': row[13] || 0,
      'Informatika': row[14] || 0
    },
    ringkasan: {
      jumlah: row[15] || 0,
      rataRata: row[16] || 0,
      peringkat: row[17] || 0
    }
  };
  cleanData.push(student);
}

fs.writeFileSync('rapot-data.js', 'const rapotData = ' + JSON.stringify(cleanData, null, 2) + ';');
console.log('Successfully saved ' + cleanData.length + ' students to rapot-data.js');
