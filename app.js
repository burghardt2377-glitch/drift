'use strict';

// ---------- text ----------
const TEXT = {
  en: {
    title: 'Drift — files between iPhone, Android, Mac and Windows',
    navFeatures: 'Features', navHow: 'How it works', navScreens: 'Screens', navPrivacy: 'Privacy', navDownload: 'Download',
    heroEyebrow: 'No account · No cloud · No cables',
    heroTitle: 'Files between iPhone, Android, Mac and Windows.',
    heroLead: 'Send photos, videos, documents and links straight to another device. Show a code, enter it on the other device, and it just flows.',
    ctaDownload: 'Download Drift', ctaHow: 'See how it works',
    pillIphone: 'iPhone', pillAndroid: 'Android', pillMac: 'Mac', pillWindows: 'Windows',
    chipPhotos: 'Photos & videos', chipFiles: 'Any file', chipLinks: 'Text & links',
    featTitle: 'Everything you need, nothing you don’t', featLead: 'Drift does one thing, and does it softly and fast.',
    f1t: 'Any file', f1d: 'Photos, videos, documents, archives. Pick several at once and watch each one move with its own progress bar.',
    f2t: 'Text and links', f2d: 'Pass a note, an address or a link in a second. Links open in one tap on the other side.',
    f3t: 'Code or QR', f3d: 'Pair two devices with a 6‑digit code or by scanning a QR. No sign‑up, no passwords.',
    f4t: 'Works on tricky networks', f4d: 'Built to keep working with VPNs, hotspots and strict routers, where other apps give up.',
    f5t: 'History', f5d: 'See what you sent and received, with sizes and times. Tap a file to open or share it.',
    f6t: 'English and Russian', f6d: 'Switch the language in one tap. Light and dark themes follow your device.',
    howTitle: 'Three steps', howLead: 'Both devices only need to be on the same network.',
    s1t: 'Show a code', s1d: 'Open Drift on one device and tap “Show my code”. A QR and a 6‑digit code appear.',
    s2t: 'Enter it on the other', s2d: 'On the second device scan the QR or type the code. They find each other in seconds.',
    s3t: 'Send anything', s3d: 'Choose photos, files or text. Both sides see progress, and the file lands where you can open it.',
    scrTitle: 'See it in action', scrLead: 'Soft, liquid and easy to understand.',
    capHome: 'Start', capCode: 'Your code', capSend: 'Send and receive', capHistory: 'History', capMac: 'On Mac and Windows', capJoin: 'Enter a code',
    privTitle: 'Private by design',
    privLead: 'Your files go straight from one device to the other. There is no Drift cloud in between.',
    priv1: 'No account and no sign‑up', priv2: 'Nothing is uploaded to our servers', priv3: 'No ads and no trackers', priv4: 'Your history stays on your own device',
    privNote: 'Transfers happen over your local network. Use a network you trust, as the traffic between devices is not encrypted.',
    privContact: 'Questions about privacy:',
    dlTitle: 'Get Drift', dlLead: 'Free. Install it on every device you want to connect.',
    dlAndroid: 'Android', dlMac: 'Mac · Apple Silicon', dlWin: 'Windows 10 and 11', dlIos: 'iPhone',
    soon: 'Soon', download: 'Download', open: 'Open',
    faqTitle: 'Questions',
    q1: 'Do I need the internet?', a1: 'No. Drift works over the Wi‑Fi (or hotspot) that both devices share. Files never go through the internet.',
    q2: 'Is it free?', a2: 'Yes. There are no accounts, subscriptions or limits on file size.',
    q3: 'Can I use it with a VPN?', a3: 'Yes, in most cases. Drift keeps its connection on your local network, which is where many apps fail. If your VPN blocks local devices, allow local network access in its settings.',
    q4: 'Does it work with iPhone?', a4: 'The iPhone app is on its way. Android, Mac and Windows are ready now.',
    q5: 'Is it safe?', a5: 'Devices pair with a one‑time code, so only the device you approve can connect. Files stay between your two devices.',
    footTag: 'Files, softly.',
  },
  ru: {
    title: 'Drift — файлы между iPhone, Android, Mac и Windows',
    navFeatures: 'Возможности', navHow: 'Как это работает', navScreens: 'Экраны', navPrivacy: 'Приватность', navDownload: 'Скачать',
    heroEyebrow: 'Без аккаунта · Без облака · Без проводов',
    heroTitle: 'Файлы между iPhone, Android, Mac и Windows.',
    heroLead: 'Отправляйте фото, видео, документы и ссылки прямо на другое устройство. Покажите код, введите его на втором устройстве, и всё передаётся.',
    ctaDownload: 'Скачать Drift', ctaHow: 'Как это работает',
    pillIphone: 'iPhone', pillAndroid: 'Android', pillMac: 'Mac', pillWindows: 'Windows',
    chipPhotos: 'Фото и видео', chipFiles: 'Любые файлы', chipLinks: 'Текст и ссылки',
    featTitle: 'Всё нужное и ничего лишнего', featLead: 'Drift делает одно дело, мягко и быстро.',
    f1t: 'Любые файлы', f1d: 'Фото, видео, документы, архивы. Выберите сразу несколько и следите за прогрессом каждого.',
    f2t: 'Текст и ссылки', f2d: 'Передайте заметку, адрес или ссылку за секунду. Ссылка открывается одним нажатием.',
    f3t: 'Код или QR', f3d: 'Соедините устройства 6‑значным кодом или сканированием QR. Без регистрации и паролей.',
    f4t: 'Работает в сложных сетях', f4d: 'Приложение создано так, чтобы работать с VPN, точками доступа и строгими роутерами, где другие сдаются.',
    f5t: 'История', f5d: 'Видно, что вы отправили и получили, с размерами и временем. Нажмите на файл, чтобы открыть его или поделиться.',
    f6t: 'Русский и английский', f6d: 'Язык переключается одним нажатием. Светлая и тёмная темы подстраиваются под устройство.',
    howTitle: 'Три шага', howLead: 'Оба устройства должны быть в одной сети.',
    s1t: 'Покажите код', s1d: 'Откройте Drift на одном устройстве и нажмите «Показать мой код». Появятся QR и 6‑значный код.',
    s2t: 'Введите его на другом', s2d: 'На втором устройстве отсканируйте QR или введите код. Устройства найдут друг друга за секунды.',
    s3t: 'Отправляйте что угодно', s3d: 'Выберите фото, файлы или текст. Обе стороны видят прогресс, а файл попадает туда, где его можно открыть.',
    scrTitle: 'Как это выглядит', scrLead: 'Мягко, жидко и понятно с первого раза.',
    capHome: 'Старт', capCode: 'Ваш код', capSend: 'Отправка и получение', capHistory: 'История', capMac: 'На Mac и Windows', capJoin: 'Ввод кода',
    privTitle: 'Приватность по умолчанию',
    privLead: 'Файлы идут напрямую с одного устройства на другое. Облака Drift между ними нет.',
    priv1: 'Без аккаунта и регистрации', priv2: 'Ничего не загружается на наши серверы', priv3: 'Без рекламы и трекеров', priv4: 'История хранится только на вашем устройстве',
    privNote: 'Передача идёт по вашей локальной сети. Пользуйтесь доверенной сетью: трафик между устройствами не шифруется.',
    privContact: 'Вопросы о приватности:',
    dlTitle: 'Скачать Drift', dlLead: 'Бесплатно. Установите на каждое устройство, которое хотите соединить.',
    dlAndroid: 'Android', dlMac: 'Mac · Apple Silicon', dlWin: 'Windows 10 и 11', dlIos: 'iPhone',
    soon: 'Скоро', download: 'Скачать', open: 'Открыть',
    faqTitle: 'Вопросы',
    q1: 'Нужен ли интернет?', a1: 'Нет. Drift работает по Wi‑Fi (или точке доступа), к которой подключены оба устройства. Файлы не идут через интернет.',
    q2: 'Это бесплатно?', a2: 'Да. Нет аккаунтов, подписок и ограничений на размер файла.',
    q3: 'Можно с VPN?', a3: 'В большинстве случаев да. Drift держит соединение внутри локальной сети, где многие приложения ломаются. Если ваш VPN блокирует локальные устройства, разрешите доступ к локальной сети в его настройках.',
    q4: 'Работает ли с iPhone?', a4: 'Приложение для iPhone готовится. Android, Mac и Windows уже готовы.',
    q5: 'Это безопасно?', a5: 'Устройства соединяются по одноразовому коду, поэтому подключиться может только то, которое вы одобрили. Файлы остаются между вашими двумя устройствами.',
    footTag: 'Файлы, мягко.',
  },
};

