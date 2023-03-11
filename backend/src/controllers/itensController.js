import itens from "../models/Item.js";

class ItemController {
    //get geral
    static listarItens = (req, res) => {
        itens.find((err, itens) => {
            res.status(200).json(itens)
        })
    }

    //get por id
    static listarItemPorId = (req, res) => {
        const id = req.params.id 
        itens.findById(id, (err, itens) => {
            if(err) {
                res.status(400).send({message: `${err} - ID do item não localizado`})
            } else {
                res.status(200).send(itens)
            }
        })
    }

    //post
    static cadastrarItem = (req, res) => {
        let item = new itens(req.body)
        item.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha aos cadastrar item`})
            } else {
                res.status(201).send(item.toJSON())
            }
        })
    }

    //put
    static atualizarItem = (req, res) => {
        const id = req.params.id 
        itens.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Item foi atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    //delete
    static excluirItem = (req, res) => {
        const id = req.params.id
        itens.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Item removido com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default ItemController