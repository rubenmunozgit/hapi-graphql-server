const BookService = require('./bookService');
const AuthorService = require('./authorService');
const WeatherService = require('./weatherService');
const dataSources = {
    bookService: new BookService(),
    authorService: new AuthorService(),
    weatherService: new WeatherService()
};
module.exports = dataSources;