import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Addnote from '../body/Addnote';
import AddIcon from '../icons/AddIcon';
import SortIcon from '../icons/SortIcon';
import LogInIcon from '../icons/LogInIcon';
import LogOutIcon from '../icons/LogOutIcon';
import SearchIcon from '../icons/SearchIcon';
import { logoutUser } from '../../features/user/userSlice';
import { removeNotes, sortNotes, toggleSortOrder } from '../../features/notes/noteSlice';


export default function Searchbar() {

    // to store the modal status
    const [openEditor, setOpenEditor] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // access the user login status
    const { isLoggedIn, themeStatus } = useSelector(state => state.user)

    // to open the modal
    const displayEditor = () => {
        setOpenEditor(true);
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
                    {/* only visible when clicked on search icon */}
                    {/* <div className='nav-link'>
                            <input id="placeholder-color" className="placeholder-red-300 form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '10px' }} />
                        </div>
                    */}

                    {openEditor && <Addnote openEditor={openEditor} setOpenEditor={setOpenEditor} />}

                    <SearchIcon />
                    <AddIcon onclick={displayEditor} />
                    {isLoggedIn
                        ? <LogOutIcon onClick={signOutUser} />
                        : <LogInIcon onClick={() => { navigate('/login') }} />
                    }
                </div>
            </nav>
        </>
    )
}
