export const setLocalStorage = (arr, data) => {
  if (localStorage.lang === 'ru') {
    arr.forEach((item) => {
      const translate = item.dataset.i18;
      item.textContent = data['ru'][translate];
    });
  } else {
    arr.forEach((item) => {
      const translate = item.dataset.i18;
      item.textContent = data['en'][translate];
    });
  }
};

export function checkLocalStorage(ruBtn, enBtn) {
  let userLang = localStorage.getItem('lang');
  if (userLang == undefined) {
    localStorage.setItem('lang', 'ru');
    userLang = 'ru';
  }

  if (userLang === 'en') {
    localStorage.setItem('lang', 'en');
    userLang = 'en';
    ruBtn.classList.remove('active');
    enBtn.classList.add('active');
  }
}
