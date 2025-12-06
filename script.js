// small utilities
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// theme toggle: simple light/dark (optional)
const themeBtn = document.getElementById('themeToggle');
let dark = true;
themeBtn.addEventListener('click', ()=>{
  if(dark){
    document.documentElement.style.setProperty('--bg','#f7f9fc');
    document.documentElement.style.setProperty('--card','#ffffff');
    document.documentElement.style.setProperty('--muted','#475569');
    document.documentElement.style.setProperty('--accent1','#0ea5e9');
    document.documentElement.style.setProperty('--accent2','#7c3aed');
    dark=false;
    themeBtn.textContent='🌞';
  } else {
    document.documentElement.style.setProperty('--bg','#0b0f14');
    document.documentElement.style.setProperty('--card','#0f1720');
    document.documentElement.style.setProperty('--muted','#94a3b8');
    document.documentElement.style.setProperty('--accent1','#00f2fe');
    document.documentElement.style.setProperty('--accent2','#7c4dff');
    dark=true;
    themeBtn.textContent='🌗';
  }
});

// contact form fake handler: show success toast
function handleContact(e){
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending...';
  setTimeout(()=>{
    btn.disabled = false;
    btn.textContent = 'Send message';
    alert('Thanks! Message received (demo).');
    e.target.reset();
  },1200);
}