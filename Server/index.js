// REQUIRE MONGOOSE & OTHER PACKAGES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const voterRoutes = require('./Routes/Voters');
const candidateRoutes = require('./Routes/Candidate');
const votesRoute = require('./Routes/Votes');
const bodyParser = require('body-parser');
const photoUpload = require('./Middleware/photoUpload');

// const multer = require('multer')
const {createVoter, getVoters} = require('./Controller/Voters');


const Voters = require('./Model/Voters');
const multer = require('multer');

// var cors = require('cors');
app.use(cors());


/**********************************************************************************************/

// CONNECTING THE DATABASE
mongoose.connect('mongodb://127.0.0.1:27017/OnlineVoting').then(()=>{
    console.log('database is connected');
}).catch((err)=>{
    console.log(err);
});

// app.use(multer);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); // Send JSON responses
/**********************************************************************************************/

app.use(voterRoutes);
app.use(candidateRoutes);
app.use(votesRoute);

// app.post('/createVoter',(req,res)=>{
//     // console.log(req.files[0]);
// })

const port = 5000;
app.listen(port, ()=>console.log(`server is running at port ${port}`));