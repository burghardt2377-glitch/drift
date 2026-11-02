'use strict';

document.body.dataset.platform = window.drift.platform;

// ---------- i18n ----------
const TEXT = {
  en: {
    tabShare: 'Share', tabHistory: 'History',
    homeTitle: 'Share between your computer, iPhone and Android',
    homeHint: 'Put both devices on the same Wi‑Fi',
    showCode: 'Show my code', joinCode: 'Enter a code',
    peerLeft: 'The other device disconnected.',
    hostTitle: 'Your code', hostHint: 'Scan the QR on your phone or type the code there.',
    hostWaiting: 'Waiting for the other device…', cancel: 'Cancel',
    joinTitle: 'Connect', joinHint: 'Type the code shown on the other device.',
    joinConnect: 'Connect', joinSearching: 'Looking for the device…',
    joinWrong: 'Wrong code. Check and try again.',
    joinNotFound: 'Device not found. Are both on the same Wi‑Fi?',
    noWifi: 'Connect to Wi‑Fi first.',
    serverFail: 'Could not start. Check Wi‑Fi and restart the app.',
    connectedTo: 'Connected to {name}', linkLost: 'Connection lost, retrying…',
    sendFiles: 'Files', sendFilesHint: 'Choose or drop files here',
    sendText: 'Text or link', nowTitle: 'In progress', dropHere: 'Drop files to send',
    composerPlaceholder: 'Type or paste…', send: 'Send',
    historyTitle: 'History', historyEmpty: 'Nothing yet. Sent and received items will appear here.',
    sent: 'Sent', received: 'Received', sending: 'Sending…', receiving: 'Receiving…',
    waiting: 'Waiting…', failed: 'Failed · click to retry',
    copy: 'Copy', copied: 'Copied', open: 'Open', showInFinder: 'Show in Finder',
  },
  ru: {
    tabShare: 'Обмен', tabHistory: 'История',
    homeTitle: 'Файлы между компьютером, iPhone и Android',
    homeHint: 'Подключите оба устройства к одной сети Wi‑Fi',
    showCode: 'Показать мой код', joinCode: 'Ввести код',
    peerLeft: 'Второе устройство отключилось.',
    hostTitle: 'Ваш код', hostHint: 'Отсканируйте QR на телефоне или введите код там.',
    hostWaiting: 'Ждём второе устройство…', cancel: 'Отмена',
    joinTitle: 'Подключение', joinHint: 'Введите код с экрана второго устройства.',
    joinConnect: 'Подключиться', joinSearching: 'Ищем устройство…',
    joinWrong: 'Неверный код. Проверьте и повторите.',
    joinNotFound: 'Устройство не найдено. Оба в одной сети Wi‑Fi?',
    noWifi: 'Сначала подключитесь к Wi‑Fi.',
    serverFail: 'Не удалось запуститься. Проверьте Wi‑Fi и перезапустите приложение.',
    connectedTo: 'Подключено: {name}', linkLost: 'Связь потеряна, пробуем снова…',
    sendFiles: 'Файлы', sendFilesHint: 'Выберите или перетащите файлы сюда',
    sendText: 'Текст или ссылка', nowTitle: 'Передаётся', dropHere: 'Перетащите файлы для отправки',
    composerPlaceholder: 'Введите или вставьте…', send: 'Отправить',
    historyTitle: 'История', historyEmpty: 'Пока пусто. Здесь появятся отправленные и полученные файлы.',
    sent: 'Отправлено', received: 'Получено', sending: 'Отправка…', receiving: 'Получение…',
    waiting: 'Ожидание…', failed: 'Не удалось · нажмите, чтобы повторить',
    copy: 'Копировать', copied: 'Скопировано', open: 'Открыть', showInFinder: 'Показать в Finder',
  },
};

let lang = 'en';
try {
  const saved = localStorage.getItem('drift.lang');
  lang = saved === 'ru' || saved === 'en' ? saved : navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
} catch {}

