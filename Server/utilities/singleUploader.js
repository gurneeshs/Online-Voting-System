// external inputs
const path = require("path");
const multer = require("multer");

const createError = require("http-errors");

function uploader(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_msg
){
    // Make Upload Object

    // File Upload Folder

    // Define the Storage
    const storage = multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,`publicUploads/${subfolder_path}`);
        },
        filename:(req,file,cb)=>{
            const fileExt = path.extname(file.originalname);
            const fileName = file.originalname.replace(fileExt,"").toLowerCase().split(" ").join("-") + "-" + Date.now();
            cb(null,fileName + fileExt);
        },
    })

    // Prepare the final multer upload object

    const upload = multer({
        storage:storage,
        limits:{
            fileSize:max_file_size,
        },
        // fileFilter: (req,file,cb)=>{
        //     if(allowed_file_types.includes(file.mimetype)){
        //         cb(null,true)
        //     }
        //     else{
        //         cb(createError(error_msg));
        //     }
        // }
    })
    return upload;
}

module.exports = uploader;