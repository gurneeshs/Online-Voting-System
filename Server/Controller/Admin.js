const Voters = require('../Model/Voters');
const Candidate = require('../Model/Candidate');


exports.getDashboardData = async (req, res) => {
    const candidateCount = await Candidate.countDocuments();
    const voterCount = await Voters.countDocuments();
    const votersVoted = await Voters.countDocuments({voteStatus:true});
    const DashboardData = {
        candidateCount,
        voterCount,
        votersVoted
    }
    return res.json({ success: true, DashboardData });
}
