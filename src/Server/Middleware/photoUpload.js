const uploader = require("../utilities/singleUploader");
function photoUpload(req,res,next){
    const upload = uploader(
        // Parameters
        "VoterPhotos", 
        ["image/jpeg","image/jpg","image/png"], 
        10000000,
        "Only .jpg, jpeg, png format allowed"
    );

    upload.any()(req,res,(err)=>{
        if(err){
            res.status(500).json({
                error:{
                    avatar:{
                        msg:err.message,
                    }
                }
            })
        }
        else{
            next();
        }
    });
}
function candidatephotoUpload(req,res,next){
    const upload = uploader(
        // Parameters
        "CandidatePhotos", 
        ["image/jpeg","image/jpg","image/png"], 
        10000000,
        "Only .jpg, jpeg, png format allowed"
    );

    upload.any()(req,res,(err)=>{
        if(err){
            res.status(500).json({
                error:{
                    avatar:{
                        msg:err.message,
                    }
                }
            })
        }
        else{
            next();
        }
    });
}
function candidateSymbolUpload(req,res,next){
    const upload = uploader(
        // Parameters
        "CandidateSymbol", 
        ["image/jpeg","image/jpg","image/png"], 
        10000000,
        "Only .jpg, jpeg, png format allowed"
    );

    upload.any()(req,res,(err)=>{
        if(err){
            res.status(500).json({
                error:{
                    avatar:{
                        msg:err.message,
                    }
                }
            })
        }
        else{
            next();
        }
    });
}

module.exports = {photoUpload,candidatephotoUpload, candidateSymbolUpload};