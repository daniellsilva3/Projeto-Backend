import express from "express";
import connectDatabase from "./Config/dbconect.js";
import routes from "./routes/index.js";
import cors from "cors";

const conexao = await connectDatabase();

conexao.on("error", (erro)=>{
  console.error("erro de conexão", erro)
})

conexao.once("open",  ()=>{
  console.log("conexao com banco de dados ok :D")
})
const app = express();
// * todas as origens permitidas 
app.use(cors({origin:"*"}))
routes(app);


// app.use(express.json());

// // Define the Mongoose schema and model here (formularioSchema and formularioModel)

// // Establish the MongoDB connection
// const startServer = async () => {
//   try {
//     await ConectaNaDatabase();
//     console.log('Conexão com o banco estabelecida com sucesso');
//   } catch (error) {
//     console.error('Erro de conexão', error);
//     process.exit(1); // Exit the application on database connection error
//   }
// }
// const formulario = [
//     {id: 1, "NumerodaLinha": "312", "Nomeclatura": "Mustardinha", "Terminal": "San Martin","PontodeRetorno": "Rua do Sol"},
    
//   ]
//   app.get('/', (req, res) => {
//     res.status(200).send('Inicio');
//   }) 
//   app.get('/formulario', (req, res) => {
//       res.status(200).json(formulario)
//   })

//   app.post('/formulario', async (req, res) => {
//     try {
//       const data = req.body;
//       const result = await formularioModel.create(data);
//       res.status(201).json(result);
//     } catch (error) {
//       res.status(500).send('Falha ao salvar no banco');
//     }
//   });
  
//   app.get('/formulario', async (req, res) => {
//     try {
//       const data = await formularioModel.find();
//       res.status(200).json(data);
//     } catch (error) {
//       res.status(500).send('');
//     }
//   });
  
//   // Similarly, implement update and delete routes using formularioModel

//   app.put('/formulario/:id', (req, res) => {
//     let index = buscaPessoa(req.params.id);
//     formulario[index].Destino = req.body.Destino;
//     res.json(formulario);
//   })
//   app.put('/formulario/:id', (req, res) => {
//     let index = buscaPessoa(req.params.id);
//     formulario[index].Horáriodechegadanodestino = req.body.Horáriodechegadanodestino;
//     res.json(formulario);
//   })
  
//    app.get('/formulario/:id', (req, res)=>{
//     const index = buscaPessoa(req.params.id);
//     res.status(201).json(formulario[index]);

//    })

//    app.delete('/formulario/:id',(req, res)=>{
//       const id = req.params.id 
//       let newUsu =  buscaPessoa(id) 
//       formulario.pop(newUsu); 
//       res.status(201).send('Campo deletado!')
//    });

//   function buscaPessoa(id) {
//     return formulario.findIndex(formulario => formulario.id == id)
  // }
  export default app // preciso exporta para que outro arquivo fazer uso 

  	  

