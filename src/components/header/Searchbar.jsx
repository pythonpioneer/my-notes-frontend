import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Addnote from '../body/Addnote';
import AddIcon from '../icons/AddIcon';
import FilterIcon from '../icons/FilterIcon';
import LogInIcon from '../icons/LogInIcon';
import LogOutIcon from '../icons/LogOutIcon';
import SearchIcon from '../icons/SearchIcon';
import { logoutUser } from '../../features/user/userSlice';


export default function Searchbar() {

    // to store the modal status
    const [openEditor, setOpenEditor] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // access the user login status
    const { isLoggedIn } = useSelector(state => state.user)

    // to open the modal
    const displayEditor = () => {
        setOpenEditor(true);
    }

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

                    {setOpenEditor && <Addnote openEditor={openEditor} setOpenEditor={setOpenEditor} />}

                    <SearchIcon />
                    <AddIcon onclick={displayEditor} />
                    {isLoggedIn
                        ? <LogOutIcon onClick={() => { dispatch(logoutUser()) }} />
                        : <LogInIcon onClick={() => { navigate('/login') }} />
                    }
                </div>
            </nav>
        </>
    )
}
