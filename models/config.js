const { Sequelize } = require('sequelize')

module.exports = new Sequelize('blog-nodejs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    // port: 8889
})