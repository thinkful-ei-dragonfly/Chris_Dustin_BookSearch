import React, { Component } from 'react';
import Book from './Book';

class List extends Component {

    render() {
        const array = this.props.items;
        const searchResults = array.map((book, i) => {
            return <Book author={book.volumeInfo.authors[0]} title={book.volumeInfo.title} image={book.volumeInfo.imageLinks.thumbnail} description={book.volumeInfo.description} key={i}/>
        });
        return (
            <ul>
                {searchResults}
            </ul>
        )
    }
}

export default List;