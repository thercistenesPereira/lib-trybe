const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async (objBook) => {
  const newBook = await Book.create(objBook);
  return newBook;
};

const update = async (id, objBook) => {
  const [updated] = await Book.update(
    objBook,
    { where: { id } }
  );
  return updated;
};

const remove = async (id) => {
  const removed = await Book.destroy({ where: { id } });
  return removed;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}