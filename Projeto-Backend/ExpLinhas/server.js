import app from './src/app.js' 
const port = process.env.PORT || 3001; //defin porta para o ambiente de produção ou teste 


app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
  })
