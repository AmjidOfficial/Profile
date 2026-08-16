(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(pointer:fine)').matches;
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];

  const menu = $('.menu');
  const mobile = $('.mobile-menu');
  if (menu && mobile) {
    menu.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    $$('.mobile-menu a').forEach(a => a.addEventListener('click', () => {
      mobile.classList.remove('open');
      menu.setAttribute('aria-expanded','false');
    }));
  }

  // Smooth reveal system.
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.closest('.career-track')) entry.target.closest('.career-track').classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {threshold:.12, rootMargin:'0px 0px -6% 0px'});
    reveals.forEach(el => io.observe(el));
  } else reveals.forEach(el => el.classList.add('visible'));

  // Animated counters.
  const counters = $$('.counter');
  const runCounter = el => {
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suffix; return; }
    const start = performance.now();
    const duration = 1300;
    const tick = now => {
      const p = Math.min((now-start)/duration,1);
      const eased = 1-Math.pow(1-p,3);
      el.textContent = Math.round(target*eased) + suffix;
      if(p<1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const ci = new IntersectionObserver((entries,obs)=>entries.forEach(e=>{if(e.isIntersecting){runCounter(e.target);obs.unobserve(e.target);}}),{threshold:.7});
    counters.forEach(c=>ci.observe(c));
  } else counters.forEach(runCounter);

  // Active navigation tab follows the section in view.
  const navLinks = $$('.nav-links .nav-tab');
  const sections = $$('.page-section');
  if ('IntersectionObserver' in window) {
    const si = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+id));
      });
    }, {rootMargin:'-38% 0px -48% 0px', threshold:0});
    sections.forEach(s=>si.observe(s));
  }

  // Scroll progress and header depth.
  const progress = $('#scroll-progress');
  const header = $('#site-nav');
  const updateScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? (scrollY/max)*100 : 0;
    if(progress) progress.style.width = p+'%';
    if(header) header.classList.toggle('scrolled', scrollY > 24);
  };
  addEventListener('scroll', updateScroll, {passive:true});
  updateScroll();

  // Hero 3D pointer movement. No library required.
  const stage = $('.hero-stage');
  const card = $('.profile-card');
  if(stage && card && fine && !reduce){
    stage.addEventListener('pointermove', e => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-.5;
      const y = (e.clientY-r.top)/r.height-.5;
      card.style.transform = `rotateY(${x*14}deg) rotateX(${y*-12}deg) translateZ(8px)`;
    });
    stage.addEventListener('pointerleave',()=>card.style.transform='');
  }

  // Gentle card tilt with glare-like depth.
  if(fine && !reduce){
    $$('.tilt').forEach(el=>{
      el.addEventListener('pointermove', e=>{
        const r=el.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5;
        const y=(e.clientY-r.top)/r.height-.5;
        el.style.transform=`perspective(1000px) rotateX(${y*-4.5}deg) rotateY(${x*6}deg) translateY(-5px)`;
      });
      el.addEventListener('pointerleave',()=>el.style.transform='');
    });
  }

  // Desktop cursor light.
  const glow=$('.cursor-glow');
  if(glow && fine && !reduce){
    let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
    addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY},{passive:true});
    const loop=()=>{x+=(tx-x)*.1;y+=(ty-y)*.1;glow.style.left=x+'px';glow.style.top=y+'px';requestAnimationFrame(loop)};
    requestAnimationFrame(loop);
  }

  // Company filter tabs.
  const tabs=$$('.company-tab');
  const cards=$$('.company-card');
  const filterCompany = value => {
    tabs.forEach(t=>{const active=t.dataset.company===value;t.classList.toggle('active',active);t.setAttribute('aria-selected',String(active));});
    cards.forEach(card=>{
      const match=value==='all'||card.dataset.company===value;
      card.classList.toggle('is-hidden',!match);
      if(match && !reduce){card.animate([{opacity:0,transform:'translateY(12px) scale(.98)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:420,easing:'cubic-bezier(.2,.7,.2,1)'});}
    });
  };
  tabs.forEach(t=>t.addEventListener('click',()=>filterCompany(t.dataset.company)));

  // Keyboard-friendly tab selection.
  tabs.forEach((tab,i)=>tab.addEventListener('keydown',e=>{
    if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key)) return;
    e.preventDefault();
    let n=i;
    if(e.key==='ArrowRight') n=(i+1)%tabs.length;
    if(e.key==='ArrowLeft') n=(i-1+tabs.length)%tabs.length;
    if(e.key==='Home') n=0;
    if(e.key==='End') n=tabs.length-1;
    tabs[n].focus(); tabs[n].click();
  }));

  // Small parallax on hero copy, only on pointer devices.
  const heroCopy=$('.hero-copy');
  if(heroCopy && fine && !reduce){
    addEventListener('pointermove',e=>{
      const nx=(e.clientX/innerWidth-.5)*2;
      const ny=(e.clientY/innerHeight-.5)*2;
      heroCopy.style.transform=`translate3d(${nx*-5}px,${ny*-3}px,0)`;
    },{passive:true});
  }

  // Close mobile menu on outside click / Escape.
  document.addEventListener('click',e=>{if(mobile&&menu&&!mobile.contains(e.target)&&!menu.contains(e.target)){mobile.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mobile&&menu){mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});

  const year=$('#year');
  if(year) year.textContent=new Date().getFullYear();
})();
