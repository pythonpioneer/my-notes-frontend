import './App.css';
import Navbar from './components/header/Navbar';
import Notebox from './components/body/Notebox';
import { FetchNoteProvider } from './contexts/FetchNoteContext';
import { DeleteNoteProvider } from './contexts/DeleteNoteContext';
import { UpdateNoteProvider } from './contexts/UpdateNoteContext';

function App() {
  return (
    <>
      <Navbar />

      {/* will refactor this code */}
      <FetchNoteProvider>
        <UpdateNoteProvider>
          <DeleteNoteProvider>
            <Notebox />
          </DeleteNoteProvider>
        </UpdateNoteProvider>
      </FetchNoteProvider>


      {/* <Footer /> */}
    </>
  );
  // eslint-disable-next-line
}

export default App;
