const Candidate = require('../Model/Candidate');

exports.createCandidate = async (req,res)=>{
    try{
        console.log(req.body);

        const candidate = new Candidate(req.body);
        console.log(candidate);
        await candidate.save();
    
        return res.status(201).json({
            success:true,candidate
        });        
    }
    catch(e){
        return res.status(400).json({success:false,message:e.message});
    }
}

exports.getCandidate = async (req,res)=>{
    const candidate = await Candidate.find();
    return res.json({success:true,candidate});
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