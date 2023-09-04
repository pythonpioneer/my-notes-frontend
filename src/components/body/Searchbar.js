import React, { useState } from 'react';
import Addnote from './Addnote';
import { AddNoteProvider } from '../../contexts/AddNoteContext';
import { useFetchNote } from '../../contexts/FetchNoteContext';
import { useNavigate } from 'react-router-dom';

export default function Searchbar() {

    // state variables
    const [openEditor, setOpenEditor] = useState(false);
    const navigate = useNavigate();
    const displayEditNote = () => {
        setOpenEditor(true);
    }

    const logoutUser = () => {
        localStorage.removeItem('auth-token');
        navigate('/login');
    }
    return (
        <>
            <nav className="navbar d-flex justify-content mt-3 mb-3">
            <i className="fa-solid fa-right-left fa-rotate-90 mx-3" style={{ fontSize: "1.5em" }}></i>
            
                <form className="form-inline">

                    {/* only visible when clicked on search icon */}
                    {/* <div className='nav-link'>
                            <input id="placeholder-color" className="placeholder-red-300 form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '10px' }} />
                        </div> */}

                    {/* search icon */}
                    <i className="fa-solid fa-magnifying-glass mr-4" style={{ fontSize: "1.5em" }}></i>
                    <i onClick={displayEditNote} className="fa-solid fa-plus mr-4" style={{ fontSize: "1.5em" }}></i>
                    
                    {localStorage.getItem('auth-token') 
                    ? <i onClick={logoutUser} className="fa-solid fa-right-from-bracket mr-3" style={{ fontSize: "1.5em" }}></i>
                    : <i onClick={() => {navigate('/login');}} className="fa-solid fa-arrow-right-to-bracket mr-3" style={{ fontSize: "1.5em" }}></i>
                    }
                </form>
            </nav>
            {openEditor &&
                <AddNoteProvider>
                    <Addnote info={{ title: "demo", tag: "demo", desc: "demo" }} openEditor={openEditor} setOpenEditor={setOpenEditor} />
                </AddNoteProvider>
            }
        </>
    )
}
