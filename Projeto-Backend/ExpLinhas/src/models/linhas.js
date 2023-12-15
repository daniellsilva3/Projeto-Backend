import mongoose from "mongoose";

const formularioSchema = new mongoose.Schema({
  id:{type: mongoose.Schema.Types.ObjectID},
  NumerodaLinha: { type: String, required: true, unique: true},
  Nomeclatura: { type: String, required: true, unique: true},
  Terminal: { type: String, required: true},
  PontodeRetorno: { type: String, required: true},
},{versionKey:false}

);
   
const formularioModel = mongoose.model("app", formularioSchema);

export default formularioModel;
