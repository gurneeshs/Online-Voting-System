
const bcrypt = require("bcrypt");
const path = require("path");
const multer = require('multer')

const Voters = require('../Model/Voters');

exports.createVoter = async(req,res)=>{
    try{
        let newVoter;
        // const hashedPassword = await bcrypt.hash(req.body.password, 15);
        // console.log(req.file.filename);
        newVoter = new Voters({
            ...req.body,
            image:req.files[0].filename,
            // password:hashedPassword
        });
        // console.log(newVoter);
        // console.log(req.target.files[0]);
        await newVoter.save();

        return res.status(200).json("data createdd successfully");
    
                
    }
    catch(e){
        return res.status(400).json({success:false,message:e.message});
    }
}

exports.getVoters = async (req,res)=>{
    const voter = await Voters.find();
    return res.json({success:true,voter});
}

// exports.getTaskbyID = async (req,res)=>{
//     const task = await Task.findById(req.params.id);
//     return res.json({success:true,task});
// }

// exports.updateTask = async (req,res)=>{
//     try{
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});

//         if(!task){
//             return res.status(404).json({
//                 success:false,
//                 message:'Task not found'})
//         }
//         return res.json({
//             success:true,
//             task
//         });
//     }
//     catch(e){
//         return res.status(400).json({
//             success:false,
//             message:e.message
//         })
//     }
// }

// exports.deleteTask = async (req,res)=>{
//     try{
//         const task  = await Task.findByIdAndDelete(req.params.id);
//         if(!task){
//                 return res.status(404).json({
//                     success:false,
//                     message:'User not found'})
//             }
//             return res.json({
//                 success:true,
//                 task
//             });
//     }
//     catch(e){
//         return res.status(400).json({
//             success:false,
//             message:e.message
//         })
//     }
// }