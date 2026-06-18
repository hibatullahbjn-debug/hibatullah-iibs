const xlsx = require('xlsx');

const workbook = xlsx.readFile('lomba/lomba.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];

const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
for(let i=0; i<10 && i<data.length; i++) {
  console.log(`Row ${i}:`, data[i]);
}
