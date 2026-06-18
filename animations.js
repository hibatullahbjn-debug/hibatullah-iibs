/**
 * HIBATULLAH IIBS - Global Scroll Animations
 * Applies to all pages automatically
 */

(function () {
  'use strict';

  // =============================================
  // 1. INJECT ANIMATION CSS
  // =============================================
  const style = document.createElement('style');
  style.textContent = `
    /* Base hidden state */
    [data-anim] {
      opacity: 0;
      will-change: opacity, transform;
    }

    /* Fade Up */
    [data-anim="fade-up"]        { transform: translateY(40px); }
    [data-anim="fade-down"]      { transform: translateY(-40px); }
    [data-anim="fade-left"]      { transform: translateX(-50px); }
    [data-anim="fade-right"]     { transform: translateX(50px); }
    [data-anim="zoom-in"]        { transform: scale(0.85); }
    [data-anim="zoom-out"]       { transform: scale(1.15); }
    [data-anim="flip-up"]        { transform: perspective(600px) rotateX(20deg) translateY(30px); }
    [data-anim="slide-up"]       { transform: translateY(60px); }

    /* Animated state */
    [data-anim].anim-done {
      opacity: 1 !important;
      transform: none !important;
      transition:
        opacity var(--anim-dur, 0.65s) var(--anim-ease, cubic-bezier(0.22,1,0.36,1)) var(--anim-delay, 0s),
        transform var(--anim-dur, 0.65s) var(--anim-ease, cubic-bezier(0.22,1,0.36,1)) var(--anim-delay, 0s);
    }

    /* Counter number pulse */
    .anim-count-done {
      animation: countPulse 0.4s ease;
    }
    @keyframes countPulse {
      0%   { transform: scale(1.2); color: #3a5bd9; }
      100% { transform: scale(1); }
    }

    /* Stagger children helper */
    [data-stagger] > * {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1);
    }
    [data-stagger].anim-done > * {
      opacity: 1;
      transform: none;
    }

    /* Progress bar animation */
    .anim-bar-fill {
      width: 0 !important;
      transition: width 1.2s cubic-bezier(0.22,1,0.36,1) !important;
    }
    .anim-bar-fill.anim-done {
      width: var(--bar-width, 100%) !important;
    }

    /* Highlight text animation */
    .anim-highlight {
      background-size: 0% 100% !important;
      transition: background-size 0.8s ease !important;
    }
    .anim-highlight.anim-done {
      background-size: 100% 100% !important;
    }

    /* Number counter */
    .stat-num, .ep-stat strong, .cd-box span, .countdown-box span {
      transition: color 0.3s;
    }

    /* Floating cards */
    @keyframes floatUp {
      0%   { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    /* Section divider line draw */
    .anim-line {
      width: 0 !important;
      transition: width 0.8s cubic-bezier(0.22,1,0.36,1) var(--anim-delay, 0s) !important;
    }
    .anim-line.anim-done {
      width: var(--line-width, 48px) !important;
    }

    /* Ripple on stat icons */
    @keyframes ripple {
      0%   { box-shadow: 0 0 0 0 rgba(58,91,217,0.3); }
      100% { box-shadow: 0 0 0 16px rgba(58,91,217,0); }
    }
    .stat-icon.anim-done,
    .feat-bar-icon.anim-done {
      animation: ripple 0.8s ease forwards;
    }

    /* Card hover lift (global enhancement) */
    .kegiatan-card,
    .akses-card,
    .kenapa-card,
    .harapan-card,
    .ep-metode-card,
    .ep-kur-card,
    .ep-tujuan-item,
    .sk-card,
    .filosofi-card,
    .tujuan-card,
    .penasehat-card,
    .dewan-card {
      transition: transform 0.25s cubic-bezier(0.22,1,0.36,1),
                  box-shadow 0.25s cubic-bezier(0.22,1,0.36,1),
                  opacity 0.55s cubic-bezier(0.22,1,0.36,1),
                  background 0.2s !important;
    }

    /* Navbar scroll shrink */
    .navbar.scrolled {
      padding: 0;
      box-shadow: 0 4px 32px rgba(0,0,0,0.1);
      background: rgba(255, 255, 255, 0.85) !important;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      transition: all 0.3s ease;
    }

    /* Smooth page entrance */
    body {
      animation: pageIn 0.4s ease;
    }
    @keyframes pageIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  // =============================================
  // 2. AUTO-TAG ELEMENTS
  // =============================================
  function autoTag() {
    const rules = [
      // Section titles
      { sel: '.section-title, .sejarah-title, .filosofi-title, .tujuan-title, .galeri-title, .ppdb-sec-title, .ep-sec-title, .sk-hero-title, .ppdb-hero-title, .ep-hero-title, .kegiatan-title, .ppdb-sambutan-title', anim: 'fade-up', dur: '0.7s' },
      // Section labels
      { sel: '.sejarah-label, .filosofi-label, .tujuan-label, .ep-sec-label, .ppdb-sec-label, .sk-hero-badge, .ppdb-hero-badge, .ep-hero-badge', anim: 'fade-up', dur: '0.5s' },
      // Underlines / decorative lines
      { sel: '.title-underline, .sejarah-underline, .filosofi-underline, .tujuan-underline, .galeri-underline, .kegiatan-underline, .ep-sec-title + *, .pn-divider', anim: 'fade-up', dur: '0.5s', delay: '0.1s' },
      // Hero content
      { sel: '.hero-content, .ppdb-hero-content, .ep-hero-content, .sk-hero-inner > *', anim: 'fade-left', dur: '0.8s' },
      // Hero images
      { sel: '.hero-students, .ppdb-hero-img, .ep-hero-visual, .pendiri-photo-wrap', anim: 'fade-right', dur: '0.8s', delay: '0.15s' },
      // Stats bar items
      { sel: '.stat-item', anim: 'fade-up', dur: '0.6s' },
      // Akses cards
      { sel: '.akses-card', anim: 'zoom-in', dur: '0.5s' },
      // Kegiatan cards
      { sel: '.kegiatan-card', anim: 'fade-up', dur: '0.6s' },
      // Feature bar items
      { sel: '.feat-bar-item, .pfs-item', anim: 'fade-up', dur: '0.5s' },
      // Harapan cards
      { sel: '.harapan-card', anim: 'fade-up', dur: '0.55s' },
      // Kenapa cards
      { sel: '.kenapa-card', anim: 'fade-up', dur: '0.6s' },
      // Metode cards
      { sel: '.ep-metode-card', anim: 'fade-up', dur: '0.6s' },
      // Kurikulum cards
      { sel: '.ep-kur-card', anim: 'zoom-in', dur: '0.55s' },
      // Tujuan items
      { sel: '.ep-tujuan-item', anim: 'fade-left', dur: '0.55s' },
      // Tujuan image
      { sel: '.ep-tujuan-img', anim: 'fade-right', dur: '0.7s' },
      // Filosofi cards
      { sel: '.filosofi-card', anim: 'fade-up', dur: '0.6s' },
      // Tujuan cards
      { sel: '.tujuan-card', anim: 'zoom-in', dur: '0.5s' },
      // Timeline items
      { sel: '.timeline-item', anim: 'fade-left', dur: '0.6s' },
      // Sejarah narasi
      { sel: '.sejarah-narasi p', anim: 'fade-up', dur: '0.55s' },
      // Pendiri info
      { sel: '.pendiri-info', anim: 'fade-right', dur: '0.7s', delay: '0.1s' },
      // Penasehat cards
      { sel: '.penasehat-card', anim: 'fade-up', dur: '0.65s' },
      // Galeri items
      { sel: '.galeri-item', anim: 'zoom-in', dur: '0.5s' },
      // Filter buttons
      { sel: '.filter-btn', anim: 'fade-up', dur: '0.4s' },
      // SMP section
      { sel: '.ppdb-smp-text, .ep-tentang-text', anim: 'fade-left', dur: '0.7s' },
      { sel: '.ppdb-smp-video, .ep-tentang-side', anim: 'fade-right', dur: '0.7s', delay: '0.1s' },
      // Sambutan
      { sel: '.sambutan-main, .sambutan-main-video', anim: 'fade-left', dur: '0.7s' },
      { sel: '.sambutan-playlist, .sambutan-list', anim: 'fade-right', dur: '0.7s', delay: '0.1s' },
      // Kuota
      { sel: '.kuota-info-cards, .kuota-left', anim: 'fade-left', dur: '0.7s' },
      { sel: '.kuota-countdown-wrap, .kuota-right', anim: 'fade-right', dur: '0.7s', delay: '0.1s' },
      // Lokasi
      { sel: '.lokasi-map-wrap, .lokasi-map', anim: 'fade-left', dur: '0.7s' },
      { sel: '.lokasi-info-wrap, .lokasi-info', anim: 'fade-right', dur: '0.7s', delay: '0.1s' },
      // SK cards
      { sel: '.sk-card', anim: 'fade-up', dur: '0.55s' },
      { sel: '.sk-intro-card', anim: 'fade-up', dur: '0.6s' },
      { sel: '.sk-table-wrap', anim: 'fade-up', dur: '0.7s' },
      // Rasul card, quote card
      { sel: '.ep-rasul-card, .ep-quote-card', anim: 'fade-up', dur: '0.6s' },
      // CTA banners
      { sel: '.cta-banner-inner, .sk-cta-inner, .ep-cta-content, .closing-inner, .banner-inner', anim: 'fade-up', dur: '0.65s' },
      // Dewan cards
      { sel: '.dewan-card', anim: 'fade-up', dur: '0.55s' },
      // Bottom banner features
      { sel: '.banner-feat', anim: 'fade-up', dur: '0.5s' },
      // Footer cols
      { sel: '.pf-col, .footer-col', anim: 'fade-up', dur: '0.5s' },
      // Sifat grid
      { sel: '.ep-sifat', anim: 'zoom-in', dur: '0.45s' },
      // Kuota info cards
      { sel: '.kuota-info-card', anim: 'zoom-in', dur: '0.5s' },
      // Playlist items
      { sel: '.sp-item, .slist-item, .playlist-item', anim: 'fade-left', dur: '0.45s' },
      // SMP badges
      { sel: '.smp-badge', anim: 'fade-up', dur: '0.4s' },
      // Lokasi info items
      { sel: '.lokasi-info-item, .lokasi-info-card', anim: 'fade-right', dur: '0.5s' },
    ];

    rules.forEach(rule => {
      document.querySelectorAll(rule.sel).forEach(el => {
        if (!el.hasAttribute('data-anim')) {
          el.setAttribute('data-anim', rule.anim);
          if (rule.dur)   el.style.setProperty('--anim-dur',   rule.dur);
          if (rule.delay) el.style.setProperty('--anim-delay', rule.delay);
        }
      });
    });

    // Stagger siblings automatically
    const staggerParents = [
      '.akses-grid', '.kenapa-grid', '.harapan-grid',
      '.ep-metode-grid', '.ep-kurikulum-grid', '.sk-cards-grid',
      '.filosofi-grid', '.tujuan-grid', '.dewan-grid',
      '.kegiatan-grid', '.stats-inner', '.ppdb-feat-strip-inner',
      '.ppdb-smp-badges', '.kuota-info-cards'
    ];

    staggerParents.forEach(sel => {
      document.querySelectorAll(sel).forEach(parent => {
        const children = parent.querySelectorAll('[data-anim]');
        children.forEach((child, i) => {
          const base = parseFloat(child.style.getPropertyValue('--anim-delay') || '0');
          child.style.setProperty('--anim-delay', (base + i * 0.08) + 's');
        });
      });
    });
  }

  // =============================================
  // 3. INTERSECTION OBSERVER
  // =============================================
  function initObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim-done');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
  }

  // =============================================
  // 4. COUNTER ANIMATION
  // =============================================
  function initCounters() {
    const counters = document.querySelectorAll('.stat-num, .ep-stat strong');

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const raw = el.textContent.trim();
        const num = parseInt(raw.replace(/\D/g, ''), 10);
        const suffix = raw.replace(/[\d]/g, '');
        if (isNaN(num)) return;

        let start = 0;
        const duration = 1400;
        const startTime = performance.now();

        function tick(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * num);
          el.textContent = current + suffix;
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            el.textContent = num + suffix;
            el.classList.add('anim-count-done');
          }
        }

        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(el => obs.observe(el));
  }

  // =============================================
  // 5. NAVBAR SCROLL EFFECT
  // =============================================
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // =============================================
  // 6. SMOOTH SCROLL FOR ANCHOR LINKS
  // =============================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // =============================================
  // 7. PARALLAX HERO BG (subtle)
  // =============================================
  function initParallax() {
    const heroes = document.querySelectorAll('.hero-students, .pendiri-bg-img');
    if (!heroes.length) return;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      heroes.forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.12}px)`;
      });
    }, { passive: true });
  }

  // =============================================
  // 8. ACTIVE NAV HIGHLIGHT ON SCROLL
  // =============================================
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-item');
    if (!sections.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => obs.observe(s));
  }

  // =============================================
  // 9. SCROLL PROGRESS BAR
  // =============================================
  function initScrollProgress() {
    const bar = document.createElement('div');
    bar.style.cssText = `
      position: fixed; top: 0; left: 0; height: 3px; width: 0%;
      background: linear-gradient(90deg, #3a5bd9, #27ae60);
      z-index: 9999; transition: width 0.1s linear;
      box-shadow: 0 0 8px rgba(58,91,217,0.5);
    `;
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
    }, { passive: true });
  }

  // =============================================
  // 10. BACK TO TOP BUTTON
  // =============================================
  function initBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    btn.setAttribute('aria-label', 'Kembali ke atas');
    btn.style.cssText = `
      position: fixed; bottom: 28px; right: 28px;
      width: 46px; height: 46px; border-radius: 50%;
      background: linear-gradient(135deg, #1a3a6b, #3a5bd9);
      color: #fff; border: none; cursor: pointer;
      font-size: 16px; display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 16px rgba(26,58,107,0.35);
      opacity: 0; transform: translateY(16px);
      transition: opacity 0.3s, transform 0.3s;
      z-index: 999;
    `;

    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.style.opacity = '1';
        btn.style.transform = 'translateY(0)';
      } else {
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(16px)';
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-3px)';
      btn.style.boxShadow = '0 8px 24px rgba(26,58,107,0.45)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0)';
      btn.style.boxShadow = '0 4px 16px rgba(26,58,107,0.35)';
    });
  }

  // =============================================
  // INIT ALL
  // =============================================
  function init() {
    autoTag();
    initObserver();
    initCounters();
    initNavbar();
    initSmoothScroll();
    initParallax();
    initActiveNav();
    initScrollProgress();
    initBackToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
