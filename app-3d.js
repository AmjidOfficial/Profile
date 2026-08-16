(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  // Mobile navigation
  const menuButton = $('.menu');
  const mobileMenu = $('.mobile-menu');
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    $$('.mobile-menu a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  // Scroll reveal. No external animation library is required.
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // Counter animation
  const counters = $$('.counter');
  const animateCounter = el => {
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const duration = 1200;
    const start = performance.now();
    const frame = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { animateCounter(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.7 });
    counters.forEach(el => counterObserver.observe(el));
  } else counters.forEach(animateCounter);

  // Pointer depth effect for the hero card.
  const card = $('.profile-card');
  if (card && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    const stage = $('.hero-stage');
    stage.addEventListener('pointermove', e => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `rotateY(${x * 12}deg) rotateX(${y * -10}deg)`;
    });
    stage.addEventListener('pointerleave', () => {
      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  }

  // Small tilt effect for glass panels.
  if (!reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    $$('.tilt').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-4px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  // Cursor glow, desktop only.
  const glow = $('.cursor-glow');
  if (glow && !reduceMotion && window.matchMedia('(pointer:fine)').matches) {
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    const move = () => {
      x += (tx - x) * .12; y += (ty - y) * .12;
      glow.style.left = `${x}px`; glow.style.top = `${y}px`;
      requestAnimationFrame(move);
    };
    requestAnimationFrame(move);
  }

  // Current year.
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
