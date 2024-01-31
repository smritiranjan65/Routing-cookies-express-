mongoose = require("mongoose")
express = require("express")
app = express();
port = 3000;

app.listen(port , () =>{
    console.log(`running on ${port} successfully`)
})

mongoose.connect("mongodb://127.0.0.1:27017/Jyoti").then(() =>{
    console.log("connected successfully")}).catch((error) => {
        console.log(error);
    })

empSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        mobile: {
            type: Number,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        salary: {
            type: Number,
            required: true
        },
        married: {
            type: Boolean,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    })
employee = new mongoose.model('employee' , empSchema)

createEmp = new employee(
    {
        name : "Dams" ,
        mobile : 9546219901 ,
        age : 16 , 
        salary : 55000 ,
        married : true

    }
);
        
createEmp.save();
console.log("data gaya");