export default function Search() {

  const search = (e) => {
    e.preventDefault();

    const search_field = document.querySelector('#search_field');
    let search_value = search_field.value; 
    console.log(search_value)
  }

  return (
    <div className="search-bar">
      <input id="search_field" placeholder="Rechercher ..." onChange={search} />
      <button className="cta" onClick={search}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  )
}