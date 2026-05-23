// Live Search Filter
(function () {
  const input = document.getElementById('skSearch');
  const rows  = document.querySelectorAll('.sk-row');

  if (!input) return;

  input.addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    let found = 0;

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      if (text.includes(q)) {
        row.style.display = '';
        found++;
      } else {
        row.style.display = 'none';
      }
    });

    // Show/hide no results
    let noRes = document.querySelector('.sk-no-results');
    if (!noRes) {
      noRes = document.createElement('tr');
      noRes.className = 'sk-no-results';
      noRes.innerHTML = '<td colspan="2" style="text-align:center;padding:32px;color:#aaa;font-size:14px;"><i class="fas fa-search" style="margin-right:8px;"></i>Tidak ada hasil untuk "<strong>' + q + '</strong>"</td>';
      document.querySelector('.sk-table tbody').appendChild(noRes);
    }
    noRes.style.display = found === 0 ? 'table-row' : 'none';
    if (found === 0) noRes.querySelector('strong').textContent = q;
  });
})();

// Row hover highlight sync with cards
(function () {
  const rows  = document.querySelectorAll('.sk-row');
  const cards = document.querySelectorAll('.sk-card');

  rows.forEach((row, i) => {
    row.addEventListener('mouseenter', () => {
      if (cards[i]) cards[i].style.boxShadow = '0 12px 32px rgba(26,58,107,0.2)';
    });
    row.addEventListener('mouseleave', () => {
      if (cards[i]) cards[i].style.boxShadow = '';
    });
  });
})();

// Animate rows on scroll
(function () {
  const rows = document.querySelectorAll('.sk-row, .sk-card');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, i * 60);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  rows.forEach(row => {
    row.style.opacity = '0';
    row.style.transform = 'translateY(16px)';
    row.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    obs.observe(row);
  });
})();
