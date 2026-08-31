(()=>{
'use strict';
const KEY='amjid-profile-visual-mode';
const apply=mode=>{
 document.body.classList.toggle('neumorphic-mode',mode==='neumorphic');
 document.documentElement.classList.toggle('neumorphic-mode',mode==='neumorphic');
 const b=document.getElementById('theme-toggle');
 if(b){b.setAttribute('aria-pressed',mode==='neumorphic');b.innerHTML=`<span class="toggle-dot">${mode==='neumorphic'?'✦':'◐'}</span><span>${mode==='neumorphic'?'Classic Profile':'Neumorphic 3D'}</span>`}
};
const init=()=>{
 if(!document.getElementById('theme-toggle')){
  const b=document.createElement('button');b.id='theme-toggle';b.className='theme-toggle';b.type='button';b.setAttribute('aria-label','Switch portfolio visual mode');b.setAttribute('aria-pressed','true');document.body.appendChild(b);
  b.addEventListener('click',()=>{const next=document.body.classList.contains('neumorphic-mode')?'classic':'neumorphic';localStorage.setItem(KEY,next);apply(next)});
 }
 // Neumorphic is the first-visit/default mode. A deliberate user choice is remembered.
 const saved=localStorage.getItem(KEY);
 apply(saved==='classic'?'classic':'neumorphic');
};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
/* Theme switching is now handled by source-video-profile.js so one button controls profile + theme. */
(()=>{'use strict';window.initPortfolioTheme=window.initPortfolioTheme||function(){}})();
