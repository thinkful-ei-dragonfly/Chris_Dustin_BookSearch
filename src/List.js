import React, { Component } from 'react';
import Book from './Book';

class List extends Component {

    render() {
        const array = this.props.items;
        const searchResults = array.map((book, i) => {
            console.log(book)
            return <Book volumeInfo={book.volumeInfo} saleInfo={book.saleInfo} key={i}/>
        });
        return (
            <ul>
                {searchResults}
            </ul>
        )
    }
}

export default List;