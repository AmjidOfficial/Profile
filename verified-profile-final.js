(() => {
  'use strict';

  /* Final content and interaction QA layer.
     Source of truth: Muhammad Amjid CV + confirmed project requirements.
     This layer removes unsupported wording from rendered profile views and
     makes the source-video profile navigation usable on desktop/mobile. */

  const awards = [
    ['2025–26', 'Best Region Award', 'Regional performance recognition at the Annual Sales Conference 2025–26, held 3–5 September 2026.'],
    ['5 Sep 2026', 'Special Recognition (Cash Prize)', 'Special recognition from Chairman Aziz Group of Industries, Mohsin Aziz Sb., at the Annual Sales Conference 2025–26.'],
    ['Sep 2026', 'SalesPulse AI Analytics System Creator', 'Created SalesPulse in February 2026 using Gemini AI Studio; recognition awarded at the Annual Sales Conference 2025–26.'],
    ['2023–24', 'Best Regional Sales Manager – National Level', 'National-level recognition for top regional performance.'],
    ['2023', 'SMART Sales App Project Lead', 'Head Office digital transformation initiative for real-time sales tracking, GPS monitoring, attendance and KPI dashboards.'],
    ['2019–20', 'National Champion ZSM Award', 'National Champion recognition.'],
    ['2018', 'Billion Sales Achievement Team', 'Member of the Billion Sales Achievement Team.']
  ];

  function esc(value) {
    return String(value).replace(/[&<>"']/g, m => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }

  function refreshLegacyAwards() {
    const section = document.querySelector('#recognition');
    if (!section) return;
    const row = section.querySelector('.award-row');
    if (!row) return;
    row.innerHTML = awards.map(a => `
      <article class="reveal ev-visible">
        <strong>${esc(a[0])}</strong>
        <h3>${esc(a[1])}</h3>
        <p>${esc(a[2])}</p>
      </article>`).join('');
  }

  function enhanceCinematic() {
    const root = document.querySelector('.cinematic-site');
    if (!root) return;
    const menu = root.querySelector('.cv-menu');
    const nav = root.querySelector('.cv-nav nav');
    if (menu && nav && !menu.dataset.bound) {
      menu.dataset.bound = '1';
      menu.addEventListener('click', () => {
        nav.classList.toggle('is-open');
        menu.setAttribute('aria-expanded', nav.classList.contains('is-open') ? 'true' : 'false');
      });
      nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
    }
  }

  function enhanceEditorial() {
    const root = document.querySelector('.editorial-site');
    if (!root) return;
    const menu = root.querySelector('.ev-nav-dot');
    const nav = root.querySelector('.ev-nav nav');
    if (menu && nav && !menu.dataset.bound) {
      menu.dataset.bound = '1';
      menu.addEventListener('click', () => nav.classList.toggle('is-open'));
      nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
    }
  }

  function apply() {
    refreshLegacyAwards();
    enhanceCinematic();
    enhanceEditorial();
  }

  const style = document.createElement('style');
  style.textContent = `
    .cv-nav nav.is-open, .ev-nav nav.is-open { display:flex !important; }
    @media (max-width: 760px) {
      .cv-nav nav, .ev-nav nav { display:none; }
      .cv-nav nav.is-open, .ev-nav nav.is-open {
        position:absolute; right:16px; top:58px; flex-direction:column;
        padding:14px; gap:12px; border:1px solid rgba(255,255,255,.14);
        background:rgba(8,15,28,.96); backdrop-filter:blur(18px); z-index:30;
      }
    }
  `;
  document.head.appendChild(style);

  const observer = new MutationObserver(() => apply());
  observer.observe(document.body, { childList: true, subtree: true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, { once: true });
  else apply();
})();
