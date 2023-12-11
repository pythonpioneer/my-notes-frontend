import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Searchbar from './components/header/Searchbar';
import Notebox from './components/body/Notebox';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loginUser } from './features/user/userSlice';
import Footer from './components/footer/Footer';


function App() {

	const dispatch = useDispatch();  // to perform actions
	const { isLoggedIn } = useSelector(state => state.user);

	// to check that the user is logged in or not and change the global state of login status
	useEffect(() => {
		dispatch(loginUser());
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<Searchbar />

			<Routes>
				<Route exact path="/" element={<Notebox />} />
				<Route exact path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup />} />
				<Route exact path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />}/>

				{/* if no routes matched */}
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>      

			{isLoggedIn && <Footer />}
		</>
	);
}

export default App;
