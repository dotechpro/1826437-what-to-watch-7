import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import MyListPage from '../pages/mylist-page/mylist-page';
import FilmPage from '../pages/film-page/film-page';

function App({name, genre, released}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact
          render={() => (
            <MainPage name={name} genre={genre} released={released}/>
          )}
        />
        <Route path="/login" exact
          render={() => (
            <LoginPage/>
          )}
        />
        <Route path="/mylist" exact
          render={() => (
            <MyListPage/>
          )}
        />
        <Route path="/films/:id" exact
          render={() => (
            <FilmPage/>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  name: PropTypes.string,
  genre: PropTypes.string,
  released: PropTypes.string,
};

export default App;
