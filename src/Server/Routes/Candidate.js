
/**********************************************************************************************/
//VOTERS ROUTES

const Candidate = require('../Model/Candidate');
const express = require('express');
const router = express.Router();
const {candidatephotoUpload, candidateSymbolUpload} = require('../Middleware/photoUpload')
const {createCandidate, getCandidate, updateCandidate} = require('../Controller/Candidate');

/**********************************************************************************************/
// POST METHOD
router.post('/createCandidate',candidatephotoUpload, createCandidate);

/**********************************************************************************************/
router.get('/getCandidate',getCandidate);
// router.get('/task/:id',getTaskbyID);

/**********************************************************************************************/
// UPDATE DATA
router.patch('/getCandidate/:id',updateCandidate);
/**********************************************************************************************/
// DELETE METHOD
// router.delete('/task/:id',deleteTask);
/**********************************************************************************************/
module.exports = router;