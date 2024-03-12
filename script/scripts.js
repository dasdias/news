import fetchRequest from './fetchRequest.js';
import renderNews from './renderNews.js';
import './search.js';

const wrappernews = document.querySelectorAll('.news-list');
const title = document.querySelector('.title');
title.textContent = 'Свежие новости';

const init = () => Promise.all([
  fetchRequest('search.json', {
    callback: renderNews,
    countNews: 8,
  }),
  fetchRequest('headlines.json', {
    callback: renderNews,
    countNews: 4,
  }),
]);
init().then(data => {
  // console.log('data: ', data);
  wrappernews[0].textContent = '';
  wrappernews[0].append(data[0]);
  wrappernews[1].textContent = '';
  wrappernews[1].append(data[1]);
});

// search();
