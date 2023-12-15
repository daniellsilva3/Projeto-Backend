
import linhas from "../models/linhas.js";




class linhasController{

 
   static async listarLinhas(req, res){
    try{
        const listarLinhas = await linhas.find({});
        res.status(200).json(listarLinhas);
    }
    catch(erro){
      res.status(500).json({message:`Erro ao listar Linhas- ${erro.message}`})
    }
   }
   //listar vagas por id
   static async listarLinhasPorId(req, res){
    try{
      
        const id = req.params.id;
        
        const linhaEncontrada = await linhas.findById({id});
        res.status(200).json(linhaEncontrada);
    }catch(erro){
        res.status(500).json({message:`erro ao listar Linha - ${erro.message}`});
    }
   }

   static async atualizarlinhas(req, res){
    try{
   
      const id = req.params.id
      await vaga.findByIdAndUpdate(id, req.body)
      res.status(200).json({message:`Linha atualizada com sucesso!`})

    }catch(erro){
      res.status(500).json({message:`erro ao atualizar Linha ${erro.message}`})
    }
   }


 
   static async cadastrarLinha(req, res){


   try{
        
       const vagaNova = await linhas.create(req.body);
      
       res.status(201).send({message:'Linha cadastrada com sucesso!', linhas:linhaNova});
   }
   catch(erro){
     
     res.status(500).json({error:`${erro.message}-falha ao cadastrar Linha`});
   }
 }
}

export default linhasController;
