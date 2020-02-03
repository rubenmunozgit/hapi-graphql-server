const authorDB = require('../datasource/databases/authors');
const booksDB = require('../datasource/databases/books');

const findAuthorById = (id) => {
    return authorDB.find(author => author.id === id);
}

const findBooksByAuthId = (a_id) => {
    const author = authorDB.find(author => author.id === a_id);
    return booksDB.filter(book => author.books.includes(book.id));
}

module.exports = class BookService {
    constructor() {}
    getAuthors() {
        return Promise.resolve(authorDB);
    }

    getAuthor(id) {
        return Promise.resolve(findAuthorById(id));
    }

    getAuthorBooks(id) {
        return Promise.resolve(findBooksByAuthId(id));
    }
}