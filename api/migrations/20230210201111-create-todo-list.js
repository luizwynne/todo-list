'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('todo', {

      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false
      },

       isDone: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
       }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('todo');
  }
};