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


export default function Searchbar() {

    // to store the modal status
    const [openEditor, setOpenEditor] = useState(false);
    const [openSearchBar, setOpenSearchBar] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // to store the search text
    const searchRef = useRef('');

    // to fetch the search text
    const fetchSearchText = () => {
        dispatch(setSearchText(searchRef.current?.value));
    }

    // access the user login status
    const { isLoggedIn, themeStatus } = useSelector(state => state.user)

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

    // to logout the user
    const signOutUser = () => {
        dispatch(logoutUser());
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
                    {openSearchBar && <input ref={searchRef} onChange={fetchSearchText} id="search" name="search" className="mr-4 pl-3 pr-3" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '30px', outline: `2px solid ${themeStatus === 'dark' ? 'whitesmoke' : 'black'}`, width: '160px', fontFamily: 'Georgia', color: `${themeStatus === 'dark' && 'whitesmoke'}`, fontWeight: 'bold' }} />}

                    {openSearchBar ? <CrossIcon onClick={handleSearchBar} /> : <SearchIcon onClick={handleSearchBar} />}
                    {!openSearchBar && <AddIcon onclick={displayEditor} />}

                    {isLoggedIn
                        ? <LogOutIcon onClick={signOutUser} />
                        : <LogInIcon onClick={() => { navigate('/login') }} />
                    }
                </div>
            </nav>
        </>
    )
}
