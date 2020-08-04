import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu'
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriesRepository from '../../repositories/categories';
import PageDefault from '../../components/PageDefault';

function Home() {

  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then(categoriesWithVideos => {
        console.log(categoriesWithVideos)
        setInitialData(categoriesWithVideos)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <PageDefault>

      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.length >= 1 && (
        <>
          <BannerMain
            videoTitle={initialData[0].videos[0].title}
            url={initialData[0].videos[0].url}
            videoDescription={initialData[0].videos[0].title}
          />

          <Carousel
            ignoreFirstVideo
            category={initialData[0]}
          />
        </>
      )}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}

      <Footer />
    </PageDefault>
  );
}

export default Home;