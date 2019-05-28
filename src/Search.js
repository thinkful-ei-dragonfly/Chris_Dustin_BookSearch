import React from 'react';

function Search(props){
  return (
    <form onSubmit = {e => {
      e.preventDefault();
      props.updateSearch(e.target.value);
    }
    }

    >
      <label htmlFor='search-bar'>Search: </label>
      <input type='text' id='search-bar' />
      <button type ='submit'>Search!</button>
    </form>
  );
}

export default Search;