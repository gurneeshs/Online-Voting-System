const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

// internal imports
const Voter = require("../Model/Voters");
const Admin = require("../Model/Admin");
const { checkLogin } = require("../Middleware/checkLogin");


// Voter login
async function login(req, res, next) {
    try {
        // find user
        const voter = await Voter.findOne({
            email: req.body.username//either email or mobile
        })
        if (voter && voter._id) {
            const isValidPassword = await bcrypt.compare(
                req.body.password,
                voter.pass
            );
            if (isValidPassword) {
                const voterObject = {
                    id: voter._id,
                    Email: voter.email,
                    // VoterID: voter.voterid,
                };

                // Generate Token
                const token = jwt.sign(voterObject, process.env.JWT_SEC, {
                    expiresIn: process.env.JWT_EXPIRY,
                });
                res.json({ success: true , voterObject})

            }
            else {
                alert("Invalid Password")
                return res.status(400).json({ success: false });
            }
        }
        else {
            return res.json({ message: "Invalid Unsername or Password" });
        }

    }
    catch (e) {
        res.json("Login Failed 3");
    }
}
async function adminlogin(req, res, next) {
    try {
        // find user
        const admin = await Admin.findOne({
            username: req.body.username//either email or mobile
        })
        if (admin && admin._id) {

            if (admin.password==req.body.password) {
                const adminObject = {
                    id: admin._id,
                    username: admin.username,
                };
                res.json({ success: true , adminObject})

            }
            else {
                alert("Invalid Password")
                return res.status(400).json({ success: false });
            }
        }
        else {
            return res.json({ message: "Invalid Unsername or Password" });
        }

    }
    catch (e) {
        res.json("Login Failed");
    }
}

function logout(req, res) {
    res.clearCookie('Voter');
    // res.redirect("/Login");
    res.send("Logout");
}
module.exports = {
    // getLogin,
    login,
    logout,
    adminlogin,
}