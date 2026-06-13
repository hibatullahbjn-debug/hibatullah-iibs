const fs = require('fs');

let html = fs.readFileSync('artikel.html', 'utf8');

// 1. Replace the HTML UI for comments
const htmlRegex = /<div id="artCommentLogin"[\s\S]*?<\/div>\s*<div class="art-comment-list"/;
const newHtml = `<div class="art-comment-form">
              <input type="text" id="commentName" placeholder="Nama kamu..." maxlength="50" style="width: 100%; padding: 12px; margin-bottom: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-family: 'Poppins', sans-serif;" />
              <textarea id="commentText" placeholder="Tulis komentar..."></textarea>
              <button class="art-comment-submit" onclick="submitComment()">Kirim Komentar</button>
            </div>

            <div class="art-comment-list"`;
html = html.replace(htmlRegex, newHtml);

// 2. Remove initFirebaseEngage auth logic
const authLogicRegex = /firebase\.auth\(\)\.onAuthStateChanged\([\s\S]*?\}\);/;
html = html.replace(authLogicRegex, '');

// 3. Remove loginGoogle and logoutGoogle
const loginGoogleRegex = /window\.loginGoogle = function\(\) \{[\s\S]*?\}\;/g;
const logoutGoogleRegex = /window\.logoutGoogle = function\(\) \{[\s\S]*?\}\;/g;
html = html.replace(loginGoogleRegex, '');
html = html.replace(logoutGoogleRegex, '');

// 4. Modify submitComment
const submitRegex = /window\.submitComment = function\(\) \{[\s\S]*?\}\;/;
const newSubmit = `window.submitComment = function() {
      var postKey = currentPostKey;
      var name = document.getElementById('commentName').value.trim();
      var text = document.getElementById('commentText').value.trim();
      
      if (!name) { alert('Nama tidak boleh kosong.'); return; }
      if (!text) { alert('Komentar tidak boleh kosong.'); return; }

      if (!db) return alert('Koneksi database bermasalah.');

      var docRef = db.collection('berita_stats').doc(postKey).collection('comments').doc();
      docRef.set({
        name: name,
        photoURL: '',
        text: text,
        date: firebase.firestore.FieldValue.serverTimestamp()
      }).then(function() {
        document.getElementById('commentName').value = '';
        document.getElementById('commentText').value = '';
      }).catch(function(err) {
        alert('Gagal mengirim komentar: ' + err.message);
      });
    };`;
html = html.replace(submitRegex, newSubmit);

// 5. Clean up the unused variables from the top of the JS logic
html = html.replace(/var currentUser = null;\n/, '');

fs.writeFileSync('artikel.html', html);
console.log('Removed Google Login from comments');
