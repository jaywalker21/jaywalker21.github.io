import React from 'react';

import Loader from '../Loader';
import BookCard from '../BookCard';

import { NO_RESULT_TEXT } from '../../config/defaults';

import './styles/index.css';

const ResultPage = (props) => {

  const { books = [], loading = false } = props;

  const BookCards = books.map((book) => {
    return(
      <div className="col col-lg-2 col-sm-3 col-xs-4 book-col" key={book.id}>
        <BookCard formats={book.formats} image={book.formats && book.formats["image/jpeg"]} author={book.authors && book.authors[0] && book.authors[0].name} title={book.title}/>
      </div>
    );
  });
  return(
    <div className={`row book-row ${loading && 'show-loading'}`}>
      { BookCards }
      { loading && <Loader /> }
      {!loading && books.length === 0 && NO_RESULT_TEXT }
    </div>
  );
}

export default ResultPage;