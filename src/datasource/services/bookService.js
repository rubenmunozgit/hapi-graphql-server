const bookDB = require('../databases/books');

const findBookById = (id) => {
    return bookDB.find(book => book.id === id);
}

module.exports = class BookService {
    constructor() {}
    getBooks() {
        return Promise.resolve(bookDB);
    }

    getBook(id) {
        return Promise.resolve(findBookById(id));
    }
}