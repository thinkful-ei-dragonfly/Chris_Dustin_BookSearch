import React from 'react';

function Filter(props){
  return (
    <form>
      <label htmlFor='print-filter' onChange={e => props.updatePrintFilter(e.target.value)}>Print Type: </label>
      <select type='text' id='print-filter'>
        <option value='all'>All</option>
        <option value='books'>Books</option>
        <option value='magazines'>Magazines</option>
      </select>

      <label htmlFor='book-filter'>Book Type: </label>
      <select type='text' id='book-filter' onChange={e => props.updateBookFilter(e.target.value)}>
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

export default Filter;