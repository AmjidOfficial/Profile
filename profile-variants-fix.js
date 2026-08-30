(()=>{
'use strict';
function bind(){
 document.querySelectorAll('.pv2-theme').forEach(btn=>{btn.onclick=()=>{const page=btn.closest('.pv2-page');if(!page)return;page.classList.toggle('pv-source-dark');btn.textContent=page.classList.contains('pv-source-dark')?'☼':'◐'}});
 document.querySelectorAll('.pv3-light').forEach(btn=>{btn.onclick=()=>{const page=btn.closest('.pv3-page');if(!page)return;page.classList.toggle('pv-source-light');btn.textContent=page.classList.contains('pv-source-light')?'◐':'☼'}});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind);else bind();
window.addEventListener('profile-layout-change',bind);
})();