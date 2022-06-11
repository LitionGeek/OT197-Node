'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("Organizations","urlFacebook",Sequelize.STRING),
      queryInterface.addColumn("Organizations","urlLinkedin",Sequelize.STRING),
      queryInterface.addColumn("Organizations","urlInstagram",Sequelize.STRING)
    ])     
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
