
/**********************************************************************************************/
//VOTERS ROUTES

const Candidate = require('../Model/Candidate');
const express = require('express');
const router = express.Router();
const {createCandidate, getCandidate} = require('../Controller/Candidate');

/**********************************************************************************************/
// POST METHOD
router.post('/createCandidate',createCandidate);

/**********************************************************************************************/
router.get('/getCandidate',getCandidate);
// router.get('/task/:id',getTaskbyID);

/**********************************************************************************************/
//UPDATE DATA
// router.patch('/task/:id',updateTask);
/**********************************************************************************************/
// DELETE METHOD
// router.delete('/task/:id',deleteTask);
/**********************************************************************************************/
module.exports = router;