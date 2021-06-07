import React from 'react';
import Logo from '../../ui/logo/logo';
import MovieListItem from '../../ui/movie-list-item/movie-list-item';
import PageFooter from '../../ui/page-footer/page-footer';
import UserBlock from '../../ui/user-block/user-block';

function MyListPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>
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
