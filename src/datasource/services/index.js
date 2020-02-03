const BookService = require('./bookService');
const AuthorService = require('./authorService');
const dataSources = {
    bookService: new BookService(),
    authorService: new AuthorService()
};
module.exports = dataSources;