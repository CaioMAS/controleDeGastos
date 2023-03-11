import mongoose from "mongoose";

const itemSchema = new mongoose.Schema (
    {
        id: {type: String},
        data: {type: Date, required: true },
        classificacao: {type: String, required: true},
        descricao: {type: String, required: true},
        valor: {type: Number, required: true}
    }
)

const itens = mongoose.model('itens', itemSchema) //nome da coleção que será criada no mongo atlas

export default itens