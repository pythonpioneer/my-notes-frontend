import React, { useState } from "react";
import { Grid, Box, Modal, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {toast} from "react-toastify";
import { registrationSchema } from './schema/';
import { InfoIcon } from "../icons/InfoIcon";
import { signUpUser } from "../../services/user";
import { useDispatch } from "react-redux";


// styling for modal structure
const style = {
	bgcolor: "background.paper",
	borderRadius: "10px",
	boxShadow: 24,
};


export default function Signup() {
	// state variables
	const [openEditor, ] = useState(true); // for modal
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
					if (status.type === 'signUpUser/fulfilled') navigate('/');
				});
		},
	});

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
								<Grid style={{ position: "relative", display: "inline-block", width: "100%" }}>
									<input
										onChange={formik.handleChange}
										onBlur={handleBlur}
										defaultValue={formik.values.name}
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
				</Box >
			</Modal >
		</>
	);
}
