const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

const reactionCss = `
/* REACTION POPOVER */
.art-reaction-container {
  position: relative;
  display: inline-block;
}

.art-reaction-popover {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 0;
  background: #fff;
  border-radius: 50px;
  padding: 8px 12px;
  display: flex;
  gap: 8px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px) scale(0.9);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: none;
  z-index: 100;
}

.art-reaction-container:hover .art-reaction-popover {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.reaction-emoji {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 0;
  line-height: 1;
}

.reaction-emoji:hover {
  transform: scale(1.4) translateY(-5px);
}

.art-engage-btn i {
  margin-right: 6px;
}
`;

if (!css.includes('.art-reaction-popover')) {
  fs.appendFileSync('style.css', '\n' + reactionCss);
  console.log('Appended CSS for reactions');
}
