const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    username: 'postgres',
    password: 'admin',
    database: 'users-db'
})

module.exports = db