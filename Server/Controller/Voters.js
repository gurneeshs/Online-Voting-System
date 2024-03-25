// import Login from '../../Client/src/components/Sign/Login'
const bcrypt = require("bcrypt");
const path = require("path");
const multer = require('multer')


const Voters = require('../Model/Voters');
const { checkLogin } = require("../Middleware/checkLogin");

exports.createVoter = async (req, res) => {
    try {
        let newVoter;
        const hashedPassword = await bcrypt.hash(req.body.pass, 15);
        // console.log(req.file.filename);
        newVoter = new Voters({
            ...req.body,
            image: req.files[0].filename,
            pass: hashedPassword
        });
        // console.log(newVoter);
        // console.log(req.target.files[0]);
        await newVoter.save();
        return res.redirect("http://localhost:3000/Login");


    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message });
    }
}

exports.getVoters = async (req, res) => {
    const voter = await Voters.find();
    return res.json({ success: true, voter });
}

exports.getVoterbyID = async (req, res) => {
    try {
        const voterID = req.cookies.Voter;
        console.log(voterID);
        const voter = await Voters.findById(voterID);
        return res.json({ success: true, voter });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}

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