const t = (key, vars) => {
  let s = TEXT[lang][key] ?? key;
  if (vars) for (const k in vars) s = s.replace(`{${k}}`, vars[k]);
  return s;
};

// ---------- icons ----------
const PATHS = {
  file: '<path d="M7 3.5h7l4.5 4.5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-13.5a2 2 0 0 1 2-2z"/><path d="M14 3.5V8h4.5"/>',
  text: '<path d="M5 7h14M5 12h14M5 17h8"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  up: '<path d="M12 19V5M5.5 11.5L12 5l6.5 6.5"/>',
  down: '<path d="M12 5v14M5.5 12.5L12 19l6.5-6.5"/>',
  swap: '<path d="M7.5 20V5M7.5 5L4 8.5M7.5 5L11 8.5M16.5 4v15M16.5 19L13 15.5M16.5 19l3.5-3.5"/>',
  qr: '<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><path d="M14 14h2.5v2.5M20 14v.01M14 20h.01M17 20h3v-3"/>',
  history: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  copy: '<rect x="8.5" y="8.5" width="11" height="11" rx="3"/><path d="M15.5 8.5V7a2.5 2.5 0 0 0-2.5-2.5H7A2.5 2.5 0 0 0 4.5 7v6A2.5 2.5 0 0 0 7 15.5h1.5"/>',
  alert: '<circle cx="12" cy="12" r="8.5"/><path d="M12 8v5M12 16.2v.01"/>',
  send: '<path d="M20.5 3.5L10 14M20.5 3.5l-6.5 17-3.5-6.5L4 10.5z"/>',
  folder: '<path d="M3.5 7.5a2 2 0 0 1 2-2H10l2 2.5h6.5a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/>',
  wifi: '<path d="M3.5 9.5a12 12 0 0 1 17 0M6.5 13a8 8 0 0 1 11 0M9.5 16.2a4 4 0 0 1 5 0"/><circle cx="12" cy="19.2" r="0.6"/>',
};
const icon = (name, size = 24, color = 'currentColor', sw = 2) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${PATHS[name]}</svg>`;

// ---------- helpers ----------
const $ = (sel, root = document) => root.querySelector(sel);
const view = $('#view');
const el = (html) => {
  const tpl = document.createElement('template');
  tpl.innerHTML = html.trim();
  return tpl.content.firstElementChild;
};

const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  const units = ['KB', 'MB', 'GB'];
  let v = bytes / 1024, u = 0;
  while (v >= 1024 && u < units.length - 1) { v /= 1024; u += 1; }
  return `${v >= 100 ? v.toFixed(0) : v.toFixed(1)} ${units[u]}`;
};
const isUrl = (s) => /^https?:\/\/\S+$/i.test(String(s).trim());
const clock = (at) => { const d = new Date(at); return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`; };
const fileUrl = (p) => p;

// ---------- app state ----------
let S = { phase: 'idle', items: [], peer: null };
let tab = 'share';
let sheet = null;
let viewKey = '';
const itemEls = new Map();

// ---------- backdrop + press feel ----------
const floatBlob = (sel, x, y, d) =>
  gsap.to(sel, { x, y, duration: d, ease: 'sine.inOut', repeat: -1, yoyo: true });
floatBlob('.b1', 50, 60, 9);
floatBlob('.b2', -60, -80, 11);
floatBlob('.b3', 70, -50, 13);

