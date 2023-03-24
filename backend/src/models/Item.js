import mongoose from "mongoose";

const itemSchema = (
    {
        id: {type: String},
        data: {type: Date, required: true },
        classificacao: {type: String, required: true},
        descricao: {type: String, required: true},
        valor: {type: Number, required: true},
        uid: {type: String, require: true}

    }
)

const itens = mongoose.model('itens', itemSchema)

export default itens