import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoriesTitle = categories.map(({ title }) => title);

  const { handleChange, values, clearForm } = useForm({
    title: 'Título do video',
    url: 'https://www.youtube.com/watch?v=7TJ2WpRHyNg',
    category: 'Front End'
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categories) => {
        setCategories(categories)
      })
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo: {values.title}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();

        const selectedCategory = categories.find((category) => {
          return category.title === values.category;
        });

        console.log(selectedCategory)

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: selectedCategory.id
        })
          .then(() => {
            clearForm();
            history.push('/');
          });
      }}>
        <FormField
          label="Título do Vídeo"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="url"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoriesTitle}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault >
  );
}

export default CadastroVideo;