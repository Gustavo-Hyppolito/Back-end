const express = require('express')
const pool = require('./config/database')

const app = express()

const queryAsync = (sql,values = []) =>{
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (err, results) => {
            if (err) return reject(err)
            else resolve(results)
        })
    })
}

app.use(express.json())

app.get('/', (req,res) => {
    res.send("API CINEMA")
})

app.get('/filmes', async (req,res) => {
    try{
        const filmes = await queryAsync('SELECT * FROM filme')
        res.json({
        sucesso: true,
        dados: filmes,
        total: filmes.length
        
    })
    }catch(erro){
        console.error('Erro ao buscar filmes:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao buscar filmes',
            erro: erro.message
        })
    }
})

app.get('/filmes/:id', (req,res) => {
    const {id} = req.params

    pool.query('SELECT * FROM filme WHERE id = ?', [id],(err, results) =>{
        res.json(results)
    })
})

module.exports = app

