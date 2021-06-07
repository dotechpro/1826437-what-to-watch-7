import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import MyListPage from '../pages/mylist-page/mylist-page';
import FilmPage from '../pages/film-page/film-page';
import ReviewPage from '../pages/review-page/review-page';
import PlayerPage from '../pages/player-page/player-page';

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
        <Route path="/films/:id/review" exact
          render={() => (
            <ReviewPage/>
          )}
        />
        <Route path="/player/:id" exact
          render={() => (
            <PlayerPage/>
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
