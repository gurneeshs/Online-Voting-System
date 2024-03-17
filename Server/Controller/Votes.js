const Votes = require('../Model/Votes');


exports.getVotes = async (req,res)=>{
    const votes = await Votes.find();
    return res.json({success:true,votes});
}