document.addEventListener('pointerdown', (e) => {
  const target = e.target.closest('.btn, .action, .chip, .tabs button, .lang button, .x, .card.clickable');
  if (!target) return;
  gsap.to(target, { scale: 0.95, duration: 0.12, ease: 'power2.out' });
  const release = () => {
    gsap.to(target, { scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.45)' });
    window.removeEventListener('pointerup', release);
  };
  window.addEventListener('pointerup', release);
});

// ---------- liquid orb ----------
const orbs = [];
gsap.ticker.add((time) => {
  for (const orb of orbs) {
    if (!orb.root.isConnected) continue;
    const { c, size, sats, core, burst } = orb;
    const b = burst.v;
    core.setAttribute('r', (size * 0.25 * (1 + 0.035 * Math.sin(time * 1.9) + 0.06 * b)).toFixed(2));
    sats.forEach((s, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      const a = time * 0.6 * dir * (1 + i * 0.3) + i * 1.7;
      const reach = size * (0.2 + i * 0.025) * (1 + 0.5 * b);
      s.setAttribute('cx', (c + Math.cos(a) * reach).toFixed(2));
      s.setAttribute('cy', (c + Math.sin(a) * reach).toFixed(2));
      s.setAttribute('r', (size * (0.075 + i * 0.008) * (1 + 0.35 * b)).toFixed(2));
    });
  }
  for (let i = orbs.length - 1; i >= 0; i -= 1) if (!orbs[i].root.isConnected && orbs[i].seen) orbs.splice(i, 1);
});

let orbId = 0;
const makeOrb = (size, iconName) => {
  const id = `orb${orbId++}`;
  const c = size / 2;
  const root = el(`
    <div class="orbwrap" style="width:${size}px;height:${size}px">
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <defs>
          <filter id="${id}-goo" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="${(size * 0.04).toFixed(1)}"/>
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10"/>
          </filter>
          <filter id="${id}-sh" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${(size * 0.05).toFixed(1)}"/></filter>
          <radialGradient id="${id}-hl"><stop offset="0" stop-color="#fff" stop-opacity=".34"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
        </defs>
        <circle cx="${c}" cy="${c + size * 0.1}" r="${size * 0.26}" fill="var(--text)" opacity=".2" filter="url(#${id}-sh)"/>
        <g filter="url(#${id}-goo)" fill="var(--primary)">
          <circle class="core" cx="${c}" cy="${c}" r="${size * 0.25}"/>
          <circle class="sat"/><circle class="sat"/><circle class="sat"/><circle class="sat"/>
        </g>
        <circle cx="${c - size * 0.085}" cy="${c - size * 0.1}" r="${size * 0.105}" fill="url(#${id}-hl)"/>
      </svg>
      <div class="orbicon" style="color:var(--on-primary)">${icon(iconName, Math.round(size * 0.22), 'currentColor', 2.2)}</div>
    </div>`);
  const orb = { root, c, size, core: $('.core', root), sats: [...root.querySelectorAll('.sat')], burst: { v: 0 }, seen: false };
  root.addEventListener('click', () => {
    gsap.killTweensOf(orb.burst);
    gsap.timeline()
      .to(orb.burst, { v: 1, duration: 0.25, ease: 'back.out(3)' })
      .to(orb.burst, { v: 0, duration: 1.2, ease: 'elastic.out(1, 0.35)' });
  });
  orbs.push(orb);
  requestAnimationFrame(() => { orb.seen = true; });
  return root;
};

// ---------- transfer cards ----------
const itemMeta = (i) =>
  i.status === 'failed' ? `${t('failed')}${i.error ? ` \u00b7 ${i.error}` : ''}`
  : i.status === 'pending' ? t('waiting')
  : i.status === 'active' ? `${i.dir === 'out' ? t('sending') : t('receiving')} ${Math.round(i.progress * 100)}%`
  : `${i.dir === 'out' ? t('sent') : t('received')}${i.kind === 'text' ? '' : ` · ${formatSize(i.size)}`} · ${clock(i.at)}`;

const buildCard = (item) => {
  const card = el(`<div class="card"></div>`);
  card.innerHTML = `
    <div class="row">
      <div class="thumb"><span class="ti"></span><span class="badge"></span></div>
      <div class="body"><div class="name"></div><div class="meta"></div></div>
    </div>
    <div class="track" hidden><div class="fill"></div></div>
    <div class="actions" hidden></div>`;
  card.addEventListener('click', (e) => {
    if (e.target.closest('.chip')) return;
    const i = card._item;
    if (i.status === 'failed') drift_api.retry(i.id);
    else if (i.kind === 'file' && i.status === 'done' && i.path) drift_api.reveal(i.path);
  });
  return card;
};

const drift_api = window.drift;

const updateCard = (card, item) => {
  const prev = card._item;
  card._item = item;
  const isText = item.kind === 'text';
  const url = isText && isUrl(item.text);
  const failed = item.status === 'failed';
  const busy = item.status === 'active' || item.status === 'pending';
  const showThumb = !isText && item.mime.startsWith('image/') && item.path && item.status === 'done' || (!isText && item.dir === 'out' && item.mime.startsWith('image/') && item.path);

  card.className = `card ${isText ? 'text' : ''} ${failed ? 'failed' : ''} ${failed || (!isText && item.status === 'done' && item.path) ? 'clickable' : ''}`;
  $('.name', card).textContent = isText ? item.text : item.name;
  $('.meta', card).textContent = itemMeta(item);

  if (!prev || prev.status !== item.status || prev.dir !== item.dir || prev.path !== item.path) {
    $('.ti', card).innerHTML = showThumb
      ? `<img src="${fileUrl(item.path)}" alt="" />`
      : icon(isText ? (url ? 'link' : 'text') : 'file', 24);
    $('.badge', card).innerHTML = icon(failed ? 'alert' : item.dir === 'out' ? 'up' : 'down', 12, 'var(--on-primary)', 2.6);
  }

  const track = $('.track', card);
  track.hidden = !(busy && !isText);
  if (!track.hidden) gsap.to($('.fill', card), { width: `${Math.round(item.progress * 100)}%`, duration: 0.4, ease: 'power2.out' });

  const actions = $('.actions', card);
  const wantActions = isText && item.status === 'done';
  actions.hidden = !wantActions;
  if (wantActions && !prev) {
    actions.innerHTML = `<button class="chip" data-act="copy">${icon('copy', 16)}<span>${t('copy')}</span></button>${url ? `<button class="chip solid" data-act="open">${icon('link', 16)}<span>${t('open')}</span></button>` : ''}`;
    actions.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-act]');
      if (!btn) return;
      if (btn.dataset.act === 'copy') {
        drift_api.copy(card._item.text);
        btn.innerHTML = `${icon('check', 16)}<span>${t('copied')}</span>`;
        setTimeout(() => { btn.innerHTML = `${icon('copy', 16)}<span>${t('copy')}</span>`; }, 1400);
      } else drift_api.openUrl(card._item.text.trim());
    });
  }
};

