import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from '../i18n';

const useSearch = (term) => {
  const { mountains } = useSelector((state) => state.mountains);

  const handleSearch = (term) => {
    if(term){
      const filtered_mountains = Object.keys(mountains).reduce(function (r, e) {
        if (mountains[e].title.includes(term)) r[e] = mountains[e]
        return r
      }, {});

      if (Object.keys(filtered_mountains).length){
        return filtered_mountains;
      } else {
        return {
          error: {
            title: 'On a rien trouvé'
          }
        }
      }
    }

    return false;
  }

  const results = handleSearch(term);

  return { results }
}

const Search = () => {
  const [term, setTerm] = useState('');
  const search_field = useRef();
  const { results } = useSearch(term);

  const handleInput = () => {
    setTerm(search_field.current.value);
  }

  return (
    <div className="search-bar">
      <div className="content-input">
        <input placeholder="Rechercher ..." autoComplete="off" ref={search_field} onChange={handleInput} />
        {
          Object.keys(results).length ? 
            <div className="content-search">
              {Object.keys(results).map(function (key) {
                return (
                  <Link href={results[key].link}>
                    <p key={key}>{results[key].title}</p>
                  </Link>
                )
              })}
            </div>  
          : ''
        }
      </div>
      <button className="cta" onClick={handleInput}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  )
}

export default Search;