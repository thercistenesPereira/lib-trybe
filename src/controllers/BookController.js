const BookService = require('../services/BookService');

const getAll = async(req, res) => {
  const { author } = req.query;

  let books;

  if (author) {
    books = await BookService.getByAuthor(author);
  } else {
    books = await BookService.getAll();
  }

  res.status(200).json({books});
}

const getById = async(req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(book);
};

const create = async (req, res) => {
  const { title, author, pageQuantity, publisher } = req.body;
  const newBook = await BookService.create({ title, author, pageQuantity, publisher });
  
  res.status(201).json(newBook);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity, publisher } = req.body;

  const updatedBook = await BookService.update(id, { title, author, pageQuantity, publisher });

  if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json(updatedBook);
}

const remove = async (req, res) => {
  const { id } = req.params;

  const removed = await BookService.remove(id);

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book deleted' });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};