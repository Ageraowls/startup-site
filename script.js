import { setLocalStorage, checkLocalStorage } from './src/helpers/localStorageService.js';

document.addEventListener('DOMContentLoaded', () => {
  const ruBtn = document.querySelector('.ru');
  const enBtn = document.querySelector('.en');
  const translateArr = [...document.querySelectorAll('[data-i18]')];
  const langBtns = document.querySelectorAll('.lang-item');
  const switcher = document.querySelector('.switcher');

  checkLocalStorage(ruBtn, enBtn);

  // switch language
  async function getData() {
    const res = await fetch('./src/helpers/translate.json');
    const data = await res.json();

    function changeLanguage(e) {
      const lang = e.target.textContent.toLowerCase();
      translateArr.forEach((item) => {
        const translate = item.dataset.i18;
        item.textContent = data[lang][translate];
        localStorage.lang = lang;
      });
    }
    setLocalStorage(translateArr, data);

    ruBtn.addEventListener('click', changeLanguage);
    enBtn.addEventListener('click', changeLanguage);
  }

  getData();

  // active btn
  function activeBtnLang(e) {
    langBtns.forEach((item) => {
      item.classList.remove('active');
    });

    e.target.classList.add('active');
  }

  switcher.addEventListener('click', activeBtnLang);

  // theme

  /* const moon = `<use xlink:href="./src/assets/images/svg/sprite.svg#dark"></use>`;
  const sun = `<use xlink:href="./src/assets/images/svg/sprite.svg#light"></use>`;
  const themeIcon = document.querySelector('.theme-icon');
  const allElements = document.querySelectorAll('*');
  const elements = [
    'title',
    'content',
    'wrapper',
    'plan',
    'lang-item',
    'card-title',
    'card-description',
    'ideology-company',
    'about-company',
    'plan-for-2022',
    'plan-for-2023',
    'plan-cards',
    'card-icon',
    'phone-number',
  ];

  checkTheme(elements, allElements, themeIcon, moon, sun);

  themeBtn.addEventListener('click', () => {
    if (document.body.classList.contains('main-theme')) {
      document.body.classList.remove('main-theme');
      elements.forEach((item) => {
        allElements.forEach((el) => {
          if (el.classList.contains(item)) {
            el.classList.remove('light');
          }
        });
      });
      themeIcon.innerHTML = sun;
      localStorage.theme = 'light';
    } else {
      elements.forEach((item) => {
        allElements.forEach((el) => {
          if (el.classList.contains(item)) {
            el.classList.add('light');
          }
        });
      });
      document.body.classList.add('main-theme');
      themeIcon.innerHTML = moon;
      localStorage.theme = 'dark';
    }
  }); */
});
