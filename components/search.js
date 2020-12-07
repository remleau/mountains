import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const useSearch = () => {
  const dispatch = useDispatch();
  const { mountains } = useSelector((state) => state.mountains);

  const handleSearch = (term) => dispatch({
    type: 'search/mountains',
    payload: {
      term: term
    }
  });

  return { handleSearch, mountains }
}

const Search = () => {
  const [term, setTerm] = useState('');
  const search_field = useRef();
  const { handleSearch, mountains } = useSearch();

  const handleInput = () => {
    setTerm(search_field.current.value);
  }
  
  useEffect(() => {
    handleSearch(term);
  }, [term])

  return (
    <div className="search-bar">
      <input placeholder="Rechercher ..." autoComplete="off" ref={search_field} onChange={handleInput} />
      <button className="cta" onClick={handleInput}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  )
}

export default Search;