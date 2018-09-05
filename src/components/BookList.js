import React from 'react';
import Book from './Book';
import Form from './Form';

import configureStore from '../store';
import * as actions from '../action';

class BookList extends React.Component{
    constructor(props){
        super(props);
        this.store = configureStore();
        this.state = this.store.getState();
        setTimeout(() =>{
            this.store.dispatch(actions.testFunction())
        }, 3000)

        // setTimeout(() =>{
        //     this.store.dispatch({
        //         type : "TEST_ACTTION",
        //         value : 42
        //     })
        // }, 3000)
        //this.state = {books : []}
        //this.state = {books : [], authors : {}}
        //this.deleteBook = this.deleteBook.bind(this);
    }

    componentDidMount(){
        this.unsubscribe = this.store.subscribe(() => {
            this.setState(this.store.getState());
        })

        this.store.dispatch(actions.fetchBooks());
        // fetch("http://localhost:8000/api/authors")
        //     .then(response => response.json())
        //     .then(authors => {
        //         this.setState({authors})
        //     });

        // fetch("http://localhost:8000/api/books")
        //     .then(response => response.json())
        //     .then(books => {
        //         this.setState({books})
        //     });
    }

    componentWillUnmount(){
        this.unsubscribe();
    }
    deleteBook = (id) => {
        this.store.dispatch(actions.deleteBook(id));
        // const currentBooks = this.state.books;
        // const books = currentBooks.filter(book => book.id !== id);

        // this.setState({books})
    };

    addBook = (title, price, authorid, firstname, lastname) => {

        this.store.dispatch(actions.addBook(title, price, authorid, firstname, lastname));
        // this.setState({
        //     books : this.state.books.concat({
        //         id:Date.now(),
        //         title,
        //         price
        //     })
        // });
    };

    render(){
        return(
            <ul className="book-list">
            
            {this.state.books.map(book => {
                //console.log('bookID '+this.props.authors[book.authorId]);
                return <Book 
                        key = {book.id} 
                        book = {book}
                        //author={this.state.authors[book.authorId]}
                        //handleDelete ={this.deleteBook.bind(this)} 
                        handleDelete ={this.deleteBook} 
                        />
            })}
            <Form addBookAction={this.addBook}/>
            {this.state.test}
        </ul>
        )
    }
}

export default BookList;    