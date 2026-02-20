import express from "express"

const app= express()

app.use(express.json())

const musicas = [{
    id:133,
    titulo: "B.Y.O.B",
    artista: "Sistem of a Down",
    genero:"POP",
    ano_publicacao: 1998


}]

function buscarMusicas(id){
    return musicas.findIndex(m => {

        return m.id === Number(id)
    })
}

app.get("/musicas", (req, res) =>{
    res.status(200). json(musicas)

} )



export default app

