import config from '../config';

const URL_CATEGORIES = `${config.URL_API}/categories?_embed=video`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=video`)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      throw new Error('Não foi possível pegar os dados =/');
    })
}

export default {
  getAllWithVideos
};