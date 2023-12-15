import express from "express";
import linhasRoutes from "./linhasRoutes" //importando as rotas da vagas

//Agrupar todas as rotas que vamos receber

const routes=(app)=>{
    app.route("/").get((req, res)=>res.status(200).send("Inicio ExpressoLinhas"));

    // "use" é um metodo utilizado para incluir um middleware na instancia do express
    //o "use" receb dois parametros, o middleware e a rotas que estãao em vagasRoutes.js
    app.use(express.json(), linhasRoutes);
};

export default routes;