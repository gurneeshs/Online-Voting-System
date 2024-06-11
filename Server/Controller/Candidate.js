const Candidate = require('../Model/Candidate');

exports.createCandidate = async (req, res) => {
    try {
        const candidate = new Candidate({
            ...req.body,
            img: req.files[0].filename,
            symbol: req.files[1].filename,
        });
        await candidate.save();

        // return res.status(201).json({
        //     success: true, candidate
        // });
        return res.json({success:true});

    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message });
    }
}

exports.getCandidate = async (req, res) => {
    const candidate = await Candidate.find();
    return res.json({ success: true, candidate });
}

// exports.getTaskbyID = async (req,res)=>{
//     const task = await Task.findById(req.params.id);
//     return res.json({success:true,task});
// }

exports.updateCandidate = async (req, res) => {
    try {
        const candidateId = req.params.id;
        // Find the candidate by ID
        const candidate = await Candidate.findById(candidateId);
        // Update the candidate's vote count
        candidate.votes += 1;
        // Save the updated candidate
        await candidate.save();
        res.json(candidate);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

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