(()=>{
'use strict';
let cleanup=()=>{};
function animateCounters(root){
 const nodes=[...root.querySelectorAll('.pv2-stats b,.pv2-card-stats b,.pv3-bento article b,.pv3-card strong')];
 nodes.forEach(node=>{
  const raw=node.textContent.trim();
  const m=raw.match(/^([#]?)(\d+)(.*)$/); if(!m)return;
  const target=Number(m[2]),prefix=m[1],suffix=m[3];
  if(node.dataset.motionDone)return; node.dataset.motionDone='1'; node.classList.add('pv-motion-counter');
  const start=performance.now(),duration=1200;
  const tick=now=>{const p=Math.min(1,(now-start)/duration),e=1-Math.pow(1-p,3),v=Math.round(target*e);node.textContent=prefix+v+suffix;if(p<1)requestAnimationFrame(tick)};
  requestAnimationFrame(tick);
 });
}
function bind(root){
 cleanup(); if(!root)return;
 const progress=document.createElement('div');progress.className='pv-motion-progress';root.appendChild(progress);
 const reveal=[...root.querySelectorAll('section,article,.pv2-kicker,.pv3-head,.pv2-actions,.pv3-actions,.pv2-footer,.pv3-footer')];
 reveal.forEach((el,i)=>{el.classList.add('pv-motion-reveal');if(i%5===1)el.classList.add('pv-motion-delay-1');if(i%5===2)el.classList.add('pv-motion-delay-2');if(i%5===3)el.classList.add('pv-motion-delay-3')});
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});reveal.forEach(el=>io.observe(el));
 animateCounters(root);
 let raf=0;
 const pointer=e=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{const r=root.getBoundingClientRect();root.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');root.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%')})};
 const tiltTargets=root.matches('.pv2-page,.pv3-page')?[root.querySelector('.pv2-idcard'),root.querySelector('.pv3-card')].filter(Boolean):[];
 const moveTilt=e=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;tiltTargets.forEach(card=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(1000px) rotateY(${x*10}deg) rotateX(${y*-8}deg) translate3d(${x*7}px,${y*5}px,12px)`})};
 const resetTilt=()=>tiltTargets.forEach(card=>card.style.transform='');
 const scroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max?scrollY/max*100:0)+'%'};
 root.addEventListener('pointermove',pointer,{passive:true});root.addEventListener('pointermove',moveTilt,{passive:true});root.addEventListener('pointerleave',resetTilt);window.addEventListener('scroll',scroll,{passive:true});scroll();
 cleanup=()=>{io.disconnect();root.removeEventListener('pointermove',pointer);root.removeEventListener('pointermove',moveTilt);root.removeEventListener('pointerleave',resetTilt);window.removeEventListener('scroll',scroll);progress.remove()};
}
function init(){const root=document.querySelector('.pv2-page,.pv3-page');bind(root)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
window.addEventListener('profile-layout-change',()=>requestAnimationFrame(init));
})();
