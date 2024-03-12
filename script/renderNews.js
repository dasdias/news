// import {loadImg} from './loadImg.js';

const renderNews = (err, data, countNews = false) => {
  if (err) {
    console.warn(err, data);
    return;
  }
  let dataItems = data?.articles;

  const template = document.createDocumentFragment();
  if (countNews) {
    dataItems = dataItems.slice(0, countNews);
  }

  const cardElem = dataItems.map((item) => {
    // const promice = new Promise((resolve, reject) => {
    //   const img = loadImg(item.urlToImage);
    //   console.log('img: ', img);
    //   document.body.append(img);
    // });
    const card = document.createElement('li');
    card.className = 'news-item';
    card.innerHTML = `
      <img src="${item.urlToImage ? item.urlToImage : './img/nophoto.jpg'}"
        alt="${item.title}" class="news-image" height="200">
        <h3 class="news-title">
        <a href="${item.url}"
        class="news-link" target="_blank">${item.title}</a>
        </h3>
        <p class="news-description">
        ${item.description ? item.description : ''}</p>
        <div class="news-footer">
        <time class="news-datetime" datetime="2022-03-16T16:11:06Z">
        <span class="news-date">${item.publishedAt}</span> 11:06
        </time>
        <p class="news-author">${item.author ? item.author : ''}</p>
        </div>
        
        `;
    return card;
  });
  template.append(...cardElem);


  return template;
};

export default renderNews;
