const fs = require('fs');

let html = fs.readFileSync('artikel.html', 'utf8');

// 1. Update the UI
const btnRegex = /<button class="art-engage-btn" id="artLikeBtn" onclick="toggleLike\(\)">\s*<i class="far fa-heart"><\/i> <span id="artLikeCount">0<\/span> Suka\s*<\/button>/;

const newBtn = `<div class="art-reaction-container">
              <button class="art-engage-btn" id="artLikeBtn" onclick="toggleLike()">
                <i class="far fa-thumbs-up" id="artLikeIcon"></i> 
                <span id="artLikeText">Suka</span> 
                (<span id="artLikeCount">0</span>)
              </button>
              <div class="art-reaction-popover">
                <button class="reaction-emoji" onclick="setReaction('like', event)" title="Suka">👍</button>
                <button class="reaction-emoji" onclick="setReaction('love', event)" title="Super">❤️</button>
                <button class="reaction-emoji" onclick="setReaction('care', event)" title="Peduli">🥰</button>
                <button class="reaction-emoji" onclick="setReaction('haha', event)" title="Haha">😂</button>
                <button class="reaction-emoji" onclick="setReaction('wow', event)" title="Wow">😲</button>
                <button class="reaction-emoji" onclick="setReaction('sad', event)" title="Sedih">😢</button>
                <button class="reaction-emoji" onclick="setReaction('angry', event)" title="Marah">😡</button>
              </div>
            </div>`;

if (html.match(btnRegex)) {
  html = html.replace(btnRegex, newBtn);
}

// 2. Update JS logic
const logicRegex = /window\.toggleLike = function\(\) \{[\s\S]*?\}\;/;

const newLogic = `
    const reactionDict = {
      'like': { icon: '👍', color: '#1a3a6b', text: 'Suka' },
      'love': { icon: '❤️', color: '#e0245e', text: 'Super' },
      'care': { icon: '🥰', color: '#f0c040', text: 'Peduli' },
      'haha': { icon: '😂', color: '#f0c040', text: 'Haha' },
      'wow':  { icon: '😲', color: '#f0c040', text: 'Wow' },
      'sad':  { icon: '😢', color: '#f0c040', text: 'Sedih' },
      'angry':{ icon: '😡', color: '#e0245e', text: 'Marah' }
    };

    window.toggleLike = function() {
      // If clicking the main button, just toggle 'like' or remove
      var postKey = currentPostKey;
      var currentReaction = localStorage.getItem(postKey + '_reaction');
      
      if (currentReaction) {
        // Remove reaction
        setReaction(null);
      } else {
        // Default to like
        setReaction('like');
      }
    };

    window.setReaction = function(type, e) {
      if (e) e.stopPropagation();
      var postKey = currentPostKey;
      var oldReaction = localStorage.getItem(postKey + '_reaction');
      
      if (oldReaction === type) return; // No change

      localStorage.setItem(postKey + '_reaction', type || '');
      updateLikeBtn(type);

      if (!db) return;
      var docRef = db.collection('berita_stats').doc(postKey);
      
      var updates = {};
      if (oldReaction) {
        updates['reactions.' + oldReaction] = firebase.firestore.FieldValue.increment(-1);
      }
      if (type) {
        updates['reactions.' + type] = firebase.firestore.FieldValue.increment(1);
      }
      
      // Update overall likes count as sum (or we just rely on reactions sum)
      if (type && !oldReaction) updates.likes = firebase.firestore.FieldValue.increment(1);
      if (!type && oldReaction) updates.likes = firebase.firestore.FieldValue.increment(-1);

      docRef.update(updates).catch(function(err){
         console.log(err);
         // if update fails, we might want to revert UI, but let's keep it simple
      });
    };

    function updateLikeBtn(type) {
      var btn = document.getElementById('artLikeBtn');
      var icon = document.getElementById('artLikeIcon');
      var text = document.getElementById('artLikeText');
      
      if (type && reactionDict[type]) {
        btn.classList.add('liked');
        btn.style.color = reactionDict[type].color;
        icon.outerHTML = '<span id="artLikeIcon" style="font-size: 18px; margin-right: 6px;">' + reactionDict[type].icon + '</span>';
        text.textContent = reactionDict[type].text;
      } else {
        btn.classList.remove('liked');
        btn.style.color = '';
        var currentIcon = document.getElementById('artLikeIcon');
        currentIcon.outerHTML = '<i class="far fa-thumbs-up" id="artLikeIcon"></i>';
        text.textContent = 'Suka';
      }
    }`;

html = html.replace(logicRegex, newLogic);

// We also need to fix `initEngage` to read `reactions` total instead of just `likes` if we want,
// but our update logic also updates `likes` so the snapshot listener still works!
// Let's just update `initEngage` to read `localStorage` correctly.
const initRegex = /var liked = localStorage\.getItem\(postKey \+ \'_liked\'\) === \'1\';\n\s*document\.getElementById\(\'artLikeCount\'\)\.textContent = likes;\n\s*updateLikeBtn\(liked\);/;

const newInit = `var currentReaction = localStorage.getItem(postKey + '_reaction');
      document.getElementById('artLikeCount').textContent = likes;
      updateLikeBtn(currentReaction);`;

html = html.replace(initRegex, newInit);

fs.writeFileSync('artikel.html', html);
console.log('Patched artikel.html with reactions');
