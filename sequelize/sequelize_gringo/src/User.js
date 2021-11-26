const { Model, DataTypes } = require('sequelize') // um 'Model' é equivalente a uma tabela
const sequelize = require('./database')

class User extends Model {}

User.init({
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'user'
})

module.exports = User