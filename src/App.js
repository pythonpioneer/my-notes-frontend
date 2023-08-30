import './App.css';
import Navbar from './components/header/Navbar';
import Notebox from './components/body/Notebox';
import { FetchNoteProvider } from './contexts/FetchNoteContext';
import { DeleteNoteProvider } from './contexts/DeleteNoteContext';

function App() {
  return (
    <>
      <Navbar />
      <FetchNoteProvider>
        <DeleteNoteProvider>
          <Notebox />
        </DeleteNoteProvider>
      </FetchNoteProvider>


      {/* <Footer /> */}
    </>
  );
  // eslint-disable-next-line
}

export default App;
