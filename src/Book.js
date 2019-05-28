import React from 'react';

export default function Bookmark(props) {
    const title = (props.volumeInfo.title) ? props.volumeInfo.title : '';
    const author = (props.volumeInfo.authors) ? props.volumeInfo.authors[0] : '';
    const description = (props.volumeInfo.description) ? props.volumeInfo.description : '';
    const price = (props.saleInfo.saleability === 'FOR_SALE') ? (props.saleInfo.listPrice.amount) : '';
    const image = (props.volumeInfo.imageLinks) ? props.volumeInfo.imageLinks.thumbnail : '';
    return (
        <li className="book">
        <div className="book_title">
        {title}
        </div>
        <div className="book_author">
        {author}
        </div>
        <div className="book_price">{price}</div>
        <div className="book_description">{description}</div>
        <img src={image} alt={title}/>
        </li>
    )
}