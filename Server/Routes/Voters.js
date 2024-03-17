/**********************************************************************************************/
//VOTERS ROUTES

const Voters = require('../Model/Voters');
const express = require('express');
const router = express.Router();
const {createVoter, getVoters} = require('../Controller/Voters');
const photoUpload = require('../Middleware/photoUpload');

/**********************************************************************************************/
// POST METHOD
router.post('/createVoter',createVoter);

/**********************************************************************************************/
router.get('/getVoter',getVoters);
// router.get('/task/:id',getTaskbyID);

/**********************************************************************************************/
//UPDATE DATA
// router.patch('/task/:id',updateTask);
/**********************************************************************************************/
// DELETE METHOD
// router.delete('/task/:id',deleteTask);
/**********************************************************************************************/
module.exports = router;
