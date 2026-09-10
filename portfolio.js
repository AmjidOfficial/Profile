(()=>{
'use strict';

const A=(u,t,c='')=>`<a class="${c}" href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>`;
const D={
 name:'Muhammad Amjid',
 photo:'assets/images/Muhammad-Amjid.jpeg',
 resume:'assets/resume/Muhammad-Amjid-Resume.pdf',
 email:'amjid.psh@gmail.com',
 linkedin:'https://www.linkedin.com/in/amjid1988/',
 github:'https://github.com/AmjidOfficial/',
 profileRepo:'https://github.com/AmjidOfficial/Profile',
 salesPulse:'https://github.com/AmjidOfficial/SALESPULSE',
 bazarRepo:'https://github.com/AmjidOfficial/BAZAR360',
 bazar:'https://bazar360.online/'
};

const jobs=[
 ['2022','Present','Regional Sales Manager – North','Aziz Group of Industries','Lead regional FMCG sales operations across North Pakistan, managing 45+ distributors and a field force of 1 Sales Coordinator, 1 ASM, 6 TSMs and 22 Order Bookers.'],
 ['2021','2022','FMCG Distributor Operations – Peshawar','Independent / FMCG Distribution','Managed FMCG distribution across snacks, biscuits and beverages, with secondary sales tracking, retail execution, demand fulfillment and market coverage.'],
 ['2019','2021','Zonal Sales Manager – KPK','Volka Food International (Cookania)','Managed zonal sales operations, forecasting, demand planning, RTM execution, distribution expansion and field-force productivity.'],
 ['2017','2019','Area Sales Manager – Peshawar','Ismail Industries Limited','Managed distributor and field sales operations in General Trade, secondary sales tracking, merchandising compliance and SKU availability.'],
 ['2016','2017','Area Sales Manager (Acting – KPK)','Ismail Industries Limited','Supervised outstation markets across KPK, monitored distributor KPIs and supported field training and sales performance.'],
 ['2014','2016','Territory Sales Manager – Peshawar','Ismail Industries Limited','Managed territory FMCG sales operations, forecasting, demand execution, retail coverage and distributor engagement.'],
 ['2009','2014','Sales Representative – FMCG (PepsiCo Lays)','Muller & Phipps / Shakir & Associates','Executed primary and secondary General Trade sales, built retailer relationships and supported trade promotions and field execution.']
];

const projects=[
 {id:'smart',cat:'Sales Transformation',title:'SMART Sales App & Web Portal',desc:'Head office digital transformation initiative for real-time sales tracking, GPS monitoring, attendance and KPI dashboards.',tags:['Sales Automation','GPS','KPI Dashboards'],year:'2023',url:'#contact',type:'INTERNAL INITIATIVE'},
 {id:'pulse',cat:'AI Analytics',title:'SalesPulse AI Analytics System',desc:'AI analytics system for Brand, SKU, Order Booker and route-level performance tracking and reporting. The public repository documents an offline-first FMCG field sales command center.',tags:['Gemini AI Studio','React','Node.js'],year:'2026',url:D.salesPulse,type:'GITHUB PROJECT'},
 {id:'bazar',cat:'Digital Commerce',title:'Bazar360.online',desc:'Automotive marketplace and showroom ecosystem, including the Auto Choice automotive division.',tags:['React','Node.js','Firebase','Cloudinary'],year:'Active',url:D.bazar,type:'LIVE PLATFORM'},
 {id:'profile',cat:'Digital Profile',title:'Muhammad Amjid Portfolio',desc:'This profile system, combining a responsive portfolio, multiple visual profiles and theme switching.',tags:['HTML','CSS','JavaScript'],year:'2026',url:D.profileRepo,type:'GITHUB REPOSITORY'}
];

const skills=[
 ['FMCG Sales Systems','Sales Operations',96],
 ['Sales Forecasting','Demand Planning',94],
 ['RTM & Distribution','Commercial Execution',95],
 ['Advanced Reporting','Excel / KPI Reporting',92],
 ['AI-Based Analytics','Gemini AI Studio',88],
 ['Field Force Tracking','Sales Automation',90],
 ['CRM Platforms','Sales Systems',84],
 ['KPI Dashboards','Performance Reporting',90]
];

const education=[
 ['MBA (Executive)','Gomal University','2018–2020'],
 ['MA Islamic Studies','Bacha Khan University','2018'],
 ['BA','University of Peshawar','2015–2016'],
 ['DAE Electrical','BTE KPK','2004–2007'],
 ['SSC','BISE Peshawar','2004']
];

const awards=[
 ['2025–26','Best Region Award','Company recognition for regional performance.'],
 ['2023–24','Best Regional Sales Manager – National Level','National-level recognition for top regional performance.'],
 ['2023','SMART Sales App Project Lead','Head Office digital transformation initiative.'],
 ['2026','SalesPulse AI Analytics System Creator','Created using Gemini AI Studio for Brand, SKU, OB and route-level reporting.'],
 ['2019–20','National Champion ZSM Award','National Champion recognition.'],
 ['2018','Billion Sales Achievement Team','Member of the Billion Sales Achievement Team.'],
 ['Recognition','Special Recognition','Cash-prize recognition from Chairman Mohsin Aziz, Aziz Group of Industries.']
];

const esc=s=>String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

function render(){
 document.getElementById('app').innerHTML=`
 <div class="page-shell">
  <aside class="sidebar" id="sidebar">
   <a class="side-logo" href="#home"><span>MA</span><b>Muhammad<br>Amjid</b></a>
   <nav>
    <a class="active" href="#home">Home</a><a href="#about">About</a><a href="#services">Focus</a><a href="#career">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#recognition">Recognition</a><a href="#education">Education</a><a href="#contact">Contact</a>
   </nav>
   <div class="side-bottom">${A(D.linkedin,'LinkedIn')} ${A(D.github,'GitHub')}</div>
  </aside>
  <button class="mobile-menu" aria-label="Open menu">☰</button>
  <main class="content">
   <section id="home" class="hero panel">
    <div class="hero-copy reveal">
     <div class="pill">● REGIONAL SALES MANAGER · NORTH PAKISTAN</div>
     <p class="hi">Muhammad Amjid</p>
     <h1>Sales <span>Leadership</span><br>& Digital Transformation</h1>
     <p class="lead">Senior FMCG sales leader with <b>15+ years</b> across General Trade, Route-to-Market, distributor management, forecasting, demand planning, field force leadership, analytics and digital transformation.</p>
     <div class="actions">${A('#projects','Explore Work ↗','btn primary')}${A(D.resume,'Resume ↓','btn')}</div>
     <div class="mini-social">${A(D.linkedin,'in')}${A(D.github,'GH')}${A(`mailto:${D.email}`,'@')}</div>
    </div>
    <div class="hero-art reveal delay">
     <div class="halo"></div>
     <div class="card3d"><div class="card-top"><span>MUHAMMAD AMJID</span><small>RSM · NORTH</small></div><img src="${D.photo}" alt="Muhammad Amjid"><div class="card-info"><b>FMCG Sales Leader</b><span>Sales · Data · Transformation</span></div><div class="card-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
     <div class="float f-left"><b>45+</b><span>Distributors managed</span></div><div class="float f-right"><b>25%</b><span>Detergent share · #1</span></div><div class="spark s1"></div><div class="spark s2"></div>
    </div>
   </section>

   <div class="ticker"><span>FMCG SALES</span><i>✦</i><span>RTM</span><i>✦</i><span>DISTRIBUTION</span><i>✦</i><span>SALES ANALYTICS</span><i>✦</i><span>DIGITAL TRANSFORMATION</span><i>✦</i><span>FMCG SALES</span></div>

   <section id="about" class="section"><div class="section-title"><small>01 / ABOUT</small><span></span><small>THE PROFESSIONAL PROFILE</small></div><div class="about-grid"><div class="reveal"><h2>Commercial growth with <em>field reality.</em></h2></div><div class="reveal delay"><p>I am a senior FMCG sales leader focused on General Trade, Route-to-Market, distribution, retail execution, forecasting and team leadership across Pakistan.</p><p>I also lead practical digital work in sales operations, including the SMART Sales App initiative and the SalesPulse AI analytics system.</p></div></div><div class="stats"><div><b data-count="15">0+</b><span>Years in FMCG</span></div><div><b data-count="45">0+</b><span>Distributors managed</span></div><div><b data-count="25">0%</b><span>Detergent category share</span></div><div><b>#1</b><span>Rank among 6 RSMs</span></div></div></section>

   <section id="services" class="section services"><div class="section-title"><small>02 / FOCUS</small><span></span><small>CORE PROFESSIONAL WORK</small></div><div class="center-title"><h2>What I <em>Do</em></h2><p>Practical sales leadership, market execution and technology-led reporting.</p></div><div class="service-grid"><article class="service active reveal"><span>⌁</span><h3>Sales Leadership</h3><p>Regional strategy, forecasting, target execution, distributor performance and field-force leadership.</p><b>01</b></article><article class="service reveal"><span>◌</span><h3>RTM & Distribution</h3><p>Numeric and weighted distribution, route optimization, market coverage, availability and retail execution.</p><b>02</b></article><article class="service reveal"><span>◈</span><h3>Sales Analytics</h3><p>Brand, SKU, Order Booker and route-level reporting, KPI dashboards and advanced sales reporting.</p><b>03</b></article><article class="service reveal"><span>▦</span><h3>Digital Transformation</h3><p>Sales automation, field-force tracking and digital systems designed around real field workflows.</p><b>04</b></article></div></section>

   <section id="career" class="section career"><div class="section-title"><small>03 / EXPERIENCE</small><span></span><small>2009 → PRESENT</small></div><div class="center-title"><h2>A career built around <em>growth.</em></h2></div><div class="timeline">${jobs.map((j,i)=>`<article class="job reveal"><div class="job-year">${j[0]}<small>${j[1]}</small></div><div class="job-dot"></div><div class="job-card"><small>${i===0?'CURRENT ROLE':'CAREER'}</small><h3>${esc(j[2])}</h3><b>${esc(j[3])}</b><p>${esc(j[4])}</p></div></article>`).join('')}</div></section>

   <section id="projects" class="section projects"><div class="section-title"><small>04 / SELECTED WORK</small><span></span><small>SALES × TECHNOLOGY</small></div><div class="center-title"><h2>Built around <em>real problems.</em></h2><p>Verified projects and initiatives only. Use the filters to explore.</p></div><div class="project-filters" role="tablist" aria-label="Project filters"><button class="active" data-filter="all">All</button><button data-filter="Sales Transformation">Sales</button><button data-filter="AI Analytics">AI Analytics</button><button data-filter="Digital Commerce">Commerce</button><button data-filter="Digital Profile">Profile</button></div><div class="project-grid" id="project-grid">${projects.map((p,i)=>projectCard(p,i)).join('')}</div></section>

   <section id="skills" class="section"><div class="section-title"><small>05 / SKILLS</small><span></span><small>VERIFIED TECHNICAL & COMMERCIAL SKILLS</small></div><div class="center-title"><h2>Skills that support <em>execution.</em></h2><p>These are presented from the technical skills and core competencies listed in the current resume. Percentages are visual proficiency indicators, not measured test scores.</p></div><div class="skill-list">${skills.map(s=>`<div class="skill-row reveal"><div class="skill-head"><strong>${esc(s[0])}</strong><span>${esc(s[1])}</span></div><div class="skill-track"><i style="width:${s[2]}%"></i></div></div>`).join('')}</div></section>

   <section id="recognition" class="section recognition"><div class="section-title"><small>06 / RECOGNITION</small><span></span><small>ACHIEVEMENTS & AWARDS</small></div><div class="center-title"><h2>Recognition for <em>impact.</em></h2></div><div class="award-row">${awards.map(a=>`<article class="reveal"><strong>${esc(a[0])}</strong><h3>${esc(a[1])}</h3><p>${esc(a[2])}</p></article>`).join('')}</div></section>

   <section id="education" class="section education"><div class="section-title"><small>07 / EDUCATION</small><span></span><small>ACADEMIC BACKGROUND</small></div><div class="education-grid">${education.map((e,i)=>`<article class="edu-card reveal"><span>0${i+1}</span><b>${esc(e[0])}</b><strong>${esc(e[1])}</strong><small>${esc(e[2])}</small></article>`).join('')}</div></section>

   <section id="contact" class="section contact"><div class="section-title"><small>08 / CONTACT</small><span></span><small>CONNECT DIRECTLY</small></div><div class="contact-box"><div><h2>Let's <em>Connect</em></h2><p>For professional opportunities, sales leadership discussions, digital sales projects or collaboration, use the direct links below.</p><div class="contact-list">${A(`mailto:${D.email}`,'✉  '+D.email)}${A(D.linkedin,'in  LinkedIn Profile')}${A(D.github,'◉  GitHub Profile')}${A(D.profileRepo,'⌘  Portfolio Repository')}</div></div><form id="contact-form"><input required name="name" placeholder="Your Name"><input required type="email" name="email" placeholder="Your Email"><textarea required name="message" placeholder="Message"></textarea><button>Send Message ↗</button></form></div></section>

   <footer><span>© ${new Date().getFullYear()} Muhammad Amjid</span><span>Sales · Distribution · Analytics · Digital Transformation</span></footer>
  </main>
  <div class="bottom-nav"><a href="#home">⌂<small>Home</small></a><a href="#about">◎<small>About</small></a><a href="#career">◷<small>Career</small></a><a href="#projects">▣<small>Work</small></a><a href="#contact">✉<small>Contact</small></a></div>
 </div>`;
 bind();
}

function projectCard(p,i){return `<article class="project ${i===0?'big':''} reveal" data-category="${esc(p.cat)}"><small>${String(i+1).padStart(2,'0')} · ${esc(p.type)}</small><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p><div class="project-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><b class="project-year">${esc(p.year)}</b>${A(p.url,p.url.startsWith('#')?'DETAILS ↗':'OPEN ↗')}</article>`}

function bind(){
 const menu=document.querySelector('.mobile-menu'),side=document.querySelector('.sidebar');
 menu.onclick=()=>{side.classList.toggle('open');menu.textContent=side.classList.contains('open')?'×':'☰'};
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const els=document.querySelectorAll('.reveal');
 if(reduce)els.forEach(e=>e.classList.add('show'));else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>io.observe(e))}
 const counters=document.querySelectorAll('[data-count]');
 const co=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=+e.target.dataset.count,s=performance.now();const f=n=>{const p=Math.min(1,(n-s)/900);e.target.textContent=Math.round(t*(1-Math.pow(1-p,3)))+(t===25?'%':'+');if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f);co.unobserve(e.target)}}));
 counters.forEach(e=>co.observe(e));
 const sections=[...document.querySelectorAll('section[id]')],links=[...document.querySelectorAll('.sidebar nav a')];
 const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-42% 0px -50% 0px'});sections.forEach(s=>so.observe(s));
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>side.classList.remove('open')));
 const art=document.querySelector('.card3d');
 if(art&&!reduce&&matchMedia('(pointer:fine)').matches){const heroArt=document.querySelector('.hero-art');heroArt.addEventListener('pointermove',e=>{const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;art.style.transform=`perspective(900px) rotateY(${x*14}deg) rotateX(${y*-12}deg) translateY(${y*-8}px)`});heroArt.addEventListener('pointerleave',()=>art.style.transform='')}
 document.querySelectorAll('.project-filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.project-filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;document.querySelectorAll('#project-grid .project').forEach(card=>{const show=filter==='all'||card.dataset.category===filter;card.style.display=show?'flex':'none'})}));
 const form=document.getElementById('contact-form');form.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(form);location.href=`mailto:${D.email}?subject=Portfolio%20Contact%20from%20${encodeURIComponent(f.get('name'))}&body=${encodeURIComponent(f.get('message')+'\n\nEmail: '+f.get('email'))}`});
}
render();
})();
