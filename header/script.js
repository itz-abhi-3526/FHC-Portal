// Header interactions: mobile nav and portal dropdown with accessible behavior
document.addEventListener('DOMContentLoaded', function(){
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');
  const portalToggle = document.getElementById('portalToggle');
  const portalMenu = document.getElementById('portalMenu');

  // Mobile menu toggle
  mobileToggle && mobileToggle.addEventListener('click', ()=>{
    const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', String(!expanded));
    if(mainNav.classList.contains('open')) mainNav.classList.remove('open');
    else mainNav.classList.add('open');
  });

  // Portal dropdown toggle
  portalToggle && portalToggle.addEventListener('click', (e)=>{
    const open = portalToggle.getAttribute('aria-expanded') === 'true';
    portalToggle.setAttribute('aria-expanded', String(!open));
    portalMenu.setAttribute('aria-hidden', String(open));
    if(!open){
      portalMenu.style.display = 'block';
      // Trigger animation
      setTimeout(()=>{portalMenu.style.opacity = '1'}, 0);
      // focus first menu item
      const first = portalMenu.querySelector('[role="menuitem"]');
      if(first) first.focus();
    } else {
      portalMenu.style.display = 'none';
    }
    e.stopPropagation();
  });

  // close portal when clicking outside
  document.addEventListener('click', (e)=>{
    if(!portalMenu || !portalToggle) return;
    if(!portalToggle.contains(e.target) && !portalMenu.contains(e.target)){
      portalMenu.style.display = 'none';
      portalMenu.setAttribute('aria-hidden','true');
      portalToggle.setAttribute('aria-expanded','false');
    }
  });

  // keyboard: Esc closes menus
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      if(mainNav.classList.contains('open')){
        mainNav.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded','false');
      }
      portalMenu.style.display = 'none';
      portalMenu.setAttribute('aria-hidden','true');
      portalToggle.setAttribute('aria-expanded','false');
    }
  });
});
