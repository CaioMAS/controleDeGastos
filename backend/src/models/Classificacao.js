import mongoose from "mongoose"

const classificacaoSchema = new mongoose.Schema(
    {
        id: {type: String},
        classificacao: {type: String, required: true},
        uid: {type: String, require: true}
    }
)

const classificacoes = mongoose.model('classificacoes', classificacaoSchema)

export default classificacoes