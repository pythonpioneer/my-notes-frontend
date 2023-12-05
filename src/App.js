import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/header/Navbar';

function App() {
  return (
    <>
        
      <Navbar />
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