const syncList = (container, items) => {
  const seen = new Set();
  let anchor = null;
  items.forEach((item) => {
    seen.add(item.id);
    let card = itemEls.get(item.id);
    const isNew = !card || !container.contains(card);
    if (!card) { card = buildCard(item); itemEls.set(item.id, card); }
    updateCard(card, item);
    const expected = anchor ? anchor.nextSibling : container.firstChild;
    if (card !== expected) container.insertBefore(card, expected);
    if (isNew) gsap.fromTo(card, { y: 24, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: 'elastic.out(1, 0.7)' });
    anchor = card;
  });
  [...container.children].forEach((child) => {
    if (!items.some((i) => itemEls.get(i.id) === child)) child.remove();
  });
  for (const id of [...itemEls.keys()]) if (!seen.has(id) && !container.contains(itemEls.get(id))) { /* keep cache small */ }
};

// ---------- views ----------
const enter = (nodes) =>
  gsap.from(nodes, { y: 26, opacity: 0, duration: 0.8, ease: 'back.out(1.4)', stagger: 0.08, clearProps: 'transform,opacity' });

const renderHome = () => {
  view.innerHTML = '';
  const root = el(`<div class="view center"></div>`);
  const orb = makeOrb(240, 'swap');
  const copy = el(`<div style="display:flex;flex-direction:column;gap:10px;align-items:center">
      <h1>${t('homeTitle')}</h1>
      <div class="hintrow">${icon('wifi', 18)}<span>${t('homeHint')}</span></div>
      <div class="notice" id="home-notice" hidden></div>
    </div>`);
  const btns = el(`<div class="btns">
      <button class="btn primary" id="btn-host">${icon('qr', 22)}<span>${t('showCode')}</span></button>
      <button class="btn glass" id="btn-join">${icon('swap', 22)}<span>${t('joinCode')}</span></button>
    </div>`);
  root.append(orb, copy, btns);
  view.append(root);
  $('#btn-host').onclick = () => openSheet('host');
  $('#btn-join').onclick = () => openSheet('join');
  enter([orb, copy, btns]);
};

