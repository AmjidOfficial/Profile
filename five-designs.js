(() => {
  const body = document.body;
  const trigger = document.getElementById('designTrigger');
  const panel = document.getElementById('designPanel');
  const label = document.getElementById('designLabel');
  const current = document.getElementById('designCurrent');
  const choices = [...document.querySelectorAll('.design-choice')];
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const names = {clyde:'Clyde',beckham:'Beckham',schmidt:'Schmidt',breed2:'Breed2',grunt:'Grunt'};
  const nums = {clyde:'01',beckham:'02',schmidt:'03',breed2:'04',grunt:'05'};
  const valid = Object.keys(names);
  let selected = localStorage.getItem('amjid-design') || 'clyde';
  if (!valid.includes(selected)) selected = 'clyde';

  function setDesign(name, save=true){
    selected = valid.includes(name) ? name : 'clyde';
    body.dataset.design = selected;
    label.textContent = `${nums[selected]} / 05`;
    current.textContent = names[selected];
    choices.forEach(c => c.classList.toggle('active', c.dataset.design === selected));
    if(save) localStorage.setItem('amjid-design', selected);
    document.documentElement.style.setProperty('scroll-behavior','auto');
    requestAnimationFrame(() => document.documentElement.style.removeProperty('scroll-behavior'));
  }
  setDesign(selected,false);

  trigger?.addEventListener('click', e => { e.stopPropagation(); const open=panel.classList.toggle('open'); trigger.setAttribute('aria-expanded',String(open)); });
  choices.forEach(c => c.addEventListener('click', () => { setDesign(c.dataset.design); panel.classList.remove('open'); trigger.setAttribute('aria-expanded','false'); }));
  document.addEventListener('click', e => { if(panel.classList.contains('open') && !panel.contains(e.target) && !trigger.contains(e.target)){panel.classList.remove('open');trigger.setAttribute('aria-expanded','false');} });
  document.addEventListener('keydown', e => { if(e.key==='Escape'){panel.classList.remove('open');trigger?.setAttribute('aria-expanded','false');} });

  menuBtn?.addEventListener('click', () => { const open=mobileNav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded',String(open)); });
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click',()=>{mobileNav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');}));

  const progress=document.getElementById('progress');
  const updateProgress=()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${h>0?(scrollY/h)*100:0}%`;};
  addEventListener('scroll',updateProgress,{passive:true}); updateProgress();

  const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');reveal.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%5,4)*70}ms`;reveal.observe(el);});

  const counters=document.querySelectorAll('[data-count]');
  const countObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;const end=Number(el.dataset.count);const suffix=el.dataset.suffix||'';const start=performance.now();const dur=1500;const tick=t=>{const p=Math.min((t-start)/dur,1);const eased=1-Math.pow(1-p,3);el.textContent=Math.round(end*eased)+suffix;if(p<1)requestAnimationFrame(tick);};requestAnimationFrame(tick);countObserver.unobserve(el);}),{threshold:.6});
  counters.forEach(c=>countObserver.observe(c));

  document.querySelectorAll('.portrait').forEach(img=>{
    const frame=img.closest('.portrait-frame');
    if(!frame || matchMedia('(hover:none)').matches) return;
    frame.addEventListener('pointermove',e=>{const r=frame.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;img.style.transform=`rotateX(${y*-7}deg) rotateY(${x*9}deg) translateZ(28px)`;});
    frame.addEventListener('pointerleave',()=>img.style.transform='translateZ(25px)');
  });

  document.querySelectorAll('.metric,.award,.company,.digital-card,.panel,.edu,.skill').forEach(card=>{
    if(matchMedia('(hover:none)').matches) return;
    card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${y*-2.5}deg) rotateY(${x*3}deg) translateY(-4px)`;});
    card.addEventListener('pointerleave',()=>card.style.removeProperty('transform'));
  });

  const sections=[...document.querySelectorAll('main section[id]')];
  const links=[...document.querySelectorAll('.nav a')];
  const navObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${e.target.id}`));}}),{rootMargin:'-40% 0px -50% 0px'});
  sections.forEach(s=>navObserver.observe(s));

  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{const filter=btn.dataset.filter;document.querySelectorAll('.company').forEach(card=>{card.classList.toggle('hidden',filter!=='all' && card.dataset.company!==filter);});document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('primary',b===btn));}));

  // Gentle pointer glow. It never loads external resources.
  const glow=document.createElement('div'); glow.className='pointer-glow'; document.body.appendChild(glow);
  if(!matchMedia('(hover:none)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches){addEventListener('pointermove',e=>{glow.style.transform=`translate3d(${e.clientX-100}px,${e.clientY-100}px,0)`},{passive:true});}
})();