const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  let cookies = Object.keys(req.cookies).length > 0 ? req.cookies : null;

  if (cookies) 
  {
    next();
    // try {
    //   // token = cookies[process.env.COOKIE_NAME];
    //   // jwt.verify(token, process.env.JWT_SECRET, (err)=>{
    //   //   if (err) {
    //   //     return res.status(401).json({ message: 'Unauthorized' });
    //   //   }
    //   //   req.id = decoded._id;
    //     next();
  
      
    //   // pass user info to response locals
    //   // if (res.locals.html) {
    //   //   res.locals.loggedInUser = decoded;
    //   // }
    //   // res.redirect("http://localhost:3000/User")
    //   // next();
    // } catch (err) {
    //   if (res.locals.html) {
    //     res.redirect("/");
    //   } 
    //   else {
    //     res.status(500).json({
    //       errors: {
    //         common: {
    //           msg: "Authentication failure!",
    //         },
    //       },
    //     });
    //   }
    // }
  } 
  else {
    // if (res.locals.html) {
    //   res.redirect("/");
    // } else {
    //   res.status(401).json({
    //     error: "Authetication failure!",
    //   });
    // }
  }
};

const redirectLoggedIn = function (req, res, next) {
  let cookies = req.cookies.Voter;
  console.log(cookies);

  if (!cookies) {
    alert("Cookie not set");
  } else {
    // res.redirect("http://localhost:3000/Login");
    next();
  }
};

module.exports = {
  checkLogin,
  redirectLoggedIn,
};