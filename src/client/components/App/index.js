import React, { useState, useEffect } from 'react';

import { EMPTY_STRING, EMPTY_ARRAY, DEBOUNCE_TIME } from '../../config/defaults';
import { isEmpty } from '../../utils';
import { getBooks } from '../../config/api';

import Home from '../Home';
import ResultPage from '../ResultPage';
import Header from '../Header';
import SearchWithNavigation from '../SearchWithNavigation';

import './styles/index.css';

const App = () => {

  const [category, changeCategory]  = useState(EMPTY_STRING);
  const [searchVal, changeSearchVal] = useState(EMPTY_STRING);
  const [books, setBooks] = useState(EMPTY_ARRAY);
  const [nextUrl, setNextUrl] = useState(EMPTY_STRING);
  const [scrolled, setScrolled] = useState(false);  
  const [timer, changeTimer] = useState(null);
  const [loading, setLoading] = useState(false);

  const getBooksApi =  () => {
    if(books.length === 0 || (books.length > 0 && !isEmpty(nextUrl))) {
      getBooks({ topic: category, search: searchVal }, nextUrl)
      .then((res) => res.json())
      .then((data) => {
        let { results, next } = data;
        if(results) {
          setBooks([ ...books, ...results ]);
        }
        if(next) {
          setNextUrl(next);
        } else {
          setNextUrl(EMPTY_STRING);
        }
      })
      .catch((e) => {
        console.log('some error occured ', e)
      })
      .finally(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
      alert('No more books :( ')
    }

  }

  const getData = () => {
    if(category) {
      if(timer) {
        window.clearTimeout(timer);
      }
      setLoading(true);
      changeTimer(window.setTimeout( () => {
        getBooksApi();
      }, DEBOUNCE_TIME))
    }
  }

  const changeSearch = (value) => {
    changeSearchVal(value);
    setNextUrl(EMPTY_STRING);
    setBooks(EMPTY_ARRAY);
  }
    
  useEffect(() => {
    
    getData();
    const infiniteScroll = () => {
      if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setScrolled(!scrolled);
      }
    }  

    window.addEventListener('scroll', infiniteScroll); 
    
    return(() => {
      window.removeEventListener('scroll', infiniteScroll);
    }) 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchVal, category, scrolled]);

  let Component = Home;
  if(!isEmpty(category)) {
    Component = ResultPage;
  }

  return(
    
    <div className="App">
      {
        category ? 
        <SearchWithNavigation searchVal={searchVal} changeSearchVal={changeSearch} category={category} changeCategory={changeCategory} /> 
        : <Header />
      }
      <div className="container card">
        <Component loading={loading} category={category} books={books} changeCategory={changeCategory} searchVal={searchVal}/>
      </div>
    </div>
  );

}

export default App;