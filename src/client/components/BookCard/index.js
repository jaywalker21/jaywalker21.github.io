import React from 'react';

import './styles/index.css';

import { DISPLAY_ORDER } from '../../config/defaults';

const getLink = (formats) => {
  try {
    for(let formatObject of DISPLAY_ORDER) {
      let options = Object.keys(formats).filter((format) => format.includes(formatObject.info.value));
      let answer = options && options.find((key) => formatObject.info.extension.includes(formats[key].split(".").slice(-1)[0]));
     if(answer) {
        return formats[answer];
      }
      continue;
    }
  } catch(error) {
    console.log('some error occured ', error);
    return '/';
  }
}

const handleClick = (formats) => {
  let link = getLink(formats);
  window.open(link);
}

const BookCard = (props) => {
  const { image, author, title, formats } = props;
  return(
    <div className="book-card" onClick={() => handleClick(formats)}>
        <div className="row book-card-image">
          <img src={image} alt="book"/>
        </div>
        <div className="row book-card-title">
          {title}
        </div>
        <div className="row book-card-author">
          {author}
        </div>
    </div>
  );
}

export default BookCard;

// http://www.gutenberg.org/cache/epub/39782/pg39782.cover.small.jpg
// http://www.gutenberg.org/cache/epub/54159/pg54159.cover.medium.jpg

