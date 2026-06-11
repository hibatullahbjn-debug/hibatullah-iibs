// ===========================
// SAMBUTAN PLAYLIST
// ===========================
(function () {
  const items = document.querySelectorAll('.slist-item');
  const mainImg = document.querySelector('.sambutan-main .vid-wrap img');
  const topLabel = document.querySelector('.vid-top-label');

  const data = [
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80', label: 'Sambutan Gubernur Jawa Tengah ▶' },
    { src: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=700&q=80', label: 'Sambutan Ust. Yusuf Mansur ▶' },
    { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=700&q=80', label: 'Sambutan Dr. (H.C.) Ary Ginanjar Agustian ▶' },
    { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=80', label: 'Sambutan Prof. Dr. Muhammad Zuhdi ▶' },
    { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=700&q=80', label: 'Sambutan Ust. Hanan Attaki, Lc. ▶' },
  ];

  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      items.forEach(it => it.classList.remove('active'));
      item.classList.add('active');
      if (mainImg) mainImg.src = data[i].src;
      if (topLabel) topLabel.textContent = data[i].label;
    });
  });
})();
