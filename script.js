const languageSelect=document.getElementById('language');
function setLanguage(lang){document.documentElement.lang=lang;document.querySelectorAll('[data-en][data-af]').forEach(el=>{el.textContent=el.dataset[lang]});if(languageSelect)languageSelect.value=lang}
languageSelect?.addEventListener('change',e=>setLanguage(e.target.value));
document.getElementById('menu')?.addEventListener('click',()=>document.getElementById('nav')?.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav')?.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();