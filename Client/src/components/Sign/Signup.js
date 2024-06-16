
import "./SignUtils/CSS/Sign.css";
import signupimage from "./SignUtils/images/signup-image.jpg"
import { Link } from 'react-router-dom';
import "./SignUtils/CSS/style.css.map"
import Nav_bar from "../Navbar/Navbar";
import { useState } from "react";
import axios from "axios"
import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../../helper";
import { useNavigate } from 'react-router-dom';



export default function Signup() {
    const navigate = useNavigate();

    const signSuccess = () => toast.success("Voter Created Successfully \n Redirecting You To Login Page", {
        // position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
    });
    const signFailed = () => toast.error("Invalid Details \n Please Try Again!",{
        // position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
    });
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        dob: '',
        voterid: '',
        phone: '',
        image: null,
        email: '',
        pass: '',
        re_pass: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.post(`${BASE_URL}/createVoter`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            //   console.log(response.data);
            if (response.data.success) {
                signSuccess();
                setTimeout(() => {
                    navigate('/Login');
                }, 2000)
            }
            else {
                signFailed();
            }
        } 
        catch (error) {
        console.error(error);
    }
};


return (
    <div className="Sign-Container" >
        <Nav_bar />
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Registration</h2>
                        <form method="POST" enctype="multipart/form-data" className="register-form" id="register-form" onSubmit={handleSubmit}>
                            <ToastContainer />
                            <div className="form-group">
                                <label for="firstName"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} placeholder="Your First Name" />
                            </div>
                            <div className="form-group">
                                <label for="lastName"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Your Last Name" />
                            </div>
                            <div className="form-group">
                                <label for="age"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="age" id="age" value={formData.age} onChange={handleChange} placeholder="Your Age" />
                            </div>
                            <div className="form-group">
                                <label for="dob"><i className="zmdi zmdi-calendar-account material-icons-name"></i></label>
                                <input type="date" name="dob" id="dob" value={formData.dob} onChange={handleChange} placeholder="Your Date of Birth" />
                            </div>
                            <div className="form-group">
                                <label for="voterid"><i className="zmdi zmdi-file-text material-icons-name"></i></label>
                                <input type="number" name="voterid" id="voterid" value={formData.voterid} onChange={handleChange} placeholder="Your Voter ID" />
                            </div>
                            <div className="form-group">
                                <label for="phone"><i className="zmdi zmdi-local-phone material-icons-name"></i></label>
                                <input type="number" name="phone" id="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" />
                            </div>
                            <div className="form-group">
                                <label for="image"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="file" name="image" id="image" onChange={handleFileChange} placeholder="Upload Your Photo" />
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" value={formData.pass} onChange={handleChange} placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" value={formData.re_pass} onChange={handleChange} placeholder="Repeat your password" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={signupimage} alt="sing up image" /></figure>
                        <Link to='/Login' className="signup-image-link">I am already member</Link>
                    </div>
                </div>
            </div>
        </section>

    </div>
)

}
