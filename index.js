
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/adminRoutes");
const connectDB = require('./config/db'); 
const dotenv = require("dotenv");

require("dotenv").config();

const app = express();
 
app.use(cors());
app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use("/", studentRoutes);
app.use("/", authRoutes);

const PORT = 5040;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); 

// const express= require("express")
// const mongoose=require("mongoose")
// const cors=require("cors")
// const bodyParser=require("body-parser")
// const bcrypt=require("bcryptjs")
// const jwt=require("jsonwebtoken")
// const app=express()
// require("dotenv").config();

// app.use(cors())
// app.use(bodyParser.json())

// mongoose.connect(process.env.MONGO_URI)
// .then(()=> console.log("Connected"))
// .catch((err)=> console.log(err))

// const studentSchema = new mongoose.Schema({
//     name:String,
//     class:String,
//     gender:String,
//     batchYear:Number
// })

// const Student= mongoose.model("student",studentSchema)

// app.post("/student",async(req,res) =>{
//     const{name,class:studentClass,batchYear,gender}=req.body;
//     const newStudent= new Student({name,class:studentClass,batchYear,gender})
//     await newStudent.save()
//     res.json(newStudent)
// })

// app.get("/students",async(req,res)=>{
//     try{
//         const students= await Student.find()
//         res.json(students)
//     }catch(err){
//         res.status(500).json({message:err.message})
//     }
// })

// app.get("/students/:id",async(req,res) =>{
//     try{
//         const student= await Student.findById(req.params.id)
//         if(!student) return res.status(404).json({message:"Student not found"})
//             res.json(student)
//     }catch(error){
//         res.status(500).json({message:error.message})
//     }
// })

// app.delete("/students/:id",async(req,res)=>{
//     try{
//         await Student.findByIdAndDelete(req.params.id);
//         res.json({message:"Student deleted"})
//     }catch(error){
//         res.status(500).json({message:error.message})
//     }
// })

// const AdminSchema= new mongoose.Schema({
//     username:{type:String,required:true,unique:true},
//     password:{type:String,required:true}
// })
// const Admin = mongoose.model("auths",AdminSchema)

// app.post("/login",async(req,res) =>{
//     const {username,password}=req.body;
//     try{
//         const admin= await Admin.findOne({username})
//         if(!admin) return res.status(404).json({message:"Admin not found"})

//             const isMatch= await bcrypt.compare(password,admin.password)
//             if(!isMatch) return res.status(400).json({message:"Invalid credentials"})

//                 const token=jwt.sign({id:admin._id},process.env.JWT_SECRET,{expiresIn:"1h"})
//                 console.log(token)
//                 res.json({token})
//     }catch(error){
//         res.status(500).json({message:error.message})
//     }
// })


// const PORT=5040;
// app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`))

