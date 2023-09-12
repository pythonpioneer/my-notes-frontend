import React, { useState, useRef } from 'react';
import { Grid, Box, Modal } from '@mui/material';
import './style.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

// styling for modal structure
const style = {
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
};

// to make request to api, we need host
const host = 'http://192.168.0.102:3100';

export default function Login() {
    // state variables
    const [openEditor, setOpenEditor] = useState(true);  // for modal

    // to store data from all form fields
    const getName = useRef(null);
    const getEmail = useRef(null);
    const getPassword = useRef(null);
    const getConfirmPassword = useRef(null);
    const navigate = useNavigate();

    // to register user
    const registerUser = (name, email, password) => {

        // to make the api call
        axios.post(`${host}/api/v1/auth/createuser`,
            JSON.stringify({ name: name, email: email, password: password }), {
            headers: {
                "Content-Type": 'application/json',
            },
        })
            .then((response) => {
                // now save the auth-token and redirect
                // console.log(response.data['auth-token'])
                localStorage.setItem('auth-token', response.data['auth-token']);
                navigate("/login");
            })
            .catch(err => {
                alert('invalid Credential');
                navigate("/login");
                console.log(err)
            })
    }

    // using formik for form validation
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: values => {  // to signing user after submission
            if (values.password === values.confirmPassword) {
                const name = values.name;
                const email = values.email;
                const password = values.password;
    
                registerUser(name, email, password);
            }
            else {
                navigate('/signup');
            }
        },
    });

    // to call login user
    const loggingUser = () => {
        if (getPassword.current.value === getConfirmPassword.current.value) {
            const name = getName.current.value;
            const email = getEmail.current.value;
            const password = getPassword.current.value;

            registerUser(name, email, password);
        }
        else {
            navigate('/signup');
        }
    };

    return (
        <>
            <Modal className='modal-position d-flex justify-content-center'
                open={openEditor}
            >
                <Box sx={Object.assign(style, {})} className='box-register'>

                    <form onSubmit={formik.handleSubmit}>
                        <Grid container className='grid-container-position'>

                            <div className='register-label' style={{ fontSize: "1.6em", fontFamily: "Georgia", fontWeight: 'bold' }}>Register Please</div>

                            {/* Name */}
                            <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                                <input onChange={formik.handleChange} value={formik.values.name} ref={getName} id='name' className="name-field" style={{ ...{ fontFamily: "Georgia" } }} placeholder="Name"></input>
                            </Grid>

                            {/* email */}
                            <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                                <input onChange={formik.handleChange} value={formik.values.email} ref={getEmail} id='email' className="email-field" style={{ ...{ fontFamily: "Georgia" } }} placeholder="Email" />
                            </Grid>

                            {/* password */}
                            <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                                <input onChange={formik.handleChange} value={formik.values.password} ref={getPassword} id='password' className="password-field" type="password" style={{ ...{ fontFamily: "Georgia" } }} placeholder="Password"></input>
                            </Grid>

                            {/* confirm password */}
                            <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                                <input onChange={formik.handleChange} value={formik.values.confirmPassword} ref={getConfirmPassword} id='confirmPassword' className="password-field" type="password" style={{ ...{ fontFamily: "Georgia" } }} placeholder="Confirm Password"></input>
                            </Grid>

                            <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                                <button id="button-field" type="submit">Login</button>
                            </Grid>

                            <Link className='account' to="/login">Already have an account</Link>
                        </Grid>
                    </form>
                </Box>
            </Modal>
        </>
    )
}
