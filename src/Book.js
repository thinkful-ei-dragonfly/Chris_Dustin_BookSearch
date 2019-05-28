import React from 'react';

export default function Bookmark(props) {
    return (
        <li className="book">
        <div className="book_title">
        {props.title}
        </div>
        <span className="book_author">
        {props.author}
        </span>
        <span className="book_price">{props.price}</span>
        <span className="book_description">{props.description}</span>
        <img src={props.image} alt={props.title}/>
        </li>
    )
}