/**
 * Menu mobile � satu komponen untuk semua halaman (via script.js)
 */
(function () {
  if (document.getElementById('mobileDrawer')) return;

  var html =
    '<div class="mobile-nav-overlay" id="mobileOverlay" aria-hidden="true"></div>' +
    '<div class="mobile-nav-drawer" id="mobileDrawer" role="dialog" aria-label="Menu navigasi">' +
      '<div class="mobile-nav-header">' +
        '<img src="Logo only.png" alt="Hibatullah IIBS" width="44" height="44" />' +
        '<div class="mobile-nav-brand">' +
          '<strong>HIBATULLAH IIBS</strong>' +
          '<span>International Islamic Boarding School</span>' +
        '</div>' +
        '<button type="button" class="mobile-nav-close" id="mobileClose" aria-label="Tutup menu"><i class="fas fa-times"></i></button>' +
      '</div>' +
      '<nav class="mobile-nav-links">' +
        '<a href="index.html"><i class="fas fa-home"></i> Beranda</a>' +
        '<p class="mobile-nav-group-title">Hibatullah IIBS</p>' +
        '<a href="visi-misi-sdih.html"><i class="fas fa-eye"></i> Visi Misi</a>' +
        '<a href="kurikulum-sdih.html"><i class="fas fa-book"></i> Kurikulum</a>' +
        '<a href="program-unggulan-sdih.html"><i class="fas fa-star"></i> Program Unggulan</a>' +
        '<a href="karakter-siswa-sdih.html"><i class="fas fa-heart"></i> Karakter Siswa</a>' +
        '<a href="standar-kompetensi-lulusan.html"><i class="fas fa-graduation-cap"></i> Standar Kompetensi Lulusan</a>' +
        '<p class="mobile-nav-group-title">History</p>' +
        '<a href="sejarah.html"><i class="fas fa-scroll"></i> Sejarah Sekolah</a>' +
        '<a href="penasehat.html"><i class="fas fa-user-tie"></i> Dewan Penasehat</a>' +
        '<a href="stakeholders.html"><i class="fas fa-circle-nodes"></i> Stakeholders</a>' +
        '<p class="mobile-nav-group-title">Santri Hebat</p>' +
        '<a href="program.html"><i class="fas fa-list"></i> Program</a>' +
        '<a href="asrama.html"><i class="fas fa-home"></i> Fasilitas Asrama</a>' +
        '<a href="sekolah.html"><i class="fas fa-school"></i> Fasilitas Sekolah</a>' +
        '<a href="kurikulum.html"><i class="fas fa-book-open"></i> Kurikulum</a>' +
        '<a href="regulasi-harian.html"><i class="fas fa-clock"></i> Regulasi Harian</a>' +
        '<a href="rapot-santri.html"><i class="fas fa-file-invoice"></i> Rapot Santri</a>' +
        '<a href="prestasi-santri.html"><i class="fas fa-trophy"></i> Data Prestasi</a>' +
        '<p class="mobile-nav-group-title">Lainnya</p>' +
        '<a href="ppdb.html"><i class="fas fa-file-alt"></i> PPDB</a>' +
        '<a href="galeri.html"><i class="fas fa-images"></i> Galeri</a>' +
        '<a href="berita.html"><i class="fas fa-newspaper"></i> Berita</a>' +
      '</nav>' +
      '<div class="mobile-nav-footer">' +
        '<a href="pendaftaran.html" class="mobile-nav-cta"><i class="fas fa-pen-to-square"></i> Daftar Sekarang</a>' +
        '<a href="https://wa.me/6282262263434" class="mobile-nav-wa" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i> Konsultasi WhatsApp</a>' +
      '</div>' +
    '</div>';

  document.body.insertAdjacentHTML('beforeend', html);

  var btn = document.getElementById('mobileMenuBtn');
  var drawer = document.getElementById('mobileDrawer');
  var overlay = document.getElementById('mobileOverlay');
  var closeBtn = document.getElementById('mobileClose');

  function openMenu() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (btn) btn.classList.remove('open');
  }

  if (btn) {
    btn.addEventListener('click', function () {
      if (drawer.classList.contains('open')) closeMenu();
      else openMenu();
      this.classList.toggle('open');
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
})();
