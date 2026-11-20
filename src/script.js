document.documentElement.classList.add('js');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) {entry.target.classList.add('is-visible'); observer.unobserve(entry.target);} }), {threshold:.08});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));
document.querySelectorAll('svg animateMotion').forEach(el=>{if(reducedMotion.matches) el.parentElement.style.display='none';});
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
const stacks={
 frontend:{label:'THE EXPERIENCE LAYER',title:'Interfaces with purpose.',description:'Reusable components and data-intensive workflows for patients, providers, and fintech teams.',skills:['React','TypeScript','JavaScript','Redux Toolkit','Vite','Webpack','MUI','Ant Design','AG Grid','Syncfusion']},
 backend:{label:'THE SERVICE & DATA LAYER',title:'Business rules, made dependable.',description:'APIs, tenant-aware data processing, authentication, and entitlement workflows behind the product.',skills:['Node.js','Fastify','TypeScript','REST APIs','MongoDB','Amazon DocumentDB','SSO','Data modeling','Background jobs']},
 cloud:{label:'THE CONNECTIVE TISSUE',title:'From integration to operation.',description:'Cloud workflows, automated eligibility processing, payments, consultations, and communications.',skills:['AWS Lambda','Amazon S3','Amazon EC2','AWS SES','Stripe','Zoom SDKs','Twilio','SFTP','Git']},
 design:{label:'THE DECISIONS BEHIND THE CODE',title:'Think in workflows. Build in systems.',description:'Translating product requirements into service boundaries, API contracts, data models, and configurable tenant experiences.',skills:['Multi-tenant architecture','API contracts','Data modeling','Feature entitlements','Tenant configuration','Reusable UI','Integration design']}
};
const tabs=[...document.querySelectorAll('[data-stack]')];
function setStack(tab){const data=stacks[tab.dataset.stack];tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;});document.querySelector('#stack-label').textContent=data.label;document.querySelector('#stack-title').textContent=data.title;document.querySelector('#stack-description').textContent=data.description;document.querySelector('#stack-chips').replaceChildren(...data.skills.map(skill=>{const el=document.createElement('span');el.textContent=skill;return el;}));const panel=document.querySelector('#stack-panel');panel.setAttribute('aria-labelledby',tab.id);panel.classList.remove('switching');void panel.offsetWidth;panel.classList.add('switching');}
tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>setStack(tab));tab.addEventListener('keydown',e=>{let next=index;if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(index+1)%tabs.length;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(index-1+tabs.length)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();tabs[next].focus();setStack(tabs[next]);});});
const projects={
 onboarding:{meta:'GYTWORKZ / PLATFORM ENGINEERING',title:'Onboarding, without the bottleneck.',description:'From manual setup for a handful of tenants to configurable workflows supporting 30+ tenants and TPAs.',sections:[{title:'The starting point',text:'When I joined, the platform had 3–4 tenants and onboarding required manual setup. Different organizations also brought different eligibility-file formats.'},{title:'What I built',items:['A superadmin control panel for tenant setup, feature configuration, and eligibility-file mappings.','SFTP-based ingestion with CSV/Excel processing and configurable field mapping.','Group-based routing to the appropriate tenant database and bulk record updates.']},{title:'The result',text:'The eligibility database grew from approximately 10,000 to 700,000+ eligible-member records. These represent eligibility records, rather than registered or active users.'}],tags:['React','TypeScript','Fastify','MongoDB / DocumentDB','AWS','SFTP']},
 payments:{meta:'GYTWORKZ / PAYMENTS & ENTITLEMENTS',title:'Beyond the checkout.',description:'I owned Stripe-related development across frontend and backend, connecting payment activity to the services people can access.',sections:[{title:'The product problem',text:'A successful payment needs to translate into the right consultation credits and feature access, while customers need a way to view and manage their billing.'},{title:'What I built',items:['Stripe customer creation and embedded checkout flows.','Recurring subscription workflows, plan and pricing retrieval, and customer billing portal sessions.','Payment webhooks, purchased consultation credits, and subscription-based feature entitlements.','Frontend payment experiences connected to backend account and access workflows.']},{title:'Engineering focus',text:'Connecting checkout, payment events, account records, and access rules as one product workflow.'}],tags:['Stripe','Node.js','TypeScript','Fastify','React','Webhooks']},
 care:{meta:'GYTWORKZ / CONSULTATIONS & COMMUNICATION',title:'A more connected care journey.',description:'Consultations and reminders built around the patient and provider workflow.',sections:[{title:'The product problem',text:'Patients and providers need a clear path from an appointment to a consultation. Reminders also support appointment attendance and participation in exercise programs.'},{title:'What I built',items:['Zoom Video SDK and UI SDK integrations within consultation workflows.','Twilio communication features across the application.','A centralized notification service using AWS SES and Twilio, supporting scheduled reminders and tenant-specific notification logs.']},{title:'Engineering focus',text:'Bringing video consultations, appointment communications, and scheduled reminders into the wider healthcare application.'}],tags:['Zoom SDKs','Twilio','AWS SES','TypeScript','MongoDB','React']}
};
const dialog=document.querySelector('#project-dialog');let lastTrigger;
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const data=projects[button.dataset.project];lastTrigger=button;document.querySelector('#dialog-meta').textContent=data.meta;document.querySelector('#dialog-title').textContent=data.title;document.querySelector('#dialog-description').textContent=data.description;document.querySelector('#dialog-sections').replaceChildren(...data.sections.map(section=>{const block=document.createElement('section'),heading=document.createElement('h3');heading.textContent=section.title;block.append(heading);if(section.text){const text=document.createElement('p');text.textContent=section.text;block.append(text);}if(section.items){const list=document.createElement('ul');section.items.forEach(item=>{const li=document.createElement('li');li.textContent=item;list.append(li);});block.append(list);}return block;}));document.querySelector('#dialog-tags').replaceChildren(...data.tags.map(tag=>{const el=document.createElement('span');el.textContent=tag;return el;}));dialog.showModal();document.body.classList.add('modal-open');}));
document.querySelector('#dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastTrigger?.focus();});
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('mahi98jat@gmail.com');status.textContent='Email copied!';}catch{status.textContent='mahi98jat@gmail.com';}setTimeout(()=>status.textContent='',4000);});
document.querySelector('#year').textContent=new Date().getFullYear();

