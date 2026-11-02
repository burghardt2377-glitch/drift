// Stands in for the desktop app's backend so the real interface can play a scripted story inside the website.
// ?scene=home|host|join|connected|history  shows one still moment; no scene plays the whole loop.
(() => {
  const params = new URLSearchParams(location.search);
  const scene = params.get('scene');
  const wanted = params.get('lang');
  try { if (wanted === 'ru' || wanted === 'en') localStorage.setItem('drift.lang', wanted); } catch {}

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const clone = (o) => JSON.parse(JSON.stringify(o));
  let listener = () => {};
  const S = { ready: true, serverError: false, ip: '192.168.1.24', port: 53217, phase: 'idle', pairCode: '', qr: '', peer: null, linkLost: false, peerLeft: false, items: [] };
  const emit = () => listener(clone(S));
  let seq = 0;
  const item = (o) => ({ id: String(++seq).padStart(12, '0'), at: Date.now(), progress: 1, status: 'done', ...o });

  window.drift = {
    platform: 'ios',
    state: async () => clone(S),
    onState: (cb) => { listener = cb; },
    startHosting: async () => { S.phase = 'hosting'; S.pairCode = '482913'; S.qr = 'qr.png'; emit(); return { result: 'ok' }; },
    stopHosting: async () => { if (S.phase === 'hosting') { S.phase = 'idle'; S.pairCode = ''; S.qr = ''; emit(); } },
    joinWithCode: async () => 'notfound',
    pickFiles: async () => {},
    sendDropped: async () => {},
    sendText: async (text) => { S.items = [item({ dir: 'out', kind: 'text', name: text, text, size: text.length, mime: 'text/plain' }), ...S.items]; emit(); },
    retry: async () => {}, disconnect: async () => {}, dismissPeerLeft: async () => {}, reveal: async () => {}, copy: async () => {}, openUrl: async () => {},
  };

  const $ = (sel) => document.querySelector(sel);
  const wait = async (sel) => { for (let i = 0; i < 80 && !$(sel); i++) await sleep(50); return $(sel); };
  const click = async (sel) => { const n = await wait(sel); if (n) n.click(); };
  const type = async (sel, text, pace = 70) => {
    const n = await wait(sel); if (!n) return;
    n.focus();
    for (let i = 1; i <= text.length; i++) { n.value = text.slice(0, i); n.dispatchEvent(new Event('input', { bubbles: true })); await sleep(pace); }
  };
  const connect = () => { S.phase = 'connected'; S.peer = { name: 'iPhone' }; S.pairCode = ''; S.qr = ''; emit(); };
  const run = async (it, ms, steps = 22) => {
    S.items = [{ ...it, status: 'active', progress: 0 }, ...S.items]; emit();
    for (let i = 1; i <= steps; i++) {
      await sleep(ms / steps);
      S.items = S.items.map((x) => (x.id === it.id ? { ...x, progress: i / steps } : x)); emit();
    }
    S.items = S.items.map((x) => (x.id === it.id ? { ...x, status: 'done', progress: 1 } : x)); emit();
  };

  const photo = () => item({ dir: 'in', kind: 'file', name: 'Sunset.jpg', size: 3_210_000, mime: 'image/jpeg', path: 'sunset.jpg' });
  const zip = () => item({ dir: 'out', kind: 'file', name: 'Trip photos.zip', size: 14_000_000, mime: 'application/zip' });
  const link = () => item({ dir: 'in', kind: 'text', name: 'link', text: 'https://example.com/trip-itinerary', size: 33, mime: 'text/plain' });

  const still = async () => {
    await sleep(500);
    if (scene === 'host') await click('#btn-host');
    if (scene === 'join') { await click('#btn-join'); await sleep(500); await type('#join-code', '4829', 0); }
    if (scene === 'connected') {
      connect();
      S.items = [
        { ...item({ dir: 'in', kind: 'file', name: 'Sunset.jpg', size: 3_210_000, mime: 'image/jpeg', path: 'sunset.jpg' }), status: 'active', progress: 0.64 },
        { ...zip(), status: 'active', progress: 0.31 },
      ];
      emit();
    }
    if (scene === 'history') {
      connect();
      S.items = [
        item({ dir: 'out', kind: 'text', name: 'See you at 7!', text: 'See you at 7!', size: 13, mime: 'text/plain' }),
        link(), zip(), photo(),
      ];
      emit();
      await sleep(300);
      document.querySelector('[data-tab="history"]').click();
    }
  };

  const story = async () => {
    for (;;) {
      await sleep(2300);
      await click('#btn-host');            // 1. show a code
      await sleep(3200);
      document.querySelector('#sheet-host [data-close]').click();
      await sleep(500);
      connect();                            // 2. the other device joins
      await sleep(1400);
      run(photo(), 2400);                   // 3. a photo arrives
      await sleep(1300);
      S.items = [link(), ...S.items]; emit(); // 4. a link arrives
      await sleep(900);
      await run(zip(), 3600);               // 5. a file goes out
      await sleep(600);
      await click('#act-text');             // 6. a short message
      await sleep(700);
      await type('#text-input', 'See you at 7!', 85);
      await sleep(400);
      await click('#text-go');
      await sleep(1600);
      document.querySelector('[data-tab="history"]').click(); // 7. history
      await sleep(3000);
      document.querySelector('[data-tab="share"]').click();
      await sleep(900);
      S.phase = 'idle'; S.peer = null; S.items = []; emit(); // and again
    }
  };

  window.addEventListener('load', () => { scene ? still() : story(); });
})();
