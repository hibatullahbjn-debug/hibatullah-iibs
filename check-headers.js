const xlsx = require('xlsx');

function checkHeaders(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rawData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  console.log(`Headers for ${filePath}:`);
  console.log(rawData[6]);
}

checkHeaders('file rapot/Laporan Hasil Belajar.xlsx');
checkHeaders('file rapot/Laporan Hasil Belajar Genap.xlsx');
