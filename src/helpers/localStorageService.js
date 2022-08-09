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

/* export function checkTheme(elem, Allarr, icon, moon, sun) {
  let userTheme = localStorage.getItem('theme');
  if (userTheme == undefined) {
    localStorage.setItem('theme', 'light');
    userTheme = 'light';
  }

  if (document.body.classList.contains('main-theme')) {
    document.body.classList.remove('main-theme');
    elem.forEach((item) => {
      Allarr.forEach((el) => {
        if (el.classList.contains(item)) {
          el.classList.remove('light');
        }
      });
    });
    icon.innerHTML = sun;
  }
  if (userTheme === 'dark') {
    localStorage.setItem('theme', 'dark');
    userTheme = 'dark';
  }
  if (!document.body.classList.contains('main-theme')) {
    document.body.classList.add('main-theme');
    elem.forEach((item) => {
      Allarr.forEach((el) => {
        if (el.classList.contains(item)) {
          el.classList.add('light');
        }
      });
    });
    document.body.classList.add('main-theme');
    icon.innerHTML = moon;
  }
}
 */