const renderConnected = () => {
  view.innerHTML = '';
  itemEls.clear();
  const root = el(`<div class="view"></div>`);
  const status = el(`<div class="status"><i class="dot"></i><span class="txt" id="st-txt"></span><button class="x" id="btn-bye">${icon('close', 18)}</button></div>`);
  const orb = makeOrb(170, 'swap');
  const files = el(`<button class="action card" id="act-files"><span class="ic">${icon('file', 26, 'var(--on-primary)')}</span><span><span>${t('sendFiles')}</span><small>${t('sendFilesHint')}</small></span></button>`);
  const text = el(`<button class="action card" id="act-text"><span class="ic">${icon('text', 26, 'var(--on-primary)')}</span><span>${t('sendText')}</span></button>`);
  const running = el(`<div id="running" hidden><div class="section">${t('nowTitle')}</div><div class="list" id="running-list" style="margin-top:14px"></div></div>`);
  root.append(status, orb, files, text, running);
  view.append(root);
  $('#btn-bye').onclick = () => drift_api.disconnect();
  $('#act-files').onclick = () => drift_api.pickFiles();
  $('#act-text').onclick = () => openSheet('text');
  enter([status, orb, files, text]);
};

const renderHistory = () => {
  view.innerHTML = '';
  itemEls.clear();
  const root = el(`<div class="view"><div class="title">${t('historyTitle')}</div><div class="list" id="hist-list"></div><div class="empty" id="hist-empty" hidden></div></div>`);
  view.append(root);
  const empty = $('#hist-empty');
  empty.append(makeOrb(150, 'history'), el(`<span>${t('historyEmpty')}</span>`));
  enter(root.children);
};

const updateDynamic = () => {
  if (tab === 'share' && S.phase !== 'connected') {
    const n = $('#home-notice');
    if (n) {
      const msg = S.peerLeft ? t('peerLeft') : S.serverError ? t('serverFail') : '';
      n.hidden = !msg;
      n.textContent = msg;
      n.classList.toggle('err', !!S.serverError && !S.peerLeft);
    }
  }
  if (tab === 'share' && S.phase === 'connected') {
    const st = $('.status');
    if (st) {
      st.classList.toggle('lost', !!S.linkLost);
      $('#st-txt').textContent = S.linkLost ? t('linkLost') : t('connectedTo', { name: S.peer ? S.peer.name : '' });
    }
    const running = S.items.filter((i) => i.status === 'active' || i.status === 'pending').slice(0, 4);
    $('#running').hidden = running.length === 0;
    syncList($('#running-list'), running);
  }
  if (tab === 'history') {
    syncList($('#hist-list'), S.items);
    $('#hist-empty').hidden = S.items.length > 0;
  }
};

const render = () => {
  const key = `${lang}|${tab}|${tab === 'share' ? (S.phase === 'connected' ? 'conn' : 'home') : 'hist'}`;
  if (key !== viewKey) {
    viewKey = key;
    if (tab === 'share') (S.phase === 'connected' ? renderConnected : renderHome)();
    else renderHistory();
  }
  updateDynamic();
};

