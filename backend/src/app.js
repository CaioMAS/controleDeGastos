import express from "express"
import cors from "cors"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => console.log("Conexão com o banco feita com sucesso"))

const app = express()
app.use(express.json())
app.use((req, res, next) => {
    //Resolve o problema do CORS
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization")
    app.use(cors())
    next()
})

routes(app)

export default app
