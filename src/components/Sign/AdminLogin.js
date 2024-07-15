import "./SignUtils/CSS/Sign.css"
import "./SignUtils/CSS/style.css.map"
import "./SignUtils/fonts/material-icon/css/material-design-iconic-font.min.css"
import signinimage from "./SignUtils/images/adminbanner.png"
import { useState} from 'react';
import Nav_bar from "../Navbar/Navbar";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../../helper";


const AdminLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const loginSuccess = () => toast.success("Login Success",{
        // position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
    });
    const loginFailed = () => toast.error("Invalid Details \n Please Try Again!",{
        // position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
    });

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/adminlogin`, { username, password });
            console.log(response.data)
            if(response.data.success){
                loginSuccess();
                setTimeout(()=>{
                    navigate('/Admin');
                },2000)
            }
            else{
                loginFailed();
            }
          } 
          catch (error) {
            console.error('Login failed:', error);
          }finally {
            setLoading(false);
          }
      
    };

    return (
        <div >
            <Nav_bar />
            <section className="sign-in">
                <div className="container">
                <p>Use admin as username and admin@123 as password</p>

                    <div className="signin-content">
                    
                        <div className="signin-image">
                            <figure><img src={signinimage} alt="sing up image" /></figure>
                        </div>

                        <div className="signin-form">
                            <h2 className="form-title">Admin Login</h2>
                            {/* <form method="" className="register-form" id="login-form"> */}
                            <ToastContainer />
                                <div className="form-group">
                                    <label for="email"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="email" id="email" placeholder="Enter Admin Username" onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="text" name="pass" id="pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group form-button">
                                    {/* <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" onSubmit={handleLogin} /> */}
                                    <button onClick={handleLogin} disabled={loading}>{loading ? <div className="spinner"></div> : 'Login'}</button>
                                    
                                </div>

                            {/* </form> */}
                        </div>
                    </div>

                </div>
            </section>

        </div>

    )
}
export default AdminLogin;