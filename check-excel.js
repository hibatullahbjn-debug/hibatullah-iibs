const xlsx = require('xlsx');

const workbook2 = xlsx.readFile('file rapot/Laporan Hasil Belajar Genap.xlsx');
const sheet = workbook2.Sheets[workbook2.SheetNames[0]];

// Read as array of arrays (no headers, just raw rows) to see the layout
const rawData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
for(let i=0; i<15; i++) {
  console.log(`Row ${i}:`, rawData[i]);
}
