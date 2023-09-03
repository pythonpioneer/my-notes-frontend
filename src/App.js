import './App.css';
import Navbar from './components/header/Navbar';
import Notebox from './components/body/Notebox';
import { FetchNoteProvider } from './contexts/FetchNoteContext';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route exact path={"/signup"} element={<Signup  />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={
          <FetchNoteProvider>
            <Notebox />
          </FetchNoteProvider>
        } />
      </Routes>
    </>
  );
  // eslint-disable-next-line
}

export default App;
