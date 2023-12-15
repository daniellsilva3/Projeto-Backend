import mongoose from "mongoose";

async function ConectaNaDatabase(){

mongoose.connect("mongodb+srv://jd64320:admin123@cluster0.v1da4by.mongodb.net/ExpressoLinhas?retryWrites=true&w=majority");


return mongoose.connection;

}

export default ConectaNaDatabase;

