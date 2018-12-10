const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// create connection
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'project_db'
});

// connect to db
db.connect((err) => {
    if (err) {
        throw err
    }
    console.log('MySql Connected...')
})

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))
const port = 80

/* default route */
app.get('/', (req, res) => {
    res.send({
        message: 'Hello World!'
    })    
})

/* register route */
app.post('/register', (req, res) => {
    /* check if user exists already before posting */
    userExistsAlready(req.body.email)
        .then(function(result) {
            if (result)
                res.send('user already exists')
            else
            {
                let post = {email: req.body.email, password: req.body.password} 
                let sql = 'INSERT INTO users SET ?'
                let query = db.query(sql, post, (err, result) => {
                    if (err) throw err
                    console.log(result)
                    res.send('user added')
                })
            }
        })
        .catch(function notOk(err){
            console.log(err)
        })
})

/**
 * Checks if user already exisits in DB before posting new user by creating a promise and returning it
 * @param String userEmail 
 * @returns Promise
 */
function userExistsAlready(userEmail)
{
    return new Promise (function(resolve, reject)
    {
        /* checks existing emails in DB against email passed to function */
        let query = db.query(`SELECT email FROM users WHERE email = '${userEmail}'`, (err, result) => {
            if (err) reject(err)
            /* here if email does not exist */
            if (isEmptyObject(result)) {
                blnUserExists = false  
                resolve(blnUserExists)          
            }
            /* here if email already exists */
            else {
                blnUserExists = true
                resolve(blnUserExists)
            }
        })
    })
}

/* display emails route  */
app.get('/emails', (req, res) => {
    let query = db.query("SELECT email, password FROM users", (err, result) => {
        if (err) throw err
        console.log('emails retrieved')
        res.send(result)
    })
})

/* verify user route */
app.post('/login', (req, res) => {
    let query = db.query(`SELECT email, password FROM users WHERE email = '${req.body.email}' AND password = '${req.body.password}'`, (err, result) => {
        if (err) throw err
        if (isEmptyObject(result)) {
            res.send('User not found')
            console.log('User not found')
        }
        else {
            res.send(`Welcome: ${req.body.email}!`)
            console.log('User not found')
        }
    })
})

/* display images path  */
app.get('/justin', (req, res) => {
    let query = db.query("SELECT id, path FROM images", (err, result) => {
        if (err) throw err
        console.log('images retrieved')
        res.send(result)
    })
})

/* checks if a query returns nothing */
function isEmptyObject(obj) {
    return JSON.stringify(obj) === '[]'
}

/* tyler's route for getting database text */
app.get('/tyler', (req, res) => {
    let query = db.query("SELECT * FROM website_text", (err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.post('/test', function (req, res) {
    console.log('works');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
