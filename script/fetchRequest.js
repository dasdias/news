// const URL = './data/';
const URL = 'https://newsapi.org/v2/';

const fetchRequest = async (postfix, {
  method = 'get',
  callback,
  body,
  headers,
  countNews,
  searchText,
}) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(`${URL}${postfix}`, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data, countNews, searchText);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};

export default fetchRequest;