// ---------- tabs + language ----------
const tabButtons = { share: $('#tab-share'), history: $('#tab-history') };
const moveIndicator = (animate) => {
  const btn = tabButtons[tab];
  const ind = $('#indicator');
  const w = btn.offsetWidth - 10;
  const x = btn.offsetLeft - 5;
  if (!animate) { gsap.set(ind, { width: w, x }); return; }
  gsap.set(ind, { width: w });
  gsap.to(ind, { x, duration: 0.9, ease: 'elastic.out(1, 0.55)' });
  gsap.fromTo(ind, { scaleX: 1.28, scaleY: 0.92 }, { scaleX: 1, scaleY: 1, duration: 0.9, ease: 'elastic.out(1, 0.5)' });
};

const applyStatic = () => {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((n) => { n.textContent = t(n.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((n) => { n.placeholder = t(n.dataset.i18nPlaceholder); });
  $('#text-go').innerHTML = `${icon('send', 22)}<span>${t('send')}</span>`;
  tabButtons.share.innerHTML = `${icon('swap', 22)}<span>${t('tabShare')}</span>`;
  tabButtons.history.innerHTML = `${icon('history', 22)}<span>${t('tabHistory')}</span>`;
  document.querySelectorAll('#lang button').forEach((b) => b.classList.toggle('on', b.dataset.lang === lang));
  Object.entries(tabButtons).forEach(([k, b]) => b.classList.toggle('on', k === tab));
};

$('#lang').addEventListener('click', (e) => {
  const b = e.target.closest('[data-lang]');
  if (!b || b.dataset.lang === lang) return;
  lang = b.dataset.lang;
  try { localStorage.setItem('drift.lang', lang); } catch {}
  applyStatic();
  moveIndicator(false);
  render();
});

$('#tabs').addEventListener('click', (e) => {
  const b = e.target.closest('[data-tab]');
  if (!b || b.dataset.tab === tab) return;
  tab = b.dataset.tab;
  applyStatic();
  moveIndicator(true);
  render();
});

// ---------- sheets ----------
const sheets = { host: $('#sheet-host'), join: $('#sheet-join'), text: $('#sheet-text') };
const scrim = $('#scrim');

const openSheet = async (name) => {
  if (sheet) return;
  sheet = name;
  const node = sheets[name];
  node.style.display = 'flex';
  scrim.style.pointerEvents = 'auto';
  gsap.to(scrim, { opacity: 1, duration: 0.3 });
  gsap.fromTo(node, { yPercent: 100 }, { yPercent: 0, duration: 0.7, ease: 'back.out(1.1)' });
  if (name === 'host') {
    $('#host-error').textContent = '';
    $('#host-body').hidden = false;
    $('#code').textContent = '';
    $('#qr').removeAttribute('src');
    const { result } = await drift_api.startHosting();
    if (result !== 'ok') {
      $('#host-body').hidden = true;
      $('#host-error').textContent = t(result === 'nowifi' ? 'noWifi' : 'serverFail');
    }
  }
  if (name === 'join') {
    const input = $('#join-code');
    input.value = '';
    setJoinStatus('');
    $('#join-go').disabled = true;
    setTimeout(() => input.focus(), 350);
  }
  if (name === 'text') {
    $('#text-input').value = '';
    $('#text-go').disabled = true;
    setTimeout(() => $('#text-input').focus(), 350);
  }
};

const closeSheet = () => {
  if (!sheet) return;
  const name = sheet;
  const node = sheets[name];
  sheet = null;
  if (name === 'host') drift_api.stopHosting();
  gsap.to(scrim, { opacity: 0, duration: 0.25 });
  scrim.style.pointerEvents = 'none';
  gsap.to(node, { yPercent: 100, duration: 0.35, ease: 'power3.in', onComplete: () => { node.style.display = 'none'; } });
};

scrim.addEventListener('click', closeSheet);
document.querySelectorAll('[data-close]').forEach((b) => b.addEventListener('click', closeSheet));
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSheet(); });

const setJoinStatus = (text, isError) => {
  const n = $('#join-status');
  n.textContent = text || ' ';
  n.classList.toggle('err', !!isError);
};

let joining = false;
const submitJoin = async () => {
  const code = $('#join-code').value;
  if (joining || code.length !== 6) return;
  joining = true;
  $('#join-go').disabled = true;
  setJoinStatus(t('joinSearching'));
  const result = await drift_api.joinWithCode(code);
  joining = false;
  if (result === 'ok') return;
  $('#join-go').disabled = $('#join-code').value.length !== 6;
  setJoinStatus(t(result === 'wrong' ? 'joinWrong' : result === 'nowifi' ? 'noWifi' : 'joinNotFound'), true);
};

$('#join-code').addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6);
  $('#join-go').disabled = joining || e.target.value.length !== 6;
});
$('#join-code').addEventListener('keydown', (e) => { if (e.key === 'Enter') submitJoin(); });
$('#join-go').addEventListener('click', submitJoin);

