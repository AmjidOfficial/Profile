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
    $$('.mobile-menu a').forEach(a => a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
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
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else reveals.forEach(el => el.classList.add('visible'));

  const counters = $$('.counter');
  const animateCounter = el => {
    if (el.dataset.done) return;
    el.dataset.done = '1';
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
    }, { threshold: 0.55 });
    counters.forEach(el => counterObserver.observe(el));
  } else counters.forEach(animateCounter);

  const allNavTabs = $$('.nav-tab');
  const sections = $$('.page-section[id]');
  const setActiveTab = id => {
    allNavTabs.forEach(tab => {
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
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0, .2, .5, .8] });
    sections.forEach(section => sectionObserver.observe(section));
  }
  allNavTabs.forEach(tab => tab.addEventListener('click', () => setActiveTab(tab.dataset.section)));

  const card = $('.profile-card');
  if (card && !reduceMotion && finePointer) {
    const stage = $('.hero-stage');
    stage.addEventListener('pointermove', e => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `rotateY(${x * 12}deg) rotateX(${y * -10}deg)`;
    }, { passive: true });
    stage.addEventListener('pointerleave', () => { card.style.transform = 'rotateY(0deg) rotateX(0deg)'; });
  }

  if (!reduceMotion && finePointer) {
    $$('.tilt').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg) translateY(-4px)`;
      }, { passive: true });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  const glow = $('.cursor-glow');
  if (glow && !reduceMotion && finePointer) {
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    const move = () => {
      x += (tx - x) * .12; y += (ty - y) * .12;
      glow.style.left = `${x}px`; glow.style.top = `${y}px`;
      requestAnimationFrame(move);
    };
    requestAnimationFrame(move);
  }

  const projectTabs = $$('.project-tab');
  const projects = $$('.project[data-category]');
  const filterProjects = filter => {
    projectTabs.forEach(tab => {
      const active = tab.dataset.filter === filter;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    projects.forEach(project => {
      const show = filter === 'all' || project.dataset.category === filter;
      project.classList.toggle('is-hidden', !show);
    });
  };
  projectTabs.forEach(tab => tab.addEventListener('click', () => filterProjects(tab.dataset.filter)));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu) {
      mobileMenu.classList.remove('open');
      if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
    }
  });

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
