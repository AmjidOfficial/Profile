(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer:fine)').matches;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const menuButton = $('.menu');
  const mobileMenu = $('.mobile-menu');
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    $$('.mobile-menu a').forEach(link => link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const revealItems = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    revealItems.forEach(el => observer.observe(el));
  } else revealItems.forEach(el => el.classList.add('visible'));

  const counters = $$('.counter');
  const animateCounter = el => {
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const start = performance.now();
    const duration = 1100;
    const frame = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { animateCounter(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: .65 });
    counters.forEach(el => counterObserver.observe(el));
  } else counters.forEach(animateCounter);

  // Active navigation and section progress.
  const navLinks = $$('.nav-links a');
  const sections = $$('.section-anchor');
  const setActive = id => navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + id));
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  const progress = $('#progress');
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0;
    if (progress) progress.style.height = value + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  // Subtle 3D portrait interaction.
  const portrait = $('.portrait-wrap');
  if (portrait && finePointer && !reduceMotion) {
    portrait.addEventListener('pointermove', e => {
      const r = portrait.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      portrait.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${y * -7}deg)`;
    });
    portrait.addEventListener('pointerleave', () => { portrait.style.transform = ''; });
  }

  // Magnetic buttons, kept intentionally small and calm.
  if (finePointer && !reduceMotion) {
    $$('.magnetic').forEach(button => {
      button.addEventListener('pointermove', e => {
        const r = button.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        button.style.transform = `translate(${x * .08}px,${y * .08}px)`;
      });
      button.addEventListener('pointerleave', () => { button.style.transform = ''; });
    });
  }

  // Cursor glow follows the pointer with a little easing.
  const glow = $('.cursor-glow');
  if (glow && finePointer && !reduceMotion) {
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    const move = () => {
      x += (tx - x) * .1;
      y += (ty - y) * .1;
      glow.style.left = x + 'px';
      glow.style.top = y + 'px';
      requestAnimationFrame(move);
    };
    requestAnimationFrame(move);
  }

  // Close mobile menu with Escape.
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu) {
      mobileMenu.classList.remove('open');
      if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();