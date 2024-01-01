import React, { useState } from "react";
import { Grid, Box, Modal, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from './schema';
import { InfoIcon } from '../icons/InfoIcon';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../../services/user';
import LoggingUser from "../loader/spinner/LoggingUser";
import audio from '../../assets/media/modern.mp3';
import audioClose from '../../assets/media/close.mp3';
import audioSubmit from '../../assets/media/submit.mp3';
import { playClickAudio } from '../../utility/audio';


// styling for modal structure
const style = {
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 4,
    padding: "12px 0",
};

export default function Login(props) {

    // state variables
    const [openEditor,] = useState(true); // for modal
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, themeStatus } = useSelector(state => state.user);

    // fields to be validated
    const initialValues = {
        email: '',
        password: '',
    }

    // using formik for form validation
    const { errors, touched, handleBlur, ...formik } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,

        onSubmit: async (values) => {  // form submission
            dispatch(signInUser({
                email: values.email,
                password: values.password
            }))
                .then(status => {  // after executing the signin action

                    // if user logged in successfully
                    if (status.type === 'signInUser/fulfilled') {
                        playClickAudio(audioSubmit);
                        setTimeout(() => {
                            navigate('/');
                        }, 0);
                    }
                });
        }
    });

    return (
        <>
            {/* <Grid container className="" sx={{margin: 'auto'}}> */}
            <Modal
                sx={{
                    // width: "25%",
                    margin: "auto",
                    marginTop: "160px",
                    "@media (min-width:0px)": { width: "90%" },
                    "@media (min-width:691px)": { width: "35%" },
                    "@media (min-width:1091px)": { width: "25%" },
                }}
                open={openEditor}
            >
                <Box sx={Object.assign(style, { backgroundColor: themeStatus === 'dark' ? '#181818' : 'background.paper' })} className="box-register box-login">
                    <form className="p-3" onSubmit={formik.handleSubmit}>
                        <Grid item xs={12} mb={2}>
                            <i
                                style={{ float: "right", color: (themeStatus === 'dark') ? '#888' : "#3F3D56" }}
                                className="fa-solid fa-circle-xmark fa-lg"
                                onClick={() => {
                                    navigate('/');
                                }}
                                onTouchStart={() => {
                                    playClickAudio(audio);
                                }}
                            ></i>
                        </Grid>
                        <Grid container gap={3} >
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                className="d-flex justify-content-center"
                            >
                                <Typography
                                    sx={{
                                        fontSize: "32px",
                                        fontFamily: "Roboto",
                                        fontWeight: "bold",
                                        color: (themeStatus === 'dark') ? '#888' : "#3F3D56",
                                    }}
                                >
                                    Login To Notes
                                </Typography>
                            </Grid>

                            {/* email */}
                            <Grid
                                item
                                sm={12}
                                xs={12}
                                className="d-flex justify-content-center"
                            >
                                <Grid item xs={10} style={{ position: "relative", display: "inline-block", width: "100%" }}>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className={errors.email && touched.email && 'error-placeholder'}
                                        style={{
                                            ...{
                                                fontFamily: "Georgia",
                                            },
                                            border: "2px solid #FCD71D",
                                            borderRadius: "5px",
                                            padding: "0.7em 1em",
                                            width: '100%',
                                            boxShadow: "2px 2px #FCD71D",
                                            color: (themeStatus === 'dark' ? 'whitesmoke' : ''),
                                        }}
                                        placeholder={`${errors.email && touched.email ? 'Enter Your Email' : 'Email'}`}
                                        onChange={formik.handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={formik.values.email}
                                    />

                                    {/* adding info icons after entering any value */}
                                    {errors.email && touched.email &&
                                        <InfoIcon fontSize="1.2em">
                                        </InfoIcon>
                                    }
                                </Grid>

                            </Grid>

                            {/* password */}
                            <Grid
                                item
                                sm={12}
                                xs={12}
                                className="d-flex justify-content-center"
                            >
                                <Grid item xs={10} style={{ position: "relative", display: "inline-block", width: "100%" }}>
                                    <input
                                        id="password"
                                        name="password"
                                        autoComplete="new-password"
                                        className={errors.password && touched.password && 'error-placeholder'}
                                        type="password"
                                        style={{
                                            ...{ fontFamily: "Georgia" },
                                            border: "2px solid #FCD71D",
                                            borderRadius: "5px",
                                            padding: "0.7em 1em",
                                            width: '100%',
                                            boxShadow: "2px 2px #FCD71D",
                                            color: (themeStatus === 'dark' ? 'whitesmoke' : ''),
                                        }}
                                        placeholder={`${errors.password && touched.password ? 'Enter Your Password' : 'Password'}`}
                                        onChange={formik.handleChange}
                                        onBlur={handleBlur}
                                        defaultValue={formik.values.password}
                                    />

                                    {/* adding info icons after entering any value */}
                                    {errors.password && touched.password &&
                                        <InfoIcon fontSize="1.2em"></InfoIcon>
                                    }
                                </Grid>
                            </Grid>

                            {/* button */}
                            <Grid
                                item
                                sm={12}
                                xs={12}
                                // mt={}
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                            >
                                <Grid>
                                    <button
                                        id="button-field"
                                        type="submit"
                                        style={{
                                            backgroundColor: "#FCD71D",
                                            padding: "12px 32px",
                                            border: "none",
                                            borderRadius: "5px",
                                            color: "#45017A",
                                            fontWeight: "500",
                                            boxShadow: "2px 2px #45017A",
                                        }}
                                        onTouchStart={() => {
                                            playClickAudio(audioClose);
                                        }}
                                    >
                                        Login
                                    </button>
                                </Grid>
                                <Grid item mt={2}>
                                    {isLoading ? <LoggingUser theme={themeStatus} /> : <Link to="/signup" style={{ color: "#A735FF", cursor: "pointer" }} onTouchStart={() => {playClickAudio(audioClose);}}>Register Here</Link>}
                                </Grid>

                                {/* to contribute */}
                                <Grid item xs={12} mt={2} className="d-flex justify-content-center">
                                    {!(errors.password || errors.email)
                                        ? <a className='account' target="_blank" rel="noreferrer" style={{ color: (themeStatus === 'dark' ? 'whitesmoke' : '#262626'), cursor: "pointer", margin: "auto" }} href='https://github.com/pythonpioneer/my-notes-frontend' onTouchStart={() => {playClickAudio(audioClose);}}>Contribute @pythonpioneer</a>
                                        : <div style={{ color: 'red' }}>Missing Fields!</div>
                                    }
                                </Grid>
                            </Grid>

                            {/* <Link className='account' to="/forgot-password">Forgot Password</Link> */}
                        </Grid>
                    </form>
                </Box>
            </Modal>
            {/* </Grid> */}
        </>
    );
}
