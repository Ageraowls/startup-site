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
});
