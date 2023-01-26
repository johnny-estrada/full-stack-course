// Instance of the framework express
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = require('./models')

// Routers
const postRouter = require('./routes/Post')
app.use('/posts', postRouter )

db.sequelize.sync().then(() => {
    console.log('Database connection successful...')
})

app.listen(5001, () => {
    console.log('Server is running on port 5001...')
})


