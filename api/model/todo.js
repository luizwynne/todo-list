const Sequelize = require('sequelize');
const database = require('../config/db');
 
const Todo = database.define('todo', {
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
})
 
module.exports = Todo;