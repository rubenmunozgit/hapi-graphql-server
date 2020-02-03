const dataSources = require('../datasource/services');

const resolvers = {
    Query: {
      books() {
        return dataSources.bookService.getBooks();
      },
      book(parent, args, context, info) {
        return dataSources.bookService.getBook(args.id);
      },
      authors() {
        return dataSources.authorService.getAuthors();
      },
      author(parent, args, context, info) {
        return dataSources.authorService.getAuthor(args.id)
      }
    },
    Author: {
      books(parent) {
        return dataSources.authorService.getAuthorBooks(parent.id);
      }
    }
  };
module.exports =  resolvers;