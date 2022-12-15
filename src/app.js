const express = require('express')
const usersRouter = require('./users/users.router')
const db = require('./utils/database')

const app = express()
const port = 9000

db.authenticate()
    .then((res) => console.log('database authenticated'))
    .catch(err => console.log(err))
db.sync()
    .then((res) => console.log('database synced'))
    .catch(err => console.log(err))

app.use(express.json())
app.use('/api/v1', usersRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
