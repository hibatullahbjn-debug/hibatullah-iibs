/**
 * HIBATULLAH IIBS - Berita Pesantren
 * Data diambil langsung dari WordPress REST API hibatullah.sch.id
 * Artikel baru otomatis muncul tanpa perlu update manual
 */
(function () {

  var WP_API = 'https://linen-eagle-143399.hostingersite.com/wp-json/wp/v2/posts?per_page=100&_embed=1&orderby=date&order=desc';

  // Fallback jika API tidak bisa diakses
  var BERITA_DATA = [
    {
      title: 'Menanamkan Kesantunan dari Meja Makan',
      pubDate: '2025-12-13',
      author: 'Rozzaqul Hasan',
      categories: ['Artikel', 'Pendidikan'],
      description: 'Dalam tradisi Islam, adab bukan sekadar tata krama lahiriah, melainkan cerminan kepribadian seorang muslim sekaligus jalan untuk mendekatkan diri kepada Allah.',
      content: '<p>Dalam tradisi Islam, adab bukan sekadar tata krama lahiriah, melainkan cerminan kepribadian seorang muslim sekaligus jalan untuk mendekatkan diri kepada Allah. Nilai adab tidak hanya tampak dalam ibadah-ibadah khusus, tetapi juga terwujud dalam aktivitas sederhana sehari-hari, termasuk saat makan. Dari meja makan, seseorang belajar menata niat, membiasakan kesederhanaan, menjaga kebersihan, serta menumbuhkan kepedulian terhadap sesama.</p><p>Nilai-nilai inilah yang terus ditanamkan di Hibatullah International Islamic Boarding School (IIBS) Bojonegoro, sebuah pesantren yang menjadikan adab sebagai ruh pendidikan.</p><p>Setiap aktivitas makan diawali dengan niat yang benar. Santri dibiasakan menyadari bahwa makan bukan semata mengenyangkan perut, melainkan menguatkan tubuh agar mampu belajar dan beribadah dengan optimal. Rasulullah SAW menegaskan bahwa setiap perbuatan bergantung pada niatnya.</p><p>Sebelum makan, kebersihan menjadi perhatian utama. Mencuci tangan bukan hanya bagian dari pola hidup sehat, tetapi juga bentuk ketaatan terhadap tuntunan Nabi. Di lingkungan Hibatullah, kebiasaan ini dilakukan secara disiplin dan konsisten.</p><p>Saat makan, santri duduk dengan rapi dan tenang. Rasulullah SAW mencontohkan makan dengan sikap rendah hati, tidak bersandar, dan penuh kesederhanaan. Santri juga dibiasakan untuk menghargai makanan, tidak mencelanya, serta mengambil secukupnya sesuai kebutuhan.</p><p>Makan berjamaah menjadi momen penting dalam pendidikan karakter. Rasulullah SAW mengajarkan bahwa makan bersama membawa keberkahan. Di Hibatullah, kebersamaan ini menumbuhkan sikap peduli, mendahulukan yang lebih tua, serta saling berbagi.</p><p>Basmalah mengawali, hamdalah mengakhiri. Doa-doa pendek ini dibiasakan agar santri selalu mengingat Allah dalam setiap nikmat yang diterima.</p><p>Seluruh pembiasaan ini menunjukkan bahwa di Hibatullah, pendidikan karakter tidak hanya diajarkan di kelas, tetapi dihidupkan dalam keseharian. Dari meja makan, santri belajar menjadi pribadi yang bersih, santun, peduli, dan penuh rasa syukur.</p>',
      link: 'https://hibatullah.sch.id/menanamkan-kesantunan-dari-meja-makan/',
      thumbnail: 'https://hibatullah.sch.id/wp-content/uploads/2025/12/santri-makan-1024x606.jpeg'
    },
    {
      title: 'Adab kepada Orang Tua Karakter Utama Santri Hibatullah',
      pubDate: '2025-11-18',
      author: 'Rozzaqul Hasan',
      categories: ['Artikel', 'Pendidikan'],
      description: 'Dalam ajaran Islam, adab kepada orang tua menempati posisi yang sangat tinggi. Bahkan sebelum seorang anak mempelajari ilmu yang luas, ia dituntun untuk memiliki sikap hormat.',
      content: '<p>Dalam ajaran Islam, adab kepada orang tua menempati posisi yang sangat tinggi. Bahkan sebelum seorang anak mempelajari ilmu yang luas, ia dituntun untuk memiliki sikap hormat, lembut, dan santun kepada kedua orang tuanya. Al-Quran mengingatkan agar kita tidak mengucapkan kata yang menyakitkan, bersikap rendah hati, serta mendoakan mereka dengan penuh kasih sayang.</p><p>Rasulullah pun menegaskan bahwa ibu adalah sosok yang paling utama dihormati, tiga kali disebut sebelum ayah karena besarnya pengorbanan yang mereka lakukan.</p><p>Nilai agung inilah yang menjadi pondasi pendidikan di Hibatullah International Islamic Boarding School (IIBS) Bojonegoro. Di sini, kami meyakini bahwa anak yang memiliki adab kepada orang tuanya akan tumbuh menjadi pribadi yang lebih bijak, tenang, dan mudah menerima ilmu. Sebab adab adalah akar dari segala kebaikan.</p><p>Dalam keseharian di lingkungan Hibatullah, santri dibimbing untuk membiasakan sikap-sikap beradab yang sederhana namun bermakna. Mulai dari menjaga tutur kata, menghormati guru sebagai perpanjangan peran orang tua, hingga menunjukkan tanggung jawab dalam setiap tugas yang diberikan.</p><p>Sikap berbakti kepada orang tua juga tumbuh melalui latihan-latihan kecil yang dilakukan santri setiap hari. Mereka dibiasakan untuk berdoa bagi kedua orang tuanya, menjaga amanah keluarga, serta menampilkan akhlak terbaik ketika berinteraksi dengan teman maupun lingkungan.</p><p>Pendekatan pendidikan karakter di Hibatullah tidak memaksa, tidak menggurui, namun tumbuh dari teladan, kebiasaan, dan suasana yang mendukung. Anak-anak tidak hanya belajar tentang adab, tetapi merasakan bahwa adab itu indah, bermanfaat, dan membuat mereka lebih dihargai.</p>',
      link: 'https://hibatullah.sch.id/adab-kepada-orang-tua-karakter-utama-santri-hibatullah/',
      thumbnail: 'https://hibatullah.sch.id/wp-content/uploads/2025/11/santri-salim-tangan.jpeg'
    },
    {
      title: 'Guru dan Siswa Hibatullah IIBS Belajar Langsung di Jantung Kampoeng Inggris',
      pubDate: '2025-11-15',
      author: 'Rozzaqul Hasan',
      categories: ['Kegiatan', 'Prestasi'],
      description: 'Pagi di Pare, Kediri, pada hari Kamis (13/11/2025), terasa lebih hidup saat rombongan Hibatullah IIBS melanjutkan eksplorasi mereka di kawasan Kampoeng Inggris.',
      content: '<p>Pagi di Pare, Kediri, pada hari Kamis (13/11/2025), terasa lebih hidup saat rombongan Hibatullah International Islamic Boarding School melanjutkan eksplorasi mereka di kawasan Kampoeng Inggris. Para siswa kelas VII bersama para guru telah berada di FEE Center selama beberapa hari untuk mengikuti rangkaian kegiatan belajar bahasa yang intensif.</p><p>Dipandu oleh Mr. Fauzan dan Mrs. Vita selaku tutor dari FEE Center, kegiatan yang berlangsung sejak pukul 08.00 hingga 12.00 ini tidak sekadar menjadi kunjungan wisata edukasi, melainkan perjalanan intelektual yang mengajak peserta menyelami cara belajar, budaya, dan atmosfer khas Kampoeng Inggris.</p><p>Perjalanan dimulai dengan kunjungan ke Candi Tegowangi, sebuah cagar budaya yang menyimpan kisah masa lalu. Di sana, peserta diajak mengenali kekayaan sejarah Indonesia sekaligus belajar tentang pentingnya pelestarian situs budaya.</p><p>Perjalanan berlanjut ke Masjid Jami Imam Baidhowi, masjid megah yang sekilas mengingatkan pada kemuliaan arsitektur Masjid Nabawi. Di tempat ini, para peserta tidak hanya menunaikan salat Dzuhur, tetapi juga menikmati kehangatan masjid yang dilengkapi ruang bermain dan fasilitas olahraga.</p><p>Salah satu peserta sekaligus koordinator Program English Camp, Mr. Firman menuturkan: <em>"Melalui kegiatan ini, saya melihat langsung bagaimana lingkungan belajar di Kampoeng Inggris dibangun. Metode yang digunakan variatif, komunikatif, dan sangat memberi ruang bagi keberanian berbicara."</em></p><p>Kegiatan Tour of Kampoeng Inggris bukan sekadar perjalanan biasa, tetapi perjalanan makna. Ia membuka cakrawala, menanam inspirasi, dan memperkuat komitmen Hibatullah IIBS dalam menghadirkan pendidikan yang berkualitas, relevan, dan berorientasi global.</p>',
      link: 'https://hibatullah.sch.id/guru-dan-siswa-hibatullah-iibs-belajar-langsung-di-jantung-kampoeng-inggris/',
      thumbnail: 'https://hibatullah.sch.id/wp-content/uploads/2025/11/WhatsApp_Image_2025-11-15_at_17.15.06-transformed.jpeg'
    },
    {
      title: 'Al-Kahf Menyapa Hati: Tradisi Santri Hibatullah IIBS Menyambut Jumat Penuh Berkah',
      pubDate: '2025-11-10',
      author: 'adminhibatullah',
      categories: ['Kegiatan', 'Pendidikan'],
      description: 'Bojonegoro - Setiap hari Jumat, lingkungan Hibatullah IIBS dipenuhi suasana khidmat dan penuh kedamaian. Para santri berkumpul di masjid untuk membaca Surat Al-Kahfi.',
      content: '<p>Bojonegoro - Setiap hari Jumat, lingkungan Hibatullah International Islamic Boarding School (IIBS) dipenuhi suasana khidmat dan penuh kedamaian. Para santri berkumpul di masjid untuk bersama-sama membaca Surat Al-Kahfi, salah satu surat istimewa dalam Al-Quran yang mengandung banyak pelajaran dan keutamaan bagi umat Islam.</p><p>Tradisi rutin bertajuk "Al-Kahf Menyapa Hati" ini bukan sekadar kegiatan membaca, melainkan juga menjadi momen refleksi spiritual bagi seluruh santri. Melalui lantunan ayat suci Al-Quran, mereka diajak untuk menenangkan hati, memperkuat iman, dan menyambut akhir pekan dengan penuh keberkahan.</p><p>Kegiatan ini juga menjadi bagian dari pembiasaan program tahfidz dan pembinaan karakter Qurani di Hibatullah IIBS. Dengan pembacaan bersama, para santri dilatih untuk menjaga konsistensi interaksi harian dengan Al-Quran serta mempererat ukhuwah di antara mereka.</p><blockquote style="border-left:3px solid #3a5bd9;padding-left:16px;margin:16px 0;color:#555;font-style:italic"><p>"Membaca Surat Al-Kahfi setiap Jumat adalah salah satu sunnah yang penuh hikmah. Kami berharap kegiatan ini terus mengakar dalam diri santri, sehingga mereka tumbuh menjadi generasi yang dekat dengan Al-Quran dan berakhlak mulia." - Koordinator Tahfidz Hibatullah IIBS</p></blockquote><p>Dengan semangat Al-Kahf Menyapa Hati, SMP Hibatullah IIBS terus meneguhkan langkahnya dalam mencetak Calon Pemimpin Hafal Al-Quran dan Berkarakter Mulia.</p>',
      link: 'https://hibatullah.sch.id/al-kahf-menyapa-hati-tradisi-santri-hibatullah-iibs-menyambut-jumat-penuh-berkah/',
      thumbnail: 'https://hibatullah.sch.id/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-11.30.44.jpeg'
    },
    {
      title: 'Penerimaan Santri Baru SMP Hibatullah IIBS Bojonegoro',
      pubDate: '2025-11-10',
      author: 'adminhibatullah',
      categories: ['Pengumuman'],
      description: 'Penerimaan Santri Baru SMP Hibatullah IIBS Bojonegoro Tahun Ajaran 2026/2027 telah dibuka! Mari bergabung untuk membentuk generasi yang beradab dan berkarya.',
      content: '<p>Penerimaan Santri Baru SMP Hibatullah IIBS Bojonegoro Tahun Ajaran 2026/2027 telah dibuka!</p><p>Mari bergabung bersama kami untuk membentuk generasi yang beradab dan berkarya, dengan fasilitas lengkap dan lingkungan belajar yang nyaman.</p><p><strong>Gelombang I:</strong> 01 September - 31 Oktober 2025<br><strong>Gelombang II:</strong> 01 November 2025 - 16 Januari 2026</p><p>Info dan pendaftaran: <strong>082262263434</strong><br>Website: <a href="https://hibatullah.sch.id" target="_blank">hibatullah.sch.id</a></p>',
      link: 'https://hibatullah.sch.id/penerimaan-santri-baru-smp-hibatullah-iibs-bojonegoro/',
      thumbnail: 'https://hibatullah.sch.id/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-10-at-11.35.07.jpeg'
    }
  ];

  // =============================================
  // FETCH dari WordPress REST API
  // =============================================
  function fetchFromWP(callback) {
    fetch(WP_API)
      .then(function(r) { return r.json(); })
      .then(function(posts) {
        if (!posts || !posts.length) { callback(BERITA_DATA); return; }
        var items = posts.map(function(post) {
          // Ambil thumbnail dari _embedded featured media
          var thumb = '';
          try {
            thumb = post._embedded['wp:featuredmedia'][0].source_url;
          } catch(e) {}
          if (!thumb) {
            var mg = (post.content.rendered || '').match(/<img[^>]+src=["']([^"']+)["']/i);
            if (mg) thumb = mg[1];
          }
          // Ambil kategori
          var cats = [];
          var originalCats = [];
          try {
            originalCats = post._embedded['wp:term'][0].map(function(t){ 
              return (t.name.toLowerCase() === 'uncategorized') ? 'News' : t.name; 
            });
            cats = [].concat(originalCats);
          } catch(e) { cats = ['News']; originalCats = ['News']; }
          
          // Ambil author
          var author = '';
          try {
            author = post._embedded.author[0].name;
          } catch(e) { author = 'Admin'; }

          var rawTitle = post.title.rendered.replace(/&#(\d+);/g, function(m,c){ return String.fromCharCode(c); });
          var tLower = rawTitle.toLowerCase();
          
          if (tLower.includes('al kahf') || tLower.includes('al-kahf') || tLower.includes('pengawas') || tLower.includes('hari raya') || tLower.includes('guru dan siswa')) {
            cats = ['Kegiatan'];
          } else if (tLower.includes('adab') || tLower.includes('meja') || tLower.includes('kesantunan')) {
            cats = ['Pendidikan'];
          } else if (tLower.includes('baru') || tLower.includes('santri baru') || tLower.includes('menuntut ilmu') || tLower.includes('perjalanan mulia')) {
            cats = ['Artikel'];
          }
          
          var badgeCat = originalCats.length ? originalCats[0] : 'Blog';

          return {
            title: post.title.rendered.replace(/&#(\d+);/g, function(m,c){ return String.fromCharCode(c); }),
            pubDate: post.date,
            author: author,
            categories: cats.length ? cats : ['Blog'],
            badgeCategory: badgeCat,
            description: stripHtml(post.excerpt.rendered),
            content: post.content.rendered,
            link: post.link,
            thumbnail: thumb,
            slug: post.slug,
            wp_id: post.id
          };
        });
        
        updateFilterCounts(items);
        callback(items);
      })
      .catch(function() { 
        updateFilterCounts(BERITA_DATA);
        callback(BERITA_DATA); 
      });
  }

  function updateFilterCounts(items) {
    var counts = {};
    items.forEach(function(it) {
      (it.categories || []).forEach(function(c) {
        var cl = c.toLowerCase();
        counts[cl] = (counts[cl] || 0) + 1;
      });
    });

    document.querySelectorAll('.bt-filter-btn').forEach(function(btn) {
      var c = btn.getAttribute('data-cat');
      var label = c || 'Semua Berita';
      var cn = c ? (counts[c.toLowerCase()] || 0) : items.length;
      btn.innerHTML = label + ' <span style="opacity:0.6;font-size:11px;margin-left:4px">(' + cn + ')</span>';
    });

    document.querySelectorAll('.art-sidebar-filter a').forEach(function(link) {
      var urlCat = link.href.split('category=')[1];
      if (urlCat) {
        urlCat = decodeURIComponent(urlCat);
        var cn = counts[urlCat.toLowerCase()] || 0;
        link.innerHTML = urlCat + ' <span style="opacity:0.6;font-size:11px;margin-left:4px">(' + cn + ')</span>';
      } else {
        link.innerHTML = 'Semua Berita <span style="opacity:0.6;font-size:11px;margin-left:4px">(' + items.length + ')</span>';
      }
    });
  }

  // Expose ke global agar bisa dipakai di artikel.html
  window.fetchFromWP = fetchFromWP;

  function initBerita(gridId, limit) {
    var grid = document.getElementById(gridId);
    if (!grid) return;
    fetchFromWP(function(items) {
      renderGrid(grid, items, limit || 4);
    });
  }

  function renderGrid(grid, items, limit) {
    var html = '';
    var count = limit ? Math.min(limit, items.length) : items.length;
    for (var i = 0; i < count; i++) {
      html += makeCard(items[i], i);
    }
    grid.innerHTML = html;

    // Attach click — pakai wp_id jika ada, fallback modal
    grid.querySelectorAll('.kegiatan-card').forEach(function(card, idx) {
      (function(capturedItem) {
        card.addEventListener('click', function(e) {
          e.preventDefault();
          if (capturedItem && capturedItem.wp_id) {
            window.location.href = 'artikel.html?id=' + capturedItem.wp_id;
          } else if (document.getElementById('btModal')) {
            openModal(capturedItem);
          } else {
            window.location.href = 'artikel.html?id=' + idx;
          }
        });
      })(items[idx]);
    });
  }

  function makeCard(item, idx) {
    var img = item.thumbnail || extractImg(item.content) || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80';
    var cat = item.categories && item.categories[0] ? item.categories[0] : 'Blog';
    var badgeCat = item.badgeCategory || 'Berita';
    if (cat.toLowerCase().trim() === 'uncategorized') cat = 'News';
    if (badgeCat.toLowerCase().trim() === 'uncategorized') badgeCat = 'News';
    var desc = stripHtml(item.description || item.content || '');
    if (desc.length > 110) desc = desc.substring(0, 110) + '...';
    var tgl = formatDate(item.pubDate);
    var badgeClass = ['badge-purple','badge-blue','badge-green','badge-orange'][idx % 4];

    var filterCatLabel = cat !== badgeCat ? ' &bull; <span style="color:#3a5bd9;font-weight:600;">' + esc(cat) + '</span>' : '';

    return '<a href="artikel.html?id=' + (item.wp_id || idx) + '" class="kegiatan-card" data-idx="' + idx + '">' +
      '<div class="kegiatan-img-wrap">' +
        '<img src="' + esc(img) + '" alt="' + esc(item.title) + '" onerror="this.src=\'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80\'" />' +
        '<span class="kegiatan-badge ' + badgeClass + '">' + esc(badgeCat.toUpperCase()) + '</span>' +
      '</div>' +
      '<div class="kegiatan-body">' +
        '<div class="kegiatan-date"><i class="far fa-calendar-alt"></i> ' + tgl + filterCatLabel + '</div>' +
        '<h3 class="kegiatan-card-title">' + esc(item.title) + '</h3>' +
        '<p class="kegiatan-card-desc">' + esc(desc) + '</p>' +
        '<div class="kegiatan-footer">' +
          '<div class="kegiatan-author">' +
            '<div style="width:28px;height:28px;border-radius:50%;background:#e8f0fe;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fas fa-user" style="font-size:12px;color:#1a3a6b"></i></div>' +
            '<div><span class="author-name">' + esc((item.author && item.author.indexOf('@') === -1) ? item.author : 'Admin') + '</span><span class="author-role">Penulis</span></div>' +
          '</div>' +
          '<span class="kegiatan-read-btn">Baca Selengkapnya →</span>' +
        '</div>' +
      '</div>' +
    '</a>';
  }

  // Modal (for berita.html)
  function openModal(item) {
    var modal = document.getElementById('btModal');
    if (!modal) {
      window.open(item.link, '_blank');
      return;
    }
    var img = item.thumbnail || extractImg(item.content) || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80';
    var cat = item.categories && item.categories[0] ? item.categories[0] : 'Blog';
    document.getElementById('btModalImg').src = img;
    document.getElementById('btModalCat').textContent = cat.toUpperCase();
    document.getElementById('btModalTitle').textContent = item.title;
    document.getElementById('btModalAuthor').textContent = (item.author && item.author.indexOf('@') === -1) ? item.author : 'Admin';
    document.getElementById('btModalDate').textContent = formatDate(item.pubDate);
    document.getElementById('btModalContent').innerHTML = item.content || '<p>Klik tombol di bawah untuk membaca artikel lengkap.</p>';
    document.getElementById('btModalLink').href = item.link;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Helpers
  function extractImg(html) {
    if (!html) return null;
    var m = (html || '').match(/<img[^>]+src=["']([^"']+)["']/i);
    return m ? m[1] : null;
  }
  function stripHtml(html) { return (html || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim(); }
  function esc(s) { return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function formatDate(d) {
    if (!d) return '';
    try {
      var dt = new Date(d);
      var m = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
      return dt.getDate() + ' ' + m[dt.getMonth()] + ' ' + dt.getFullYear();
    } catch(e) { return d; }
  }

  // =============================================
  // INIT on DOM ready
  // =============================================
  document.addEventListener('DOMContentLoaded', function() {
    // Homepage - grid kegiatan (4 artikel)
    initBerita('kegiatanGrid', 3);
    // Homepage - grid berita (3 artikel)
    initBerita('beritaGridHome', 3);

    // berita.html - full grid dengan semua artikel
    var btGrid = document.getElementById('btGrid');
    if (btGrid) {
      var shown = 0;
      var PER_PAGE = 9;
      var allItems = BERITA_DATA;

      // Fetch dari WordPress REST API
      fetchFromWP(function(items) {
        // Handle initial filter from URL (e.g. ?category=Prestasi)
        var params = new URLSearchParams(window.location.search);
        var initialCat = params.get('category');
        var originalItems = items;
        
        if (initialCat) {
          allItems = originalItems.filter(function(it) {
            return (it.categories || []).map(function(c) { return c.toLowerCase(); }).includes(initialCat.toLowerCase());
          });
          // Set active button
          var btns = document.querySelectorAll('.bt-filter-btn');
          btns.forEach(function(b) {
            if (b.getAttribute('data-cat').toLowerCase() === initialCat.toLowerCase()) {
              b.classList.add('active');
            } else {
              b.classList.remove('active');
            }
          });
        } else {
          allItems = originalItems;
        }
        
        renderBatch(true);
        
        // Filter Buttons Logic
        var filterBtns = document.querySelectorAll('.bt-filter-btn');
        filterBtns.forEach(function(btn) {
          btn.addEventListener('click', function() {
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var cat = btn.getAttribute('data-cat');
            
            if (cat) {
              allItems = originalItems.filter(function(it) {
                return (it.categories || []).map(function(c) { return c.toLowerCase(); }).includes(cat.toLowerCase());
              });
            } else {
              allItems = originalItems;
            }
            
            // Re-apply search if any
            var searchInput = document.getElementById('btSearch');
            if (searchInput && searchInput.value) {
              var q = searchInput.value.toLowerCase().trim();
              allItems = allItems.filter(function(item) {
                return (item.title||'').toLowerCase().includes(q) || (item.description||'').toLowerCase().includes(q);
              });
            }
            
            renderBatch(true);
          });
        });

        // Search Logic
        var searchInput = document.getElementById('btSearch');
        if (searchInput) {
          var timer;
          searchInput.addEventListener('input', function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
              var q = searchInput.value.toLowerCase().trim();
              var activeCatBtn = document.querySelector('.bt-filter-btn.active');
              var cat = activeCatBtn ? activeCatBtn.getAttribute('data-cat') : '';
              
              var filteredByCategory = cat ? originalItems.filter(function(it) {
                return (it.categories || []).map(function(c) { return c.toLowerCase(); }).includes(cat.toLowerCase());
              }) : originalItems;

              allItems = q ? filteredByCategory.filter(function(item) {
                return (item.title||'').toLowerCase().includes(q) || (item.description||'').toLowerCase().includes(q);
              }) : filteredByCategory;
              
              renderBatch(true);
            }, 300);
          });
        }
      });

      function renderBatch(reset) {
        if (reset) { shown = 0; btGrid.innerHTML = ''; }
        
        if (allItems.length === 0) {
          btGrid.innerHTML = '<div class="bt-empty" style="grid-column: 1 / -1; text-align: center; padding: 64px 20px; color: #888; font-size: 15px;"><i class="fas fa-folder-open" style="font-size: 48px; color: #d0dcf0; display: block; margin-bottom: 16px;"></i><b>Coming Soon!</b><br><span style="font-size:13px; color:#aaa;">Belum ada berita di kategori ini. Nanti akan segera kami update ya.</span></div>';
          var btn = document.getElementById('btLoadMore');
          if (btn) btn.style.display = 'none';
          return;
        }

        var batch = allItems.slice(shown, shown + PER_PAGE);
        batch.forEach(function(item) {
          var card = document.createElement('div');
          card.innerHTML = makeCard(item, shown);
          var el = card.firstChild;
          (function(capturedItem) {
            el.addEventListener('click', function(e) {
              e.preventDefault();
              if (capturedItem && capturedItem.wp_id) {
                window.location.href = 'artikel.html?id=' + capturedItem.wp_id;
              } else {
                openModal(capturedItem);
              }
            });
          })(item);
          btGrid.appendChild(el);
        });
        shown += batch.length;
        var btn = document.getElementById('btLoadMore');
        if (btn) btn.style.display = shown < allItems.length ? 'inline-flex' : 'none';
      }

      var loadBtn = document.getElementById('btLoadMore');
      if (loadBtn) loadBtn.addEventListener('click', function(){ renderBatch(false); });

      // Modal close
      var modalClose = document.getElementById('btModalClose');
      var modal = document.getElementById('btModal');
      if (modalClose) modalClose.addEventListener('click', function(){ modal.classList.remove('open'); document.body.style.overflow=''; });
      if (modal) modal.addEventListener('click', function(e){ if(e.target===modal){ modal.classList.remove('open'); document.body.style.overflow=''; } });
      document.addEventListener('keydown', function(e){ if(e.key==='Escape' && modal){ modal.classList.remove('open'); document.body.style.overflow=''; } });
    }
  });

})();

