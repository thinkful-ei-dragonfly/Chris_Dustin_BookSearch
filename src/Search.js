import React from 'react';

class Search extends React.Component{

  

  updateSearch = (e) => {
    e.preventDefault();
    this.props.updateSearch(e.target.searchBar.value);
    this.props.fetchBooks(e.target.searchBar.value);
  }

  render() {
  return (
    <form onSubmit = {e => {this.updateSearch(e)}}>
      <label htmlFor='searchBar'>Search: </label>
      <input type='text' id='searchBar' />
      <button type ='submit'>Search</button>
    </form>
  );
}
}

export default Search;