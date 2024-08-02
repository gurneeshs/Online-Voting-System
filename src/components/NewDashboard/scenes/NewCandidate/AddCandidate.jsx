import { Box, Button, TextField } from "@mui/material";
import { Input, FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../newComponents/Header";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import axios from "axios"
import { BASE_URL } from "../../../../helper";
import { useNavigate } from 'react-router-dom';


const AddCandidate = () => {
    const [theme, colorMode] = useMode();
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const CreationSuccess = () => toast.success("Candidate Created Successfully \n Click Anywhere to exit this screen", {
        // position: toast.POSITION.TOP_CENTER,
        className: "toast-message",
    });
    const CreationFailed = () => toast.error("Invalid Details \n Please Try Again!", {
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




    // const handleFormSubmit = (values) => {
    //     console.log(values);
    // };

    return (<ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="appNew">
                <Sidebar />
                <main className="content">
                    <Topbar />
                    <ToastContainer/>
                    <Box m="0px 20px">
                        <Header title="CREATE NEW CANDIDATE" subtitle="Create a New Candidate Profile" />
                        <br></br>

                        <Formik
                            // onSubmit={handleFormSubmit}
                            method="POST"
                            enctype="multipart/form-data"
                            initialValues={initialValues}
                            validationSchema={checkoutSchema}
                            sx={{ m: "10px 0px" }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleBlur,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <Box
                                        display="grid"
                                        gap="20px"
                                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                        sx={{
                                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                        }}
                                    >
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="text"
                                            label="Candidate Name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.fullName}
                                            name="fullName"
                                            error={!!touched.fullName && !!errors.fullName}
                                            helperText={touched.fullName && errors.fullName}
                                            sx={{ gridColumn: "span 4" }}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="text"
                                            label="Candidate Age"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.age}
                                            name="age"
                                            error={!!touched.age && !!errors.age}
                                            helperText={touched.age && errors.age}
                                            sx={{ gridColumn: "span 2" }}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="text"
                                            label="Candidate Party"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.party}
                                            name="party"
                                            error={!!touched.party && !!errors.party}
                                            helperText={touched.party && errors.party}
                                            sx={{ gridColumn: "span 2" }}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="text"
                                            label="Candidate Bio"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.bio}
                                            name="bio"
                                            error={!!touched.bio && !!errors.bio}
                                            helperText={touched.bio && errors.bio}
                                            sx={{ gridColumn: "span 4" }}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="file"
                                            label="Candidate Image"
                                            onBlur={handleBlur}
                                            onChange={handleFileChange}
                                            value={values.image}
                                            name="image"
                                            error={!!touched.image && !!errors.image}
                                            helperText={touched.image && errors.image}
                                            sx={{ gridColumn: "span 2" }}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="file"
                                            label="Party Symbol"
                                            onBlur={handleBlur}
                                            onChange={handleFileChange}
                                            value={values.symbol}
                                            name="symbol"
                                            error={!!touched.symbol && !!errors.symbol}
                                            helperText={touched.symbol && errors.symbol}
                                            sx={{ gridColumn: "span 2" }}
                                        />
                                    </Box>
                                    <Box display="flex" justifyContent="end" mt="20px">
                                        <Button onClick={handleSubmit} disabled={loading} color="secondary" variant="contained">
                                            {loading ? <div className="spinner"></div> : 'Create Candidate'}
                                        </Button>
                                    </Box>
                                </form>
                            )}
                        </Formik>
                    </Box>

                </main>
            </div>
        </ThemeProvider>
    </ColorModeContext.Provider>

    )
};
/*
    
*/
const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    age: yup.string().required("required"),
    party: yup.string().required("required"),
    bio: yup
        .string().required("required"),
});
const initialValues = {
    firstName: "",
    age: "",
    party: "",
    bio: "",
    image: "",
    symbol: "",
};

export default AddCandidate;