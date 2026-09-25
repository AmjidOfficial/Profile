(()=>{"use strict";
const DATA={
 name:"Muhammad Amjid",email:"amjid.psh@gmail.com",phone:"+92 314 9198403",location:"Peshawar, Pakistan",
 photo:"assets/images/Muhammad-Amjid.jpeg",resume:"assets/resume/Muhammad-Amjid-Resume.pdf",
 linkedin:"https://www.linkedin.com/in/amjid1988/",github:"https://github.com/AmjidOfficial/",
 companies:{
  "Aziz Group of Industries":"https://kitepk.com/","Volka Food International (Cookania)":"https://volkafood.com/",
  "Ismail Industries Limited":"https://ismailindustries.com.pk/","Muller & Phipps / Shakir & Associates":"https://www.pepsico.com/brands/lays"
 },
 jobs:[
  ["2022 → Present","Regional Sales Manager – North","Aziz Group of Industries","Lead regional FMCG sales operations across North Pakistan managing 45+ distributors and field force including 1 Sales Coordinator, 1 ASM, 6 TSMs and 22 Order Bookers. Responsible for forecasting, demand planning, primary and secondary sales, RTM, distribution and retail execution."],
  ["Aug 2021 → Mar 2022","FMCG Distributor Operations – Peshawar","FMCG Distributor Operations","Managed FMCG distribution across snacks, biscuits and beverages. Executed secondary sales tracking, retail execution, demand fulfillment, distributor relationships and market coverage."],
  ["Jun 2019 → Jul 2021","Zonal Sales Manager – KPK","Volka Food International (Cookania)","Managed zonal sales operations with sales forecasting, demand planning, RTM execution, distribution expansion, trade marketing and field-force productivity."],
  ["Feb 2017 → Jun 2019","Area Sales Manager – Peshawar","Ismail Industries Limited","Managed distributor network and General Trade field sales, secondary sales tracking, primary sales execution, merchandising compliance and SKU availability."],
  ["Jul 2016 → Feb 2017","Area Sales Manager (Acting – KPK)","Ismail Industries Limited","Supervised multiple outstation markets across KPK, monitored distributor KPIs, RTM compliance and field training."],
  ["Feb 2014 → Jun 2016","Territory Sales Manager – Peshawar","Ismail Industries Limited","Managed territory-level FMCG sales operations, structured sales forecasting, demand execution, retail coverage and distributor engagement."],
  ["Nov 2009 → Feb 2014","Sales Representative – FMCG (PepsiCo Lays)","Muller & Phipps / Shakir & Associates","Executed primary and secondary General Trade sales, built retailer relationships, ensured product availability and supported trade promotions and field execution."]
 ],
 awards:[
  ["2025–26","Best Region Award","Company recognition for regional performance."],
  ["2023–24","Best Regional Sales Manager – National Level","National-level recognition for top regional performance."],
  ["2023","SMART Sales App Project Lead","Head Office digital transformation initiative for real-time sales tracking, GPS monitoring, attendance and KPI dashboards."],
  ["2026","SalesPulse AI Analytics System Creator","Created using Gemini AI Studio for Brand, SKU, Order Booker and route-level reporting."],
  ["2019–20","National Champion ZSM Award","National Champion recognition."],
  ["2018","Billion Sales Achievement Team","Member of the Billion Sales Achievement Team."],
  ["Recognition","Special Recognition","Cash-prize recognition from Chairman Mohsin Aziz, Aziz Group of Industries."]
 ],
 education:[
  ["MBA (Executive)","Gomal University","2018–2020"],["MA Islamic Studies","Bacha Khan University","2018"],
  ["BA","University of Peshawar","2015–2016"],["DAE Electrical","BTE KPK","2004–2007"],["SSC","BISE Peshawar","2004"]
 ],
 skills:["FMCG Sales Systems","Sales Forecasting Tools","Demand Planning Systems","CRM Platforms","Excel Advanced Reporting","AI-Based Analytics (Gemini AI Studio)","Field Force Tracking Systems","KPI Dashboards","Sales Automation Tools","Numeric Distribution","Weighted Distribution","Retail Execution Excellence","Route-to-Market (RTM) Optimization","Primary Sales Planning","Secondary Sales Tracking","Category Development","Distributor Management","Field Force Leadership","FMCG GT Sales","Sales KPI Management","Territory Expansion","Consumer Health OTC Exposure"],
 focus:[
  ["01","Sales Leadership","Regional strategy, forecasting, target execution, distributor performance and field-force leadership."],
  ["02","RTM & Distribution","Numeric and weighted distribution, route optimization, market coverage, availability and retail execution."],
  ["03","Sales Analytics","Brand, SKU, Order Booker and route-level reporting, KPI dashboards and advanced sales reporting."],
  ["04","Digital Transformation","Sales automation, field-force tracking and practical digital systems around real field workflows."]
 ],
 projects:[
  ["SMART Sales App & Web Portal","Sales Transformation","Head Office initiative for real-time sales tracking, GPS monitoring, attendance and KPI dashboards.","2023"],
  ["SalesPulse AI Analytics System","AI Analytics","AI analytics for Brand, SKU, Order Booker and route-level performance tracking and reporting, created using Gemini AI Studio.","2026"],
  ["Bazar360.online","Digital Commerce","Automotive marketplace platform and online ecosystem.","Active"],
  ["Muhammad Amjid Portfolio","Digital Profile","Responsive professional profile with multiple visual systems, themes, 3D motion and performance-focused front-end engineering.","2026"]
 ]
};
const esc=s=>String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const ext=(u,t,c="")=>'<a class="'+c+'" href="'+u+'" target="_blank" rel="noopener noreferrer">'+t+"</a>";
const state={profiles:["gravity","editorial","cinematic"],themes:["neumorphic","light","dark"],profileNames:{gravity:"Gravity",editorial:"Editorial",cinematic:"Cinematic"},themeNames:{neumorphic:"Neumorphic",light:"Light",dark:"Dark"}};
function saved(k,fallback){try{return localStorage.getItem(k)||fallback}catch(_){return fallback}}
function getState(){
 const q=new URLSearchParams(location.search);
 const p=state.profiles.includes(q.get("profile"))?q.get("profile"):saved("amjid-profile","gravity");
 const t=state.themes.includes(q.get("theme"))?q.get("theme"):saved("amjid-theme","neumorphic");
 return {p,t};
}
function applyState(p,t){
 document.body.dataset.profile=p;document.body.dataset.theme=t;
 document.documentElement.dataset.profile=p;document.documentElement.dataset.theme=t;
 document.querySelector(".site")?.classList.remove("profile-gravity","profile-editorial","profile-cinematic");
 document.querySelector(".site")?.classList.add("profile-"+p);
 try{localStorage.setItem("amjid-profile",p);localStorage.setItem("amjid-theme",t)}catch(_){}
 updateToolbar(p,t);
}
function setUrl(p,t){
 const u=new URL(location.href);u.searchParams.set("profile",p);u.searchParams.set("theme",t);history.replaceState({}, "",u);
}
function updateToolbar(p,t){
 document.querySelectorAll("[data-key]").forEach(a=>{a.setAttribute("aria-current",(a.dataset.key==="amjid-profile"?p:t)===a.dataset.id?"true":"false")});
 const pc=document.getElementById("profileName"),tc=document.getElementById("themeName");
 if(pc)pc.textContent=state.profileNames[p];if(tc)tc.textContent=state.themeNames[t];
}
function render(){
 const {p,t}=getState();document.body.dataset.profile=p;document.body.dataset.theme=t;
 document.getElementById("app").innerHTML='<div class="site profile-'+p+'">'+
 '<header class="nav"><a class="logo" href="#home">AMJID<span>/26</span></a><nav class="nav-links">'+
 ["home","about","focus","work","career","recognition","education","contact"].map((x,i)=>'<a href="#'+x+'">'+["Home","About","Focus","Work","Career","Recognition","Education","Contact"][i]+"</a>").join("")+
 '</nav><div class="controls"><button class="pill-btn" id="profileTop">Profile · <span id="profileName">'+state.profileNames[p]+'</span></button><button class="pill-btn" id="themeTop">Theme · <span id="themeName">'+state.themeNames[t]+'</span></button></div><button class="menu" id="menu" aria-label="Open navigation">☰</button></header>'+
 '<div class="toolbar" id="toolbar"></div>'+
 '<main>'+
 '<section id="home" class="hero"><div class="hero-bg"></div><span class="float-orb orb-a"></span><span class="float-orb orb-b"></span><div class="hero-main reveal"><div class="kicker">'+esc(DATA.name)+' · Regional Sales Manager · North Pakistan</div><h1>Sales <span class="outline">with</span> <span class="accent">purpose.</span></h1><p class="hero-intro">Senior FMCG sales leader with 15+ years across General Trade, Route-to-Market, distributor management, forecasting, demand planning, field-force leadership, analytics and practical digital transformation.</p><div class="meta"><span class="tag">45+ Distributors</span><span class="tag">25% Detergent Share</span><span class="tag">#1 among 6 RSMs</span></div></div><div class="hero-side reveal"><div class="portrait-wrap"><div class="portrait-card"><img class="portrait" src="'+DATA.photo+'" alt="Muhammad Amjid" width="330" height="413" fetchpriority="high"></div></div><div class="side-note">Peshawar, Pakistan<br>Commercial growth, field execution and sales technology.</div><a class="work-link" href="#work">Explore selected work ↗</a></div></section>'+
 '<section id="about" class="section"><div class="section-head"><div class="index">01 / About</div><h2>Commercial growth<br>with <em>field reality.</em></h2></div><div class="two"><p class="lead">I lead FMCG sales operations with a focus on market coverage, distribution, execution and useful numbers.</p><div class="copy"><p>My work connects sales leadership with digital systems. I led the SMART Sales App initiative and developed the SalesPulse AI analytics system for practical Brand, SKU, Order Booker and route-level reporting.</p><p>My experience covers Aziz Group of Industries, Volka Food International, Ismail Industries and FMCG sales through Muller & Phipps / Shakir & Associates.</p></div></div><div class="stats"><div class="stat"><b>15+</b><span>Years in FMCG</span></div><div class="stat"><b>45+</b><span>Distributors managed</span></div><div class="stat"><b>25%</b><span>Detergent category share</span></div><div class="stat"><b>#1</b><span>Rank among 6 RSMs</span></div></div></section>'+
 '<section id="focus" class="section focus"><div class="section-head"><div class="index">02 / Focus</div><h2>What I <em>do.</em></h2></div><div class="focus-grid">'+DATA.focus.map(x=>'<article class="focus-card reveal"><span>'+x[0]+'</span><h3>'+esc(x[1])+'</h3><p>'+esc(x[2])+'</p></article>').join("")+'</div></section>'+
 '<section id="work" class="section work"><div class="section-head"><div class="index">03 / Selected Work</div><h2>Built around <em>real problems.</em></h2></div><div class="work-grid">'+DATA.projects.map((p,i)=>'<article class="work-card '+(i===0?"accent-card ":"")+'reveal"><div class="work-top"><span>0'+(i+1)+'</span><span>'+esc(p[1])+'</span></div><div><h3>'+esc(p[0])+'</h3><p>'+esc(p[2])+'</p></div><div class="work-bottom"><span class="tag">'+esc(p[3])+'</span>'+(i===2?ext("https://bazar360.online/","Open platform ↗","work-link"):'<button class="work-link" data-case="'+i+'">View details ↗</button>')+'</div></article>').join("")+'</div></section>'+
 '<section id="career" class="section"><div class="section-head"><div class="index">04 / Career</div><h2>2009 →<br><em>Present.</em></h2></div><div class="timeline">'+DATA.jobs.map((j,i)=>'<article class="job reveal"><div class="year">'+esc(j[0])+'</div><div><h3>'+esc(j[1])+'</h3><strong>'+((DATA.companies[j[2]])?ext(DATA.companies[j[2]],esc(j[2])):esc(j[2]))+'</strong><p>'+esc(j[3])+'</p></div><div class="type">'+(i===0?"Current Role":"Experience")+'</div></article>').join("")+'</div></section>'+
 '<section id="recognition" class="section"><div class="section-head"><div class="index">05 / Recognition</div><h2>Recognition<br>for <em>impact.</em></h2></div><div class="award-grid">'+DATA.awards.map(a=>'<article class="award reveal"><strong>'+esc(a[0])+'</strong><div><h3>'+esc(a[1])+'</h3><p>'+esc(a[2])+'</p></div></article>').join("")+'</div></section>'+
 '<section id="education" class="section"><div class="section-head"><div class="index">06 / Education</div><h2>Academic<br><em>background.</em></h2></div><div class="edu-grid">'+DATA.education.map((e,i)=>'<article class="edu reveal"><b>0'+(i+1)+'</b><strong>'+esc(e[0])+'</strong><span>'+esc(e[1])+' · '+esc(e[2])+'</span></article>').join("")+'</div><div class="skills"><span class="index">Skills</span>'+DATA.skills.map(s=>'<span class="tag">'+esc(s)+'</span>').join("")+'</div></section>'+
 '<section id="contact" class="section contact"><div class="section-head"><div class="index">07 / Contact</div><h2>Let’s<br><em>connect.</em></h2></div><div class="contact-grid"><div class="contact-copy"><p>For professional opportunities, sales leadership discussions, digital sales projects or collaboration, use the direct links below.</p><div class="contact-links">'+
 '<a href="mailto:'+DATA.email+'">Email · '+DATA.email+'</a>'+ext(DATA.linkedin,"LinkedIn · /in/amjid1988")+ext(DATA.github,"GitHub · @AmjidOfficial")+'<a href="'+DATA.resume+'">Download Resume ↗</a></div></div><form class="contact-form" id="contactForm"><input name="name" required autocomplete="name" placeholder="Your name"><input name="email" required type="email" autocomplete="email" placeholder="Your email"><textarea name="message" required placeholder="Your message"></textarea><button type="submit">Send message ↗</button></form></div></section>'+
 '</main><footer><span>© 2026 Muhammad Amjid</span><span>Sales · Distribution · Analytics · Digital Transformation</span></footer>'+
 '<div class="modal" id="modal" aria-hidden="true"><div class="modal-card" role="dialog" aria-modal="true"><button class="modal-close" id="modalClose" aria-label="Close">×</button><div class="index" id="modalType"></div><h3 id="modalTitle"></h3><p id="modalText"></p><a class="work-link" href="#contact" id="modalAction">Discuss this work ↗</a></div></div></div>';
 bind();buildToolbar();animate();applyState(p,t);
}
function buildToolbar(){
 const t=document.getElementById("toolbar");
 t.innerHTML=tool("Profile",state.profiles.map(x=>[x,""+String(state.profiles.indexOf(x)+1).padStart(2,"0")+" · "+state.profileNames[x]]),"amjid-profile")+
 " "+tool("Theme",state.themes.map(x=>[x,""+String(state.themes.indexOf(x)+1).padStart(2,"0")+" · "+state.themeNames[x]]),"amjid-theme");
 t.querySelectorAll("[data-key]").forEach(a=>a.onclick=e=>{e.preventDefault();e.stopPropagation();const s=getState();const p=a.dataset.key==="amjid-profile"?a.dataset.id:s.p;const th=a.dataset.key==="amjid-theme"?a.dataset.id:s.t;try{localStorage.setItem(a.dataset.key,a.dataset.id)}catch(_){}setUrl(p,th);applyState(p,th);closeTools()});
 t.querySelectorAll(".tool>button").forEach(b=>b.onclick=e=>{e.stopPropagation();const box=b.parentElement;document.querySelectorAll(".tool").forEach(x=>{if(x!==box)x.classList.remove("open")});box.classList.toggle("open")});
 document.addEventListener("click",closeTools,{once:false});
 updateToolbar(getState().p,getState().t);
}
function tool(label,items,key){return '<div class="tool"><button class="pill-btn" type="button">'+label+'⌄</button><div class="tool-menu">'+items.map(x=>'<a href="#" data-key="'+key+'" data-id="'+x[0]+'">'+x[1]+'</a>').join("")+"</div></div>"}
function closeTools(){document.querySelectorAll(".tool").forEach(x=>x.classList.remove("open"))}
function cycle(kind){
 const s=getState(),list=kind==="profile"?state.profiles:state.themes,current=kind==="profile"?s.p:s.t;
 const next=list[(list.indexOf(current)+1)%list.length];const p=kind==="profile"?next:s.p;const t=kind==="theme"?next:s.t;
 try{localStorage.setItem(kind==="profile"?"amjid-profile":"amjid-theme",next)}catch(_){}
 setUrl(p,t);applyState(p,t);
}
function bind(){
 const menu=document.getElementById("menu"),nav=document.querySelector(".nav-links");
 menu.onclick=e=>{e.stopPropagation();nav.classList.toggle("open");menu.textContent=nav.classList.contains("open")?"×":"☰"};
 nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
 document.getElementById("themeTop").onclick=()=>cycle("theme");document.getElementById("profileTop").onclick=()=>cycle("profile");
 document.querySelectorAll("[data-case]").forEach(b=>b.onclick=()=>openCase(+b.dataset.case));
 document.getElementById("modalClose").onclick=closeModal;document.getElementById("modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closeTools();nav.classList.remove("open");menu.textContent="☰"}});
 document.getElementById("contactForm").onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);location.href="mailto:"+DATA.email+"?subject="+encodeURIComponent("Portfolio contact from "+f.get("name"))+"&body="+encodeURIComponent(f.get("message")+"\n\nEmail: "+f.get("email"))};
 const hero=document.querySelector(".hero");if(window.matchMedia("(pointer:fine)").matches&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){hero.addEventListener("pointermove",e=>{const r=hero.getBoundingClientRect();hero.style.setProperty("--mx",((e.clientX-r.left)/r.width-.5)*70+"px");hero.style.setProperty("--my",((e.clientY-r.top)/r.height-.5)*50+"px")});hero.addEventListener("pointerleave",()=>{hero.style.setProperty("--mx","0px");hero.style.setProperty("--my","0px")})}
}
function openCase(i){
 const titles=["SMART Sales App & Web Portal","SalesPulse AI Analytics System","Bazar360.online","Muhammad Amjid Portfolio"];
 const texts=["Head office digital transformation system for real-time sales tracking, GPS monitoring, attendance and KPI dashboards.","AI analytics system for Brand, SKU, Order Booker and route-level performance tracking and reporting, created using Gemini AI Studio. No public SalesPulse repository is displayed here.","Automotive marketplace platform and online ecosystem.","Responsive professional profile system with multiple visual profiles, themes, 3D motion and performance-focused front-end engineering."];
 const types=["SALES TRANSFORMATION","AI ANALYTICS","DIGITAL COMMERCE","DIGITAL PROFILE"];
 const m=document.getElementById("modal");document.getElementById("modalType").textContent=types[i];document.getElementById("modalTitle").textContent=titles[i];document.getElementById("modalText").textContent=texts[i];m.classList.add("open");m.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeModal(){const m=document.getElementById("modal");if(!m)return;m.classList.remove("open");m.setAttribute("aria-hidden","true");document.body.style.overflow=""}
function animate(){
 const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.08});
 document.querySelectorAll(".reveal").forEach(x=>{if(reduce)x.classList.add("show");else io.observe(x)});
 const sections=[...document.querySelectorAll("main section[id]")],links=[...document.querySelectorAll(".nav-links a")];
 const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -45% 0px"});sections.forEach(s=>so.observe(s));
}
render();
})();