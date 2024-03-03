const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../src/models/Book');

describe('O model de Books', function() {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('Possui a propriedade title', function() {
    checkModelName(Book)('Book');
  });

  describe('possui as propriedades "title", "author", "pageQuantity" e "publisher"', () => {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  });
});