// ---- Upgrades ----
const header=document.querySelector('.header');
const progress=document.querySelector('.scroll-progress');
const navLinks=[...nav.querySelectorAll('a[href^="#"]')];
const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
let ticking=false;
function onScroll(){ticking=false;const y=window.scrollY;header.classList.toggle('scrolled',y>40);const max=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.transform=`scaleX(${max>0?Math.min(y/max,1):0})`;let current=null;for(const s of sections){if(s.getBoundingClientRect().top<=innerHeight*0.35)current=s;}navLinks.forEach(a=>{const on=current&&a.getAttribute('href')==='#'+current.id;a.classList.toggle('active',!!on);if(on)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});}
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(onScroll);}},{passive:true});
addEventListener('resize',onScroll);onScroll();
// count-up metrics
const counters=document.querySelectorAll('.count');
if(!reducedMotion.matches&&'IntersectionObserver' in window){
 counters.forEach(el=>el.textContent='0');
 const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);const el=e.target,to=+el.dataset.to,start=performance.now(),dur=1400;const step=now=>{const p=Math.min((now-start)/dur,1),eased=1-Math.pow(1-p,3);el.textContent=Math.round(to*eased);if(p<1)requestAnimationFrame(step);};requestAnimationFrame(step);}),{threshold:.6});
 counters.forEach(el=>co.observe(el));
}
// hero diagram parallax (pointer devices only)
const diagram=document.querySelector('.diagram');
if(diagram&&!reducedMotion.matches&&matchMedia('(hover:hover) and (pointer:fine)').matches){
 const layers=[...diagram.querySelectorAll('.node')].map((el,i)=>({el,d:6+i*2}));const core=diagram.querySelector('.core-node');
 diagram.addEventListener('pointermove',e=>{const r=diagram.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;layers.forEach(({el,d})=>el.style.transform=`rotate(-1deg) translate(${x*d}px,${y*d}px)`);core.style.transform=`translate(calc(-50% + ${x*-6}px),calc(-50% + ${y*-6}px)) rotate(-1deg)`;});
 diagram.addEventListener('pointerleave',()=>{layers.forEach(({el})=>el.style.transform='');core.style.transform='';});
}

// ---- Step-through animations: highlight a step, send a pulse along the arrow, highlight the next ----
document.querySelectorAll('[data-stepper]').forEach(flow=>{
 const steps=[...flow.querySelectorAll('.step')],arrows=[...flow.querySelectorAll('.step-arrow')];
 const root=flow.closest('[data-stepper-root]')||flow,bar=root.querySelector('.payment-progress span');
 const HOLD=1300,TRAVEL=600,REST=2200;let timer=null,running=false;
 const wait=ms=>new Promise(r=>{timer=setTimeout(r,ms);});
 function paint(active,complete){steps.forEach((s,i)=>{s.classList.toggle('is-active',i===active);s.classList.toggle('is-done',i<active||(complete&&i!==active));});root.classList.toggle('is-complete',!!complete);flow.classList.toggle('is-complete',!!complete);if(bar)bar.style.width=active<0?'0%':`${((active+1)/steps.length)*100}%`;}
 if(reducedMotion.matches){paint(steps.length-1,true);return;}
 async function loop(){while(running){for(let i=0;i<steps.length&&running;i++){paint(i,i===steps.length-1);await wait(i===steps.length-1?REST:HOLD);if(!running)return;if(i<arrows.length){arrows[i].classList.remove('is-flowing');void arrows[i].offsetWidth;arrows[i].classList.add('is-flowing');await wait(TRAVEL);arrows[i].classList.remove('is-flowing');}}paint(-1,false);await wait(400);}}
 paint(-1,false);
 new IntersectionObserver(([e])=>{if(e.isIntersecting&&!running){running=true;loop();}else if(!e.isIntersecting&&running){running=false;clearTimeout(timer);paint(-1,false);}},{threshold:.4}).observe(flow);
});

