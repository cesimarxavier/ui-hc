
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons({attrs:{'stroke-width':1.8}});

  const mb = document.getElementById('mobileMenuButton');
  const mm = document.getElementById('mobileMenu');
  if (mb && mm) {
    mb.addEventListener('click', () => {
      const open = mm.classList.toggle('hidden') === false;
      mb.setAttribute('aria-expanded', String(open));
      mb.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
  }

  const profileBtn = document.getElementById('profileMenuButton');
  const profileMenu = document.getElementById('profileMenu');
  if (profileBtn && profileMenu) {
    profileBtn.addEventListener('click', () => {
      const open = profileMenu.classList.toggle('hidden') === false;
      profileBtn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (event) => {
      if (!profileBtn.contains(event.target) && !profileMenu.contains(event.target)) {
        profileMenu.classList.add('hidden');
        profileBtn.setAttribute('aria-expanded','false');
      }
    });
  }
});
