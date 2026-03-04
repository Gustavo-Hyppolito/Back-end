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

app.get('/filmes/:id', async (req,res) => {
    try{
        const {id} = req.params
        
        if(id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID filme inválido'
            })
        }

        const filme = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
        if(filme.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Filme não encontrado'
            })
        }
        res.json({
            sucesso: true,
            dados: filme[0]
        })
    } catch(erro){
        console.error('Erro ao buscar filme:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao buscar filme',
            erro: erro.message
        })
    }
})


module.exports = app

