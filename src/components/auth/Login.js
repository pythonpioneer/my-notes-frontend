import React, { useState, useRef } from 'react';
import { Grid, Box, Modal } from '@mui/material';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// styling for modal structure
const style = {
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
};

// to make request to api, we need host
const host = 'http://192.168.0.102:3100';

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
        .then((response)=>{
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

    // closing the login modal
    const handleClose = () => {

        // if user successfully loggedin then close the login modal
        // setOpenEditor(false);
    }

    // to call login user
    const loggingUser = () => {
        loginUser(getEmail.current.value, getPassword.current.value);
    };

    return (
        <>
            <Modal className='d-flex justify-content-center'
                open={openEditor}
                onClose={handleClose}
            >
                <Box sx={Object.assign(style, {})} className='box-register box-login'>

                    <Grid container className='grid-container-position'>

                        <div className='register-label' style={{ fontSize: "1.6em", fontFamily: "Georgia", fontWeight: 'bold' }}>Login Please</div>

                        {/* email */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input ref={getEmail} id="email-field" style={{ ...{ fontFamily: "Georgia" } }} placeholder="Email" />
                        </Grid>

                        {/* password */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input ref={getPassword} className="password-field" type="password" style={{ ...{ fontFamily: "Georgia" } }} placeholder="Password"></input>
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <button onClick={() => {loggingUser();}} id="button-field" type="button">Login</button>
                            {/* onClick={handleClose} */}
                        </Grid>


                        {/* <Link className='account' to="/forgot-password">Forgot Password</Link> */}
                        <Link className='account' to="/signup">Register Here!!</Link>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}
