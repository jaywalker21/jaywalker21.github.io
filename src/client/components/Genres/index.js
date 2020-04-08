import React from 'react';

import GenreCard from '../GenreCard';

import './styles/index.css';

import { GENRE_MAP } from '../../config/defaults';

const Genres = (props) => {
  let havePadding = false;
  const columns = Object.keys(GENRE_MAP).map((genre) => {
    havePadding = !havePadding;
    return(
      <div key={genre} className={`col-lg-5 col-sm-5 col-xs-12 display-col ${havePadding && 'havePadding'}`}>
        <GenreCard genreName={genre} {...props} />
      </div>
    );
  });
  return(
    <div className="row display-row">
      {columns}
    </div>
  );
}
  
export default Genres;