
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
                            <form method="POST" enctype="multipart/form-data" className="register-form" id="register-form" action="https://online-voting-system-smoky.vercel.app/createCandidate"  >
                                <div className="form-group">
                                    <label for="fullName"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="fullName" id="fullName" placeholder="Candidate Name" />
                                </div>
                                <div className="form-group">
                                    <label for="age"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="age" id="age" placeholder="Candidate Age" />
                                </div>
                                <div className="form-group">
                                    <label for="party"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="party" id="party" placeholder="Party Name" />
                                </div>
                                <div className="form-group">
                                    <label for="bio"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="bio" id="bio" placeholder="Candidate Bio" />
                                </div>

                                <div className="form-group">
                                    <label for="image"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="file" name="image" id="image" placeholder="Candidate's Photo" />
                                </div>
                                <div className="form-group">
                                    <label for="symbol"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="file" name="symbol" id="symbol" placeholder="Candidate Party Symbol" />
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