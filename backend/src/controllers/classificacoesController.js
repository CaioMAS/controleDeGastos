import classificacoes from "../models/Classificacao.js";

class ClassificacaoController {
    //get geral
    static listarclassificacoes = (req, res) => {
        classificacoes.find().sort({ classificacao: 1 }).exec((err, classificacoes) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(classificacoes);
            }
        });
    }

    //get por id
    static listarClassificacaoPorId = (req, res) => {
        const id = req.params.id
        classificacoes.findById(id, (err, classificacoes) => {
            if (err) {
                res.status(400).send({ message: `${err} - ID do Classificacao não localizado` })
            } else {
                res.status(200).send(classificacoes)
            }
        })
    }

    //post
    static cadastrarClassificacao = (req, res) => {
        let classificacao = new classificacoes(req.body)
        classificacao.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha aos cadastrar Classificacao` })
            } else {
                res.status(201).send(classificacao.toJSON())
            }
        })
    }

    //put
    static atualizarClassificacao = (req, res) => {
        const id = req.params.id
        classificacoes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Classificacao foi atualizada com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    //delete
    static excluirClassificacao = (req, res) => {
        const id = req.params.id
        classificacoes.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "Classificacao removida com sucesso" })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }
}

export default ClassificacaoController