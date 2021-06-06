import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

function App({name, genre, released}) {
  return <MainPage name={name} genre={genre} released={released}></MainPage>;
}

App.propTypes = {
  name: PropTypes.string,
  genre: PropTypes.string,
  released: PropTypes.string,
};

export default App;
