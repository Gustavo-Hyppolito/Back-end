const express = require('express')
const pool = require('./config/database')

const app = express()

app.use(express.json)

app.get('/', (req,res) =>{
    res.send('API cinema está funcionando!!')
})

app.get('/filmes', (req,res) =>{
    pool.query('SELECT * FROM filme', (err, result) =>{
        res.json(results)
    })
})


module.exports = app 