// ---------- icons ----------
const ICONS = {
  file: '<path d="M7 3.5h7l4.5 4.5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13.5a2 2 0 0 1 2-2z"/><path d="M14 3.5V8h4.5"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  qr: '<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><path d="M14 14h2.5v2.5M20 14v.01M14 20h.01M17 20h3v-3"/>',
  shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
  history: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  swap: '<path d="M7.5 20V5M7.5 5L4 8.5M7.5 5L11 8.5M16.5 4v15M16.5 19L13 15.5M16.5 19l3.5-3.5"/>',
  play: '<path d="M7 4.5v15l12-7.5z"/>',
  mac: '<rect x="3.5" y="4.5" width="17" height="11" rx="2"/><path d="M8 20h8M12 15.5V20"/>',
  win: '<rect x="3.5" y="5" width="17" height="12" rx="2"/><path d="M12 5v12M3.5 11h17"/>',
  phone: '<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 18h2"/>',
};
document.querySelectorAll('[data-icon]').forEach((node) => {
  node.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[node.dataset.icon] || ''}</svg>`;
});

// ---------- language ----------
let lang = 'en';
try {
  const saved = localStorage.getItem('drift.site.lang');
  lang = saved === 'ru' || saved === 'en' ? saved : (navigator.language || 'en').toLowerCase().startsWith('ru') ? 'ru' : 'en';
} catch {}

// The store links live in links.json, so they can be changed without touching the code.
let links = {};
const githubAsset = (repo, file) => (repo && file ? `https://github.com/${repo}/releases/latest/download/${encodeURIComponent(file)}` : '');
const loadLinks = async () => {
  try {
    const data = await (await fetch(`links.json?v=${Date.now()}`, { cache: 'no-store' })).json();
    links = {
      googlePlay: data.googlePlay || '',
      ruStore: data.ruStore || '',
      appStore: data.appStore || '',
      macos: data.macos || githubAsset(data.githubRepo, data.macFile),
      windows: data.windows || githubAsset(data.githubRepo, data.windowsFile),
      privacyEmail: data.privacyEmail || '',
    };
  } catch {
    links = {};
  }
  applyLinks();
};

const applyLinks = () => {
  document.querySelectorAll('.dl').forEach((a) => {
    const href = links[a.dataset.link];
    const state = a.querySelector('.state');
    const open = !!href;
    a.classList.toggle('off', !open);
    if (open) {
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener';
      state.textContent = TEXT[lang][a.dataset.link === 'googlePlay' || a.dataset.link === 'ruStore' || a.dataset.link === 'appStore' ? 'open' : 'download'];
    } else {
      a.removeAttribute('href');
      state.textContent = TEXT[lang].soon;
    }
  });
  const mail = document.getElementById('mail');
  if (mail && links.privacyEmail) {
    mail.href = `mailto:${links.privacyEmail}`;
    mail.textContent = links.privacyEmail;
  }
};

const applyLang = () => {
  document.documentElement.lang = lang;
  document.title = TEXT[lang].title;
  document.querySelectorAll('[data-i18n]').forEach((n) => { n.textContent = TEXT[lang][n.dataset.i18n] ?? ''; });
  document.querySelectorAll('#lang button').forEach((b) => b.classList.toggle('on', b.dataset.lang === lang));
  applyLinks();
};

document.getElementById('lang').addEventListener('click', (e) => {
  const b = e.target.closest('[data-lang]');
  if (!b || b.dataset.lang === lang) return;
  lang = b.dataset.lang;
  try { localStorage.setItem('drift.site.lang', lang); } catch {}
  applyLang();
  remountDemos();
  if (window.gsap) gsap.fromTo('[data-i18n]', { opacity: 0.2 }, { opacity: 1, duration: 0.5, ease: 'power2.out', overwrite: true, clearProps: 'opacity' });
});

// ---------- live demo: the real interface in a phone frame ----------
const demos = [...document.querySelectorAll('.demo')];
const demoSrc = (node) => `assets/demo/index.html?lang=${lang}${node.dataset.scene ? `&scene=${node.dataset.scene}` : ''}`;
const fitDemo = (node) => {
  const frame = node.querySelector('iframe');
  if (frame) frame.style.transform = `scale(${node.clientWidth / 390})`;
};
const ro = 'ResizeObserver' in window ? new ResizeObserver((entries) => entries.forEach((e) => fitDemo(e.target))) : null;
const mountDemo = (node) => {
  let frame = node.querySelector('iframe');
  if (!frame) {
    frame = document.createElement('iframe');
    frame.title = 'Drift';
    frame.setAttribute('tabindex', '-1');
    frame.setAttribute('aria-hidden', 'true');
    frame.addEventListener('load', () => fitDemo(node));
    node.appendChild(frame);
    ro && ro.observe(node);
  }
  if (frame.dataset.lang !== lang) {
    frame.dataset.lang = lang;
    frame.src = demoSrc(node);
  }
  fitDemo(node);
};
const lazy = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) mountDemo(e.target); }), { rootMargin: '300px' })
  : null;
