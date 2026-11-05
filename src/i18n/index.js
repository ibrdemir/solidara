import en from './en.js';
import nl from './nl.js';

export const dictionaries = { en, nl };

// Her sayfanın iki dildeki adresi. Yeni sayfa eklerken buraya da ekle.
export const routes = {
  home: { en: '/', nl: '/nl/' },
  about: { en: '/about', nl: '/nl/over-ons' },
  activities: { en: '/activities', nl: '/nl/activiteiten' },
  projects: { en: '/projects', nl: '/nl/projecten' },
  shape: { en: '/shape-with-us', nl: '/nl/vorm-mee' },
  news: { en: '/news', nl: '/nl/nieuws' },
  contact: { en: '/contact', nl: '/nl/contact' },
  thanks: { en: '/thanks', nl: '/nl/bedankt' },
};

export function getT(lang) {
  return dictionaries[lang] ?? dictionaries.en;
}

// Bir sayfanın EN ve NL karşılığı (dil değiştirici ve hreflang için)
export function alternatesFor(key) {
  return { en: routes[key].en, nl: routes[key].nl };
}

export function projectPath(lang, id) {
  return `${routes.projects[lang]}/${id}`;
}

export function newsPath(lang, id) {
  return `${routes.news[lang]}/${id}`;
}
