const express = require('express');
const BookController = require('./controllers/BookController');
const app = express();

app.use(express.json());

app.get('/books', BookController.getAll);

app.get('/books/:id', BookController.getById);

app.post('/books', BookController.create);

app.put('/books/:id', BookController.update);

app.delete('/books/:id', BookController.remove);

module.exports = app;