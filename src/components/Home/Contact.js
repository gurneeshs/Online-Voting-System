import React, { useState } from 'react';
import './CSS/contact.css'
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // const sendingSuccess = (msg) => toast.success(msg, {
    //     // position: toast.POSITION.TOP_CENTER,
    //     className: "toast-message",
    // });
    const sendingFailed = (msg) => toast.error(msg, {
        // position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
    });

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };
        if (!name) {
            sendingFailed("Please Fill All the fields");
            setLoading(false);
        }
        else {
            try {
                emailjs.send('service_nxpm74r', 'template_so5nfd8', templateParams, 'AX5QPEWUDd7UZrPe9')
                    .then((response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        setSuccessMessage('Your query has been sent successfully!');
                        setName('');
                        setEmail('');
                        setMessage('');
                    }, (error) => {
                        console.error('FAILED...', error);
                        setErrorMessage('There was an error sending your query. Please try again.');
                    });
            } catch (error) {
                console.log(error)
                setErrorMessage('There was an error sending your query. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <ToastContainer />
            <form>
                <div className='contact-field'>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder='Enter Your Name'
                    />
                </div>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Enter Your Email'
                    />
                </div>
                <div>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder='Enter Your Message'
                    />
                </div>
                <button onClick={handleSubmit} disabled={loading}>{loading ? <div className="spinner"></div> : 'Send'}</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default Contact;
