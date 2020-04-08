import React from 'react';
import { ReactComponent as NextIcon } from '../../assets/logos/Next.svg'; 

import './styles/index.css';

const DynamicImage = ({ fileName }) => {
    return <img src={require(`../../assets/logos/${fileName}.svg`)} alt="" />;
}

const GenreCard = (props) => {
  const { genreName = "Fiction", changeCategory } = props;

  const handleClick = (event) => {
    event.preventDefault();
    changeCategory(genreName);
  }
  
  return(
    <div className="genre-card row" onClick={handleClick}>
      <div className="col-lg-1 col-sm-1 col-xs-1 genre-icon">
        <DynamicImage fileName={genreName} />
      </div>
      <div className="col-lg-6 col-sm-6 col-xs-6 col-xs-pull-1 col-sm-pull-1 col-lg-pull-1 genre-text">
        <span>{genreName}</span>
      </div>
      <div className="col-lg-1 col-sm-1 col-xs-1 genre-next-icon">
        <NextIcon />
      </div>
    </div>
  );
}

export default GenreCard;