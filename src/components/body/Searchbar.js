import React, { useState } from 'react';
import Addnote from './Addnote';

export default function Searchbar() {

    // state variables
    const [openEditor, setOpenEditor] = useState(false);
    const displayEditNote = () => {
        setOpenEditor(true);
    }
    return (
        <>
            <nav className="navbar d-flex justify-content-end mt-3 mb-3">

                <form className="form-inline">

                    {/* only visible when clicked on search icon */}
                    {/* <div className='nav-link'>
                            <input id="placeholder-color" className="placeholder-red-300 form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '10px' }} />
                        </div> */}

                    {/* search icon */}
                    <i className="fa-solid fa-magnifying-glass mr-4" style={{ fontSize: "1.5em" }}></i>
                    <i onClick={displayEditNote} className="fa-solid fa-plus mr-4" style={{ fontSize: "1.5em" }}></i>
                    <i className="fa-solid fa-right-from-bracket mr-3" style={{ fontSize: "1.5em" }}></i>
                </form>
            </nav>
            {openEditor && <Addnote info={{title: "demo", tag: "demo", desc: "demo"}} openEditor={openEditor} setOpenEditor={setOpenEditor} />}
        </>
    )
}
