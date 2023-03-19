import express from "express"
import ClassificacaoControler from "../controllers/classificacoesController.js"

const router = express.Router() 

router //definindo as rotas
    .get("/classificacoes", ClassificacaoControler.listarclassificacoes)
    .get("/classificacoes/:id", ClassificacaoControler.listarClassificacaoPorId)
    .post("/classificacoes", ClassificacaoControler.cadastrarClassificacao)
    .put("/classificacoes/:id", ClassificacaoControler. atualizarClassificacao)
    .delete("/classificacoes/:id", ClassificacaoControler.excluirClassificacao)

export default router