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

  useEffect(()=> {
    dispatch(loginUser());
    console.log("in effect login")
  }, [dispatch]);
  



  return (
    <>

      <Navbar />
      <Searchbar />

      <Routes>
        <Route exact path="/" element={<Notebox />} />
        <Route exact path={"/signup"} element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

      {/* 
      <Routes>
        <Route exact path={"/signup"} element={<Signup  />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={
          <FetchNoteProvider>
            <Notebox />
          </FetchNoteProvider>
        } />
      </Routes> */}
    </>
  );
  // eslint-disable-next-line
}

export default App;
