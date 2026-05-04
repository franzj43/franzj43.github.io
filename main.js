// ─── LANGUAGE DETECTION & TOGGLE ───

function detectLang() {
  const stored = localStorage.getItem('fm_lang');
  if (stored) return stored;
  const nav = navigator.language || navigator.userLanguage || '';
  return nav.toLowerCase().startsWith('es') ? 'es' : 'en';
}

let currentLang = detectLang();
const btn = document.getElementById('langBtn');

function applyLang(lang) {
  document.body.classList.remove('lang-en', 'lang-es');
  document.body.classList.add('lang-' + lang);
  document.documentElement.lang = lang;
  btn.textContent = lang === 'en' ? 'ES' : 'EN';
  localStorage.setItem('fm_lang', lang);
  currentLang = lang;
}

applyLang(currentLang);

btn.addEventListener('click', () => {
  applyLang(currentLang === 'en' ? 'es' : 'en');
});

// ─── SCROLL REVEAL ───

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
