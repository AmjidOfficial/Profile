(()=>{'use strict';
const profiles=[['gravity','01 · Gravity'],['editorial','02 · Editorial'],['cinematic','03 · Cinematic']];
const themes=[['neumorphic','01 · Neumorphic'],['light','02 · Light'],['dark','03 · Dark']];
const awards=[
['2025–26','Best Region Award','Company recognition for strong regional sales performance and execution.'],
['SPECIAL','SalesPulse Project Recognition','Special company recognition for the development of the SalesPulse project and its sales analytics work.'],
['SPECIAL','Special Recognition · Cash Prize','Special recognition and cash prize from Chairman Aziz Group of Industries, Mohsin Aziz Sb.'],
['2023–24','Best Regional Sales Manager','National-level recognition for regional sales performance.'],
['2019–20','National Champion ZSM Award','National Champion recognition for zonal sales performance.']
];
function cleanLegacyDuplicate(){document.getElementById('portfolio-recognition')?.remove();const sections=[...document.querySelectorAll('#recognition')];sections.slice(1).forEach(x=>x.remove())}
function modernRecognition(){const root=document.querySelector('.editorial-site,.cinematic-site');if(!root||root.querySelector('.profile-recognition-modern'))return;const prefix=root.classList.contains('editorial-site')?'ev':'cv';const contact=root.querySelector('#ev-contact,#cv-contact');if(!contact)return;const s=document.createElement('section');s.className=`${prefix}-section ${prefix}-recognition-section profile-recognition-modern`;s.id=`${prefix}-recognition`;s.innerHTML=`<div class="${prefix}-index">05 / RECOGNITION</div><div class="${prefix}-recognition-head"><div><span class="${prefix}-number">05</span><h2>Recognition &<br><em>impact.</em></h2></div><p>Selected company and national-level recognition, including SalesPulse project recognition and special leadership recognition.</p></div><div class="${prefix}-award-grid">${awards.map(a=>`<article class="${prefix}-award-card"><span>${a[0]}</span><b>${a[1]}</b><p>${a[2]}</p></article>`).join('')}</div>`;contact.parentNode.insertBefore(s,contact)}
function addCSS(){if(document.getElementById('profile-controls-css'))return;const s=document.createElement('style');s.id='profile-controls-css';s.textContent=`
#profile-theme-control,#profile-switcher-fallback{display:none!important}
#amjid-profile-toolbar{position:fixed;top:12px;right:14px;z-index:2147483000;display:flex;align-items:center;gap:8px;font-family:'DM Mono',monospace;pointer-events:auto}
.amjid-tool{position:relative}
.amjid-tool>button{appearance:none;border:1px solid rgba(127,127,127,.28);background:rgba(255,255,255,.94);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);color:#222;border-radius:999px;padding:10px 13px;min-width:112px;font:700 10px 'DM Mono',monospace;letter-spacing:.05em;cursor:pointer;box-shadow:0 7px 24px rgba(0,0,0,.14);white-space:nowrap;transition:transform .2s ease,box-shadow .2s ease}
.amjid-tool>button:hover,.amjid-tool>button:focus-visible{transform:translateY(-1px);box-shadow:0 10px 28px rgba(0,0,0,.18);outline:2px solid rgba(8,123,120,.25);outline-offset:2px}
.amjid-tool-menu{position:absolute;top:calc(100% + 8px);right:0;width:250px;max-height:min(70vh,420px);overflow:auto;padding:9px;border:1px solid rgba(127,127,127,.2);background:rgba(18,18,18,.97);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.3);display:none}
.amjid-tool.open .amjid-tool-menu{display:block;animation:amjidMenuIn .18s ease}
.amjid-tool-title{color:#888;padding:8px 9px 5px;font:500 8px 'DM Mono',monospace;letter-spacing:.14em}
.amjid-tool-menu a{display:block;color:#ddd;text-decoration:none;padding:11px 9px;border-radius:8px;font:600 10px 'DM Mono',monospace;line-height:1.35}
.amjid-tool-menu a:hover,.amjid-tool-menu a:focus-visible,.amjid-tool-menu a[aria-current="true"]{background:rgba(255,255,255,.1);color:#fff;outline:none}
.amjid-tool-menu a[aria-current="true"]:after{content:'  ✓';color:#c89b57}
.amjid-sidebar-controls{margin-top:14px;padding-top:14px;border-top:1px solid rgba(127,127,127,.18);display:grid;gap:5px}
.amjid-sidebar-title{padding:0 12px 4px;color:#8a8f97;font:800 8px 'DM Mono',monospace;letter-spacing:.12em}
.amjid-sidebar-controls a{display:block;padding:9px 12px;border-radius:10px;color:#6f747c;text-decoration:none;font:600 9px 'DM Mono',monospace}
.amjid-sidebar-controls a:hover,.amjid-sidebar-controls a[aria-current="true"]{background:#f0f4ff;color:#316fe9}
@keyframes amjidMenuIn{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:none}}
.source-editorial #amjid-profile-toolbar .amjid-tool>button{background:rgba(245,242,234,.94);color:#171717}
.source-cinematic #amjid-profile-toolbar .amjid-tool>button{background:rgba(18,16,14,.96);color:#f3eee5;border-color:#403a32}
.source-editorial .amjid-sidebar-controls,.source-cinematic .amjid-sidebar-controls{display:none}
@media(max-width:900px){#amjid-profile-toolbar{top:10px;right:10px}.amjid-tool>button{min-width:104px;padding:9px 11px}}
@media(max-width:760px){#amjid-profile-toolbar{left:10px;right:auto;top:10px;gap:6px}.amjid-tool>button{min-width:92px;padding:9px 10px;font-size:9px}.amjid-tool-menu{left:0;right:auto;width:min(245px,calc(100vw - 20px));max-height:60vh}.amjid-tool:last-child .amjid-tool-menu{left:auto;right:0}}
@media(max-width:420px){#amjid-profile-toolbar{left:8px;top:8px;gap:5px}.amjid-tool>button{min-width:86px;padding:8px 9px;font-size:8px}.amjid-tool>button span{font-size:10px}}
@media(prefers-reduced-motion:reduce){.amjid-tool>button,.amjid-tool-menu{transition:none;animation:none}}

.profile-career-modern .ev-modern-head,.profile-career-modern .cv-modern-head{display:flex;justify-content:space-between;gap:30px;align-items:end;margin:35px 0 60px}.profile-career-modern h2,.profile-education-modern h2{font-size:clamp(48px,7vw,105px);line-height:.9;margin:0}.profile-career-modern h2 em,.profile-education-modern h2 em{font-style:normal}.profile-career-modern p,.profile-education-modern p{max-width:330px}.profile-career-modern .ev-career-list,.profile-career-modern .cv-career-list{display:grid}.profile-career-modern article{display:grid;grid-template-columns:60px 1fr;gap:20px;padding:28px 0;border-bottom:1px solid rgba(127,127,127,.2)}.profile-career-modern article>span{font:500 10px 'DM Mono',monospace}.profile-career-modern article small,.profile-career-modern article b{font-size:9px;letter-spacing:.06em}.profile-career-modern article h3{margin:7px 0 4px;font-size:22px}.profile-career-modern article p{margin:7px 0 0;font-size:11px;line-height:1.6}.profile-education-modern .ev-education-grid,.profile-education-modern .cv-education-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:45px}.profile-education-modern article{min-height:160px;padding:20px;border:1px solid rgba(127,127,127,.2);display:flex;flex-direction:column;justify-content:space-between}.profile-education-modern article span,.profile-education-modern article small{font-size:9px;opacity:.65}.profile-education-modern article b{font-size:15px}.profile-education-modern article strong{font-size:10px;opacity:.75}@media(max-width:900px){.profile-education-modern .ev-education-grid,.profile-education-modern .cv-education-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.profile-career-modern .ev-modern-head,.profile-career-modern .cv-modern-head{display:block}.profile-education-modern .ev-education-grid,.profile-education-modern .cv-education-grid{grid-template-columns:1fr}.profile-career-modern article{grid-template-columns:35px 1fr}.profile-career-modern article h3{font-size:17px}}
`;document.head.appendChild(s)}
function linkFor(kind,id){const u=new URL(location.href);u.search='';u.hash='';const p=localStorage.getItem('amjid-profile-mode')||'gravity';const t=localStorage.getItem('amjid-theme')||'neumorphic';u.searchParams.set('profile',kind==='profile'?id:p);u.searchParams.set('theme',kind==='theme'?id:t);return u.href}
function markCurrent(root){const p=localStorage.getItem('amjid-profile-mode')||'legacy';const t=localStorage.getItem('amjid-theme')||'neumorphic';root.querySelectorAll('[data-profile]').forEach(a=>a.setAttribute('aria-current',String(a.dataset.profile===p)));root.querySelectorAll('[data-theme]').forEach(a=>a.setAttribute('aria-current',String(a.dataset.theme===t)))}
function buildTool(kind,items,title){const box=document.createElement('div');box.className='amjid-tool';const label=kind==='profile'?'Profile':'Theme';box.innerHTML=`<button type="button" aria-expanded="false">${label} <span aria-hidden="true">⌄</span></button><div class="amjid-tool-menu"><div class="amjid-tool-title">${title}</div>${items.map(([id,text])=>`<a data-${kind}="${id}" href="${linkFor(kind,id)}">${text}</a>`).join('')}</div>`;const btn=box.querySelector('button');btn.addEventListener('click',e=>{e.stopPropagation();const bar=box.parentElement;bar.querySelectorAll('.amjid-tool').forEach(x=>{if(x!==box){x.classList.remove('open');x.querySelector('button')?.setAttribute('aria-expanded','false')}});const open=box.classList.toggle('open');btn.setAttribute('aria-expanded',String(open))});return box}
function bindToolLinks(bar){bar.querySelectorAll('a[data-profile],a[data-theme]').forEach(a=>{if(a.dataset.bound==='1')return;a.dataset.bound='1';a.addEventListener('click',e=>{e.preventDefault();const kind=a.dataset.profile?'profile':'theme';const id=a.dataset.profile||a.dataset.theme;bar.querySelectorAll('.amjid-tool').forEach(x=>x.classList.remove('open'));if(window.AmjidPortfolio){if(kind==='profile')window.AmjidPortfolio.setProfile(id);else window.AmjidPortfolio.setTheme(id);}else location.href=a.href;});});}
function makeToolbar(){let bar=document.getElementById('amjid-profile-toolbar');if(!bar){addCSS();bar=document.createElement('div');bar.id='amjid-profile-toolbar';bar.setAttribute('role','group');bar.setAttribute('aria-label','Profile and theme controls');bar.append(buildTool('profile',profiles,'CHANGE PROFILE'),buildTool('theme',themes,'CHANGE THEME'));document.body.appendChild(bar);bar.addEventListener('click',e=>e.stopPropagation())}else{const links=bar.querySelectorAll('a');links.forEach(a=>{const kind=a.dataset.profile?'profile':'theme';const id=a.dataset.profile||a.dataset.theme;a.href=linkFor(kind,id)})}markCurrent(bar);bindToolLinks(bar)}
function makeSidebarControls(){const side=document.querySelector('.sidebar');if(!side||side.querySelector('.amjid-sidebar-controls'))return;const box=document.createElement('div');box.className='amjid-sidebar-controls';box.innerHTML=`<div class="amjid-sidebar-title">PROFILE & THEME</div><a href="#" data-profile-menu>Change Profile</a><a href="#" data-theme-menu>Change Theme</a>`;const bottom=side.querySelector('.side-bottom');side.insertBefore(box,bottom||null);box.querySelector('[data-profile-menu]').addEventListener('click',e=>{e.preventDefault();document.querySelector('#amjid-profile-toolbar [data-profile="'+(localStorage.getItem('amjid-profile-mode')||'legacy')+'"]')?.focus();document.querySelector('#amjid-profile-toolbar .amjid-tool:first-child button')?.click()});box.querySelector('[data-theme-menu]').addEventListener('click',e=>{e.preventDefault();document.querySelector('#amjid-profile-toolbar .amjid-tool:last-child button')?.click()})}
function ensureControls(){makeToolbar();makeSidebarControls();const old=document.getElementById('profile-switcher-fallback');if(old)old.remove();const oldMenu=document.getElementById('profile-switcher-fallback-menu');if(oldMenu)oldMenu.remove()}
function modernCareerEducation(){
  const root=document.querySelector('.editorial-site,.cinematic-site');
  if(!root||root.querySelector('.profile-career-modern'))return;
  const prefix=root.classList.contains('editorial-site')?'ev':'cv';
  const contact=root.querySelector('#ev-contact,#cv-contact');
  if(!contact)return;
  const jobs=[
    ['2022 → PRESENT','Regional Sales Manager · North','Aziz Group of Industries','45+ distributors; 1 Sales Coordinator, 1 ASM, 6 TSMs and 22 Order Bookers. Sales forecasting, demand planning, RTM, retail execution and sales analytics.'],
    ['Aug 2021 → Mar 2022','FMCG Distributor Operations · Peshawar','FMCG Distributor Operations','Snacks, biscuits and beverages distribution, secondary sales tracking, retail execution and demand fulfillment.'],
    ['Jun 2019 → Jul 2021','Zonal Sales Manager · KPK','Volka Food International (Cookania)','Sales forecasting, demand planning, RTM execution, distribution expansion and field-force productivity.'],
    ['Feb 2017 → Jun 2019','Area Sales Manager · Peshawar','Ismail Industries Limited','General Trade distributor and field sales operations, secondary sales, merchandising and SKU availability.'],
    ['Jul 2016 → Feb 2017','Area Sales Manager (Acting) · KPK','Ismail Industries Limited','Outstation markets, distributor KPIs, RTM compliance and field training.'],
    ['Feb 2014 → Jun 2016','Territory Sales Manager · Peshawar','Ismail Industries Limited','Territory FMCG sales, forecasting, demand execution, retail coverage and distributor engagement.'],
    ['Nov 2009 → Feb 2014','Sales Representative · FMCG (PepsiCo Lays)','Muller & Phipps / Shakir & Associates','Primary and secondary General Trade sales, retailer relationships, trade promotions and field execution.']
  ];
  const edu=[
    ['MBA (Executive)','Gomal University','2018–2020'],
    ['MA Islamic Studies','Bacha Khan University','2018'],
    ['BA','University of Peshawar','2015–2016'],
    ['DAE Electrical','BTE KPK','2004–2007'],
    ['SSC','BISE Peshawar','2004']
  ];
  const career=document.createElement('section');
  career.className=prefix+'-section profile-career-modern';
  career.innerHTML='<div class="'+prefix+'-index">06 / CAREER</div><div class="'+prefix+'-modern-head"><h2>2009 →<br><em>PRESENT.</em></h2><p>Full professional experience from the source CV.</p></div><div class="'+prefix+'-career-list">'+jobs.map((j,i)=>'<article><span>0'+(i+1)+'</span><div><small>'+j[0]+'</small><h3>'+j[1]+'</h3><b>'+j[2]+'</b><p>'+j[3]+'</p></div></article>').join('')+'</div>';
  const education=document.createElement('section');
  education.className=prefix+'-section profile-education-modern';
  education.innerHTML='<div class="'+prefix+'-index">07 / EDUCATION</div><div class="'+prefix+'-modern-head"><h2>Academic<br><em>background.</em></h2></div><div class="'+prefix+'-education-grid">'+edu.map((e,i)=>'<article><span>0'+(i+1)+'</span><b>'+e[0]+'</b><strong>'+e[1]+'</strong><small>'+e[2]+'</small></article>').join('')+'</div>';
  contact.parentNode.insertBefore(career,contact);
  contact.parentNode.insertBefore(education,contact);
}
function run(){cleanLegacyDuplicate();modernRecognition();modernCareerEducation();ensureControls()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(run,120),{once:true});else setTimeout(run,120);new MutationObserver(()=>{if(!document.getElementById('amjid-profile-toolbar'))setTimeout(run,20)}).observe(document.body,{childList:true});
})();