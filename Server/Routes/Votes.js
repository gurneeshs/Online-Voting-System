/**********************************************************************************************/
//VOTERS ROUTES

const Votes = require('../Model/Votes');
const express = require('express');
const router = express.Router();
const {getVotes} = require('../Controller/Votes');

/**********************************************************************************************/
router.get('/getVotes',getVotes);
// router.get('/task/:id',getTaskbyID);

/**********************************************************************************************/
//UPDATE DATA
// router.patch('/task/:id',updateTask);
/**********************************************************************************************/
// DELETE METHOD
// router.delete('/task/:id',deleteTask);
/**********************************************************************************************/
module.exports = router;
