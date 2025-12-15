const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav a');
const scrollButtons = document.querySelectorAll('[data-scroll]');
const form = document.querySelector('.contact-card');
const status = document.querySelector('.status');
const pageType = document.body.dataset.page;

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

const books = {
  furshet: {
    title: 'Фуршетная книга',
    pdf: 'Фуршет_compressed.pdf',
    recipes: [
      {
        title: 'Тарталетки с лососем и крем-сыром',
        description: 'Хрустящая корзинка, крем-сыр, маринованный огурец и ломтик слабосолёного лосося.',
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Мини-бургеры с ростбифом',
        description: 'Домашние булочки, розовый ростбиф, соус демиглас и карамелизированный лук.',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Брускетта с печёным перцем',
        description: 'Хлеб на закваске, печёный перец, страчателла и зелёное масло.',
        image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Мини-эклеры с муссом маракуйи',
        description: 'Воздушное заварное тесто с цитрусовым муссом и глазурью из белого шоколада.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      }
    ]
  },
  cocktails: {
    title: 'Коктейли и напитки',
    pdf: 'Коктейли и напитки_compressed.pdf',
    recipes: [
      {
        title: 'Сигнатура «Неон»',
        description: 'Джин, лаймовый кордил, огуречный сок и тоник с щепоткой цветочной соли.',
        image: 'https://images.unsplash.com/photo-1544145945-f90425340c7b?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Чайный сауэр',
        description: 'Бурбон, копчёный чай lapsang, белок, сироп тростника и свежий лимон.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Безалкогольный ягодный спритц',
        description: 'Клюквенный микс, газированная вода, розмарин и цитрусовый сироп.',
        image: 'https://images.unsplash.com/photo-1452968014454-3871d450f80c?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Горячий пряный грушевый сидр',
        description: 'Грушевая основа, корица, бадьян и капля мёда для уютных вечеров.',
        image: 'https://images.unsplash.com/photo-1444594975920-e69885b357d5?auto=format&fit=crop&w=900&q=80'
      }
    ]
  },
  holiday: {
    title: 'Праздничная книга',
    pdf: 'Праздничная книга_compressed.pdf',
    recipes: [
      {
        title: 'Салат с печёной тыквой и фетой',
        description: 'Сладкая тыква, фета, шпинат и ореховый соус на гранатовом молассе.',
        image: 'https://images.unsplash.com/photo-1445978259239-930f82a62d0a?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Утка конфи с вишнёвой глазурью',
        description: 'Медленно томлёная утка, хрустящая корочка и соус из вишни и портвейна.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Картофель гратен с пармезаном',
        description: 'Сливочный гратен с хрустящей сырной корочкой и чесночным ароматом.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      },
      {
        title: 'Мини-чизкейки с ягодами',
        description: 'Нежный крем-чиз, песочное основание и свежие ягоды под глянцевой заливкой.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80'
      }
    ]
  }
};

const renderMenu = (bookKey = 'furshet') => {
  const menuList = document.getElementById('menu-list');
  const detailTitle = document.querySelector('.detail-title');
  const pdfLink = document.querySelector('.menu-hero .btn.ghost');
  const tabs = document.querySelectorAll('.book-tab');
  const book = books[bookKey] || books.furshet;

  tabs.forEach((tab) => {
    const isActive = tab.dataset.book === bookKey;
    tab.setAttribute('aria-selected', String(isActive));
    tab.classList.toggle('active', isActive);
  });

  if (detailTitle) detailTitle.textContent = book.title;
  if (pdfLink) pdfLink.setAttribute('href', book.pdf);

  if (!menuList) return;
  menuList.innerHTML = '';

  book.recipes.forEach((recipe, index) => {
    const item = document.createElement('article');
    item.className = 'recipe-card';
    item.innerHTML = `
      <header>
        <button type="button" aria-expanded="false">${recipe.title}</button>
      </header>
      <div class="recipe-body" id="recipe-${index}">
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" />
        <p>${recipe.description}</p>
      </div>
    `;

    const button = item.querySelector('button');
    const body = item.querySelector('.recipe-body');
    button?.addEventListener('click', () => {
      const isOpen = item.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
      body?.classList.toggle('visible', isOpen);
    });

    menuList.appendChild(item);
  });
};

if (pageType === 'menu') {
  const params = new URLSearchParams(window.location.search);
  const initialBook = params.get('book') || 'furshet';
  renderMenu(initialBook);

  const tabs = document.querySelectorAll('.book-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.book || 'furshet';
      renderMenu(key);
      const url = new URL(window.location.href);
      url.searchParams.set('book', key);
      window.history.replaceState({}, '', url);
    });
  });
}
