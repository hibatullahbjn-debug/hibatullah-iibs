const xlsx = require('xlsx');
const fs = require('fs');

function parseExcel(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rawData = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  
  const headers = rawData[6];
  if(!headers) return [];

  const students = [];
  
  // Find indices dynamically
  const colJumlah = headers.indexOf('Jumlah');
  const colRata = headers.indexOf('Rata-Rata');
  const colRank = headers.indexOf('Rank');
  
  for (let i = 7; i < rawData.length; i++) {
    const row = rawData[i];
    if (!row || row.length === 0 || !row[0]) continue; 

    const student = {
      no: row[0],
      nis: String(row[1] || ''),
      nisn: String(row[2] || ''),
      nama: row[3],
      nilai: {},
      ringkasan: {}
    };

    // Subjects are from index 4 up to colJumlah
    for (let j = 4; j < colJumlah; j++) {
      if (headers[j]) {
        student.nilai[headers[j]] = row[j];
      }
    }

    student.ringkasan = {
      jumlah: row[colJumlah],
      rataRata: row[colRata],
      peringkat: row[colRank]
    };

    students.push(student);
  }
  return students;
}

const ganjilData = parseExcel('file rapot/Laporan Hasil Belajar.xlsx');
const genapData = parseExcel('file rapot/Laporan Hasil Belajar Genap.xlsx');

const combinedMap = new Map();

ganjilData.forEach(student => {
  const key = student.nisn || student.nis || student.nama;
  combinedMap.set(key, {
    nis: student.nis,
    nisn: student.nisn,
    nama: student.nama,
    semester1: {
      nilai: student.nilai,
      ringkasan: student.ringkasan
    },
    semester2: null
  });
});

genapData.forEach(student => {
  const key = student.nisn || student.nis || student.nama;
  if (combinedMap.has(key)) {
    const existing = combinedMap.get(key);
    existing.semester2 = {
      nilai: student.nilai,
      ringkasan: student.ringkasan
    };
  } else {
    combinedMap.set(key, {
      nis: student.nis,
      nisn: student.nisn,
      nama: student.nama,
      semester1: null,
      semester2: {
        nilai: student.nilai,
        ringkasan: student.ringkasan
      }
    });
  }
});

const finalData = Array.from(combinedMap.values());

const jsContent = `const rapotData = ${JSON.stringify(finalData, null, 2)};`;
fs.writeFileSync('rapot-data.js', jsContent);
console.log('Successfully regenerated rapot-data.js with dynamic column logic!');
