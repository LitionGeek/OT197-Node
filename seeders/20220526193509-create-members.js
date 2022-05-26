'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [
      {
        name: 'Usuario1',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Usuario2',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },
    
          {
        name: 'Usuario3',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Usuario4',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Usuario5',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Usuario6',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Usuario7',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Usuario8',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Usuario9',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Usuario10',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Usuario11',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Usuario12',
        image: "administrador",
        createdAt: new Date,
        updatedAt: new Date
      },], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
