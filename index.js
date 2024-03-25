const express = require('express')
const app = express()

//middleware
app.use(express.json())

//stiching route
require('./routes/idea_routes')(app)

//server start
app.listen(8000, () => {
 console.log(`app listening on port ${8000}`)
})