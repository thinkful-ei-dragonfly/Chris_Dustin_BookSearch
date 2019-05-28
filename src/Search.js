import React from 'react';

function Search(props){
  return (
    <form onSubmit = {e => {
      e.preventDefault();
      props.updateSearch(e.target.searchBar.value);
    }}>
      <label htmlFor='searchBar'>Search: </label>
      <input type='text' id='searchBar' />
      <button type ='submit'>Search</button>
    </form>
  );
}

export default Search;