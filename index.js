const hbs = require('express-handlebars')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express()

app.use(express.static(path.join(__dirname, 'public'))) 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('.hbs', hbs({ // set the view engine to handlebars
    defaultLayout: 'layout',
    extname: '.hbs' // here we are setting the file name to .hbs
}))
app.set('view engine', '.hbs') // tell express to use this engine

app.get('/', (req, res) => {
    res.render('index') //callback function
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})

require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.end.PASSWORD}@cluster1-gz16d.mongodb.net/userdb?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

