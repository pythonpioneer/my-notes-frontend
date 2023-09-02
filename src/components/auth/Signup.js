import React from 'react';
import { Grid, Box, Modal } from '@mui/material';
import './style.css';

// styling for modal structure
const style = {
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
};

export default function Login() {
    return (
        <>
            <Modal className='modal-position d-flex justify-content-center'
                open={true}
            >
                <Box sx={Object.assign(style, {})} className='box-position'>

                    <Grid container className='grid-container-position'>

                        <div className='register-label' style={{fontSize: "1.6em", fontFamily: "Georgia", fontWeight: 'bold'}}>Register Please</div>

                        {/* Name */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input id="name-field" style={{...{fontFamily: "Georgia"} }} placeholder="Name"></input>
                        </Grid>

                        {/* email */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input id="email-field" style={{...{fontFamily: "Georgia"} }} placeholder="Email"/>
                        </Grid>

                        {/* password */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input id="password-field" type="password" style={{ ...{fontFamily: "Georgia"} }} placeholder="Password"></input>
                        </Grid>

                        {/* password */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <input id="password-field" type="password" style={{ ...{fontFamily: "Georgia"} }} placeholder="Confirm Password"></input>
                        </Grid>

                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center'>
                            <button id="button-field" type="button">Login</button>
                        </Grid>

                        <div className='account'>Already have an account</div>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}
