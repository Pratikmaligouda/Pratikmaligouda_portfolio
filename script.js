(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  const filterButtons = [...document.querySelectorAll('.filter-btn')];
  const cards = [...document.querySelectorAll('.project-card')];
  const noProjects = document.querySelector('#no-projects');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      let visibleCount = 0;
      cards.forEach(card => {
        const categories = (card.dataset.category || '').split(/\s+/);
        const visible = filter === 'all' || categories.includes(filter);
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      if (noProjects) noProjects.hidden = visibleCount !== 0;
    });
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
