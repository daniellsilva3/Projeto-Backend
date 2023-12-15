import express from "express";
import linhasController from '../controllers/linhasControllers.js'


const routes = express.Router();

routes.get("/formulario", linhasController.listarLinhas);
routes.get("/formulario/:id", linhasController.listarLinhasPorId);
routes.post("/formulario", linhasController.cadastrarLinha);
routes.put("/formulario/:id", linhasController.atualizarlinhas);

export default routes;
