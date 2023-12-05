import React from 'react';
import AddIcon from '../icons/AddIcon';
import FilterIcon from '../icons/FilterIcon';
import LogIcon from '../icons/LogIcon';
import SearchIcon from '../icons/SearchIcon';


export default function Searchbar() {

    return (
        <>
            <nav className="navbar navbar-light mt-3 mb-3" style={{ marginLeft: '1%', marginRight: '1%' }}>
                <FilterIcon />

                <div>
                    {/* only visible when clicked on search icon */}
                    {/* <div className='nav-link'>
                            <input id="placeholder-color" className="placeholder-red-300 form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: '10px' }} />
                        </div>
                    */}

                    <SearchIcon />
                    <AddIcon />
                    <LogIcon token={null} />
                </div>
            </nav>
        </>
    )
}
