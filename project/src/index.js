import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <App name="Some movie" genre="Comedy" released="2021" />
  </React.StrictMode>,
  document.getElementById('root'));
