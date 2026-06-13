const fs = require('fs');
let html = fs.readFileSync('artikel.html', 'utf8');

// 1. Add Firebase scripts if not present
if (!html.includes('firebase-app-compat.js')) {
  const firebaseScripts = `
  <script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js"></script>
  <script src="firebase-config.js"></script>
  <script src="firebase-db.js"></script>
  `;
  html = html.replace('<script src="berita.js?v=1781323373023"></script>', firebaseScripts + '\n  <script src="berita.js?v=1781323373023"></script>');
} else if (!html.includes('firebase-auth-compat.js')) {
  // Add auth if only firestore was there
  html = html.replace(
    '<script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js"></script>',
    '<script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-auth-compat.js"></script>\n  <script src="https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore-compat.js"></script>'
  );
}

// 2. Replace Comment UI
const commentUIRegex = /<!-- KOMENTAR -->[\s\S]*?(?=<\/div>\s*<\/div>\s*<\/div>\s*<!-- Sidebar -->)/;
const newCommentUI = `<!-- KOMENTAR -->
          <div class="art-comments">
            <div class="art-comments-title"><i class="fas fa-comments"></i> Komentar (<span id="artCommentCount">0</span>)</div>
            
            <div id="artCommentLogin" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:24px; text-align:center; margin-bottom:24px;">
              <p style="font-size:14px; color:#475569; margin-bottom:16px;">Silakan login dengan akun Google Anda untuk memberikan komentar.</p>
              <button onclick="loginGoogle()" style="background:#ea4335; color:#fff; border:none; border-radius:8px; padding:10px 20px; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:8px;">
                <i class="fab fa-google"></i> Login dengan Google
              </button>
            </div>

            <div class="art-comment-form" id="artCommentForm" style="display:none;">
              <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
                <img id="currentUserAvatar" src="" style="width:36px; height:36px; border-radius:50%; object-fit:cover;" />
                <span id="currentUserName" style="font-weight:600; font-size:14px; color:#1e293b;"></span>
                <button onclick="logoutGoogle()" style="margin-left:auto; font-size:13px; background:none; border:none; color:#ef4444; cursor:pointer; font-weight:500;">Logout</button>
              </div>
              <textarea id="commentText" placeholder="Tulis komentar..."></textarea>
              <button class="art-comment-submit" onclick="submitComment()">Kirim Komentar</button>
            </div>

            <div class="art-comment-list" id="artCommentList">
              <div class="art-no-comment">Memuat komentar...</div>
            </div>
          </div>
`;
html = html.replace(commentUIRegex, newCommentUI);

