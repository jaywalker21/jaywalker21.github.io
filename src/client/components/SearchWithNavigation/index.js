import React, { Fragment } from 'react';

import { EMPTY_STRING } from '../../config/defaults';

import SearchInput from '../SearchInput';
import { ReactComponent as BackArrow } from "../../assets/logos/Back.svg";

import './styles/index.css';

const handleClick = (changeCategory, changeSearchVal) => {
  changeCategory(EMPTY_STRING);
  changeSearchVal(EMPTY_STRING);
}

const SearchWithNavigation = (props) => {
  const { category, changeCategory, searchVal, changeSearchVal } = props;
    return(
      <Fragment>
        <div className="section-navigation" onClick={() => handleClick(changeCategory, changeSearchVal)}>
          <div className="arrow">
            <BackArrow />
          </div>
          <span className="section-header">{category}</span>
        </div>
        <div className="row searchbar-row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <SearchInput searchVal={searchVal} changeSearchVal={changeSearchVal} />
          </div>
        </div>
      </Fragment>
    );
  }

export default SearchWithNavigation;