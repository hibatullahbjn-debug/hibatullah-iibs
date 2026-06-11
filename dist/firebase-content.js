/**
 * Muat & tampilkan data dari Firebase (berita, galeri, pengaturan)
 */
(function () {
  var BADGE_CLASS = {
    'KEHIDUPAN SANTRI': 'badge-purple',
    'PENDIDIKAN KARAKTER': 'badge-blue',
    'KEGIATAN OUTDOOR': 'badge-green',
    'KEGIATAN RUTIN': 'badge-orange',
  };

  function esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function formatTanggal(val) {
    if (!val) return '';
    if (val.toDate) {
      return val.toDate().toLocaleDateString('id-ID', {
        day: 'numeric', month: 'long', year: 'numeric',
      });
    }
    return String(val);
  }

  function beritaCard(item, link) {
    var badge = item.badge || item.kategori || 'BERITA';
    var badgeCls = item.badgeClass || BADGE_CLASS[badge] || 'badge-blue';
    var href = link || 'berita-pesantren.html';
    return (
      '<a href="' + href + '" class="kegiatan-card">' +
        '<div class="kegiatan-img-wrap">' +
          '<img src="' + esc(item.gambar) + '" alt="' + esc(item.judul) + '" loading="lazy" />' +
          '<span class="kegiatan-badge ' + badgeCls + '">' + esc(badge) + '</span>' +
        '</div>' +
        '<div class="kegiatan-body">' +
          '<div class="kegiatan-date"><i class="far fa-calendar-alt"></i> ' + esc(formatTanggal(item.tanggal)) + '</div>' +
          '<h3 class="kegiatan-card-title">' + esc(item.judul) + '</h3>' +
          '<p class="kegiatan-card-desc">' + esc(item.ringkasan) + '</p>' +
          '<div class="kegiatan-footer">' +
            '<div class="kegiatan-author">' +
              '<img src="' + esc(item.penulis_foto) + '" alt="' + esc(item.penulis_nama) + '" />' +
              '<div><span class="author-name">' + esc(item.penulis_nama) + '</span>' +
              '<span class="author-role">' + esc(item.penulis_role || 'Penulis') + '</span></div>' +
            '</div>' +
            '<span class="kegiatan-read-btn">Baca Selengkapnya →</span>' +
          '</div>' +
        '</div>' +
      '</a>'
    );
  }

  async function loadBerita(container, limit) {
    if (!container || !HibatullahDB.isReady()) {
      if (container) container.innerHTML = '<p class="firebase-empty">Firebase belum dikonfigurasi.</p>';
      return;
    }
    HibatullahDB.init();
    container.innerHTML = '<p class="firebase-loading">Memuat berita...</p>';

    var orderBy = container.getAttribute('data-berita-order') || 'createdAt';
    var orderDir = container.getAttribute('data-berita-dir') || 'desc';

    try {
      var list = await HibatullahDB.getAll(HibatullahDB.cols().berita, {
        orderBy: orderBy,
        orderDir: orderDir,
        limit: limit || null,
      });

      if (!list.length) {
        container.innerHTML = '<p class="firebase-empty">Belum ada berita. Import data awal di firebase-seed.html</p>';
        return;
      }

      var link = container.getAttribute('data-berita-link') || 'berita-pesantren.html';
      container.innerHTML = list.map(function (b) { return beritaCard(b, link); }).join('');
    } catch (e) {
      console.error(e);
      container.innerHTML = '<p class="firebase-empty">Gagal memuat berita.</p>';
    }
  }

  function galeriItem(item) {
    var hidden = item.hidden ? ' hidden' : '';
    return (
      '<div class="galeri-item' + hidden + '" data-cat="' + esc(item.kategori) + '">' +
        '<img src="' + esc(item.gambar) + '" alt="' + esc(item.judul || 'Galeri') + '" loading="lazy" />' +
        '<div class="galeri-overlay"><i class="fas fa-expand"></i></div>' +
      '</div>'
    );
  }

  async function loadGaleri(container) {
    if (!container || !HibatullahDB.isReady()) return;
    HibatullahDB.init();

    try {
      var list = await HibatullahDB.getAll(HibatullahDB.cols().galeri, {
        orderBy: 'urutan',
        orderDir: 'asc',
      });

      if (!list.length) {
        container.innerHTML = '<p class="firebase-empty">Belum ada foto galeri. Import di firebase-seed.html</p>';
        return;
      }

      container.innerHTML = list.map(galeriItem).join('');

      if (typeof window.initGaleriUI === 'function') {
        window.initGaleriUI();
      }
    } catch (e) {
      console.error(e);
    }
  }

  window.applyPengaturan = applyPengaturan;

  async function applyPengaturan() {
    if (!HibatullahDB.isReady()) return;
    HibatullahDB.init();

    try {
      var data = await HibatullahDB.getDoc(HibatullahDB.cols().pengaturan, 'kontak');
      if (!data) return;

      document.querySelectorAll('[data-firebase-wa]').forEach(function (el) {
        if (data.wa) {
          el.href = 'https://wa.me/' + String(data.wa).replace(/\D/g, '');
          if (el.hasAttribute('data-firebase-wa-text')) {
            el.textContent = data.wa_tampil || data.wa;
          }
        }
      });

      document.querySelectorAll('[data-firebase-email]').forEach(function (el) {
        if (data.email) el.href = 'mailto:' + data.email;
        if (el.hasAttribute('data-firebase-email-text') && data.email) {
          el.textContent = data.email;
        }
      });
    } catch (e) {
      console.error(e);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!HibatullahDB.isReady()) return;

    // beritaGridHome & beritaGridAll dihandle oleh berita.js (WordPress API)
    // var beritaHome = document.getElementById('beritaGridHome');
    // if (beritaHome) {
    //   var limit = parseInt(beritaHome.getAttribute('data-berita-limit'), 10) || 3;
    //   loadBerita(beritaHome, limit);
    // }

    // var beritaAll = document.getElementById('beritaGridAll');
    // if (beritaAll) loadBerita(beritaAll);

    var galeriGrid = document.getElementById('galeriGrid');
    if (galeriGrid && galeriGrid.hasAttribute('data-firebase-galeri')) {
      loadGaleri(galeriGrid);
    }

    applyPengaturan();
  });
})();
