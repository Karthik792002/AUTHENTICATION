
const mongoose  = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/registerform");


connect.then(()=>{
    console.log("Database connected succesfuly");
})
.catch(()=>{
    console.log("database cannot be connected");
});

const RegisterFormSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true
    }
});


const collection = new mongoose.model("logindetails", RegisterFormSchema);

module.exports = collection;