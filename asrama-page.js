
/**
 * Halaman Asrama — muat dari Firebase (halaman/asrama)
 */
(function () {
  var DEFAULT = {
    hero_tag: 'ASRAMA',
    hero_judul: 'ASRAMA SANTRI',
    hero_highlight: 'SANTRI',
    hero_deskripsi:
      'Tempat tinggal yang ramah, aman, dan nyaman — dirancang untuk membentuk karakter santri yang mandiri, disiplin, dan berakhlak mulia.',
    hero_gambar:
      'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=1200&q=80',
    hero_label_judul: 'Asrama Santri Hibatullah IIBS',
    hero_label_sub: 'Bojonegoro, Jawa Timur',
    pills: [
      { icon: 'fa-check-circle', teks: 'Aman & Nyaman' },
      { icon: 'fa-check-circle', teks: 'Bersih & Rapi' },
      { icon: 'fa-check-circle', teks: 'Pembinaan Karakter' },
      { icon: 'fa-check-circle', teks: '24 Jam Terjaga' },
    ],
    paragraf: [
      'Di lembaga Hibatullah IIBS, Asrama Santri dirancang untuk menjadi tempat tinggal yang ramah, aman dan nyaman bagi seluruh santri, sehingga para santri mendapatkan suasana yang tidak jauh berbeda dari rumahnya sendiri. Kerapihan, kebersihan, dan keteraturan merupakan nilai-nilai yang sangat ditekankan di dalam lingkungan Asrama.',
      'Dalam aspek pembentukan karakter, santri akan dibimbing menjadi pribadi yang mandiri, disiplin, dan memiliki jiwa sosial yang tinggi, dengan adanya piket bergilir dalam menjaga kebersihan dan kerapihan asrama.',
      'Asrama juga dirancang sebagai tempat belajar yang nyaman — belajar Al-Qur\'an, Bahasa Arab dan Inggris, adab Islami, serta pengkajian materi kurikulum. Semangat membaca dipupuk melalui pojok baca di beberapa sudut asrama.',
      'Asrama santri tidak hanya tempat istirahat, melainkan pusat pembinaan karakter yang efektif dalam membentuk santri hebat sebagaimana dicita-citakan lembaga.',
    ],
    kutipan:
      'Asrama santri memegang peranan sangat penting dalam proses pembentukan santri hebat — lebih dari sekadar tempat tinggal.',
    stats: [
      { icon: 'fa-users', bg: '#e8f0fe', color: '#1a3a6b', nilai: '8', label: 'Santri per Kamar (Maks.)' },
      { icon: 'fa-user-shield', bg: '#e8f8ee', color: '#27ae60', nilai: '24 Jam', label: 'Pengawasan Musyrif/ah' },
      { icon: 'fa-building', bg: '#fff3e0', color: '#e8a020', nilai: '3', label: 'Gedung Asrama' },
      { icon: 'fa-star', bg: '#f3e8ff', color: '#8e44ad', nilai: '850+', label: 'Santri Aktif' },
    ],
    galeri: [
      'assets/images/kamar 1.JPG',
      'assets/images/kamar 2.JPG',
      'assets/images/kamar 3.JPG',
    ],
    nilai: [
      {
        icon: 'fa-broom',
        judul: 'Kerapihan',
        deskripsi:
          'Setiap santri diajarkan menjaga kerapihan kamar, pakaian, dan lingkungan asrama sebagai cerminan akhlak yang baik.',
      },
      {
        icon: 'fa-soap',
        judul: 'Kebersihan',
        deskripsi:
          'Kebersihan adalah sebagian dari iman. Santri dibiasakan menjaga kebersihan melalui piket bergilir harian.',
      },
      {
        icon: 'fa-clock',
        judul: 'Keteraturan',
        deskripsi:
          'Jadwal harian terstruktur membentuk kedisiplinan dan keteraturan hidup santri sejak dini.',
      },
    ],
    fasilitas_intro:
      'Asrama dilengkapi fasilitas akomodasi lengkap: tempat tidur, lemari, kamar mandi, lobby, dan laundry. Setiap kamar maksimal 8 santri dengan pendampingan musyrif/musyrifah.',
    fasilitas: [
      { icon: 'fa-bed', bg: '#e8f0fe', color: '#1a3a6b', judul: 'Asrama yang Nyaman', deskripsi: 'Kamar tidur bersih dengan tempat tidur berkualitas', wide: true },
      { icon: 'fa-shower', bg: '#e8f8ee', color: '#27ae60', judul: 'Kamar Mandi Bersih', deskripsi: 'Terawat di setiap lantai' },
      { icon: 'fa-couch', bg: '#fff3e0', color: '#e8a020', judul: 'Lobby Luas', deskripsi: 'Lobby luas di setiap lantai' },
      { icon: 'fa-leaf', bg: '#f3e8ff', color: '#8e44ad', judul: 'Lingkungan Asri', deskripsi: 'Nyaman, asri, dan hijau' },
      { icon: 'fa-chalkboard', bg: '#fde8e8', color: '#c0392b', judul: 'Learning Space', deskripsi: 'Ruang belajar & diskusi' },
      { icon: 'fa-utensils', bg: '#e0f7f4', color: '#16a085', judul: 'Kantin Sehat', deskripsi: 'Menu sehat dan bergizi' },
      { icon: 'fa-book-open', bg: '#e8f0fe', color: '#3a5bd9', judul: 'Pojok Baca', deskripsi: 'Koleksi buku islami' },
      { icon: 'fa-shield-alt', bg: '#fff3e0', color: '#e8a020', judul: 'Keamanan 24 Jam', deskripsi: 'Musyrif/ah berdedikasi' },
    ],
    cta_judul: 'Titipkan Putra/Putri Anda di Asrama Terbaik!',
    cta_highlight: 'Asrama Terbaik!',
    cta_teks:
      'Asrama Hibatullah IIBS siap menjadi rumah kedua yang aman, nyaman, dan penuh nilai-nilai Islami.',
  };

  function esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  async function loadData() {
    if (typeof HibatullahDB !== 'undefined' && HibatullahDB.isReady()) {
      HibatullahDB.init();
      var doc = await HibatullahDB.getDoc(HibatullahDB.cols().halaman, 'asrama');
      if (doc) return doc;
    }
    return DEFAULT;
  }

  function renderHero(d) {
    var wrap = document.getElementById('asramaApp');
    if (!wrap) return;

    var hi = esc(d.hero_highlight || 'SANTRI');
    var title = 'ASRAMA <span>' + hi + '</span>';

    wrap.innerHTML =
      '<section class="as-hero" style="position:relative;">' +
        '<div style="position:absolute;inset:0;z-index:0;">' +
          '<img src="assets/images/WhatsApp Image 2026-03-16 at 08.56.26.jpeg" alt="" style="width:100%;height:100%;object-fit:cover;opacity:0.15;" />' +
        '</div>' +
        '<div class="as-hero-mesh"></div>' +
        '<div class="as-hero-wrap">' +
          '<div class="as-hero-text">' +
            '<div class="as-hero-badge"><i class="fas fa-home"></i> Santri Hebat</div>' +
            '<p class="as-hero-tag">' + esc(d.hero_tag || 'ASRAMA') + '</p>' +
            '<h1>' + title + '</h1>' +
            '<p class="as-hero-lead">' + esc(d.hero_deskripsi) + '</p>' +
            '<div class="as-hero-pills" id="asPills"></div>' +
          '</div>' +

        '</div>' +
      '</section>' +
      '<div class="as-subnav-wrap">' +
        '<nav class="as-subnav">' +
          '<a href="#tentang" class="active">Tentang</a>' +
          '<a href="#galeri">Galeri</a>' +
          '<a href="#nilai">Nilai</a>' +
          '<a href="#fasilitas">Fasilitas</a>' +
        '</nav>' +
      '</div>' +
      '<section class="as-sec" id="tentang" style="background:#f0f4fb">' +
        '<div class="as-inner">' +
          '<div class="as-head">' +
            '<p class="as-label">TENTANG ASRAMA</p>' +
            '<h2 class="as-title">Rumah Kedua <span>Para Santri</span></h2>' +
            '<div class="as-line"></div>' +
          '</div>' +
          '<div class="as-about-grid">' +
            '<div><div class="as-prose" id="asProse"></div>' +
            (d.kutipan ? '<div class="as-quote"><i class="fas fa-quote-left"></i><p>' + esc(d.kutipan) + '</p></div>' : '') +
            '</div>' +
            '<div class="as-stats" id="asStats"></div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="as-gallery" id="galeri">' +
        '<div class="as-gallery-track" id="asGallery"></div>' +
      '</section>' +
      '<section class="as-nilai as-sec" id="nilai">' +
        '<div class="as-inner">' +
          '<div class="as-head as-head--light">' +
            '<p class="as-label">NILAI UTAMA</p>' +
            '<h2 class="as-title">Nilai <span>Lingkungan Asrama</span></h2>' +
            '<div class="as-line"></div>' +
          '</div>' +
          '<div class="as-nilai-grid" id="asNilai"></div>' +
        '</div>' +
      '</section>' +
      '<section class="as-fas as-sec" id="fasilitas">' +
        '<div class="as-inner">' +
          '<div class="as-head">' +
            '<p class="as-label">FASILITAS</p>' +
            '<h2 class="as-title">Fasilitas <span>Asrama Santri</span></h2>' +
            '<div class="as-line"></div>' +
          '</div>' +
          '<p class="as-fas-intro" id="asFasIntro"></p>' +
          '<div class="as-fas-bento" id="asFasilitas"></div>' +
        '</div>' +
      '</section>';

    var pills = d.pills || [];
    document.getElementById('asPills').innerHTML = pills
      .map(function (p) {
        return '<span><i class="fas ' + esc(p.icon || 'fa-check') + '"></i> ' + esc(p.teks) + '</span>';
      })
      .join('');

    document.getElementById('asProse').innerHTML = (d.paragraf || [])
      .map(function (p) {
        return '<p>' + esc(p) + '</p>';
      })
      .join('');

    document.getElementById('asStats').innerHTML = (d.stats || [])
      .map(function (s) {
        return (
          '<div class="as-stat">' +
            '<div class="as-stat-icon" style="background:' + esc(s.bg) + ';color:' + esc(s.color) + '">' +
              '<i class="fas ' + esc(s.icon) + '"></i></div>' +
            '<div><b>' + esc(s.nilai) + '</b><small>' + esc(s.label) + '</small></div>' +
          '</div>'
        );
      })
      .join('');

    document.getElementById('asGallery').innerHTML = (d.galeri || [])
      .map(function (url) {
        return '<div class="as-gallery-item"><img src="' + esc(url) + '" alt="Asrama" loading="lazy" /></div>';
      })
      .join('');

    document.getElementById('asNilai').innerHTML = (d.nilai || [])
      .map(function (n) {
        return (
          '<div class="as-nilai-card">' +
            '<div class="icon"><i class="fas ' + esc(n.icon) + '"></i></div>' +
            '<h4>' + esc(n.judul) + '</h4><p>' + esc(n.deskripsi) + '</p></div>'
        );
      })
      .join('');

    document.getElementById('asFasIntro').textContent = d.fasilitas_intro || '';
    document.getElementById('asFasilitas').innerHTML = (d.fasilitas || [])
      .map(function (f, i) {
        var wide = f.wide || i === 0 ? ' as-fas-item--wide' : '';
        return (
          '<div class="as-fas-item' + wide + '">' +
            '<span class="as-fas-check"><i class="fas fa-check"></i></span>' +
            '<div class="as-fas-icon" style="background:' + esc(f.bg) + ';color:' + esc(f.color) + '">' +
              '<i class="fas ' + esc(f.icon) + '"></i></div>' +
            '<div><h4>' + esc(f.judul) + '</h4><p>' + esc(f.deskripsi) + '</p></div>' +
          '</div>'
        );
      })
      .join('');

    var ctaTitle = d.cta_judul || DEFAULT.cta_judul;
    var hi = d.cta_highlight || 'Asrama Terbaik!';
    document.getElementById('asCtaTitle').innerHTML = ctaTitle.replace(
      hi,
      '<span>' + esc(hi) + '</span>'
    );
    document.getElementById('asCtaText').textContent = d.cta_teks || DEFAULT.cta_teks;

    initSubnav();
  }

  function initSubnav() {
    var links = document.querySelectorAll('.as-subnav a');
    links.forEach(function (a) {
      a.addEventListener('click', function () {
        links.forEach(function (l) {
          l.classList.remove('active');
        });
        a.classList.add('active');
      });
    });
  }

  document.addEventListener('DOMContentLoaded', async function () {
    var root = document.getElementById('asramaApp');
    if (!root) return;
    root.innerHTML = '<p class="as-loading">Memuat halaman asrama...</p>';
    try {
      var data = await loadData();
      renderHero(data);
      if (typeof applyPengaturan === 'function') applyPengaturan();
    } catch (e) {
      console.error(e);
      renderHero(DEFAULT);
    }
  });
})();

