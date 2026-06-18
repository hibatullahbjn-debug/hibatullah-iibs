/**
 * Footer situs — UI modern + data dari Firebase pengaturan/kontak
 */
(function () {
  var DEFAULT = {
    wa: '6282262263434',
    wa_tampil: '0822 6226 3434',
    telepon: '0822 6226 3434',
    email: 'hibatullah.sch.id',
    alamat: 'Jl. Wonosari, Ds. Sambeng, Kec. Kasiman, Kab. Bojonegoro, Jawa Timur',
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
          '<p class="sf-tagline">Siap Menjadi Generasi Qur\'ani &amp; Berkarya</p>' +
          '<p class="sf-desc">Membina santri yang tangguh berpegang pada nilai Islam, sekaligus kreatif dan mandiri dalam menghasilkan karya nyata yang bermanfaat bagi umat.</p>' +
          '<div class="sf-socials">' +
            '<a href="https://www.tiktok.com/@hibatullah.iibs" target="_blank" rel="noopener" class="sf-tt" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>' +
            '<a href="https://www.instagram.com/hibatullah.iibs/" target="_blank" rel="noopener" class="sf-ig" aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="https://www.youtube.com/@hibatullahiibs" target="_blank" rel="noopener" class="sf-yt" aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div>' +
        '</div>' +

        '<div class="sf-col">' +
          '<h4 class="sf-heading">PROGRAM UNGGULAN</h4>' +
          '<ul class="sf-prog">' +
            "<li><a href=\"program-unggulan-sdih.html#prog-tahsin\" target=\"_blank\"><span class=\"sf-prog-icon\" style=\"background:rgba(232,160,32,0.2);color:#f0c040\"><i class=\"fas fa-quran\"></i></span> Tahsin & Tahfidz Al Qur'an</a></li>" +
            '<li><a href="program-unggulan-sdih.html#prog-language" target="_blank"><span class="sf-prog-icon" style="background:rgba(58,91,217,0.2);color:#7eb8f7"><i class="fas fa-globe"></i></span> Arabic & English Language</a></li>' +
            '<li><a href="program-unggulan-sdih.html#prog-leadership" target="_blank"><span class="sf-prog-icon" style="background:rgba(142,68,173,0.2);color:#c39bd3"><i class="fas fa-crown"></i></span> Leadership</a></li>' +
            '<li><a href="program-unggulan-sdih.html#prog-publicspeaking" target="_blank"><span class="sf-prog-icon" style="background:rgba(231,76,60,0.2);color:#e74c3c"><i class="fas fa-microphone-alt"></i></span> Public Speaking</a></li>' +
            '<li><a href="entrepreneurship.html" target="_blank"><span class="sf-prog-icon" style="background:rgba(37,211,102,0.15);color:#25d366"><i class="fas fa-rocket"></i></span> Entrepreneurship</a></li>' +
            '<li><a href="program-unggulan-sdih.html#prog-lifeskill" target="_blank"><span class="sf-prog-icon" style="background:rgba(52,152,219,0.2);color:#3498db"><i class="fas fa-tools"></i></span> Life Skill</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="sf-col">' +
          '<h4 class="sf-heading">HUBUNGI KAMI</h4>' +
          '<ul class="sf-contact">' +
            '<li><span class="sf-contact-icon"><i class="fas fa-map-marker-alt"></i></span><span data-sf-alamat>' + alamatHtml + '</span></li>' +
            '<li><span class="sf-contact-icon"><i class="fas fa-phone"></i></span><span data-sf-telp>' + esc(k.telepon || DEFAULT.telepon) + '</span></li>' +
            '<li><span class="sf-contact-icon"><i class="fab fa-whatsapp"></i></span><a href="' + waLink + '" target="_blank" rel="noopener" data-sf-wa>' + esc(k.wa_tampil) + '</a></li>' +
            '<li><span class="sf-contact-icon"><i class="fas fa-globe"></i></span><a href="https://hibatullah.sch.id" target="_blank" rel="noopener" data-sf-email>' + esc(k.email) + '</a></li>' +
          '</ul>' +
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

