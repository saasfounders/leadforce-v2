document.addEventListener('DOMContentLoaded',()=>{
  // Scroll Reveal
  const revealEls=document.querySelectorAll('.reveal');
  if(revealEls.length){const o=new IntersectionObserver((e)=>{e.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}})},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});revealEls.forEach(el=>o.observe(el))}
  // Sticky nav
  const nav=document.querySelector('.nav');
  if(nav)window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>10),{passive:true});
  // Mobile menu
  const ham=document.querySelector('.nav-hamburger'),menu=document.querySelector('.mobile-menu');
  if(ham&&menu){ham.addEventListener('click',()=>{menu.classList.toggle('open');const s=ham.querySelectorAll('span'),open=menu.classList.contains('open');if(open){s[0].style.transform='rotate(45deg) translate(5px,5px)';s[1].style.opacity='0';s[2].style.transform='rotate(-45deg) translate(5px,-5px)'}else s.forEach(x=>{x.style.transform='';x.style.opacity=''})});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');ham.querySelectorAll('span').forEach(s=>{s.style.transform='';s.style.opacity=''})}))}
  // Pricing toggle
  const tog=document.querySelector('.toggle-switch'),lm=document.querySelector('.toggle-label-monthly'),la=document.querySelector('.toggle-label-annual'),prices=document.querySelectorAll('[data-monthly][data-annual]');
  if(tog){let annual=false;const apply=()=>{prices.forEach(el=>el.textContent=annual?el.dataset.annual:el.dataset.monthly);tog.classList.toggle('annual-active',annual);if(lm)lm.classList.toggle('active',!annual);if(la)la.classList.toggle('active',annual)};tog.addEventListener('click',()=>{annual=!annual;apply()});if(lm)lm.addEventListener('click',()=>{annual=false;apply()});if(la)la.addEventListener('click',()=>{annual=true;apply()});apply()}
  // FAQ
  document.querySelectorAll('.faq-item').forEach(item=>{const q=item.querySelector('.faq-question');if(!q)return;q.addEventListener('click',()=>{const open=item.classList.contains('open');document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));if(!open)item.classList.add('open')})});
  // Tabs
  const tabs=document.querySelectorAll('.tab-btn'),panels=document.querySelectorAll('.tab-panel');
  if(tabs.length){tabs.forEach((btn,i)=>btn.addEventListener('click',()=>{tabs.forEach(b=>b.classList.remove('active'));panels.forEach(p=>p.classList.remove('active'));btn.classList.add('active');if(panels[i])panels[i].classList.add('active')}));tabs[0].classList.add('active');if(panels[0])panels[0].classList.add('active')}
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}));
  // Active nav
  const page=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a,.mobile-menu a').forEach(a=>{const h=a.getAttribute('href');if(h&&(h===page||(page===''&&h==='index.html')))a.classList.add('active')});
});
