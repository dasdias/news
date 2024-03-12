import fetchRequest from './fetchRequest.js';
import renderNews from './renderNews.js';

const formSearch = document.querySelector('.form-search');

const wrappernews = document.querySelectorAll('.news-list');
const title = document.querySelector('.title');
title.textContent = 'Свежие новости';

formSearch.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchElem = formSearch.querySelector('[type=search]');
  const countryElem = formSearch.querySelector('.js-choice');
  console.log('countryElem: ', countryElem.value);
  if (searchElem.value.trim() !== '') {
    searchElem.style.border = '';

    const search = () => Promise.all([
      fetchRequest('search.json', {
        callback: renderNews,
        countNews: 8,
      }),
      fetchRequest('headlines.json', {
        callback: renderNews,
        countNews: 4,
      }),
    ]);
    search().then(data => {
      // console.log('data: ', data);
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
