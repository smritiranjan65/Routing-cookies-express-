mongoose = require("mongoose");
express = require("express");

app = express()

port = 3000
app.listen(port,() => {console.log(`running : ${port}`)})

mongoose.connect('mongodb://127.0.0.1:27017/aashu').then(() => {console.log('connected successfully')}).catch((error)=>console.log(error));

empSchema = mongoose.schema({
    name : {
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

employee = new mongoose.model('employee', empSchema)