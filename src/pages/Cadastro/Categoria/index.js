import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const initialValues = {
        title: '',
        description: '',
        color: '',
    }

    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(initialValues);

    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value,
        });
    }

    function handleChange(event) {
        setValue(
            event.target.getAttribute('name'),
            event.target.value,
        );
    }

    useEffect(() => {
        if (window.location.href.includes('localhost')) {
            const URL = 'http://localhost:8080/categorias';
            fetch(URL)
                .then(async (respostaDoServer) => {
                    if (respostaDoServer.ok) {
                        const resposta = await respostaDoServer.json();
                        setCategories(resposta);
                        return;
                    }
                    throw new Error('Não foi possível pegar os dados');
                })
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
                setValues(initialValues);
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

                <button>
                    Cadastrar
                </button>
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

            <Link to="/">
                Ir para Home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
