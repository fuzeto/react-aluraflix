import config from '../config';

const URL_CATEGORIES = `${config.URL_API}/categories`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      throw new Error('Não foi possível pegar os dados =/');
    })
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      throw new Error('Não foi possível pegar os dados =/');
    })
}

export default {
  getAll,
  getAllWithVideos
};