const remountDemos = () => demos.forEach((n) => { if (n.querySelector('iframe')) mountDemo(n); });
demos.forEach((n) => (lazy ? lazy.observe(n) : mountDemo(n)));

applyLang();
loadLinks();
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- header shadow ----------
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- motion (GSAP) ----------
const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (window.gsap && !calm) {
  gsap.registerPlugin(ScrollTrigger);

  // soft drifting colour blobs
  const float = (sel, x, y, d) => gsap.to(sel, { x, y, duration: d, ease: 'sine.inOut', repeat: -1, yoyo: true });
  float('.b1', 60, 70, 11); float('.b2', -70, -90, 13); float('.b3', 80, -60, 15);

  // the liquid orb behind the phone: a core with four satellites that merge and part
  const core = document.getElementById('o-core');
  const sats = [...document.querySelectorAll('.o-sat')];
  const burst = { v: 0 };
  gsap.ticker.add((t) => {
    const b = burst.v;
    core.setAttribute('r', (150 * (1 + 0.035 * Math.sin(t * 1.7) + 0.05 * b)).toFixed(1));
    sats.forEach((s, i) => {
      const dir = i % 2 ? -1 : 1;
      const a = t * 0.5 * dir * (1 + i * 0.28) + i * 1.8;
      const reach = (190 + i * 22) * (1 + 0.25 * b);
      s.setAttribute('cx', (250 + Math.cos(a) * reach).toFixed(1));
      s.setAttribute('cy', (250 + Math.sin(a) * reach).toFixed(1));
    });
  });
  const phone = document.getElementById('heroPhone');
  phone.addEventListener('pointerenter', () => {
    gsap.killTweensOf(burst);
    gsap.timeline().to(burst, { v: 1, duration: 0.3, ease: 'back.out(3)' }).to(burst, { v: 0, duration: 1.4, ease: 'elastic.out(1, 0.35)' });
  });

  // entrance
  gsap.from('.hero-copy > *', { y: 34, opacity: 0, duration: 0.9, ease: 'back.out(1.3)', stagger: 0.09, delay: 0.1 });
  gsap.from('#heroPhone', { y: 60, opacity: 0, scale: 0.94, duration: 1.1, ease: 'back.out(1.2)', delay: 0.25 });
  gsap.from('.chip', { scale: 0.6, opacity: 0, duration: 0.8, ease: 'elastic.out(1, 0.5)', stagger: 0.12, delay: 0.9 });
  gsap.to('#heroPhone', { y: -12, duration: 3.2, ease: 'sine.inOut', repeat: -1, yoyo: true });
  ['.c1', '.c2', '.c3'].forEach((c, i) => gsap.to(c, { y: i % 2 ? 12 : -14, duration: 2.6 + i * 0.5, ease: 'sine.inOut', repeat: -1, yoyo: true }));

  // reveal on scroll (IntersectionObserver: also works when the page jumps to an anchor)
  gsap.set('.reveal', { opacity: 0, y: 40 });
  const seen = new IntersectionObserver((entries) => {
    const now = entries.filter((e) => e.isIntersecting).map((e) => e.target);
    if (!now.length) return;
    now.forEach((n) => seen.unobserve(n));
    gsap.to(now, { opacity: 1, y: 0, duration: 0.9, ease: 'back.out(1.25)', stagger: 0.1, clearProps: 'transform' });
  }, { threshold: 0.06, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal').forEach((n) => seen.observe(n));

  // the phone drifts a little slower than the page
  gsap.to('.orb', { yPercent: -10, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
}
