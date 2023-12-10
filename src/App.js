import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Searchbar from './components/header/Searchbar';
import Notebox from './components/body/Notebox';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginUser } from './features/user/userSlice';


function App() {

	const dispatch = useDispatch();  // to perform actions

	// to check that the user is logged in or not and change the global state of login status
	useEffect(() => {
		dispatch(loginUser());
	}, [dispatch]);

	return (
		<>
			<Navbar />
			<Searchbar />

			<Routes>
				<Route exact path={"/"} element={<Notebox />} />
				<Route exact path={"/signup"} element={<Signup />} />
				<Route exact path={"/login"} element={<Login />} />
			</Routes>      
		</>
	);
}

export default App;
