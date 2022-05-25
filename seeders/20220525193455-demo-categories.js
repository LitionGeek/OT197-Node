'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categories', [{
            name: 'Test Category',
            description: 'Description test',
            image: 'category.jpg',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};