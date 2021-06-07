import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';

function App({name, genre, released}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact
          render={() => (
            <MainPage name={name} genre={genre} released={released}></MainPage>
          )}
        />
        <Route path="/login" exact
          render={() => (
            <LoginPage></LoginPage>
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
