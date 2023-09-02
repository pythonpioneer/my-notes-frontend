import './App.css';
import Navbar from './components/header/Navbar';
import Notebox from './components/body/Notebox';
import { FetchNoteProvider } from './contexts/FetchNoteContext';
import { DeleteNoteProvider } from './contexts/DeleteNoteContext';
import { UpdateNoteProvider } from './contexts/UpdateNoteContext';
import { AddNoteProvider } from './contexts/AddNoteContext';

function App() {
  return (
    <>
      <Navbar />

      {/* will refactor this code */}
      <FetchNoteProvider>
        <AddNoteProvider>
          <UpdateNoteProvider>
            <DeleteNoteProvider>
              <Notebox />
            </DeleteNoteProvider>
          </UpdateNoteProvider>
        </AddNoteProvider>
      </FetchNoteProvider>


      {/* <Footer /> */}
    </>
  );
  // eslint-disable-next-line
}

export default App;
