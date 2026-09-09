(() => {
  'use strict';

  const awards = [
    { year: '2025–26', title: 'Best Region Award', text: 'Company recognition for strong regional sales performance and execution.' },
    { year: 'SPECIAL', title: 'SalesPulse Project Recognition', text: 'Special company recognition for the development of the SalesPulse project and its sales analytics work.' },
    { year: 'SPECIAL', title: 'Special Recognition · Cash Prize', text: 'Special recognition and cash prize from Chairman Aziz Group of Industries, Mohsin Aziz Sb.' },
    { year: '2023–24', title: 'Best Regional Sales Manager', text: 'National-level recognition for regional sales performance.' },
    { year: '2019–20', title: 'National Champion ZSM Award', text: 'National Champion recognition for zonal sales performance.' }
  ];

  const imageSlots = [
    { label: '2025–26 Best Region Award', file: 'assets/images/awards/best-region-2025-26.jpg' },
    { label: 'SalesPulse Special Recognition', file: 'assets/images/awards/salespulse-special-recognition.jpg' },
    { label: 'Chairman Special Recognition · Cash Prize', file: 'assets/images/awards/chairman-cash-prize.jpg' }
  ];

  function injectStyles() {
    if (document.getElementById('portfolio-enhancements-css')) return;
    const style = document.createElement('style');
    style.id = 'portfolio-enhancements-css';
    style.textContent = `
      .portfolio-awards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:28px}
      .portfolio-award{padding:24px;border-radius:24px;min-height:180px;background:rgba(255,255,255,.48);box-shadow:inset 7px 7px 14px rgba(0,0,0,.055),inset -7px -7px 14px rgba(255,255,255,.82),8px 8px 22px rgba(0,0,0,.06)}
      .portfolio-award strong{display:block;font-size:12px;letter-spacing:.12em;opacity:.65;margin-bottom:12px}
      .portfolio-award h3{margin:0 0 10px;font-size:20px}.portfolio-award p{margin:0;line-height:1.65;opacity:.75}
      .portfolio-award-media{margin-top:18px;min-height:100px;border-radius:16px;display:grid;place-items:center;text-align:center;padding:12px;background:linear-gradient(145deg,rgba(255,255,255,.7),rgba(225,230,227,.55));border:1px dashed rgba(80,95,90,.22)}
      .portfolio-award-media span{display:block;font-size:10px;letter-spacing:.16em;opacity:.5}.portfolio-award-media small{display:block;margin-top:5px;font-size:11px;opacity:.7}
      .portfolio-award-media.has-image{background-size:cover;background-position:center;min-height:180px;border-style:solid}.portfolio-award-media.has-image span,.portfolio-award-media.has-image small{display:none}
      .ev-recognition-section,.cv-recognition-section{border-top:1px solid rgba(127,127,127,.16)}
      .ev-recognition-head,.cv-recognition-head{display:grid;grid-template-columns:1fr .7fr;gap:7vw;align-items:end;margin-bottom:65px}
      .ev-recognition-head h2,.cv-recognition-head h2{font:700 clamp(48px,7vw,105px) 'Space Grotesk';line-height:.9;letter-spacing:-.06em;margin:20px 0}
      .ev-recognition-head em,.cv-recognition-head em{font-style:normal;color:#7569d9}.cv-recognition-head em{color:#c89b57}
      .ev-recognition-head p,.cv-recognition-head p{color:#8e877e;line-height:1.7;max-width:360px}
      .ev-award-grid,.cv-award-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
      .ev-award-card,.cv-award-card{min-height:230px;padding:24px;border:1px solid rgba(80,80,80,.16);display:flex;flex-direction:column;justify-content:flex-start;gap:10px;transition:transform .35s,border-color .3s}
      .ev-award-card:hover,.cv-award-card:hover{transform:translateY(-7px);border-color:rgba(117,105,217,.5)}
      .cv-award-card{background:linear-gradient(145deg,#151310,#0d0c0b);border-color:#2c2924}.cv-award-card:hover{border-color:#63513a}
      .ev-award-card>span,.cv-award-card>span{font:500 9px 'DM Mono';letter-spacing:.14em;color:#7569d9}.cv-award-card>span{color:#c89b57}
      .ev-award-card>b,.cv-award-card>b{font:600 22px 'Space Grotesk'}.ev-award-card p,.cv-award-card p{font-size:12px;line-height:1.6;color:#7d7770;margin:0}.cv-award-card p{color:#938c82}
      .ev-award-media,.cv-award-media{margin-top:auto;min-height:80px;border:1px dashed rgba(117,105,217,.3);display:grid;place-items:center;text-align:center;padding:10px}.cv-award-media{border-color:rgba(200,155,87,.3)}
      .ev-award-media span,.cv-award-media span{font:500 8px 'DM Mono';letter-spacing:.13em}.ev-award-media small,.cv-award-media small{font-size:9px;color:#8a837a}.ev-award-media.has-image,.cv-award-media.has-image{background-size:cover;background-position:center;min-height:130px;border-style:solid}.ev-award-media.has-image>* ,.cv-award-media.has-image>*{display:none}
      @media(max-width:900px){.portfolio-awards,.ev-award-grid,.cv-award-grid{grid-template-columns:1fr 1fr}.ev-recognition-head,.cv-recognition-head{grid-template-columns:1fr;margin-bottom:40px}}
      @media(max-width:600px){.portfolio-awards,.ev-award-grid,.cv-award-grid{grid-template-columns:1fr}.portfolio-award{min-height:0}.ev-recognition-section,.cv-recognition-section{padding-top:100px!important;padding-bottom:100px!important}}
    `;
    document.head.appendChild(style);
  }

  function awardCards(className) {
    return awards.map((a, i) => `
      <article class="${className}">
        <span>${a.year}</span><b>${a.title}</b><p>${a.text}</p>
        ${i < 3 ? `<div class="${className.replace('award-card','award-media')}" data-award-slot="${i}"><span>AWARD PHOTO</span><small>${imageSlots[i].label}</small></div>` : ''}
      </article>`).join('');
  }

  // The legacy profile already had a Recognition section. Update that section in place.
  // This avoids creating a second "Recognition that measures impact" heading.
  function updateLegacy() {
    const recognition = document.getElementById('recognition');
    if (!recognition || recognition.dataset.enhanced === 'true') return;
    const title = recognition.querySelector('.center-title h2');
    if (title) title.innerHTML = 'Recognition that measures <em>impact.</em>';
    const row = recognition.querySelector('.award-row');
    if (row) {
      row.className = 'award-row portfolio-awards';
      row.innerHTML = awards.map((a, i) => `
        <article class="portfolio-award">
          <strong>${a.year}</strong><h3>${a.title}</h3><p>${a.text}</p>
          ${i < 3 ? `<div class="portfolio-award-media" data-award-slot="${i}"><span>AWARD PHOTO</span><small>${imageSlots[i].label}</small></div>` : ''}
        </article>`).join('');
    }
    recognition.dataset.enhanced = 'true';
  }

  function modernMarkup(prefix) {
    return `
      <section id="${prefix}-recognition" class="${prefix}-section ${prefix}-recognition-section">
        <div class="${prefix}-index">05 / RECOGNITION</div>
        <div class="${prefix}-recognition-head">
          <div><span class="${prefix}-number">05</span><h2>Recognition that<br><em>shows impact.</em></h2></div>
          <p>Selected company and national-level recognition, including the SalesPulse project and special leadership recognition.</p>
        </div>
        <div class="${prefix}-award-grid">${awardCards(`${prefix}-award-card`)}</div>
      </section>`;
  }

  function addModern() {
    const editorial = document.querySelector('.editorial-site');
    const cinematic = document.querySelector('.cinematic-site');
    if (editorial && !document.getElementById('editorial-recognition')) {
      const contact = document.getElementById('ev-contact');
      if (contact) {
        const wrap = document.createElement('div');
        wrap.innerHTML = modernMarkup('ev').replace('id="ev-recognition"', 'id="editorial-recognition"');
        contact.parentNode.insertBefore(wrap.firstElementChild, contact);
      }
    }
    if (cinematic && !document.getElementById('cinematic-recognition')) {
      const contact = document.getElementById('cv-contact');
      if (contact) {
        const wrap = document.createElement('div');
        wrap.innerHTML = modernMarkup('cv').replace('id="cv-recognition"', 'id="cinematic-recognition"');
        contact.parentNode.insertBefore(wrap.firstElementChild, contact);
      }
    }
  }

  function bindAwardImages() {
    document.querySelectorAll('[data-award-slot]').forEach(el => {
      if (el.dataset.imageBound === 'true') return;
      el.dataset.imageBound = 'true';
      const path = imageSlots[Number(el.dataset.awardSlot)]?.file;
      if (!path) return;
      const img = new Image();
      img.onload = () => { el.style.backgroundImage = `url("${path}")`; el.classList.add('has-image'); };
      img.src = path;
    });
  }

  function run() {
    injectStyles();
    updateLegacy();
    addModern();
    bindAwardImages();
  }

  const observer = new MutationObserver(() => setTimeout(run, 0));
  observer.observe(document.body, { childList: true, subtree: false });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(run, 50), { once: true });
  else setTimeout(run, 50);
})();
