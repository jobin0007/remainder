const express = require('express')
const dataService = require('./services/data.services')
const cors = require('cors')
const js = require('jsonwebtoken')
const app = express()

app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use(express.json())



app.post('/register', (req, res) => {
    console.log(req.body)
    dataService.register(req.body.userid, req.body.uname, req.body.password,req.body.email)
        .then(result => {
            res.status(result.statusCode).json(result)
        })

})
app.post('/login', (req, res) => {
    console.log(req.body)
    dataService.login(req.body.userid, req.body.password)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})
app.listen(3001, () => {
    console.log("server started at 3001");
})