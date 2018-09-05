import React from 'react';
import Author from './Author';

const Book = ({book,author, handleDelete}) =>{
    debugger;
    author:[];
    //console.log('author>>11'+author);
    const handleClick = (event) =>{
        event.preventDefault();
        handleDelete(book.id);
    }

    const formatPrice = priceInCent =>{
        if(priceInCent === undefined){
            return '';
        }
        return `$ ${(priceInCent/100).toFixed(2)}`;
    }

    return(
        <li className="book">
            <div className="title">
                {book.title} 
            </div>
            {book.authors.map(author =><Author {...author} key={author.firstName}/>)}
            <div className="price">
                {formatPrice(book.price)}
            </div>
            <a href="#" className="delete" onClick={handleClick}>Delete</a>
        </li>
    );
}


export default Book;