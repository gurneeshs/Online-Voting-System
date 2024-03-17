
import "./SignUtils/CSS/Sign.css";
import signupimage from "./SignUtils/images/signup-image.jpg"
import { Link } from 'react-router-dom';
import "./SignUtils/CSS/style.css.map"
import Nav_bar from "../Navbar/Navbar";


const Signup = () => {
    return (
        <div >
            <Nav_bar/>
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Registration</h2>
                            <form method="POST" className="register-form" id="register-form" action="http://localhost:5000/createVoter">
                                <div className="form-group">
                                    <label for="firstName"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="firstName" id="firstName" placeholder="Your First Name" />
                                </div>
                                <div className="form-group">
                                    <label for="lastName"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="lastName" id="lastName" placeholder="Your Last Name" />
                                </div>
                                <div className="form-group">
                                    <label for="age"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="age" id="age" placeholder="Your Age" />
                                </div>
                                <div className="form-group">
                                    <label for="dob"><i className="zmdi zmdi-calendar-account material-icons-name"></i></label>
                                    <input type="date" name="dob" id="dob" placeholder="Your Date of Birth" />
                                </div>
                                <div className="form-group">
                                    <label for="voterid"><i className="zmdi zmdi-file-text material-icons-name"></i></label>
                                    <input type="number" name="voterid" id="voterid" placeholder="Your Voter ID" />
                                </div>
                                <div className="form-group">
                                    <label for="phone"><i className="zmdi zmdi-local-phone material-icons-name"></i></label>
                                    <input type="number" name="phone" id="phone" placeholder="Your Phone Number" />
                                </div>
                                <div className="form-group">
                                    <label for="photo"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="file" name="photo" id="photo" placeholder="Upload Your Photo" />
                                </div>
                                <div className="form-group">
                                    <label for="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                    <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={signupimage} alt="sing up image"/></figure>
                            <Link to='/Login' className="signup-image-link">I am already member</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Signup;