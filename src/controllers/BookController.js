const BookService = require('../services/BookService');

const getAll = async(req, res) => {
  const books = await BookService.getAll();
  res.status(200).json({reponse: 'ola mundo'});
}

module.exports = {
  getAll,
};