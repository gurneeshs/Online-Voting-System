
/**********************************************************************************************/
//VOTERS ROUTES

const Candidate = require('../Model/Candidate');
const express = require('express');
const router = express.Router();
const multer = require('multer')
const { createCandidate, getCandidate, updateCandidate, deleteCandidate } = require('../Controller/Candidate');
const upload = multer({ dest: 'uploads/' });


/**********************************************************************************************/
// POST METHOD
router.post('/createCandidate',upload.fields([{ name: 'image' }, { name: 'symbol' }]), createCandidate);

/**********************************************************************************************/
router.get('/getCandidate', getCandidate);
// router.get('/task/:id',getTaskbyID);

/**********************************************************************************************/
// UPDATE DATA
router.patch('/getCandidate/:id', updateCandidate);

router.delete('/deleteCandidate/:id', deleteCandidate);
/**********************************************************************************************/
// DELETE METHOD
// router.delete('/task/:id',deleteTask);
/**********************************************************************************************/
module.exports = router;