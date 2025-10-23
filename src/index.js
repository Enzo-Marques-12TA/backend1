import express from "express"
import cors from "cors"
import { persons } from "./persons.js"

const app = express()
const port = 3333

app.use(cors())

// GET, POST, PUT, DELETE, PATCH, PUT
app.get("/", (request, response) => {
    response.json(persons)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})