import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import VideoForm from './pages/Form/Video';
import CategoryForm from './pages/Form/Categoria';

function Page404() {
  return (
    <div>
      <h1>404 error page</h1>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/category" component={CategoryForm} />
      <Route path="/cadastro/video" component={VideoForm} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
