import express from "express";
import linhasController from '../controllers/linhasControllers.js'

//metodo especifico  para gestão de rotas
const routes = express.Router();

//passar a rota e controller como parametro
routes.get("/formulario", vagasController.listarVagas);
routes.get("/formulario/:id", vagasController.listarVagasPorId);
routes.post("/formulario", vagasController.cadastrarVaga);
routes.put("/formulario/:id", vagasController.atualizarVaga);

export default routes;