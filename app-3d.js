(() => {
  'use strict';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer:fine)').matches;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const menuButton = $('.menu');
  const mobileMenu = $('.mobile-menu');
  const closeMenu = () => {
    if (!mobileMenu || !menuButton) return;
    mobileMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  };
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
  }

  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else reveals.forEach(el => el.classList.add('visible'));

  const counters = $$('.counter');
  const animateCounter = el => {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || '';
    if (reduceMotion) { el.textContent = target + suffix; return; }
    const duration = 1050;
    const start = performance.now();
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
    }, { threshold: 0.55 });
    counters.forEach(el => counterObserver.observe(el));
  } else counters.forEach(animateCounter);

  const navTabs = $$('.nav-tab');
  const sections = $$('.page-section[id]');
  const setActiveTab = id => {
    navTabs.forEach(tab => {
      const active = tab.dataset.section === id;
      tab.classList.toggle('active', active);
      if (active) tab.setAttribute('aria-current', 'page');
      else tab.removeAttribute('aria-current');
    });
  };
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveTab(visible.target.id);
    }, { rootMargin: '-34% 0px -54% 0px', threshold: [0,.15,.4,.75] });
    sections.forEach(section => sectionObserver.observe(section));
  }
  navTabs.forEach(tab => tab.addEventListener('click', () => { setActiveTab(tab.dataset.section); closeMenu(); }));

  const particleHost = $('#particles');
  if (particleHost && !reduceMotion) {
    const count = window.innerWidth < 650 ? 16 : window.innerWidth < 1000 ? 24 : 34;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const p = document.createElement('i');
      p.className = 'particle';
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.animationDelay = `${-Math.random() * 8}s`;
      p.style.animationDuration = `${6 + Math.random() * 8}s`;
      frag.appendChild(p);
    }
    particleHost.appendChild(frag);
  }

  const card = $('.profile-card');
  const stage = $('.hero-stage');
  if (card && stage && !reduceMotion && finePointer) {
    stage.addEventListener('pointermove', e => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `rotateY(${x * 14}deg) rotateX(${y * -11}deg)`;
    }, { passive: true });
    stage.addEventListener('pointerleave', () => { card.style.transform = ''; });
  }

  if (!reduceMotion && finePointer) {
    $$('.tilt').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `perspective(950px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-4px)`;
      }, { passive: true });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  const glow = $('.cursor-glow');
  if (glow && !reduceMotion && finePointer) {
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    const moveGlow = () => {
      x += (tx - x) * .1; y += (ty - y) * .1;
      glow.style.left = `${x}px`; glow.style.top = `${y}px`;
      requestAnimationFrame(moveGlow);
    };
    requestAnimationFrame(moveGlow);
  }

  const filterTabs = (tabs, items, tabKey, itemKey, value) => {
    tabs.forEach(tab => {
      const active = tab.dataset[tabKey] === value;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    items.forEach(item => {
      const show = value === 'all' || item.dataset[itemKey] === value;
      item.classList.toggle('is-hidden', !show);
    });
  };

  const projectTabs = $$('.project-tab');
  const projects = $$('.project[data-category]');
  projectTabs.forEach(tab => tab.addEventListener('click', () => filterTabs(projectTabs, projects, 'filter', 'category', tab.dataset.filter)));

  const companyTabs = $$('.company-tab');
  const companies = $$('.company-card[data-company]');
  companyTabs.forEach(tab => tab.addEventListener('click', () => filterTabs(companyTabs, companies, 'company', 'company', tab.dataset.company)));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) closeMenu();
  }, { passive: true });

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
