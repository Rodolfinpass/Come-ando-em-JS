const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('db-test', 'user', 'password', { // o primeiro parâmetro é o nome do banco de dados, o segundo, o usuário e o terceiro a senha. (no sqlite, o usuário e a senha n são tão importantes)
    dialect: 'sqlite', // o quarto parâmetro, se abre chave e passa informações, tais como: qual o tipo do bd, onde ele está hospedado, etc
    host: './sqnode.sqlite'
})

module.exports = sequelize