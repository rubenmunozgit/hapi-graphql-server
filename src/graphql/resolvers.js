const services = require('../services');

const resolvers = {
    Query: {
      books() {
        return services.bookService.getBooks();
      },
      book(parent, args, context, info) {
        return services.bookService.getBook(args.id);
      },
      authors() {
        return services.authorService.getAuthors();
      },
      author(parent, args, context, info) {
        return services.authorService.getAuthor(args.id)
      },
      weather: async (parent, args, context, info) => {
        return await args;
      }
    },
    Author: {
      books(parent) {
        return services.authorService.getAuthorBooks(parent.id);
      }
    },
    Weather: {
      current(parent) {
        console.log(parent.city)
        return services.weatherService.getCurrentWeather(parent.city);
      },
      forecast(parent) {
        console.log(parent.city)
        return services.weatherService.getForecastWeather(parent.city);
      }
    }
  };
module.exports =  resolvers;