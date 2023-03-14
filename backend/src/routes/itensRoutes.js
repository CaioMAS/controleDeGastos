import express from "express"
import ItemController from "../controllers/itensController.js"

const router = express.Router() 

router //definindo as rotas
    .get("/itens", ItemController.listarItens)
    .get("/itens/:id", ItemController.listarItemPorId)
    .post("/itens", ItemController.cadastrarItem)
    .put("/itens/:id", ItemController. atualizarItem)
    .delete("/itens/:id", ItemController.excluirItem)

export default router
