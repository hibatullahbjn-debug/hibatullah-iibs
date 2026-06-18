const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('file rapot/Laporan Hasil Belajar.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

console.log(JSON.stringify(data.slice(0, 5), null, 2));

// Save to JSON for the frontend
fs.writeFileSync('rapot-data.json', JSON.stringify(data, null, 2));
console.log('Saved to rapot-data.json');
