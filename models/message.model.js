const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Message extends Model {
}

Message.init({
    content: DataTypes.STRING, createdAt: DataTypes.DATE
}, {sequelize, modelName: 'message'});
