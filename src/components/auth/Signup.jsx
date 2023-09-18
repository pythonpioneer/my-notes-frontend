import React, { useState, useRef } from "react";
import { Grid, Box, Modal, Typography } from "@mui/material";
import "./style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

// styling for modal structure
const style = {
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
};

// to make request to api, we need host
const host = "http://192.168.0.102:3100";

export default function Login() {
  // state variables
  const [openEditor, setOpenEditor] = useState(true); // for modal

  // to store data from all form fields
  const getName = useRef(null);
  const getEmail = useRef(null);
  const getPassword = useRef(null);
  const getConfirmPassword = useRef(null);
  const navigate = useNavigate();

  // to register user
  const registerUser = (name, email, password) => {
    // to make the api call
    axios
      .post(
        `${host}/api/v1/auth/createuser`,
        JSON.stringify({ name: name, email: email, password: password }),
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
        navigate("/login");
      })
      .catch((err) => {
        alert("invalid Credential");
        navigate("/login");
        console.log(err);
      });
  };

  // using formik for form validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      // to signing user after submission
      if (values.password === values.confirmPassword) {
        const name = values.name;
        const email = values.email;
        const password = values.password;

        registerUser(name, email, password);
      } else {
        navigate("/signup");
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
    } else {
      navigate("/signup");
    }
  };

  return (
    <>
      <Modal
        className="d-flex justify-content-center"
        open={openEditor}
        sx={{
          // width: "25%",
          margin: "auto",
          marginTop: "100px",
          paddingBottom: '50px',
          "@media (min-width:0px)": { width: "90%" },
          "@media (min-width:691px)": { width: "35%" },
          "@media (min-width:1091px)": { width: "25%" },
        }}
      >
        <Box sx={Object.assign(style, {})} className="">
          <form onSubmit={formik.handleSubmit} className="p-3">
            <Grid item xs={12} mb={2}>
              <i
                style={{ float: "right", color: "#3F3D56" }}
                className="fa-solid fa-circle-xmark fa-lg"
                onClick={() => {
                  navigate("/");
                }}
              ></i>
            </Grid>
            <Grid container className="">
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
                  Register Here
                </Typography>
              </Grid>

              {/* Name */}
              <Grid
                item
                xs={10}
                className="d-flex-column items-center"
                sx={{ margin: "auto", marginTop: "20px" }}
              >
                <input
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  ref={getName}
                  id="name"
                  className="name-field"
                  style={{
                    ...{ fontFamily: "Georgia" },
                    border: "2px solid #45017A",
                    borderRadius: "5px",
                    padding: "0.7em 1em",
                    width: "100%",
                    boxShadow: "2px 2px #45017A",
                    margin: "10px 0",
                  }}
                  placeholder="Name"
                ></input>

                {/* email */}

                <input
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  ref={getEmail}
                  id="email"
                  className="email-field"
                  style={{
                    ...{ fontFamily: "Georgia" },
                    border: "2px solid #45017A",
                    borderRadius: "5px",
                    padding: "0.7em 1em",
                    width: "100%",
                    boxShadow: "2px 2px #45017A",
                    margin: "10px 0",
                  }}
                  placeholder="Email"
                />

                {/* password */}

                <input
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  ref={getPassword}
                  id="password"
                  className="password-field"
                  type="password"
                  style={{
                    ...{ fontFamily: "Georgia" },
                    border: "2px solid #45017A",
                    borderRadius: "5px",
                    padding: "0.7em 1em",
                    width: "100%",
                    boxShadow: "2px 2px #45017A",
                    margin: "10px 0",
                  }}
                  placeholder="Password"
                ></input>

                {/* confirm password */}

                <input
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  ref={getConfirmPassword}
                  id="confirmPassword"
                  className="password-field"
                  type="password"
                  style={{
                    ...{ fontFamily: "Georgia" },
                    border: "2px solid #45017A",
                    borderRadius: "5px",
                    padding: "0.7em 1em",
                    width: "100%",
                    boxShadow: "2px 2px #45017A",
                    margin: "10px 0",
                  }}
                  placeholder="Confirm Password"
                ></input>
              </Grid>

              <Grid
                item
                xs={12}
                mt={2}
                className="d-flex justify-content-center"
              >
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
                  Register
                </button>
              </Grid>

              <Grid
                item
                xs={12}
                mt={2}
                className="d-flex justify-content-center"
              >
                <Link
                  className="account"
                  to="/login"
                  style={{
                    color: "#A735FF",
                    cursor: "pointer",
                    margin: "auto",
                  }}
                >
                  Already have an account
                </Link>
              </Grid>
              
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
}
