import React, { useState } from "react";
import { Grid, Box, Modal, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registrationSchema } from './schema/';
import { InfoIcon } from "../icons/InfoIcon";
import { signUpUser } from "../../services/user";
import { useDispatch, useSelector } from "react-redux";
import LoggingUser from "../loader/spinner/LoggingUser";
import audio from '../../assets/media/modern.mp3';
import audioClose from '../../assets/media/close.mp3';
import audioSubmit from '../../assets/media/submit.mp3';
import { playClickAudio } from '../../utility/audio';


// styling for modal structure
const style = {
	bgcolor: "background.paper",
	borderRadius: "10px",
	boxShadow: 24,
};


export default function Signup() {

	// state variables
	const [openEditor,] = useState(true); // for modal
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoading, themeStatus } = useSelector(state => state.user);

	// using formik for form validation
	const { errors, touched, handleBlur, ...formik } = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: registrationSchema,
		onSubmit: (values) => {  // form submission

			dispatch(signUpUser(values))
				.then(status => {   // after executing the sign up action

					// if user created successfully
					if (status.type === 'signUpUser/fulfilled') {
						playClickAudio(audioSubmit);
						navigate('/');
					}
				});
		},
	});

	return (
		<>
			<Modal
				className="d-flex justify-content-center"
				open={openEditor}
				sx={{
					margin: "auto",
					marginTop: "100px",
					paddingBottom: '50px',
					"@media (min-width:0px)": { width: "90%", height: "600px", marginTop: "16%" },
                    "@media (min-width:691px)": { width: "55%", height: "600px", marginTop: "15%" },
                    "@media (min-width:1091px)": { width: "30%", marginTop: "5%" },
				}}
			>
				<Box sx={Object.assign(style, { backgroundColor: themeStatus === 'dark' ? '#181818' : 'background.paper' })}>
					<form onSubmit={formik.handleSubmit} className="p-3">
						<Grid item xs={12} mb={2}>
							<i
								style={{ float: "right", color: (themeStatus === 'dark') ? '#888' : "#3F3D56" }}
								className="fa-solid fa-circle-xmark fa-lg"
								onClick={() => {
									navigate("/");
									playClickAudio(audio);
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
										color: (themeStatus === 'dark') ? '#888' : "#3F3D56",
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
								<Grid style={{ position: "relative", display: "inline-block", width: "100%" }}>
									<input
										onChange={formik.handleChange}
										onBlur={handleBlur}
										defaultValue={formik.values.name}
										id="name"
										autoComplete="name"
										className={(errors.name && touched.name) ? "name-field error-placeholder" : "name-field"}
										style={{
											...{ fontFamily: "Georgia" },
											border: "2px solid #45017A",
											borderRadius: "5px",
											padding: "0.7em 1em",
											width: "100%",
											boxShadow: "2px 2px #45017A",
											margin: "10px 0",
											color: (themeStatus === 'dark' ? 'whitesmoke' : ''),
										}}
										placeholder={`${errors.name && touched.name ? 'Enter Your Name' : 'Name'}`}
									/>
									{errors.name && touched.name &&
										<InfoIcon fontSize="1.2em">
										</InfoIcon>
									}
								</Grid>

								{/* email */}
								<Grid style={{ position: "relative", display: "inline-block", width: "100%" }}>
									<input
										onChange={formik.handleChange}
										onBlur={handleBlur}
										defaultValue={formik.values.email}
										id="email"
										autoComplete="email"
										className={(errors.email && touched.email) ? "email-field error-placeholder" : "email-field"}
										style={{
											...{ fontFamily: "Georgia" },
											border: "2px solid #45017A",
											borderRadius: "5px",
											padding: "0.7em 1em",
											width: "100%",
											boxShadow: "2px 2px #45017A",
											margin: "10px 0",
											color: (themeStatus === 'dark' ? 'whitesmoke' : ''),
										}}
										placeholder={`${errors.email && touched.email ? 'Missing Email' : 'Email'}`}
									/>
									{errors.email && touched.email &&
										<InfoIcon fontSize="1.2em">
										</InfoIcon>
									}
								</Grid>

								{/* password */}
								<Grid style={{ position: "relative", display: "inline-block", width: "100%" }}>
									<input
										onChange={formik.handleChange}
										onBlur={handleBlur}
										defaultValue={formik.values.password}
										id="password"
										name="password"
										autoComplete="new-password"
										className={`password-field ${errors.password && touched.password ? 'error-placeholder' : ''}`}
										type="password"
										style={{
											...{ fontFamily: "Georgia" },
											border: "2px solid #45017A",
											borderRadius: "5px",
											padding: "0.7em 1em",
											width: "100%",
											boxShadow: "2px 2px #45017A",
											margin: "10px 0",
											color: (themeStatus === 'dark' ? 'whitesmoke' : ''),
										}}
										placeholder={`${errors.password && touched.password ? 'Enter Your Password' : 'Password'}`}
									/>
									{errors.password && touched.password &&
										<InfoIcon fontSize="1.2em">
										</InfoIcon>
									}
								</Grid>

								{/* confirm password */}
								<Grid style={{ position: "relative", display: "inline-block", width: "100%" }}>
									<input
										onChange={formik.handleChange}
										onBlur={handleBlur}
										defaultValue={formik.values.confirmPassword}
										id="confirmPassword"
										name='confirmPassword'
										autoComplete="new-password"
										className={`password-field ${errors.confirmPassword && touched.confirmPassword ? 'error-placeholder' : ''}`}
										type="password"
										style={{
											...{ fontFamily: "Georgia" },
											border: "2px solid #45017A",
											borderRadius: "5px",
											padding: "0.7em 1em",
											width: "100%",
											boxShadow: "2px 2px #45017A",
											margin: "10px 0",
											color: (themeStatus === 'dark' ? 'whitesmoke' : ''),
										}}
										placeholder={`${errors.confirmPassword && touched.confirmPassword ? 'Re-enter Your Password' : 'Confirm Password'}`}
									/>
									{errors.confirmPassword && touched.confirmPassword &&
										<InfoIcon fontSize="1.2em">
										</InfoIcon>
									}
								</Grid>
							</Grid>

							{/* button */}
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
									onClick={() => {playClickAudio(audioClose);}}
								>
									Register
								</button>
							</Grid>

							{/* login here */}
							<Grid
								item
								xs={12}
								mt={2}
								className="d-flex justify-content-center"
							>
								{isLoading ? <LoggingUser theme={themeStatus} /> : <Link className="account" to="/login" style={{ color: "#A735FF", cursor: "pointer", margin: "auto" }}>Already have an account</Link>}
							</Grid>

							{/* to contribute */}
							<Grid item xs={12} mt={2} className="d-flex justify-content-center">
								{!(errors.confirmPassword || errors.password || errors.email || errors.name)
									? <a className='account' target="_blank" rel="noreferrer" style={{ color: (themeStatus === 'dark' ? 'whitesmoke' : '#262626'), cursor: "pointer", margin: "auto" }} href='https://github.com/pythonpioneer/my-notes-frontend'>Contribute @pythonpioneer</a>
									: <div style={{ color: 'red' }}>Missing Fields!</div>
								}
							</Grid>

						</Grid>
					</form>
				</Box >
			</Modal >
		</>
	);
}
