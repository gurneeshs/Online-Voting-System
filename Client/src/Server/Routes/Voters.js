/**********************************************************************************************/
//VOTERS ROUTES

const Voters = require('../Model/Voters');
const express = require('express');
const router = express.Router();
const { createVoter, getVoters, getVoterbyID, updateVoter } = require('../Controller/Voters');
const {photoUpload} = require('../Middleware/photoUpload');
const {login, logout} = require('../Controller/login');
const multer = require('multer');
const { checkLogin, redirectLoggedIn } = require('../Middleware/checkLogin');
const upload = multer({ dest: './publicUploads/VoterPhotos' });

/**********************************************************************************************/
// POST METHOD
// photoUpload();
router.post('/createVoter', photoUpload, createVoter);

/**********************************************************************************************/
router.get('/getVoter', getVoters);

router.post('/login',login);

router.post('/logout',logout);

router.get('/getVoterbyID',redirectLoggedIn, getVoterbyID);




/**********************************************************************************************/
//UPDATE DATA
router.patch('/updateVoter/:id',updateVoter);
/**********************************************************************************************/
// DELETE METHOD
// router.delete('/task/:id',deleteTask);
/**********************************************************************************************/
module.exports = router;
