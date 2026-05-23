// ===========================
// GALERI — filter, load more, lightbox
// ===========================
(function () {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var loadMoreBtn = document.getElementById('loadMoreBtn');
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var closeBtn = document.getElementById('lightboxClose');
  var prevBtn = document.getElementById('lightboxPrev');
  var nextBtn = document.getElementById('lightboxNext');
  var currentIndex = 0;
  var visibleItems = [];

  function getItems() {
    return document.querySelectorAll('.galeri-item');
  }

  function updateLoadMore() {
    if (!loadMoreBtn) return;
    var activeBtn = document.querySelector('.filter-btn.active');
    if (!activeBtn) return;
    var activeFilter = activeBtn.dataset.filter;
    var visibleHidden = Array.from(getItems()).filter(function (item) {
      return item.classList.contains('hidden') &&
        (activeFilter === 'semua' || item.dataset.cat === activeFilter);
    });
    if (visibleHidden.length === 0) {
      loadMoreBtn.classList.add('hidden');
    } else {
      loadMoreBtn.classList.remove('hidden');
    }
  }

  function initFilter() {
    filterBtns.forEach(function (btn) {
      btn.onclick = function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.dataset.filter;
        getItems().forEach(function (item) {
          var cat = item.dataset.cat;
          if (filter === 'semua' || cat === filter) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
        updateLoadMore();
      };
    });
  }

  function initLoadMore() {
    if (!loadMoreBtn) return;
    loadMoreBtn.onclick = function () {
      var activeBtn = document.querySelector('.filter-btn.active');
      var activeFilter = activeBtn ? activeBtn.dataset.filter : 'semua';
      getItems().forEach(function (item) {
        if (activeFilter === 'semua' || item.dataset.cat === activeFilter) {
          item.classList.remove('hidden');
          item.style.display = '';
        }
      });
      loadMoreBtn.classList.add('hidden');
    };
    updateLoadMore();
  }

  function getVisibleItems() {
    return Array.from(getItems()).filter(function (item) {
      return item.style.display !== 'none' && !item.classList.contains('hidden');
    });
  }

  function openLightbox(index) {
    if (!lightbox || !lightboxImg) return;
    visibleItems = getVisibleItems();
    currentIndex = index;
    var img = visibleItems[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showPrev() {
    visibleItems = getVisibleItems();
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    var img = visibleItems[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  function showNext() {
    visibleItems = getVisibleItems();
    currentIndex = (currentIndex + 1) % visibleItems.length;
    var img = visibleItems[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  function initLightbox() {
    if (!lightbox) return;
    getItems().forEach(function (item) {
      item.onclick = function () {
        visibleItems = getVisibleItems();
        var idx = visibleItems.indexOf(item);
        openLightbox(idx >= 0 ? idx : 0);
      };
    });
    if (closeBtn) closeBtn.onclick = closeLightbox;
    if (prevBtn) prevBtn.onclick = showPrev;
    if (nextBtn) nextBtn.onclick = showNext;
    lightbox.onclick = function (e) {
      if (e.target === lightbox) closeLightbox();
    };
  }

  window.initGaleriUI = function () {
    initFilter();
    initLoadMore();
    initLightbox();
    updateLoadMore();
  };

  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  document.addEventListener('DOMContentLoaded', function () {
    var grid = document.getElementById('galeriGrid');
    if (grid && !grid.hasAttribute('data-firebase-galeri')) {
      window.initGaleriUI();
    }
  });
})();
