const URL = './data/';

const fetchRequest = async (postfix, {
  method = 'get',
  callback,
  body,
  headers,
  countNews,
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
      if (callback) return callback(null, data, countNews);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};

export default fetchRequest;
