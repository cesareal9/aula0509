const express = require("express")
const estudio_router = require("./routes/estudio.js")
const genero_router = require("./routes/genero.js")
const jogo_router = require("./routes/jogo.js")
const publicadora_router = require("./routes/publicadora.js")
const app = express()
const port = 3000

app.use(express.json())


app.use("/estudio", estudio_router)
app.use("/genero", genero_router)
app.use("/jogo", jogo_router)
app.use("/publicadora", publicadora_router)

app.listen(port, () => {
    console.log(`Servidor iniciado na porta! ${port} port`)
})