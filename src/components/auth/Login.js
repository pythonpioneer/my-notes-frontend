import React, { useState, useRef } from 'react';
import { Grid, Box, Modal } from '@mui/material';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';

// styling for modal structure
const style = {
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
};

// to make request to api, we need host
const host = 'http://192.168.0.102:3100';

// writing function to validate the login
const validate = (values) => {
    const errors = {};

    if(!values.email) errors.email = 'Required';
    else if(values.email.length <= 0) errors.email = 'Enter a valid Email';

    if(!values.password) errors.password = 'Required';
    else if(values.password.length < 6) errors.password = 'Enter a valid Password';

    return errors;
};

export default function Login(props) {

    // state variables
    const [openEditor, setOpenEditor] = useState(true);  // for modal

    // to store data from all form fields
    const getEmail = useRef(null);
    const getPassword = useRef(null);
    const navigate = useNavigate();

    // to login the user
    const loginUser = (email, password) => {

        // to make api call
        axios.post(`${host}/api/v1/auth/loginuser`,
            JSON.stringify({ email: email, password: password }), {
            headers: {
                "Content-Type": 'application/json',
            },
        })
            .then((response) => {
                // now save the auth-token and redirect
                // console.log(response.data['auth-token'])
                localStorage.setItem('auth-token', response.data['auth-token']);
                navigate("/");
            })
            .catch(err => {
                alert('invalid Credential');
                console.log(err)
            })
    }

    // using formik for form validation
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {  // to login user after submission
            loginUser(values.email, values.password);
        },
    });

    return (
        <>
            <Modal className='d-flex justify-content-center'
                open={openEditor}
            >
                <Box sx={Object.assign(style, {})} className='box-register box-login'>

                <form onSubmit={formik.handleSubmit} className='grid-container-position'>
                    <Grid container className='grid-container-position' onSubmit={formik.handleSubmit}>

                        <div className='register-label' style={{ fontSize: "1.6em", fontFamily: "Georgia", fontWeight: 'bold' }}>Login Please</div>

                        {/* email */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input ref={getEmail} onChange={formik.handleChange} value={formik.values.email} id="email" name="email" type="email" className={formik.errors.email ? "errors email-field" : 'email-field'} style={{ ...{ fontFamily: "Georgia" } }} placeholder="Email" />
                        </Grid>

                        {/* password */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input ref={getPassword} onChange={formik.handleChange} value={formik.values.password} id="password" name="password" type="password" className={formik.errors.password ? "errors password-field" : "password-field"} style={{ ...{ fontFamily: "Georgia" } }} placeholder="Password"></input>
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <button id="button-field" type="submit">Login</button>
                            {/* onClick={handleClose} */}
                        </Grid>


                        {/* <Link className='account' to="/forgot-password">Forgot Password</Link> */}
                        <Link className='account' to="/signup">Register Here!!</Link>
                    </Grid>
                    </form>
                </Box>
            </Modal>
        </>
    )
}
