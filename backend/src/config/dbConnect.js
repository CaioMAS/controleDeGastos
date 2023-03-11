import mongoose from "mongoose"

mongoose.connect("mongodb+srv://caiosantos:0918caio@controle-de-gastos.p3fbwja.mongodb.net/controle-de-gastos")

let db = mongoose.connection
export default db