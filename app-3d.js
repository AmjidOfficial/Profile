(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(pointer:fine)').matches;
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];

  // Cinematic pacing layer: slower, softer and more deliberate than the previous build.
  const pace = document.createElement('style');
  pace.textContent = `
    .reveal{opacity:0;transform:translate3d(0,38px,0) scale(.985);filter:blur(6px);transition:opacity 1.05s cubic-bezier(.16,1,.3,1),transform 1.15s cubic-bezier(.16,1,.3,1),filter 1.05s ease;transition-delay:var(--reveal-delay,0ms)}
    .reveal.visible{opacity:1;transform:none;filter:none}
    .hero-copy.reveal{transform:translate3d(-24px,28px,0) scale(.985)}
    .hero-stage.reveal{transform:translate3d(24px,30px,0) scale(.975)}
    .hero-copy.reveal.visible,.hero-stage.reveal.visible{transform:none}
    .profile-card{transition:transform .75s cubic-bezier(.16,1,.3,1)}
    .tilt{transition:transform .65s cubic-bezier(.16,1,.3,1),border-color .45s ease,box-shadow .55s ease}
    .btn{transition:transform .55s cubic-bezier(.16,1,.3,1),background .45s ease,border-color .45s ease,box-shadow .55s ease}
    .company-card{transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
    @media (max-width:800px){
      .reveal{transform:translate3d(0,28px,0) scale(.99);filter:blur(4px);transition-duration:.9s,1s,.9s}
      .hero-copy.reveal,.hero-stage.reveal{transform:translate3d(0,28px,0) scale(.985)}
    }
    @media (prefers-reduced-motion:reduce){.reveal,.hero-copy.reveal,.hero-stage.reveal{opacity:1!important;transform:none!important;filter:none!important;transition:none!important}}
  `;
  document.head.appendChild(pace);

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

  // Deliberate cinematic reveal. Elements enter in small groups instead of all at once.
  const reveals = $$('.reveal');
  reveals.forEach((el, i) => {
    const parent = el.closest('.hero, .section');
    const siblings = parent ? $$('.reveal', parent) : [];
    const localIndex = Math.max(0, siblings.indexOf(el));
    const delay = Math.min(localIndex * 130, 520);
    el.style.setProperty('--reveal-delay', `${delay}ms`);
  });

  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.closest('.career-track')) entry.target.closest('.career-track').classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {threshold:.16, rootMargin:'0px 0px -12% 0px'});
    reveals.forEach(el => io.observe(el));
  } else reveals.forEach(el => el.classList.add('visible'));

  // Animated counters with a slower, premium count-up.
  const counters = $$('.counter');
  const runCounter = el => {
    const target = Number(el.dataset.target || 0);
    const suffix = el.dataset.suffix || '';
    if (reduce) { el.textContent = target + suffix; return; }
    const start = performance.now();
    const duration = 2200;
    const tick = now => {
      const p = Math.min((now-start)/duration,1);
      const eased = 1-Math.pow(1-p,4);
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

  // Hero 3D pointer movement with a slower physical feel.
  const stage = $('.hero-stage');
  const card = $('.profile-card');
  if(stage && card && fine && !reduce){
    let raf = 0, targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    stage.addEventListener('pointermove', e => {
      const r = stage.getBoundingClientRect();
      targetX = (e.clientX-r.left)/r.width-.5;
      targetY = (e.clientY-r.top)/r.height-.5;
      if (!raf) raf = requestAnimationFrame(function loop(){
        currentX += (targetX-currentX)*.11;
        currentY += (targetY-currentY)*.11;
        card.style.transform = `rotateY(${currentX*11}deg) rotateX(${currentY*-9}deg) translateZ(8px)`;
        if(Math.abs(targetX-currentX)>.001 || Math.abs(targetY-currentY)>.001) raf=requestAnimationFrame(loop); else raf=0;
      });
    });
    stage.addEventListener('pointerleave',()=>{targetX=0;targetY=0;card.style.transform='';});
  }

  // Gentle card tilt. Less twitchy and more physical.
  if(fine && !reduce){
    $$('.tilt').forEach(el=>{
      let tx=0,ty=0,cx=0,cy=0,raf=0;
      el.addEventListener('pointermove', e=>{
        const r=el.getBoundingClientRect();
        tx=(e.clientX-r.left)/r.width-.5;
        ty=(e.clientY-r.top)/r.height-.5;
        if(!raf) raf=requestAnimationFrame(function loop(){
          cx+=(tx-cx)*.14; cy+=(ty-cy)*.14;
          el.style.transform=`perspective(1200px) rotateX(${cy*-3.2}deg) rotateY(${cx*4.2}deg) translateY(-3px) translateZ(0)`;
          if(Math.abs(tx-cx)>.001 || Math.abs(ty-cy)>.001) raf=requestAnimationFrame(loop); else raf=0;
        });
      });
      el.addEventListener('pointerleave',()=>{tx=0;ty=0;el.style.transform='';});
    });
  }

  // Desktop cursor light with soft follow.
  const glow=$('.cursor-glow');
  if(glow && fine && !reduce){
    let x=innerWidth/2,y=innerHeight/2,tx=x,ty=y;
    addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY},{passive:true});
    const loop=()=>{x+=(tx-x)*.055;y+=(ty-y)*.055;glow.style.left=x+'px';glow.style.top=y+'px';requestAnimationFrame(loop)};
    requestAnimationFrame(loop);
  }

  // Company filter tabs.
  const tabs=$$('.company-tab');
  const cards=$$('.company-card');
  const filterCompany = value => {
    tabs.forEach(t=>{const active=t.dataset.company===value;t.classList.toggle('active',active);t.setAttribute('aria-selected',String(active));});
    cards.forEach((card, index)=>{
      const match=value==='all'||card.dataset.company===value;
      card.classList.toggle('is-hidden',!match);
      if(match && !reduce){card.animate([{opacity:0,transform:'translateY(24px) scale(.97)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:760,delay:index*80,easing:'cubic-bezier(.16,1,.3,1)',fill:'both'});}
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

  // Very subtle hero-copy parallax. The content should feel calm, not jumpy.
  const heroCopy=$('.hero-copy');
  if(heroCopy && fine && !reduce){
    let px=0,py=0,tx=0,ty=0;
    addEventListener('pointermove',e=>{tx=(e.clientX/innerWidth-.5)*2;ty=(e.clientY/innerHeight-.5)*2},{passive:true});
    const loop=()=>{px+=(tx-px)*.035;py+=(ty-py)*.035;heroCopy.style.transform=`translate3d(${px*-3}px,${py*-2}px,0)`;requestAnimationFrame(loop)};
    requestAnimationFrame(loop);
  }

  // Close mobile menu on outside click / Escape.
  document.addEventListener('click',e=>{if(mobile&&menu&&!mobile.contains(e.target)&&!menu.contains(e.target)){mobile.classList.remove('open');menu.setAttribute('aria-expanded','false')}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mobile&&menu){mobile.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}});

  const year=$('#year');
  if(year) year.textContent=new Date().getFullYear();
})();
