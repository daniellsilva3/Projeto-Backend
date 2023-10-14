import mongoose from "mongoose";

async function ConectaNaDatabase(){

mongoose.connect("mongodb+srv://user2003:admin1234@cluster0.0thuhqo.mongodb.net/ExpLinhas?retryWrites=true&w=majority&appName=AtlasApp");


return mongoose.connection;

}

export default ConectaNaDatabase;

