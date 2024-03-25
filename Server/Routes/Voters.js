/**********************************************************************************************/
//VOTERS ROUTES

const Voters = require('../Model/Voters');
const express = require('express');
const router = express.Router();
const { createVoter, getVoters, getVoterbyID } = require('../Controller/Voters');
const photoUpload = require('../Middleware/photoUpload');
const {login} = require('../Controller/login');
const multer = require('multer');
const { checkLogin } = require('../Middleware/checkLogin');
const upload = multer({ dest: './publicUploads/VoterPhotos' });

/**********************************************************************************************/
// POST METHOD
// photoUpload();
router.post('/createVoter', photoUpload, createVoter);

/**********************************************************************************************/
router.get('/getVoter', getVoters);

router.post('/login',login);

router.get('/getVoterbyID', getVoterbyID);




/**********************************************************************************************/
//UPDATE DATA
// router.patch('/task/:id',updateTask);
/**********************************************************************************************/
// DELETE METHOD
// router.delete('/task/:id',deleteTask);
/**********************************************************************************************/
module.exports = router;
