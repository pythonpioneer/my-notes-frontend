import React, { useState, useRef } from 'react';
import { Grid, Box, Modal } from '@mui/material';
import './style.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

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
        .then((response)=>{
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

    // to call login user
    const loggingUser = () => {
        if(getPassword.current.value === getConfirmPassword.current.value){
            const name = getName.current.value;
            const email = getEmail.current.value;
            const password=getPassword.current.value;

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

                    <Grid container className='grid-container-position'>

                        <div className='register-label' style={{fontSize: "1.6em", fontFamily: "Georgia", fontWeight: 'bold'}}>Register Please</div>

                        {/* Name */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input ref={getName} id="name-field" style={{...{fontFamily: "Georgia"} }} placeholder="Name"></input>
                        </Grid>

                        {/* email */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input ref={getEmail} id="email-field" style={{...{fontFamily: "Georgia"} }} placeholder="Email"/>
                        </Grid>

                        {/* password */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input ref={getPassword} className="password-field" type="password" style={{ ...{fontFamily: "Georgia"} }} placeholder="Password"></input>
                        </Grid>

                        {/* confirm password */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input ref={getConfirmPassword} className="password-field" type="password" style={{ ...{fontFamily: "Georgia"} }} placeholder="Confirm Password"></input>
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <button onClick={() => {loggingUser();}} id="button-field" type="button">Login</button>
                        </Grid>

                        <Link className='account' to="/login">Already have an account</Link>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}
