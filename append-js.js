const fs = require('fs');

const js = `
// ===========================
// COUNTDOWN TIMER
// ===========================
(function() {
  // Set target to roughly 1 month from now for demo
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  const targetTime = targetDate.getTime();
  
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');
  
  if(!daysEl) return;
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetTime - now;
    
    if (distance < 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    daysEl.textContent = days.toString().padStart(2, '0');
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minsEl.textContent = minutes.toString().padStart(2, '0');
    secsEl.textContent = seconds.toString().padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
`;

fs.appendFileSync('ppdb.js', '\n' + js);
console.log('Appended to ppdb.js');
