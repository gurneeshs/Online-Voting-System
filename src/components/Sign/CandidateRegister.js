
import "./SignUtils/CSS/Sign.css";
import "./SignUtils/CSS/CandidateRegister.css";
import "./SignUtils/CSS/style.css.map"
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import axios from "axios"
import { BASE_URL } from "../../helper";
import { useNavigate } from 'react-router-dom';


const CandidateRegister = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const CreationSuccess = () => toast.success("Candidate Created Successfully \n Click Anywhere to exit this screen", {
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
        setLoading(true);
        e.preventDefault();

        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        // console.log(formData);

        try {
            const response = await axios.post(`${BASE_URL}/createCandidate`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data.success) {
                CreationSuccess();
                setTimeout(() => {
                     navigate('/Candidate');
                }, 200)
            }
            else {
                CreationFailed()
            }
        }
        catch (error) {
            CreationFailed();
            console.error(error);
        }
        finally {
            setLoading(false);
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
                        <ToastContainer />

                            <form method="POST" enctype="multipart/form-data" className="register-form" id="register-form">
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
                                    {/* <input type="submit" name="signup" id="signup" className="form-submit" value="Create Candidate" /> */}
                                    <button onClick={handleSubmit} disabled={loading} className="form-submit">{loading ? <div className="spinner"></div> : 'Create Candidate'}</button>
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