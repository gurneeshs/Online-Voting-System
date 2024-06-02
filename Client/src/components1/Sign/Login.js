import "./SignUtils/CSS/Sign.css"
import "./SignUtils/CSS/style.css.map"
import "./SignUtils/fonts/material-icon/css/material-design-iconic-font.min.css"
import ScriptTag from 'react-script-tag';
import signinimage from "./SignUtils/images/signin-image.jpg"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav_bar from "../Navbar/Navbar";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';
import User from '../User/User';
import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();


const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const loginSuccess = () => toast.success("Login Success",{
        // position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
    });
    const loginFailed = () => toast.error("Invalid Details \n Please Try Again!",{
        // position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
    });

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://online-voting-system-smoky.vercel.app/login', { username, password });
            console.log(response.data.success); // Assuming backend sends a token upon successful login
            // Redirect or perform any action after successful login
            if(response.data.success){
                loginSuccess();
                setTimeout(()=>{
                    navigate('/User');
                },2000)
            }
            else{
                loginFailed();
            }
          } 
          catch (error) {
            console.error('Login failed:', error);
            // Handle login failure (display error message, etc.)
          }
      
    };

    return (
        <div >
            <Nav_bar />
            <section className="sign-in">
                <div className="container">

                    <div className="signin-content">
                    
                        <div className="signin-image">
                            <figure><img src={signinimage} alt="sing up image" /></figure>
                            <Link to="/Signup" className="signup-image-link">Create an account</Link>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Sign In</h2>
                            {/* <form method="" className="register-form" id="login-form"> */}
                            <ToastContainer />
                                <div className="form-group">
                                    <label for="email"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Enter Email" onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                    <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                </div>
                                <div className="form-group form-button">
                                    {/* <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" onSubmit={handleLogin} /> */}
                                    <button onClick={handleLogin}>Login</button>
                                    
                                </div>
                            {/* </form> */}
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                    <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}
export default Login;