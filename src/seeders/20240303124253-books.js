'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', [
    {
      title: 'O Senhor dos Anéis',
      author: 'J.R.R. Tolkien',
      pageQuantity: 1000,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      pageQuantity: 500,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ], {} ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Books', null, {} ),
};
