
import "./SignUtils/CSS/Sign.css";
import "./SignUtils/CSS/CandidateRegister.css";
import signupimage from "./SignUtils/images/signup-image.jpg"
import { Link } from 'react-router-dom';
import "./SignUtils/CSS/style.css.map"
import Nav_bar from "../Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import axios from "axios"
import { BASE_URL } from "../../helper";
import { useNavigate } from 'react-router-dom';
import { symbol } from "prop-types";


const CandidateRegister = () => {
    const navigate = useNavigate();
    const CreationSuccess = () => toast.success("Candidate Created Successfully", {
        // position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
    });
    const CreationFailed = () => toast.error("Invalid Details \n Please Try Again!",{
        // position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
    });


    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        party: '',
        bio: '',
        image: null,
        symbol: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0]
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
            const response = await axios.post(`${BASE_URL}/createCandidate`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            //   console.log(response.data);
            if (response.data.success) {
                CreationSuccess();
                // setTimeout(() => {
                //     navigate('/Candidate');
                // }, 2000)
            }
            else {
                // signFailed();
                CreationFailed()
            }
        }
        catch (error) {
            console.error(error);
        }
    };


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
                            <form method="POST" enctype="multipart/form-data" className="register-form" id="register-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="fullName"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} placeholder="Candidate Name" />
                                </div>
                                <div className="form-group">
                                    <label for="age"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="age" id="age" value={formData.age} onChange={handleChange} placeholder="Candidate Age" />
                                </div>
                                <div className="form-group">
                                    <label for="party"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="party" id="party" value={formData.party} onChange={handleChange} placeholder="Party Name" />
                                </div>
                                <div className="form-group">
                                    <label for="bio"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="text" name="bio" id="bio" value={formData.bio} onChange={handleChange} placeholder="Candidate Bio" />
                                </div>

                                <div className="form-group">
                                    <label for="image"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="file" name="image" id="image" onChange={handleFileChange} placeholder="Candidate's Photo" />
                                </div>
                                <div className="form-group">
                                    <label for="symbol"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                    <input type="file" name="symbol" id="symbol" onChange={handleFileChange} placeholder="Candidate Party Symbol" />
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