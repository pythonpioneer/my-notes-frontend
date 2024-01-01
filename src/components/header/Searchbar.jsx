import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Addnote from '../body/Addnote';
import AddIcon from '../icons/AddIcon';
import SortIcon from '../icons/SortIcon';
import LogInIcon from '../icons/LogInIcon';
import LogOutIcon from '../icons/LogOutIcon';
import SearchIcon from '../icons/SearchIcon';
import { logoutUser } from '../../features/user/userSlice';
import { removeNotes, setSearchText, sortNotes, toggleSortOrder } from '../../features/notes/noteSlice';
import CrossIcon from '../icons/CrossIcon';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import audio from '../../assets/media/close.mp3';
import { playClickAudio } from '../../utility/audio';


// styling for modal structure
const style = {
    maxWidth: '600px', // Set a maximum width if desired
    margin: 'auto', // Center the modal horizontally
    padding: '20px',
    marginTop: '25vh',
    borderRadius: '23px'
};

export default function Searchbar() {

    // to store the modal status
    const [openEditor, setOpenEditor] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const [logEditor, setLogEditor] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // to store the search text
    const searchRef = useRef('');

    // to fetch the search text
    const fetchSearchText = () => {
        dispatch(setSearchText(searchRef.current?.value));
    }

    // access the user login status
    const { isLoggedIn, themeStatus } = useSelector(state => state.user);

    // to open the modal
    const displayEditor = () => {
        setOpenEditor(true);
    }

    // to open search bar
    const handleSearchBar = () => {
        setOpenSearchBar(!openSearchBar);

        // clear the searchText
        if (searchRef.current?.value?.length > 0) dispatch(setSearchText(''));
    }

    // to handle the logout process
    const handleSignOutUser = () => {
        setLogEditor(true);
    }

    // to logout the user
    const signOutUser = () => {
        dispatch(logoutUser());
        setLogEditor(false);
        dispatch(removeNotes());
    }

    // to sort notes by time
    const handleSortNotes = () => {
        dispatch(toggleSortOrder());
        dispatch(sortNotes());
    };

    return (
        <>
            <nav className={`navbar note-${themeStatus} mt-1 mb-3 sticky-top`} style={{ marginLeft: '1%', marginRight: '1%', height: '70px' }}>
                <SortIcon onClick={handleSortNotes} />

                <div>
                    {openEditor && <Addnote openEditor={openEditor} setOpenEditor={setOpenEditor} />}

                    {/* input search bar */}
                    {openSearchBar && <input ref={searchRef} onChange={fetchSearchText} id="search" name="search" className="mr-4 pl-3 pr-3" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '30px', outline: `2px solid ${themeStatus === 'dark' ? 'whitesmoke' : 'black'}`, width: '160px', fontFamily: 'Georgia', color: `${themeStatus === 'dark' ? 'whitesmoke' : 'black'}`, fontWeight: 'bold' }} />}

                    {openSearchBar ? <CrossIcon onClick={handleSearchBar} /> : <SearchIcon onClick={handleSearchBar} />}
                    {!openSearchBar && <AddIcon onClick={displayEditor} />}

                    {isLoggedIn
                        ? <LogOutIcon onClick={handleSignOutUser} />
                        : <LogInIcon onClick={() => { navigate('/login'); }} />
                    }
                </div>

                {/* if user want to logout then display a modal and ask user to confirm or cancel */}
                <Modal
                    open={logEditor}
                    onClose={() => { setLogEditor(false); }}
                >
                    <Box
                        sx={{
                            ...style,
                            backgroundColor: (themeStatus === 'dark') ? '#181818' : 'background.paper',
                            '@media (max-width: 400px)': {
                                width: '98%',
                                height: '110px',
                                marginTop: '28vh'
                            },
                            '@media (min-width: 401px) and  (max-width: 600px)': {
                                width: '90%',
                                height: '110px',
                            },
                            '@media (min-width: 601px) and (max-width: 1000px)': {
                                width: '52%',
                                height: '110px'
                            },
                            '@media (min-width: 1001px)': {
                                width: '42%',
                                height: '110px'
                            },
                        }}
                    >
                        <div style={{ color: (themeStatus === 'dark') ? 'whitesmoke' : 'black', alignItems: 'center', justifyContent: 'center', display: 'flex', fontFamily: 'Georgia', fontSize: '16px', fontWeight: 'bold' }}>
                            Would you like to log out? Confirm!!
                        </div>
                        <div className='mt-4'>
                            <span onTouchEnd={() => { playClickAudio(audio); }} onClick={() => {setLogEditor(false);}} className={`active form-${themeStatus}`} style={{ float: 'left', width: '90px', justifyContent: 'center', display: 'flex', cursor: 'pointer' }}>Cancel</span>
                            <span onTouchEnd={() => { playClickAudio(audio); }} onClick={() => {signOutUser();}} className={`active form-${themeStatus}`} style={{ float: 'right', width: '90px', justifyContent: 'center', display: 'flex', cursor: 'pointer' }}>Confirm</span>
                        </div>
                    </Box>
                </Modal>
            </nav>
        </>
    )
}
