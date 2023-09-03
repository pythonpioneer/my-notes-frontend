import './App.css';
import Navbar from './components/header/Navbar';
import Notebox from './components/body/Notebox';
import { FetchNoteProvider } from './contexts/FetchNoteContext';
import { DeleteNoteProvider } from './contexts/DeleteNoteContext';
import { UpdateNoteProvider } from './contexts/UpdateNoteContext';
import { AddNoteProvider } from './contexts/AddNoteContext';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  return (
    <>
      <Navbar />
      {/* <Login />
      <Signup /> */}

      {/* will refactor this code */}
      <FetchNoteProvider>
        <Notebox />
      </FetchNoteProvider>


      {/* <Footer /> */}
    </>
  );
  // eslint-disable-next-line
}

export default App;
