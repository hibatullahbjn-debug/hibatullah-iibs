const fs = require('fs');
const xlsx = require('xlsx');

// Parse Excel
const workbook = xlsx.readFile('lomba/lomba.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });

const lombaData = [];
// Assuming row 0 is headers: ['Nama Santri', 'Nama Lomba', 'Tingkat', 'Juara']
for (let i = 1; i < data.length; i++) {
  if (data[i] && data[i][0]) {
    lombaData.push({
      nama: data[i][0],
      lomba: data[i][1],
      tingkat: data[i][2],
      juara: data[i][3]
    });
  }
}

fs.writeFileSync('lomba-data.js', `const lombaData = ${JSON.stringify(lombaData, null, 2)};`);
console.log('Successfully updated lomba-data.js from lomba/lomba.xlsx with ' + lombaData.length + ' records.');
