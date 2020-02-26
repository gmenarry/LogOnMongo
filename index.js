const hbs = require('express-handlebars')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const User= require('./models/signup')

const app = express()

const getUsers = require('./lib/getUsers')

app.use(express.static(path.join(__dirname, 'public'))) 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.engine('.hbs', hbs({ // set the view engine to handlebars
    defaultLayout: 'layout',
    extname: '.hbs' // here we are setting the file name to .hbs
}))
app.set('view engine', '.hbs') // tell express to use this engine

app.get('/', (req, res) => {
    res.render('index', {action: 'Sign In'}) //callback function
})
app.post('/',async(req,res)=>{
    console.log(req.body);
    
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password;

    let docs = await getUsers.email(email)
    let docs1 = await getUsers.username(username)
    console.log(docs.length);
    console.log(docs1.length);
    
    if (docs.length > 0){
        res.render('index', {err: "A user with this email already exists."} )
        console.log("email exists")
        return
        
    } 
 
    if (docs1.length > 0){
        res.render('index', {err: "A user with this username already exists."} )
        console.log("username exists")

        return
    } 

    
    
const users = new User({
    name: username,
    email: email,
    password: password,
})
users.save()
res.render('user', {action: 'Sign Out',  username: username })
});

app.get('/loggedin', (req, res) => {
    res.render('logIn', {action: 'Sign In'}) //callback function
})
app.post('/loggedin', (req, res) => {
    res.render('logIn', {action: 'Sign In'}) //callback function
})


app.get('/silly', (req, res) => {
    res.render('silly') //callback function
})

app.get('/user', (req, res) => {
    res.render('user', {action: 'Sign out'}) //callback function
})
app.post('/user', (req, res) => {
    res.render('user', {action: 'Sign out'}) //callback function
})

// user.save()




app.listen(3000, () => {
    console.log('server listening on port 3000')
});

app.use(express.static('public/images'));

require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster1-gz16d.mongodb.net/userdb?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


