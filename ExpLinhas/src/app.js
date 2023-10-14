import express from "express";
import ConectaNaDatabase from "./config/dbConnect.js";
import mongoose from "mongoose";

const formularioSchema = new mongoose.Schema({
  id:{type: mongoose.Schema.Types.ObjectID},
  nome: { type: String, required: true},
  email: { type: String, required: true, unique: true},
  telefone: { type: String, required: true},
  cpf: { type: String, required: true, unique: true},
  endereco: { type: String, required: true, unique: true},
  complemento: { type: String, required: true, unique: true},
  cidade: { type: String, required: true, unique: true},
  numero: { type: String, required: true, unique: true},
  bairro: { type: String, required: true, unique: true},
  estado: { type: String, required: true, unique: true},
  destino: { type: String, required: true, unique: true},
  horariodechegadanodestino: { type: String, required: true, unique: true},
},{versionKey:false}

);
   
const formularioModel = mongoose.model("app", formularioSchema);

const app = express();
app.use(express.json());

// Define the Mongoose schema and model here (formularioSchema and formularioModel)

// Establish the MongoDB connection
const startServer = async () => {
  try {
    await ConectaNaDatabase();
    console.log('Conexão com o banco estabelecida com sucesso');
  } catch (error) {
    console.error('Erro de conexão', error);
    process.exit(1); // Exit the application on database connection error
  }
}
const formulario = [
    {id: 1, "Nome": "José", "Sobrenome": "Silva", "CPF": "01234567890","CEP": "23698635", "Endereço": "Rua das Flores", "Complemento": "Casa","Cidade": "Camaragibe", "Número": "290", "Bairro": "Bongi","Estado": "PE", "Destino": "Centro da cidade", "Horáriodechegadanodestino": "09h"},
    {id: 2, "Nome": "José", "Sobrenome": "Silva", "CPF": "01234567890","CEP": "23698635", "Endereço": "Rua das Flores", "Complemento": "Casa","Cidade": "Camaragibe", "Número": "290", "Bairro": "Bongi","Estado": "PE", "Destino": "Centro da cidade", "Horáriodechegadanodestino": "09h"},
    {id: 3, "Nome": "Mari", "Sobrenome": "Silva", "CPF": "01234567890","CEP": "23698635", "Endereço": "Rua das Flores", "Complemento": "Casa","Cidade": "Camaragibe", "Número": "290", "Bairro": "Bongi","Estado": "PE", "Destino": "Centro da cidade", "Horáriodechegadanodestino": "09h"},
  ]
  app.get('/', (req, res) => {
    res.status(200).send('Inicio');
  }) 
  app.get('/formulario', (req, res) => {
      res.status(200).json(formulario)
  })

  app.post('/formulario', async (req, res) => {
    try {
      const data = req.body;
      const result = await formularioModel.create(data);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).send('Falha ao salvar no banco');
    }
  });
  
  app.get('/formulario', async (req, res) => {
    try {
      const data = await formularioModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send('');
    }
  });
  
  // Similarly, implement update and delete routes using formularioModel

  app.put('/formulario/:id', (req, res) => {
    let index = buscaPessoa(req.params.id);
    formulario[index].Destino = req.body.Destino;
    res.json(formulario);
  })
  app.put('/formulario/:id', (req, res) => {
    let index = buscaPessoa(req.params.id);
    formulario[index].Horáriodechegadanodestino = req.body.Horáriodechegadanodestino;
    res.json(formulario);
  })
  
   app.get('/formulario/:id', (req, res)=>{
    const index = buscaPessoa(req.params.id);
    res.status(201).json(formulario[index]);

   })

   app.delete('/formulario/:id',(req, res)=>{
      const id = req.params.id 
      let newUsu =  buscaPessoa(id) 
      formulario.pop(newUsu); 
      res.status(201).send('Campo deletado!')
   });

  function buscaPessoa(id) {
    return formulario.findIndex(formulario => formulario.id == id)
  }
  export default app // preciso exporta para que outro arquivo fazer uso 

  	  

