const { app } = require('express')
const pool = require('./config/database')
const app = require('./app')
const PORT = 3000;

pool.getConnection((err,connection) =>{
    if(err){
        console.error('Erro ao conectar ao banco:',err);
        process.exit(1)
    }

    console.log('Conectado ao Banco')
    connection.release()
    
})

app.listen(PORT, () => {
    console.log("Server no talo!!")
})

