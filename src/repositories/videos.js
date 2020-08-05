import config from '../config';

const URL_VIDEOS = `${config.URL_API}/videos`;

function create(content) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(content)
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      throw new Error('Não foi possível cadastrar os dados =/');
    })
}

export default {
  create
};