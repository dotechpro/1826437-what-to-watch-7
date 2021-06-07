import React from 'react';
import Logo from '../../ui/logo/logo';
import MovieListItem from '../../ui/movie-list-item/movie-list-item';
import PageFooter from '../../ui/page-footer/page-footer';

function MyListPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a href="/#" className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            [...Array(9).keys()].map((num) => <MovieListItem key={`mli_+${num}`}></MovieListItem>)
          }
        </div>
      </section>

      <PageFooter/>
    </div>
  );
}

export default MyListPage;
