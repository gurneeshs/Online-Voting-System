/**********************************************************************************************/
//VOTERS ROUTES

const Voters = require('../Model/Voters');
const express = require('express');
const router = express.Router();
const { createVoter, getVoters, getVoterbyID, updateVoter, deleteVoter } = require('../Controller/Voters');
const {photoUpload} = require('../Middleware/photoUpload');
const {login, logout} = require('../Controller/login');
const multer = require('multer');
const { checkLogin, redirectLoggedIn } = require('../Middleware/checkLogin');
const upload = multer({ dest: 'uploads/' });


/**********************************************************************************************/
// POST METHOD
// photoUpload();
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
router.post('/createVoter', upload.single('image'), createVoter);

/**********************************************************************************************/
router.get('/getVoter', getVoters);

router.post('/login',login);

router.post('/logout',logout);

router.get('/getVoterbyID/:id', getVoterbyID);




/**********************************************************************************************/
//UPDATE DATA
router.patch('/updateVoter/:id',updateVoter);
/**********************************************************************************************/
// DELETE METHOD
router.delete('/deleteVoter/:id',deleteVoter);
/**********************************************************************************************/
module.exports = router;
