import React, { useState } from 'react';

import './styles/index.css';
import {  ReactComponent as SearchLogo } from '../../assets/logos/Search.svg';
import {  ReactComponent as ClearLogo } from '../../assets/logos/Cancel.svg';

import { isEmpty } from '../../utils';
import * as DEFAULTS from '../../config/defaults';

const SearchInput = (props) => {

  const { name="searchVal", placeHolder = "Search", searchVal, changeSearchVal } = props;

  const [showClear, changeClearStatus] = useState(false);
  const [value, setValue] = useState(searchVal);
  let [ref] = useState(React.createRef());

  const onChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    changeSearchVal(event.target.value)
    if(!isEmpty(event.target.value)) {
        changeClearStatus(true);
    } else {
        changeClearStatus(false);
    }
  }

  const clearContent = (event) => {
    event.preventDefault();
    setValue(DEFAULTS.EMPTY_STRING);
    changeSearchVal(DEFAULTS.EMPTY_STRING);
    changeClearStatus(false);
  }

  const focusInput = (e) => {
    e.preventDefault();
    ref.current.focus();
  }
  
  return(
    <div className="search-input row" onClick={focusInput}>
      <div className="col-lg-2 col-xs-2 col-sm-2 search-icon-col">
        <SearchLogo />
      </div>
      <div className="col-lg-8 col-lg-pull-1 col-xs-8 col-xs-pull-1 col-sm-8 coll-sm-pull-1 input-field-col">
        <input ref={ref} value={value} maxLength={DEFAULTS.MAX_LEN} className="input-field" name={name} type="text" placeholder={placeHolder} onChange={onChange} />
      </div>
      { 
        showClear && 
        <div className="col-lg-2 col-sm-2 col-xs-2 clear-icon-col">
            <ClearLogo onClick={clearContent}/>
        </div> 
      }
    </div>
  );
}

export default SearchInput;