$('#text-input').addEventListener('input', (e) => { $('#text-go').disabled = !e.target.value.trim(); });
$('#text-go').addEventListener('click', () => {
  const value = $('#text-input').value;
  if (!value.trim()) return;
  drift_api.sendText(value);
  closeSheet();
});

// ---------- drag and drop ----------
const drop = $('#drop');
let dragDepth = 0;
const canDrop = () => S.phase === 'connected' && !sheet;
window.addEventListener('dragenter', (e) => {
  if (!canDrop()) return;
  e.preventDefault();
  dragDepth += 1;
  if (dragDepth === 1) { drop.style.display = 'grid'; gsap.fromTo(drop, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.6)' }); }
});
window.addEventListener('dragover', (e) => { if (canDrop()) e.preventDefault(); });
window.addEventListener('dragleave', () => {
  dragDepth = Math.max(0, dragDepth - 1);
  if (dragDepth === 0) gsap.to(drop, { opacity: 0, duration: 0.2, onComplete: () => { drop.style.display = 'none'; } });
});
window.addEventListener('drop', (e) => {
  e.preventDefault();
  dragDepth = 0;
  drop.style.display = 'none';
  if (canDrop() && e.dataTransfer.files.length) drift_api.sendDropped(e.dataTransfer.files);
});

// ---------- boot ----------
// ---------- sound when a file arrives ----------
const arrivalSound = { currentTime: 0 }; // the site demo is silent
const doneBefore = new Set();
let soundArmed = false;

const playOnArrival = (items) => {
  for (const i of items) {
    if (i.dir === 'in' && i.kind === 'file' && i.status === 'done' && !doneBefore.has(i.id)) {
      doneBefore.add(i.id);
      if (soundArmed) {
        arrivalSound.currentTime = 0;
        
      }
    }
  }
};

drift_api.onState((next) => {
  const wasConnected = S.phase === 'connected';
  S = next;
  playOnArrival(S.items);
  if (S.phase === 'connected' && !wasConnected && sheet && sheet !== 'text') closeSheet();
  if (sheet === 'host') {
    if (S.qr) $('#qr').src = S.qr;
    $('#code').textContent = S.pairCode ? `${S.pairCode.slice(0, 3)} ${S.pairCode.slice(3)}` : '';
  }
  render();
});

drift_api.state().then((s) => {
  S = s;
  playOnArrival(S.items); // files from earlier sessions: remember them, stay quiet
  soundArmed = true;
  applyStatic();
  render();
  requestAnimationFrame(() => moveIndicator(false));
});
gsap.to('.pulse', { scale: 1.6, opacity: 0.2, duration: 0.9, ease: 'sine.inOut', repeat: -1, yoyo: true });
