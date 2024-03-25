const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

// internal imports
const Voter = require("../Model/Voters");
const { checkLogin } = require("../Middleware/checkLogin");


// Voter login
async function login(req, res, next) {
    try {
        // find user
        const voter = await Voter.findOne({
            email:req.body.email//either email or mobile
        })
        if (voter && voter._id) {
            const isValidPassword = await bcrypt.compare(
                req.body.pass,
                voter.pass
            );
            if (isValidPassword) {
                const voterObject = {
                    id: voter._id,
                    Email: voter.email,
                    // VoterID: voter.voterid,
                };

                // Generate Token
                // const token = jwt.sign(voterObject, process.env.JWT_SEC, {
                //     expiresIn: process.env.JWT_EXPIRY,
                // });
                // // Set Cookie
                // console.log(voterObject);
                res.cookie('Voter', voter._id, {
                    maxAge: process.env.JWT_EXPIRY,
                    httpOnly: true,
                    // signed: true,
                })

                res.locals.loggedInUser = voterObject;
                // console.log(res.locals.loggedInUser);
                res.redirect("http://localhost:3000/User");
                
                
            }
            else {
                throw createError("Login Failed 1")
            }
        }
        else {
            throw createError("Login Failed 2");
        }

    }
    catch (e) {
        // res.render("index",{
        //     data:{
        //         username:req.body.username,
        //     },
        //     errors:{
        //         common:{
        //             msg:e.message,
        //         }
        //     }
        // })
        res.json("Login Failed 3");
    }
}

// function logout(req,res){
//     res.clearCookie(process.env.COOKIE_NAME);
//     res.send("Logged Out User");
// }
module.exports = {
    // getLogin,
    login,
    // logout,
}