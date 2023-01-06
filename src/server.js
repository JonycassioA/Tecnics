const express = require('express')

const app = express.static(`${baseDir}`)

const baseDir = `${__dirname}/build/`

app.get('*', (req,res) => res.sendFile('index.html' , { root : baseDir }))

const port = 40123

app.listen(port, () => console.log(`Servidor subiu com sucesso em http://localhost:${port}`))