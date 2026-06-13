// ===========================
// DROPDOWN CLICK TOGGLE
// ===========================
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var items = document.querySelectorAll('.nav-item.has-dropdown');

    items.forEach(function (item) {
      item.addEventListener('click', function (e) {
        // Kalau klik link di dalam dropdown → biarkan navigasi
        if (e.target.tagName === 'A') return;

        e.stopPropagation();

        var wasOpen = this.classList.contains('open');

        // Tutup semua
        items.forEach(function (d) { d.classList.remove('open'); });

        // Toggle
        if (!wasOpen) {
          this.classList.add('open');
        }
      });
    });

    // Klik luar = tutup semua
    document.addEventListener('click', function () {
      items.forEach(function (d) { d.classList.remove('open'); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        items.forEach(function (d) { d.classList.remove('open'); });
      }
    });
  });
})();


(function () {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot-item');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  let current = 0;
  let autoTimer = null;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetAuto(); });
  });

  startAuto();
})();

// ===========================
// STATS COUNTER ANIMATION
// ===========================
(function () {
  const statNums = document.querySelectorAll('.stat-num');

  function animateCount(el) {
    const target = parseInt(el.textContent.replace(/\D/g, ''), 10);
    const suffix = el.textContent.replace(/[\d]/g, '');
    let count = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target;
        clearInterval(timer);
      }
      el.textContent = count + suffix;
    }, 20);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => observer.observe(el));
})();

// ===========================
// NAVBAR SCROLL SHADOW
// ===========================
(function () {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
      navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
    }
  });
})();

// Menu mobile + footer situs
(function () {
  function load(src) {
    var s = document.createElement('script');
    s.src = src;
    s.async = false;
    document.body.appendChild(s);
  }
  load('mobile-nav.js?v=2');
  load('site-footer.js?v=1781320772214');
})();
// ===========================
// SEARCH MODAL FUNCTIONALITY
// ===========================
(function () {
  // Inject modal HTML
  const modalHTML = `
    <div class="search-modal" id="searchModal">
      <button class="sm-close" aria-label="Close Search">&times;</button>
      <div class="sm-content">
        <div class="sm-input-wrap"><i class="fas fa-search"></i>
          <input type="text" class="sm-input" placeholder="Cari..." />
        </div>
        <div class="sm-results"></div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('searchModal');
  const openBtn = document.querySelector('.btn-search');
  const closeBtn = modal.querySelector('.sm-close');
  const input = modal.querySelector('.sm-input');
  const resultsDiv = modal.querySelector('.sm-results');

  // Simple page index for search – add more entries as needed
  const pages = [
    { title: 'Beranda', url: 'index.html', desc: 'Halaman utama Hibatullah IIBS' },
    { title: 'Program', url: 'program.html', desc: 'Program unggulan dan kegiatan santri' },
    { title: 'Asrama', url: 'asrama.html', desc: 'Fasilitas asrama dan kehidupan santri' },
    { title: 'Kurikulum', url: 'kurikulum.html', desc: 'Kurikulum berbasis Islam dan internasional' },
    { title: 'Regulasi Harian', url: 'regulasi-harian.html', desc: 'Jadwal harian dan tata tertib' },
    { title: 'PPDB', url: 'ppdb.html', desc: 'Pendaftaran Peserta Didik Baru' },
    { title: 'Galeri', url: 'galeri.html', desc: 'Koleksi foto kegiatan dan prestasi' },
    { title: 'Berita', url: 'berita.html', desc: 'Berita terbaru pesantren' }
  ];

  function renderResults(list) {
    resultsDiv.innerHTML = '';
    if (list.length === 0) {
      resultsDiv.innerHTML = `<div class="sm-no-result">Tidak ada hasil</div>`;
      return;
    }
    list.forEach(p => {
      const a = document.createElement('a');
      a.href = p.url;
      a.className = 'sm-result-item';
      a.innerHTML = `<div class="sm-result-title">${p.title}</div><div class="sm-result-desc">${p.desc}</div>`;
      resultsDiv.appendChild(a);
    });
  }

  // Open modal
  openBtn && openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    input.value = '';
    resultsDiv.innerHTML = '';
    input.focus();
  });

  // Close modal
  closeBtn && closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    input.value = '';
    resultsDiv.innerHTML = '';
  });

  // Search input handling
  input && input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { resultsDiv.innerHTML = ''; return; }
    const filtered = pages.filter(p =>
      p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
    );
    renderResults(filtered);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeBtn.click();
    }
  });
})();


// PROMO MODAL LOGIC
(function() {
  const promoModal = document.getElementById('promoModal');
  const promoClose = document.getElementById('promoClose');
  const promoLaterBtn = document.getElementById('promoLaterBtn');

  if (promoModal) {
    if (!sessionStorage.getItem('promoSeen')) {
      setTimeout(() => {
        promoModal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }, 1500);
    }

    function closeModal() {
      promoModal.classList.remove('show');
      document.body.style.overflow = '';
      sessionStorage.setItem('promoSeen', 'true');
    }

    if (promoClose) promoClose.addEventListener('click', closeModal);
    if (promoLaterBtn) promoLaterBtn.addEventListener('click', closeModal);

    promoModal.addEventListener('click', (e) => {
      if (e.target === promoModal) {
        closeModal();
      }
    });
  }
})();


// SCROLL REVEAL ANIMATION
document.addEventListener("DOMContentLoaded", function() {
  const reveals = document.querySelectorAll(".reveal");
  if(reveals.length === 0) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  reveals.forEach(reveal => observer.observe(reveal));
});
