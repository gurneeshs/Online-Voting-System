
import "./SignUtils/CSS/Sign.css";
import "./SignUtils/CSS/CandidateRegister.css";
import signupimage from "./SignUtils/images/signup-image.jpg"
import { Link } from 'react-router-dom';
import "./SignUtils/CSS/style.css.map"
import Nav_bar from "../Navbar/Navbar";
import { useState } from "react";
import axios from "axios"

const CandidateRegister = () => {
    return (
        <div >
            <section className="Candidatesignup">
            <div className="FormTitle">
                            <h2>New Candidate</h2>
                        </div>
  
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            {/* <h2 className="form-title">Registration</h2> */}
                            <form method="POST" enctype="multipart/form-data" className="register-form" id="register-form" action="http://localhost:5000/createVoter"  >
                                <div className="form-group">
                                    <label for="firstName"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="firstName" id="firstName" placeholder="First Name" />
                                </div>
                                <div className="form-group">
                                    <label for="lastName"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                </div>
                                <div className="form-group">
                                    <label for="age"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="age" id="age" placeholder="Age" />
                                </div>
                                <div className="form-group">
                                    <label for="dob"><i className="zmdi zmdi-calendar-account material-icons-name"></i></label>
                                    <input type="date" name="dob" id="dob" placeholder="Date of Birth" />
                                </div>
                                <div className="form-group">
                                    <label for="voterid"><i className="zmdi zmdi-file-text material-icons-name"></i></label>
                                    <input type="number" name="voterid" id="voterid" placeholder="Candidate ID" />
                                </div>
                                <div className="form-group">
                                    <label for="image"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="file" name="image" id="image" placeholder="Upload Your Photo" />
                                </div>
                                <div className="form-group">
                                    <label for="email"><i className="zmdi zmdi-email"></i></label>
                                    <input type="email" name="email" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" name="pass" id="pass" placeholder="Password" />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Create Candidate" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default CandidateRegister;