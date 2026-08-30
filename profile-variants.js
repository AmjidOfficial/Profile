(()=>{
'use strict';
const KEY='amjid-profile-layout';
const app=()=>document.getElementById('app');
const photo='assets/images/Muhammad-Amjid.jpeg';
const resume='assets/resume/Muhammad-Amjid-Resume.pdf';
const email='amjid.psh@gmail.com';
const linkedin='https://www.linkedin.com/in/amjid1988/';
const github='https://github.com/AmjidOfficial/';
const bazar='https://bazar360.online/';
const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const A=(u,t,c='')=>`<a class="${c}" href="${u}" target="_blank" rel="noopener">${t}</a>`;
let originalMarkup='';
let originalClass='';
let originalTitle='';
let active='current';

function sourceLight(){
 return `<div class="pv2-page">
  <header class="pv2-nav"><a class="pv2-brand" href="#pv2-home"><span>MA</span><b>Muhammad Amjid</b></a><nav><a href="#pv2-about">About</a><a href="#pv2-career">Career</a><a href="#pv2-work">Projects</a><a href="#pv2-contact">Contact</a></nav><button class="pv2-theme" type="button" aria-label="Toggle source profile theme">◐</button></header>
  <main>
   <section id="pv2-home" class="pv2-hero"><div class="pv2-grid"></div><div class="pv2-copy"><span class="pv2-available">● AVAILABLE FOR NEW OPPORTUNITIES</span><p class="pv2-hi">Hi, I'm</p><h1>Muhammad <strong>Amjid</strong></h1><p>I build commercial growth through professional sales, distribution excellence, analytics and digital transformation.</p><div class="pv2-actions">${A('#pv2-work','View Work ↗','pv2-black')}${A(resume,'Resume ↓','pv2-white')}</div><div class="pv2-social">${A(linkedin,'in')}${A(github,'GH')}${A('mailto:'+email,'@')}</div></div><div class="pv2-stage"><div class="pv2-glow"></div><div class="pv2-pin"></div><div class="pv2-idcard"><div class="pv2-card-top">MUHAMMAD AMJID <small>RSM · NORTH</small></div><div class="pv2-photo"><img src="${photo}" alt="Muhammad Amjid"></div><h3>Muhammad Amjid</h3><span>Regional Sales Manager</span><div class="pv2-card-stats"><b>15+</b><small>Years FMCG</small><b>45+</b><small>Distributors</small></div></div><div class="pv2-bubble pv2-b1"><b>25%</b><small>Category Share</small></div><div class="pv2-bubble pv2-b2"><b>#1</b><small>National Rank</small></div></div><div class="pv2-tools"><span>FMCG</span><span>SALES</span><span>RTM</span><span>ANALYTICS</span><span>DIGITAL</span><span>LEADERSHIP</span></div></section>
   <section id="pv2-about" class="pv2-section pv2-about"><div class="pv2-kicker">01 / ABOUT <i></i><small>THE PERSON BEHIND THE NUMBERS</small></div><div class="pv2-two"><h2>Building growth with <em>purpose.</em></h2><div><p>I am an FMCG sales professional with <b>15+ years</b> of experience across General Trade, Route-to-Market, distributor management, forecasting, demand planning and field execution.</p><p>My approach is practical: understand the market, simplify the numbers, improve execution and make the team faster.</p></div></div><div class="pv2-stats"><article><b>15+</b><span>Years FMCG</span></article><article><b>45+</b><span>Distributors managed</span></article><article><b>25%</b><span>Category share</span></article><article><b>#1</b><span>Company rank</span></article></div></section>
   <section id="pv2-career" class="pv2-section pv2-career"><div class="pv2-kicker">02 / CAREER <i></i><small>2009 → PRESENT</small></div><h2>A career built around <em>growth.</em></h2><div class="pv2-timeline"><article><strong>2022</strong><div><small>CURRENT ROLE</small><h3>Regional Sales Manager – North</h3><b>Aziz Group of Industries</b><p>Lead North Pakistan operations, distributor performance, forecasting, demand planning, RTM and digital sales transformation.</p></div></article><article><strong>2019</strong><div><small>2019 → 2021</small><h3>Zonal Sales Manager – KPK</h3><b>Volka Food International (Cookania)</b><p>Managed zonal sales operations, distributor network, field execution and market growth.</p></div></article><article><strong>2017</strong><div><small>2017 → 2019</small><h3>Area Sales Manager – Peshawar</h3><b>Ismail Industries Limited</b><p>Managed General Trade sales, distribution, SKU availability and field-force execution.</p></div></article><article><strong>2014</strong><div><small>2014 → 2017</small><h3>Territory / Acting Area Sales Manager</h3><b>Ismail Industries Limited</b><p>Built territory coverage, distributor engagement and retail execution across KPK.</p></div></article><article><strong>2009</strong><div><small>2009 → 2014</small><h3>Sales Representative – FMCG</h3><b>Muller & Phipps / Shakir & Associates</b><p>Executed primary and secondary sales and developed retailer relationships.</p></div></article></div></section>
   <section id="pv2-work" class="pv2-section pv2-work"><div class="pv2-kicker">03 / PROJECTS <i></i><small>SALES × TECHNOLOGY</small></div><div class="pv2-project-head"><h2>Selected <em>work.</em></h2><p>Practical systems built around sales visibility, analytics and digital execution.</p></div><div class="pv2-projects"><article class="pv2-feature"><small>01 · SALES TRANSFORMATION</small><h3>SMART Sales App<br>& Web Portal</h3><p>Real-time sales tracking, GPS monitoring, attendance and KPI dashboards.</p>${A('https://ais-pre-wno3ve25bj7klf2rzz25gc-54200336767.asia-southeast1.run.app/','Open Project ↗')}</article><article><small>02 · AI ANALYTICS</small><h3>SalesPulse AI Analytics</h3><p>Brand, SKU, OB and route-level performance analytics.</p>${A('https://ais-pre-wno3ve25bj7klf2rzz25gc-54200336767.asia-southeast1.run.app/','View ↗')}</article><article><small>03 · AUTOMOTIVE COMMERCE</small><h3>BAZAR360.online</h3><p>Automotive marketplace and showroom ecosystem.</p>${A(bazar,'Open ↗')}</article></div></section>
   <section id="pv2-contact" class="pv2-section pv2-contact"><div class="pv2-kicker">04 / CONTACT <i></i><small>LET'S CONNECT</small></div><div><h2>Let's <em>Connect.</em></h2><p>Open to new opportunities and meaningful collaborations.</p><div class="pv2-contact-links">${A('mailto:'+email,email)}${A(linkedin,'LinkedIn')}${A(github,'GitHub')}</div></div></section>
  </main><footer class="pv2-footer">© ${new Date().getFullYear()} Muhammad Amjid <span>Built with strategy, data & technology.</span></footer>
 </div>`;
}

function sourceDark(){
 return `<div class="pv3-page"><header class="pv3-nav"><a class="pv3-brand" href="#pv3-home"><span>MA</span><b>Muhammad Amjid</b></a><nav><a href="#pv3-home">Home</a><a href="#pv3-about">About</a><a href="#pv3-career">Career</a><a href="#pv3-work">Projects</a><a href="#pv3-contact">Contact</a></nav><button class="pv3-light" type="button">☼</button></header>
 <main><section id="pv3-home" class="pv3-hero"><div class="pv3-noise"></div><div class="pv3-left"><small>SALES × DATA × EXECUTION</small><p>Hi, I'm</p><h1>Muhammad<br><span>Amjid</span></h1><p class="pv3-lead">Regional sales leadership built around distribution, analytics and practical digital transformation.</p><div class="pv3-actions">${A('#pv3-work','Explore Work ↗','pv3-primary')}${A(resume,'Resume ↓','pv3-ghost')}</div></div><div class="pv3-right"><div class="pv3-orbit"></div><div class="pv3-card"><div><span>MUHAMMAD AMJID</span><small>RSM · NORTH PAKISTAN</small></div><img src="${photo}" alt="Muhammad Amjid"><strong>15+ YEARS</strong><small>FMCG SALES LEADERSHIP</small><div class="pv3-meter"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div><span class="pv3-note n1">45+ distributors</span><span class="pv3-note n2">25% category share</span></div></section>
 <section id="pv3-about" class="pv3-bento"><article class="wide"><small>ABOUT</small><h2>Commercial growth, made <em>practical.</em></h2><p>15+ years across General Trade, RTM, distributor management, forecasting, demand planning and field execution.</p></article><article><small>IMPACT</small><b>15+</b><span>Years FMCG</span></article><article><small>NETWORK</small><b>45+</b><span>Distributors</span></article><article><small>SHARE</small><b>25%</b><span>Category share</span></article><article><small>RANK</small><b>#1</b><span>Company rank</span></article></section>
 <section id="pv3-career" class="pv3-section"><div class="pv3-head"><small>EXPERIENCE</small><h2>Growth over <em>time.</em></h2></div><div class="pv3-list"><div><span>2022 — PRESENT</span><h3>Regional Sales Manager – North</h3><p>Aziz Group of Industries · North Pakistan operations, distributor performance, forecasting and digital transformation.</p></div><div><span>2019 — 2021</span><h3>Zonal Sales Manager – KPK</h3><p>Volka Food International (Cookania) · Zonal sales operations and market growth.</p></div><div><span>2017 — 2019</span><h3>Area Sales Manager – Peshawar</h3><p>Ismail Industries Limited · General Trade sales, distribution and field execution.</p></div><div><span>2009 — 2017</span><h3>Territory / Acting Area Sales Manager</h3><p>Ismail Industries Limited · Territory coverage and retail execution across KPK.</p></div></div></section>
 <section id="pv3-work" class="pv3-section pv3-projects"><div class="pv3-head"><small>SELECTED PROJECTS</small><h2>Sales meets <em>technology.</em></h2></div><div class="pv3-cards"><article><span>01</span><h3>SMART Sales App</h3><p>Real-time tracking, GPS monitoring, attendance and KPI dashboards.</p>${A('https://ais-pre-wno3ve25bj7klf2rzz25gc-54200336767.asia-southeast1.run.app/','Open ↗')}</article><article><span>02</span><h3>SalesPulse AI</h3><p>Brand, SKU, OB and route analytics for faster field decisions.</p>${A('https://ais-pre-wno3ve25bj7klf2rzz25gc-54200336767.asia-southeast1.run.app/','View ↗')}</article><article><span>03</span><h3>BAZAR360</h3><p>Automotive marketplace and showroom ecosystem.</p>${A(bazar,'Open ↗')}</article></div></section>
 <section id="pv3-contact" class="pv3-contact"><small>LET'S CONNECT</small><h2>Ready for the next <em>challenge?</em></h2><div>${A('mailto:'+email,email)} ${A(linkedin,'LinkedIn')} ${A(github,'GitHub')}</div></section></main><footer class="pv3-footer">© ${new Date().getFullYear()} Muhammad Amjid</footer></div>`;
}

function setBodyMode(mode){
 document.body.classList.remove('profile-variant-2','profile-variant-3');
 if(mode==='profile2')document.body.classList.add('profile-variant-2');
 if(mode==='profile3')document.body.classList.add('profile-variant-3');
}
function setThemeButton(){
 document.querySelectorAll('.pv2-theme,.pv3-light').forEach(btn=>btn.onclick=()=>document.body.classList.toggle('pv-source-dark'));
}
function render(mode,save=true){
 if(mode==='current'){
  setBodyMode('current');
  app().innerHTML=originalMarkup;
  document.body.className=originalClass;
  document.title=originalTitle;
 }else if(mode==='profile2'){
  setBodyMode(mode); app().innerHTML=sourceLight(); document.title='Muhammad Amjid | Animated Editorial Profile';
 }else{
  setBodyMode(mode); app().innerHTML=sourceDark(); document.title='Muhammad Amjid | Executive Dark Profile';
 }
 active=mode;
 if(save)localStorage.setItem(KEY,mode);
 if(mode!=='current')setThemeButton();
 window.dispatchEvent(new Event('profile-layout-change'));
}
function closeMenu(){const menu=document.getElementById('profile-menu');if(menu)menu.classList.remove('open')}
function init(){
 if(!app()||document.getElementById('profile-switcher'))return;
 originalMarkup=app().innerHTML; originalClass=document.body.className; originalTitle=document.title;
 const wrap=document.createElement('div');wrap.id='profile-switcher';wrap.innerHTML=`<button id="profile-switcher-btn" class="profile-switcher-btn" type="button" aria-expanded="false"><span class="profile-switcher-dot">◎</span><span>Profile</span></button><div id="profile-menu" class="profile-menu" role="menu"><button data-profile="current" role="menuitem"><b>01</b><span>Current Profile</span><small>Keep existing design</small></button><button data-profile="profile2" role="menuitem"><b>02</b><span>Animated Editorial</span><small>Source-inspired light layout</small></button><button data-profile="profile3" role="menuitem"><b>03</b><span>Executive Dark</span><small>Source-inspired dark layout</small></button></div>`;
 document.body.appendChild(wrap);
 const btn=wrap.querySelector('#profile-switcher-btn');const menu=wrap.querySelector('#profile-menu');
 btn.onclick=e=>{e.stopPropagation();const open=menu.classList.toggle('open');btn.setAttribute('aria-expanded',String(open))};
 wrap.querySelectorAll('[data-profile]').forEach(b=>b.onclick=()=>{render(b.dataset.profile);closeMenu();btn.setAttribute('aria-expanded','false')});
 document.addEventListener('click',e=>{if(!wrap.contains(e.target))closeMenu()});
 const saved=localStorage.getItem(KEY);if(saved==='profile2'||saved==='profile3')render(saved,false);else render('current',false);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();