import React from 'react';

class Filter extends React.Component{
  render() {
  return (
    <form>
      <label htmlFor='print-filter' >Print Type: </label>
      <select type='text' id='print-filter' onChange={e => this.props.updatePrintFilter(e.target.value)}>
        <option value='all'>All</option>
        <option value='books'>Books</option>
        <option value='magazines'>Magazines</option>
      </select>

      <label htmlFor='book-filter'>Book Type: </label>
      <select type='text' id='book-filter' onChange={e => this.props.updateBookFilter(e.target.value)}>
        <option value={null}>    </option>
        <option value='ebooks'>Ebooks</option>
        <option value='free-ebooks'>Free Ebooks</option>
        <option value='full'>Full Books</option>
        <option value='paid-ebooks'>Paid Ebooks</option>
        <option value='partial'>Partial Books</option>
      </select>
    </form>
  );
}
}

export default Filter;