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

readData = async() => {
    try{
       data = await employee.find({ married: true}).select({ mobile:0}).limit(6).sort({salary: -1});
       //data = await employee.findOne()
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

readData();

//creatE1 = new employee(
//    {
//        name: "Siddhant Raj",
//        mobile: 8541011179,
//        age: 20,
//        salary: 40000,
//        married: true
//    }
//)
//
//creatE2 = new employee(
//    {
//        name: "Amit",
//        mobile: 574264726,
//        age: 10,
//        salary: 10000,
//        married: false
//    }
//)
//
//creatE3 = new employee(
//    {
//        name: "hasmukh",
//        mobile: 9113368190,
//        age: 19,
//        salary: 70000,
//        married: true
//    }
//)
//
//creatE4 = new employee(
//    {
//        name: "Damodar",
//        mobile: 70165351,
//        age: 22,
//        salary: 60000,
//        married: false
//    }
//)
//
//empD = employee.insertMany([creatE1,creatE2,//creatE3,creatE4]);
//console.log(empD);




// sync way
//createEmp = new employee(
//    {
//        name : "Smriti" ,
//        mobile : 7367016351,
//        age : 21 , 
//        salary : 30000 ,
//        married : false
//
//    }
//);
//        
//createEmp.save();
//console.log("data gaya");


