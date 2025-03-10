'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      yandexID: {
        allowNull: false,
        unique:true,
        type: Sequelize.INTEGER
      },
      phone: {
        allowNull: false,
        unique:true,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique:true,
        type: Sequelize.STRING
      },
      createdAt: {
        defaultValue:Sequelize.fn('NOW'), 
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue:Sequelize.fn('NOW'),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};