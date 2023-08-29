import React from 'react';

export default function Searchbar() {
    return (
        <>
            <nav className="navbar navbar-light d-flex justify-content-end">

                    <form className="form-inline">

                        {/* only visible when clicked on search icon */}
                        {/* <div className='nav-link'>
                            <input id="placeholder-color" className="placeholder-red-300 form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '20px' }} />
                        </div> */}

                        {/* search icon */}
                        <i className="fa-solid fa-magnifying-glass mr-3" style={{fontSize: "30px"}}></i>
                    </form>
            </nav>
        </>
    )
}
