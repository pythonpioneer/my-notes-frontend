import './App.css';
import Navbar from './components/header/Navbar';
import Notebox from './components/body/Notebox';
import { FetchNoteProvider } from './contexts/NoteContext';

function App() {
  return (
    <>
      <Navbar />
      <FetchNoteProvider>
        <Notebox />
      </FetchNoteProvider>
      
      
      {/* <Footer /> */}
    </>
  );
  // eslint-disable-next-line
}

export default App;
