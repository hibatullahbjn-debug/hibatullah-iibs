(function () {
  const form = document.getElementById('formDaftarPondok');
  if (!form) return;

  const WA_NUMBER = '6282262263434';
  const btn = document.getElementById('btnSubmit');
  const statusEl = document.getElementById('regStatus');

  function get(id) {
    return document.getElementById(id).value.trim();
  }

  function setStatus(msg, type) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = 'reg-status' + (type ? ' reg-status--' + type : '');
  }

  function buildWaMessage() {
    const lines = [
      'Assalamualaikum, saya ingin mendaftar masuk pondok Pesantren Hibatullah IIBS.',
      '',
      '*Data Calon Santri*',
      'Nama: ' + get('nama'),
      'Umur: ' + get('umur') + ' tahun',
      'Jenis Kelamin: ' + get('jenis_kelamin'),
      'Jenjang: ' + get('jenjang'),
      'Asal Sekolah: ' + get('asal_sekolah'),
      'Tempat Tinggal: ' + get('tempat_tinggal'),
      'Alamat: ' + get('alamat'),
      '',
      '*Data Orang Tua / Wali*',
      'Nama: ' + get('nama_ortu'),
      'No. WhatsApp: ' + get('wa_ortu'),
    ];
    const catatan = get('catatan');
    if (catatan) lines.push('', '*Catatan*', catatan);
    return lines.join('\n');
  }

  function buildData() {
    const data = {
      nama: get('nama'),
      umur: Number(get('umur')),
      jenis_kelamin: get('jenis_kelamin'),
      jenjang: get('jenjang'),
      asal_sekolah: get('asal_sekolah'),
      tempat_tinggal: get('tempat_tinggal'),
      alamat: get('alamat'),
      nama_ortu: get('nama_ortu'),
      wa_ortu: get('wa_ortu'),
    };
    const catatan = get('catatan');
    if (catatan) data.catatan = catatan;
    return data;
  }

  function openWhatsApp() {
    window.open(
      'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(buildWaMessage()),
      '_blank'
    );
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (btn) {
      btn.disabled = true;
      btn.querySelector('span:last-child').textContent = 'Menyimpan...';
    }

    try {
      if (typeof HibatullahDB !== 'undefined' && HibatullahDB.isReady()) {
        setStatus('Menyimpan ke database...', 'loading');
        HibatullahDB.init();
        await HibatullahDB.add(HibatullahDB.cols().pendaftar, buildData());
        setStatus('Data tersimpan di Firebase.', 'success');
      } else {
        setStatus('Firebase belum diisi — lanjut ke WhatsApp saja.', 'warn');
      }

      openWhatsApp();

      if (typeof HibatullahDB !== 'undefined' && HibatullahDB.isReady()) {
        setTimeout(function () {
          form.reset();
          setStatus('');
        }, 3500);
      }
    } catch (err) {
      console.error(err);
      setStatus('Gagal simpan database.', 'error');
      if (confirm('Gagal simpan. Tetap buka WhatsApp?')) openWhatsApp();
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.querySelector('span:last-child').textContent = 'Daftar via WhatsApp';
      }
    }
  });
})();
