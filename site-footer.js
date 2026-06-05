/**
 * Footer situs — UI modern + data dari Firebase pengaturan/kontak
 */
(function () {
  var DEFAULT = {
    wa: '6285190445518',
    wa_tampil: '0851 9044 5518',
    telepon: '(0353) 1234 567',
    email: 'info@hibatullah.ac.id',
    alamat: 'Jl. Wonocati, Sambeng, Kec. Kalitidu, Kab. Bojonegoro, Jawa Timur 62158',
    jam_operasional: '24 Jam · Setiap Hari',
    maps_url: 'https://www.google.com/maps?q=-7.1340806,111.6243778',
  };

  function esc(s) {
    if (!s) return '';
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function footerHTML(k) {
    k = k || DEFAULT;
    var waLink = 'https://wa.me/' + String(k.wa || DEFAULT.wa).replace(/\D/g, '');
    var mapsUrl = k.maps_url || DEFAULT.maps_url;
    var alamatHtml = mapsUrl
      ? '<a href="' + esc(mapsUrl) + '" target="_blank" rel="noopener">' + esc(k.alamat) + '</a>'
      : esc(k.alamat);
    return (
      '<div class="sf-glow" aria-hidden="true"></div>' +
      '<div class="sf-main">' +
        '<div class="sf-brand">' +
          '<div class="sf-logo">' +
            '<img src="Logo only.png" alt="Hibatullah IIBS" />' +
            '<div class="sf-logo-text">' +
              '<strong>HIBATULLAH IIBS</strong>' +
              '<span>International Islamic Boarding School</span>' +
              '<span>BOJONEGORO · JAWA TIMUR</span>' +
            '</div>' +
          '</div>' +
          '<p class="sf-tagline">Siap Menjadi Generasi Qur\'ani &amp; Entrepreneur?</p>' +
          '<p class="sf-desc">Mendidik generasi Qur\'ani yang berakhlak mulia, siap menjadi pemimpin masa depan yang gemilang.</p>' +
          '<div class="sf-socials">' +
            '<a href="#" class="sf-fb" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>' +
            '<a href="#" class="sf-ig" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" class="sf-yt" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
            '<a href="#" class="sf-tt" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>' +
          '</div>' +
        '</div>' +
        '<div class="sf-col">' +
          '<h4 class="sf-heading">QUICK LINKS</h4>' +
          '<ul class="sf-links">' +
            '<li><a href="index.html">Beranda</a></li>' +
            '<li><a href="program.html">Program</a></li>' +
            '<li><a href="asrama.html">Asrama</a></li>' +
            '<li><a href="kurikulum.html">Kurikulum</a></li>' +
            '<li><a href="ppdb.html">PPDB</a></li>' +
            '<li><a href="galeri.html">Galeri</a></li>' +
            '<li><a href="berita-pesantren.html">Berita</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="sf-col">' +
          '<h4 class="sf-heading">PROGRAM UNGGULAN</h4>' +
          '<ul class="sf-prog">' +
            '<li><a href="#"><span class="sf-prog-icon" style="background:rgba(232,160,32,0.2);color:#f0c040"><i class="fas fa-quran"></i></span> Tahfidzul Qur\'an</a></li>' +
            '<li><a href="entrepreneurship.html"><span class="sf-prog-icon" style="background:rgba(37,211,102,0.15);color:#25d366"><i class="fas fa-rocket"></i></span> Entrepreneurship</a></li>' +
            '<li><a href="kurikulum.html"><span class="sf-prog-icon" style="background:rgba(58,91,217,0.2);color:#7eb8f7"><i class="fas fa-book"></i></span> Kurikulum</a></li>' +
            '<li><a href="karakter-siswa-sdih.html"><span class="sf-prog-icon" style="background:rgba(142,68,173,0.2);color:#c39bd3"><i class="fas fa-crown"></i></span> Leadership</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="sf-col">' +
          '<h4 class="sf-heading">HUBUNGI KAMI</h4>' +
          '<ul class="sf-contact">' +
            '<li><span class="sf-contact-icon"><i class="fas fa-map-marker-alt"></i></span><span data-sf-alamat>' + alamatHtml + '</span></li>' +
            '<li><span class="sf-contact-icon"><i class="fas fa-phone"></i></span><span data-sf-telp>' + esc(k.telepon || DEFAULT.telepon) + '</span></li>' +
            '<li><span class="sf-contact-icon"><i class="fab fa-whatsapp"></i></span><a href="' + waLink + '" target="_blank" rel="noopener" data-sf-wa>' + esc(k.wa_tampil) + '</a></li>' +
            '<li><span class="sf-contact-icon"><i class="fas fa-envelope"></i></span><a href="mailto:' + esc(k.email) + '" data-sf-email>' + esc(k.email) + '</a></li>' +
            '<li><span class="sf-contact-icon"><i class="fas fa-clock"></i></span><span data-sf-jam>' + esc(k.jam_operasional || DEFAULT.jam_operasional) + '</span></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="sf-cta-strip">' +
        '<div class="sf-cta-box">' +
          '<div><strong>Daftar Santri Baru — PPDB 2025/2026</strong><span>Bergabung dengan Pesantren Hibatullah IIBS</span></div>' +
          '<div class="sf-cta-btns">' +
            '<a href="https://ppdb.hibatullah.sch.id/formulir" target="_blank" class="sf-cta-btn"><i class="fas fa-pen-to-square"></i> Daftar Sekarang</a>' +
            '<a href="' + waLink + '" class="sf-cta-btn sf-cta-btn--outline"><i class="fab fa-whatsapp"></i> Konsultasi</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="sf-bottom">' +
        '<div class="sf-bottom-inner">' +
          '<span>© 2025 Hibatullah IIBS. All Rights Reserved.</span>' +
          '<div class="sf-bottom-links">' +
            '<span>Designed with <i class="fas fa-heart"></i> for Islamic Education</span>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  async function loadKontak() {
    if (typeof HibatullahDB !== 'undefined' && HibatullahDB.isReady()) {
      try {
        HibatullahDB.init();
        var doc = await HibatullahDB.getDoc(HibatullahDB.cols().pengaturan, 'kontak');
        if (doc) return doc;
      } catch (e) {
        console.warn('Footer: gagal load kontak', e);
      }
    }
    return DEFAULT;
  }

  function findMount() {
    var el = document.getElementById('site-footer');
    if (el) return el;
    var old = document.querySelector('footer.ppdb-footer, footer.footer');
    if (old) {
      old.id = 'site-footer';
      old.className = 'site-footer';
      return old;
    }
    return null;
  }

  function insertFooter() {
    var mount = document.createElement('footer');
    mount.id = 'site-footer';
    mount.className = 'site-footer';
    var scripts = document.body.querySelector('script');
    if (scripts) {
      document.body.insertBefore(mount, scripts);
    } else {
      document.body.appendChild(mount);
    }
    return mount;
  }

  async function init() {
    var mount = findMount() || insertFooter();
    var kontak = await loadKontak();
    mount.className = 'site-footer';
    mount.innerHTML = footerHTML(kontak);
    requestAnimationFrame(function () {
      mount.classList.add('sf-ready');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

