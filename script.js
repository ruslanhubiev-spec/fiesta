const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav a');
const scrollButtons = document.querySelectorAll('[data-scroll]');
const faqItems = document.querySelectorAll('.faq-item');
const form = document.querySelector('.contact-card');
const status = document.querySelector('.status');

const setNavState = (isOpen) => {
  if (!nav || !burger) return;
  nav.classList.toggle('open', isOpen);
  document.body.classList.toggle('nav-open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  burger.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
};

const closeNav = () => setNavState(false);
const toggleNav = () => setNavState(!nav?.classList.contains('open'));

burger?.addEventListener('click', toggleNav);

navLinks.forEach((link) => {
  link.addEventListener('click', closeNav);
});

document.addEventListener('click', (event) => {
  if (!nav?.classList.contains('open')) return;
  const target = event.target;
  if (!(target instanceof Node)) return;
  if (nav.contains(target) || burger?.contains(target)) return;
  closeNav();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeNav();
  }
});

scrollButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.scroll || '#');
    target?.scrollIntoView({ behavior: 'smooth' });
    closeNav();
  });
});

faqItems.forEach((item) => {
  const header = item.querySelector('header');
  const button = item.querySelector('button');
  header?.addEventListener('click', () => {
    const isOpen = item.classList.toggle('open');
    button?.setAttribute('aria-expanded', String(isOpen));
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  if (status) {
    status.textContent = `Спасибо, ${name || 'друг'}! Мы скоро свяжемся с вами.`;
    setTimeout(() => {
      status.textContent = '';
    }, 6000);
  }
  form.reset();
});
