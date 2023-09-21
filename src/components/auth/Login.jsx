import React, { useState, useRef } from "react";
import { Grid, Box, Modal, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { loginSchema } from './schema';
import { InfoIcon } from '../icons/InfoIcon';
import "./style.css";

// styling for modal structure
const style = {
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 4,
    padding: "12px 0",
};

// to make request to api, we need host
const host = "http://192.168.0.102:3100";

export default function Login(props) {

    // state variables
    const [openEditor, setOpenEditor] = useState(true); // for modal

    // to store data from all form fields
    const getEmail = useRef(null);
    const getPassword = useRef(null);
    const navigate = useNavigate();

    // to login the user
    const loginUser = (email, password) => {
        // to make api call
        axios
            .post(
                `${host}/api/v1/auth/loginuser`,
                JSON.stringify({ email: email, password: password }),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((response) => {
                // now save the auth-token and redirect
                // console.log(response.data['auth-token'])
                localStorage.setItem("auth-token", response.data["auth-token"]);
                navigate("/");
            })
            .catch((err) => {
                alert("invalid Credential");
                console.log(err);
            });
    };

    // fields to be validated
    const initialValues = {
        email: '',
        password: '',
    }

    // using formik for form validation
    const { errors, touched, handleBlur, ...formik } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,

        // form submission
        onSubmit: (values) => {
            loginUser(values.email, values.password);
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
                <Box sx={Object.assign(style, {})} className="box-register box-login">
                    <form className="p-3" onSubmit={formik.handleSubmit}>
                        <Grid item xs={12} mb={2}>
                            <i
                                style={{ float: "right", color: "#3F3D56" }}
                                className="fa-solid fa-circle-xmark fa-lg"
                                onClick={() => { navigate('/') }}
                            ></i>
                        </Grid>
                        <Grid
                            container
                            // className="grid-container-position"
                            gap={3}
                        >
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
                                        color: "#3F3D56",
                                        // margin: 'auto'/
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
                                        ref={getEmail}
                                        id="email"
                                        name="email"
                                        type="email"
                                        style={{
                                            ...{
                                                fontFamily: "Georgia",
                                            },
                                            border: "2px solid #FCD71D",
                                            borderRadius: "5px",
                                            padding: "0.7em 1em",
                                            width: '100%',
                                            boxShadow: "2px 2px #FCD71D",
                                        }}
                                        placeholder="Enter mail"
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
                                        ref={getPassword}
                                        id="password"
                                        name="password"
                                        type="password"
                                        style={{
                                            ...{ fontFamily: "Georgia" },
                                            border: "2px solid #FCD71D",
                                            borderRadius: "5px",
                                            padding: "0.7em 1em",
                                            width: '100%',
                                            boxShadow: "2px 2px #FCD71D",
                                        }}
                                        placeholder="Enter password"
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
                                    >
                                        Login
                                    </button>
                                </Grid>
                                <Grid item mt={2}>
                                    <Link
                                        className=""
                                        to="/signup"
                                        style={{ color: "#A735FF", cursor: "pointer" }}
                                    >
                                        Register Here
                                    </Link>
                                </Grid>
                                {/* onClick={handleClose} */}
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
