const Candidate = require('../Model/Candidate');
const {uploadFile} = require('../Middleware/googledrive')

exports.createCandidate = async (req, res) => {
    try {
        const photo1Path = req.files.image[0].path;
        const photo2Path = req.files.symbol[0].path;

        const photo1Name = req.files.image[0].originalName;
        const photo2Name = req.files.symbol[0].originalName;

        const folderId1 = '19zEIt8Uo3HepCJkAPhfinNH6Gk2kUAxQ';
        const folderId2 = '1wGLR2Unm09s4M7T1y9hl8RbW_u0u76HG';

        const photo1Url = await uploadFile(photo1Path, photo1Name, folderId1);
        const photo2Url = await uploadFile(photo2Path, photo2Name, folderId2);


        const candidate = new Candidate({
            ...req.body,
            img: photo1Url,
            symbol: photo2Url,
        });
        await candidate.save();

        // return res.status(201).json({
        //     success: true, candidate
        // });
        return res.json({ success: true });

    }
    catch (e) {
        return res.status(400).json({ success: false, message: e.message });
    }
}

exports.getCandidate = async (req, res) => {
    const candidate = await Candidate.find();
    return res.json({ success: true, candidate });
}


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

exports.deleteCandidate = async (req, res) => {
    try {
        console.log(req.params.id);
        const candidate = await Candidate.findByIdAndDelete(req.params.id);
        if (!candidate) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        return res.json({
            success: true,
        });
    }
    catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message
        })
    }
}