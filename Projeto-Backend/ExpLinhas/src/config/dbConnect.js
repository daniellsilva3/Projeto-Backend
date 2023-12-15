import mongoose from "mongoose";

async function ConectaNaDatabase(){

mongoose.connect("");


return mongoose.connection;

}

export default ConectaNaDatabase;

