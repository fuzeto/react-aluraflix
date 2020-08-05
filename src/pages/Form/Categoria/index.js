import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import categoriesRepository from '../../../repositories/categories';
import '../../../index.css'

function CategoryForm() {
  const initialValues = {
    title: '',
    description: '',
    color: '',
  }

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      categoriesRepository.getAll()
        .then((categories) => {
          setCategories([
            ...categories
          ]);
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategories([
          ...categories,
          values
        ]);
        clearForm();
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category.id}`}>{category.title}</li>
          )
        })}
      </ul>

      <Link to="/cadastro/video" className="ButtonLink">
        Cadastro de Video
      </Link>

      <Link to="/" className="ButtonLink">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CategoryForm;
