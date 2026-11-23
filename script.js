// ===== НАСТРОЙКИ =====
const YT_ID = 'YOUR_YOUTUBE_ID'; // ID видео с YouTube (часть после v=)
const MEMORIES_TEXT =
`Every photo here tells a story—a moment filled with laughter, love, and memories that I'll always cherish. Looking back at these reminds me of how many beautiful moments we've shared together and how much joy you've brought into my life.

From the simplest days to the most unforgettable adventures, every memory is special because it was spent with you. Thank you for being part of my journey and for creating countless moments that I will treasure forever. These photos are little pieces of our story, and I can't wait to make even more memories with you in the years to come. 💜`;
const FLOWERS_TEXT =
`If I could, I would hand these flowers to you in person and watch your beautiful smile light up the room. Since I can't always be there, please accept these virtual flowers as a small reminder of how much you mean to me.

Each flower represents my love, appreciation, and gratitude for having you in my life. Thank you for bringing so much happiness, warmth, and color into my world. Just like flowers bloom and grow, my love for you continues to blossom with every passing day.

These may only be virtual flowers, but the love behind them is real, endless, and all yours. 🌷💜`;
// =====================

const $ = s => document.querySelector(s);
let token = 0;

function type(el, text, done) {
  const my = ++token; el.textContent = '';
  let i = 0;
  (function tick() {
    if (my !== token) return;
    el.textContent = text.slice(0, ++i);
    if (i < text.length) setTimeout(tick, 28); else done && done();
  })();
}

function go(id) {
  document.querySelectorAll('.scene').forEach(s => s.classList.toggle('active', s.id === id));
  $('#' + id).scrollTop = 0;
  token++;
  if (id === 'memories') {
    const nxt = $('#memories .after'); nxt.classList.remove('show');
    type($('#mtext'), MEMORIES_TEXT, () => nxt.classList.add('show'));
  }
  if (id === 'flowers') type($('#ftext'), FLOWERS_TEXT);
  if (id === 'song' && YT_ID && YT_ID !== 'YOUR_YOUTUBE_ID' && !$('#yt').src) {
    $('#yt').src = 'https://www.youtube.com/embed/' + YT_ID;
  }
}

document.addEventListener('click', e => {
  const t = e.target.closest('[data-go]');
  if (t) go(t.dataset.go);
});