// 3. Replace Logic
const logicRegex = /\/\/ ENGAGE: View, Like, Comment \(localStorage\)[\s\S]*?(?=function escHtml)/;
const newLogic = `// ENGAGE: View, Like, Comment (Firebase)
    // =============================================
    var currentPostKey = '';
    var currentUser = null;
    var db = null;
    var unsubComments = null;

    function initFirebaseEngage() {
      if (typeof firebase !== 'undefined' && firebase.apps.length) {
        db = firebase.firestore();
        firebase.auth().onAuthStateChanged(function(user) {
          currentUser = user;
          var loginDiv = document.getElementById('artCommentLogin');
          var formDiv = document.getElementById('artCommentForm');
          if (user) {
            loginDiv.style.display = 'none';
            formDiv.style.display = 'block';
            document.getElementById('currentUserAvatar').src = user.photoURL || 'https://via.placeholder.com/36';
            document.getElementById('currentUserName').textContent = user.displayName || 'Pengguna';
          } else {
            loginDiv.style.display = 'block';
            formDiv.style.display = 'none';
          }
        });
      }
    }

    window.loginGoogle = function() {
      if (typeof firebase === 'undefined') return alert('Firebase belum siap.');
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).catch(function(error) {
        alert('Gagal login: ' + error.message);
      });
    };

    window.logoutGoogle = function() {
      if (typeof firebase !== 'undefined') firebase.auth().signOut();
    };

    function initEngage(postKey) {
      currentPostKey = postKey;
      initFirebaseEngage();

      // Set initial values from localStorage to prevent empty flickers
      var likes = parseInt(localStorage.getItem(postKey + '_likes') || '0');
      var liked = localStorage.getItem(postKey + '_liked') === '1';
      document.getElementById('artLikeCount').textContent = likes;
      updateLikeBtn(liked);

      if (!db) return; // if firebase not setup yet

      var docRef = db.collection('berita_stats').doc(postKey);
      
      // Realtime listener for views, likes, shares
      docRef.onSnapshot(function(doc) {
        if (doc.exists) {
          var data = doc.data();
          document.getElementById('artViewCount').textContent = data.views || 0;
          document.getElementById('artLikeCount').textContent = data.likes || 0;
          document.getElementById('artShareCount').textContent = data.shares || 0;
          
          // Sync likes to localStorage to keep button state consistent
          localStorage.setItem(postKey + '_likes', data.likes || 0);
        } else {
          // Init doc if not exists
          docRef.set({ views: 1, likes: 0, shares: 0 });
        }
      });

      // Increment View
      db.runTransaction(function(transaction) {
        return transaction.get(docRef).then(function(doc) {
          if (!doc.exists) {
            transaction.set(docRef, { views: 1, likes: 0, shares: 0 });
          } else {
            var newViews = (doc.data().views || 0) + 1;
            transaction.update(docRef, { views: newViews });
          }
        });
      }).catch(function(err){ console.log("View transaction failed: ", err); });

      // Load comments
      if (unsubComments) unsubComments();
      unsubComments = docRef.collection('comments').orderBy('date', 'desc').onSnapshot(function(snap) {
        var comments = [];
        snap.forEach(function(doc) {
          comments.push(doc.data());
        });
        renderComments(comments);
      });
    }

    window.trackShare = function(postKey) {
      if (!postKey) postKey = currentPostKey;
      if (!db) return;
      var docRef = db.collection('berita_stats').doc(postKey);
      docRef.update({
        shares: firebase.firestore.FieldValue.increment(1)
      }).catch(function(){});
    };

    window.toggleLike = function() {
      var postKey = currentPostKey;
      var liked = localStorage.getItem(postKey + '_liked') === '1';
      var newLiked = !liked;
      
      localStorage.setItem(postKey + '_liked', newLiked ? '1' : '0');
      updateLikeBtn(newLiked);

      if (!db) return;
      var docRef = db.collection('berita_stats').doc(postKey);
      docRef.update({
        likes: firebase.firestore.FieldValue.increment(newLiked ? 1 : -1)
      }).catch(function(err){
         // Revert on error
         localStorage.setItem(postKey + '_liked', liked ? '1' : '0');
         updateLikeBtn(liked);
      });
    };

    function updateLikeBtn(liked) {
      var btn = document.getElementById('artLikeBtn');
      if (liked) {
        btn.classList.add('liked');
        btn.innerHTML = '<i class="fas fa-heart"></i> <span id="artLikeCount">' + document.getElementById('artLikeCount').textContent + '</span> Suka';
      } else {
        btn.classList.remove('liked');
        btn.innerHTML = '<i class="far fa-heart"></i> <span id="artLikeCount">' + document.getElementById('artLikeCount').textContent + '</span> Suka';
      }
    }

    window.submitComment = function() {
      if (!currentUser) return alert('Silakan login terlebih dahulu.');
      var postKey = currentPostKey;
      var text = document.getElementById('commentText').value.trim();
      if (!text) { alert('Komentar tidak boleh kosong.'); return; }

      if (!db) return alert('Koneksi database bermasalah.');

      var docRef = db.collection('berita_stats').doc(postKey).collection('comments').doc();
      docRef.set({
        name: currentUser.displayName || 'Pengguna',
        photoURL: currentUser.photoURL || '',
        text: text,
        date: firebase.firestore.FieldValue.serverTimestamp()
      }).then(function() {
        document.getElementById('commentText').value = '';
      }).catch(function(err) {
        alert('Gagal mengirim komentar: ' + err.message);
      });
    };

    function renderComments(comments) {
      var list = document.getElementById('artCommentList');
      var countEl = document.getElementById('artCommentCount');
      countEl.textContent = comments.length;

      if (!comments.length) {
        list.innerHTML = '<div class="art-no-comment">Belum ada komentar. Jadilah yang pertama!</div>';
        return;
      }

      var months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
      list.innerHTML = comments.map(function(c) {
        var dt = c.date && c.date.toDate ? c.date.toDate() : new Date();
        var tgl = dt.getDate() + ' ' + months[dt.getMonth()] + ' ' + dt.getFullYear() + ' ' + ('0'+dt.getHours()).slice(-2) + ':' + ('0'+dt.getMinutes()).slice(-2);
        var avatar = c.photoURL ? '<img src="'+escHtml(c.photoURL)+'" style="width:100%;height:100%;border-radius:50%;object-fit:cover;" />' : '<i class="fas fa-user"></i>';
        
        return '<div class="art-comment-item">' +
          '<div class="art-comment-header">' +
            '<div class="art-comment-avatar" style="padding:0; overflow:hidden;">' + avatar + '</div>' +
            '<span class="art-comment-name">' + escHtml(c.name) + '</span>' +
            '<span class="art-comment-date">' + tgl + '</span>' +
          '</div>' +
          '<div class="art-comment-text">' + escHtml(c.text).replace(/\\n/g, '<br>') + '</div>' +
        '</div>';
      }).join('');
    }

    `;
html = html.replace(logicRegex, newLogic);

fs.writeFileSync('artikel.html', html);
console.log('Patched artikel.html successfully.');
