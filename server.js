const express = require('express'); //If gives error, module not found, then run 'npm install express'
const cors = require('cors');       //If gives error, module not found, then run 'npm install cors'. CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const bodyParser = require('body-parser')
const app = express();
app.use(cors());
app.use(bodyParser.json());

let { data } = require('./data'); // reading data from 'data.json'

const getBookAuthors = book =>{
    const authorIds = book.authorId ? [book.authorId] : book.authorIds;
    //console.log("authorIDs: "+authorIds);
    
    return authorIds.map(authorId => data.authors[authorId]);
}
//api created to read books data
app.get('/api/books', (req, res) => {
  //res.send(data.books);
  res.json(data.books.map(book =>{

        return Object.assign({}, book, {
            authors : getBookAuthors(book)
        })
        // return{
        //     ...book,
        //     authors : getBookAuthors(book)
        // };
  }));
});

//api created to delete book data
app.delete('/api/books/:bookId', (req, res) => {
    data.books = data.books.filter(book =>
        book.id !== req.params.bookId
    );
    res.send({deleted : true});
});

//api created to delete book data
app.post('/api/books', (req, res) => {

    const newBook = {
        id:Date.now(),
        title : req.body.title,
        price : req.body.price
        //authorId : req.paramsbody.authorid
    }
    data.books.push(newBook);
    // data.authors = data.authors.push({
    //     firstName :req.params.firstname,
    //     lastName :req.params.lastname         
    // })
    res.send(newBook);
});

// app.get('/api/authors', (req, res) => {
//   res.send(data.authors);
// });

//port defined on which express server will run
app.listen(8000, () => {
  console.log('API server is at port 8000');
})