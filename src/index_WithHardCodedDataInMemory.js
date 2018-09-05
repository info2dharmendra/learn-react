import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

//import {data} from './data';

import BookList from './components/BookList';
//Displaying list of books using stateful separated components
console.log(data)
console.log(data.authors)
ReactDOM.render(
    <BookList books={[data.books]} authors={data.authors}/>, 
    document.getElementById('root')
);
//registerServiceWorker();