// ---- Hero: spotlight each node in turn, flow along its line into the core ----
(()=>{const diagram=document.querySelector('.diagram');if(!diagram||reducedMotion.matches)return;
 const paths=[...diagram.querySelectorAll('.connections path')];
 // single path element holds 5 segments; split it so each can light up independently
 if(paths.length===1){const d=paths[0].getAttribute('d').trim().split(/(?=M)/);const svg=paths[0].parentNode;d.forEach(seg=>{const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',seg.trim());svg.insertBefore(p,paths[0]);});paths[0].remove();}
 const segs=[...diagram.querySelectorAll('.connections path')]; // order: ui, cloud, data, integrations, api
 const order=[[diagram.querySelector('.node-ui'),segs[0]],[diagram.querySelector('.node-cloud'),segs[1]],[diagram.querySelector('.node-integrations'),segs[3]],[diagram.querySelector('.api-pill'),segs[4]],[diagram.querySelector('.node-data'),segs[2]]];
 const core=diagram.querySelector('.core-node'),ripple=diagram.querySelector('.core-ripple');let i=0,timer=null;
 function tick(){order.forEach(([n,p])=>{n?.classList.remove('is-lit');p?.classList.remove('is-lit');});const [n,p]=order[i];n?.classList.add('is-lit');p?.classList.add('is-lit');
  setTimeout(()=>{core.classList.add('is-receiving');ripple.classList.remove('go');void ripple.offsetWidth;ripple.classList.add('go');setTimeout(()=>core.classList.remove('is-receiving'),500);},900);
  i=(i+1)%order.length;}
 new IntersectionObserver(([e])=>{if(e.isIntersecting&&!timer){tick();timer=setInterval(tick,2200);}else if(!e.isIntersecting&&timer){clearInterval(timer);timer=null;}},{threshold:.3}).observe(diagram);
})();
// ---- Skills: rotate through categories on their own until the visitor takes over ----
(()=>{const layout=document.querySelector('[data-autoplay]');if(!layout||reducedMotion.matches)return;
 const DURATION=5000;layout.style.setProperty('--autoplay',DURATION+'ms');
 const hint=document.createElement('span');hint.className='autoplay-hint';hint.textContent='AUTO-PLAYING · HOVER TO PAUSE · CLICK TO TAKE OVER';document.querySelector('.stack-panel').append(hint);
 let stopped=false,paused=false,visible=false,elapsed=0,last=0,raf=null;
 const current=()=>tabs.findIndex(t=>t.getAttribute('aria-selected')==='true');
 function restartBar(){const t=tabs[current()];layout.classList.remove('autoplaying');void t.offsetWidth;if(!stopped)layout.classList.add('autoplaying');}
 function frame(now){raf=null;if(stopped||!visible)return;if(!paused){elapsed+=now-last;if(elapsed>=DURATION){elapsed=0;setStack(tabs[(current()+1)%tabs.length]);restartBar();}}last=now;raf=requestAnimationFrame(frame);}
 function start(){if(stopped||raf)return;last=performance.now();raf=requestAnimationFrame(frame);}
 function stop(){stopped=true;layout.classList.remove('autoplaying','paused');if(raf)cancelAnimationFrame(raf);raf=null;}
 tabs.forEach(t=>{t.addEventListener('click',stop);t.addEventListener('keydown',e=>{if(['ArrowRight','ArrowLeft','ArrowUp','ArrowDown','Home','End','Enter',' '].includes(e.key))stop();});});
 const setPaused=v=>{paused=v;layout.classList.toggle('paused',v);};
 layout.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')setPaused(true);});layout.addEventListener('pointerleave',()=>setPaused(false));
 layout.addEventListener('focusin',()=>setPaused(true));layout.addEventListener('focusout',e=>{if(!layout.contains(e.relatedTarget))setPaused(false);});
 new IntersectionObserver(([e])=>{visible=e.isIntersecting;if(visible&&!stopped){layout.classList.add('autoplaying');start();}else if(!visible){if(raf)cancelAnimationFrame(raf);raf=null;}},{threshold:.35}).observe(layout);
})();
