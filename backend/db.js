const mongoose = require('mongoose');
const mongoURI = `mongodb://localhost:27017/mynotebook`;

const connectToMongo = async () =>{
    mongoose.connect(mongoURI);
    console.log('connected to DB');
}

module.exports=connectToMongo;


