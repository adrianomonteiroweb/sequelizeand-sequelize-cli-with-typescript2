'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('user', { id: Sequelize.INTEGER });
  },

  async down(queryInterface, _Sequelize) {
    return await queryInterface.dropTable('user');
  },
};
