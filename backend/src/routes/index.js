import express from 'express'
import itens from "./itensRoutes.js"
import classificacoes from "./classificacoesRoutes.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Controle de gastos"})
    })

    app.use (
        express.json(),
        itens,
        classificacoes
        
    )

}

export default routes