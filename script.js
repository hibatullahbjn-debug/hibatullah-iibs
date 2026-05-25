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

// Footer situs (semua halaman)
(function () {
  var s = document.createElement('script');
  s.src = 'site-footer.js';
  s.async = false;
  document.body.appendChild(s);
})();
