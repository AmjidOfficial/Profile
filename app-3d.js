(()=>{'use strict';
const $=(s,r=document)=>r.querySelector(s);const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;const fine=window.matchMedia('(pointer:fine)').matches;
const root=document.documentElement,topbar=$('#topbar'),progress=$('#progress'),menu=$('#menu'),mobile=$('#mobile-nav');
const set=(el,c,v)=>el&&el.classList.toggle(c,v);

if(menu&&mobile){menu.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});$$('a',mobile).forEach(a=>a.addEventListener('click',()=>{mobile.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.addEventListener('click',e=>{if(!mobile.contains(e.target)&&!menu.contains(e.target)){mobile.classList.remove('open');menu.setAttribute('aria-expanded','false')}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){mobile.classList.remove('open');menu.setAttribute('aria-expanded','false')}})}

const reveals=$$('.reveal');reveals.forEach((el,i)=>el.style.setProperty('--delay',`${Math.min(i%5*90,360)}ms`));
if('IntersectionObserver'in window&&!reduce){const ro=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');ro.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});reveals.forEach(el=>ro.observe(el));}else reveals.forEach(el=>el.classList.add('visible'));

const counters=$$('.counter');if('IntersectionObserver'in window){const co=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target,target=Number(el.dataset.target||0),suffix=el.dataset.suffix||'';if(reduce){el.textContent=target+suffix}else{const start=performance.now(),duration=1700;const tick=now=>{const p=Math.min(1,(now-start)/duration),e=1-Math.pow(1-p,4);el.textContent=Math.round(target*e)+suffix;if(p<1)requestAnimationFrame(tick)};requestAnimationFrame(tick)}co.unobserve(el)}),{threshold:.7});counters.forEach(el=>co.observe(el));}

const sections=$$('.section-anchor');const nav=$$('.desktop-nav a');const rails=$$('.rail-link');
const activeSection=id=>{nav.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));rails.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id))};
if('IntersectionObserver'in window){const so=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)activeSection(entry.target.id)}),{rootMargin:'-42% 0px -48% 0px',threshold:0});sections.forEach(s=>so.observe(s));}

const scrollUpdate=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;const pct=max>0?(window.scrollY/max)*100:0;if(progress)progress.style.width=pct+'%';if(topbar)topbar.classList.toggle('scrolled',window.scrollY>30)};window.addEventListener('scroll',scrollUpdate,{passive:true});scrollUpdate();

if(fine&&!reduce){const portrait=$('.portrait-wrap');if(portrait){let tx=0,ty=0,cx=0,cy=0,raf=0;portrait.addEventListener('pointermove',e=>{const r=portrait.getBoundingClientRect();tx=(e.clientX-r.left)/r.width-.5;ty=(e.clientY-r.top)/r.height-.5;if(!raf)raf=requestAnimationFrame(function loop(){cx+=(tx-cx)*.08;cy+=(ty-cy)*.08;portrait.style.transform=`rotateY(${cx*10}deg) rotateX(${cy*-8}deg)`;if(Math.abs(tx-cx)>.001||Math.abs(ty-cy)>.001)raf=requestAnimationFrame(loop);else raf=0})});portrait.addEventListener('pointerleave',()=>{tx=0;ty=0;portrait.style.transform=''})}
$$('[data-tilt]').forEach(el=>{if(el===portrait)return;let tx=0,ty=0,cx=0,cy=0,raf=0;el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();tx=(e.clientX-r.left)/r.width-.5;ty=(e.clientY-r.top)/r.height-.5;if(!raf)raf=requestAnimationFrame(function loop(){cx+=(tx-cx)*.1;cy+=(ty-cy)*.1;el.style.transform=`perspective(1200px) rotateX(${cy*-3.5}deg) rotateY(${cx*4.5}deg) translateY(-5px)`;if(Math.abs(tx-cx)>.001||Math.abs(ty-cy)>.001)raf=requestAnimationFrame(loop);else raf=0})});el.addEventListener('pointerleave',()=>{tx=0;ty=0;el.style.transform=''})});
$$('.magnetic').forEach(btn=>{btn.addEventListener('pointermove',e=>{const r=btn.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.06,y=(e.clientY-r.top-r.height/2)*.06;btn.style.transform=`translate(${x}px,${y}px)`});btn.addEventListener('pointerleave',()=>btn.style.transform='')});
}

const filters=$$('.company-filter button'),panels=$$('.company-panel');
const filterCompanies=value=>{filters.forEach(b=>{const on=b.dataset.filter===value;b.classList.toggle('active',on);b.setAttribute('aria-selected',String(on))});panels.forEach((p,i)=>{const show=value==='all'||p.dataset.company===value;if(!show){p.classList.add('is-hidden');return}p.classList.remove('is-hidden');if(!reduce)p.animate([{opacity:0,transform:'translateY(24px) scale(.98)'},{opacity:1,transform:'none'}],{duration:700,delay:i*80,easing:'cubic-bezier(.16,1,.3,1)',fill:'both'})})};filters.forEach((b,i)=>{b.addEventListener('click',()=>filterCompanies(b.dataset.filter||'all'));b.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();let n=i;if(e.key==='ArrowRight')n=(i+1)%filters.length;if(e.key==='ArrowLeft')n=(i-1+filters.length)%filters.length;if(e.key==='Home')n=0;if(e.key==='End')n=filters.length-1;filters[n].focus();filters[n].click()})});

const year=$('#year');if(year)year.textContent=new Date().getFullYear();

if(!reduce){document.addEventListener('pointermove',e=>{const x=e.clientX/window.innerWidth-.5,y=e.clientY/window.innerHeight-.5;root.style.setProperty('--mx',x.toFixed(3));root.style.setProperty('--my',y.toFixed(3))},{passive:true});}
})();