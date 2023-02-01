const db = require('./models')

db.sequelize.sync().then(() => {
    console.log('Database connection successful...')
})

module.exports = db;