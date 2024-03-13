import {API} from './api.js';
import fetchRequest from './fetchRequest.js';
import renderNews from './renderNews.js';

const formSearch = document.querySelector('.form-search');

const wrappernews = document.querySelectorAll('.news-list');

formSearch.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchElem = formSearch.querySelector('[type=search]');
  const countryElem = formSearch.querySelector('.js-choice');
  const searchParem = searchElem.value.trim();
  if (searchParem !== '') {
    searchElem.style.border = '';


    const search = () => Promise.all([
      fetchRequest(`everything?q=${searchElem.value}`, {
        callback: renderNews,
        headers: {
          'X-API-Key': API,
        },
        countNews: 8,
        searchText: searchElem.value,
      }),
      fetchRequest('top-headlines?category=general&country=ru', {
        callback: renderNews,
        headers: {
          'X-API-Key': API,
        },
        countNews: 4,
      }),
    ]);
    search().then(data => {
      wrappernews[0].textContent = '';
      wrappernews[0].append(data[0]);
      wrappernews[1].textContent = '';
      wrappernews[1].append(data[1]);
    });
  } else {
    searchElem.style.border = '1px solid tomato';
  }
});

// const validateForm = (elemValidate) => {
//   elemValidate.
// };
