// REQUIRE MONGOOSE & OTHER PACKAGES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
var session = require('express-session')
const dotenv = require("dotenv");
const path = require("path");

const voterRoutes = require('./Routes/Voters');
const candidateRoutes = require('./Routes/Candidate');
const votesRoute = require('./Routes/Votes');
const loginRoute = require('./Routes/login');
const bodyParser = require('body-parser');
const photoUpload = require('./Middleware/photoUpload');

// const multer = require('multer')
const { createVoter, getVoters } = require('./Controller/Voters');
const DB = "mongodb+srv://gsnarang:kqdzddJCjxRanlGO@atlascluster.4ambzdp.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster"


const Voters = require('./Model/Voters');
const multer = require('multer');

// var cors = require('cors');
app.use(cors());
dotenv.config();

/**********************************************************************************************/

// CONNECTING THE DATABASE
mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log('database is connected');
}).catch((err) => {
    console.log(err);
});

// app.use(multer);
app.use(express.static(path.join(__dirname, ".", "build")))
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Send JSON responses
/**********************************************************************************************/

app.use(voterRoutes);
app.use(candidateRoutes);
app.use(votesRoute);

// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, ".", "build", "index.html"))
// })
// app.use((_, res) => {
//     res.send({
//         message: 'Not found!'
//     })
// });
// app.post('/createVoter',(req,res)=>{
//     // console.log(req.files[0]);
// })

const port = 5000;
app.listen(port, () => console.log(`server is running at port ${port}`));