import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Searchbar from './components/header/Searchbar';
import Notebox from './components/body/Notebox';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loginUser, toggleThemeStatus } from './features/user/userSlice';
import Footer from './components/footer/Footer';
import NoConnection from './components/icons/Connection';


function App() {

	const dispatch = useDispatch();  // to perform actions
	const { isLoggedIn, themeStatus } = useSelector(state => state.user);
	const [isOnline, setIsOnline] = useState(navigator.onLine);

	// to check that the user is logged in or not and change the global state of login status
	useEffect(() => {
		dispatch(loginUser());  // login status of the user

		// theme for the user
		const theme = localStorage.getItem('note-app-theme');

		// check that the user have any theme for the app
		if (theme && (theme === 'dark' || theme === 'light')) {
			dispatch(toggleThemeStatus(theme));
		}
		else {  // if there is no theme for the browser
			dispatch(toggleThemeStatus('light'));
		}

		// Event listener to update online status
		const handleOnlineStatusChange = () => {
			setIsOnline(navigator.onLine);
		};

		// Add event listener when component mounts
		window.addEventListener('online', handleOnlineStatusChange);
		window.addEventListener('offline', handleOnlineStatusChange);

		// Remove event listener when component unmounts
		return () => {
			window.removeEventListener('online', handleOnlineStatusChange);
			window.removeEventListener('offline', handleOnlineStatusChange);
		};

	}, [dispatch]);

	if (!isOnline) {
		return <NoConnection theme={themeStatus} />
	}
	else {  // adding preflight to eliminate initial loading
		fetch('https://notes-redep2.onrender.com/api/v1/verify');
	}

	return (
		<>
			<Navbar />
			<Searchbar />

			<Routes>
				<Route exact path="/" element={<Notebox />} />
				<Route exact path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <Signup />} />
				<Route exact path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />

				{/* if no routes matched */}
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>

			{isLoggedIn && <Footer />}
		</>
	);
}

export default App;
