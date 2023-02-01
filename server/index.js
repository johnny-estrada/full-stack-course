// Instance of the framework express
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

// Routers
const postRouter = require('./routes/Post')

app.use('/posts', postRouter )

const commentsRouter = require('./routes/Comments')

app.use('/comments', commentsRouter )


app.listen(5001, () => {
    console.log('Server is running on port 5001...')
})
