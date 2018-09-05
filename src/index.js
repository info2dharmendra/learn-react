import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import BookList from './components/BookList';
//Displaying list of books using stateful separated components
ReactDOM.render(
    <BookList/>, 
    document.getElementById('root')
);