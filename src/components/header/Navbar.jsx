import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToggleIcon from '../icons/ToggleIcon';
import { toggleThemeStatus } from '../../features/user/userSlice' ;


// to display the navigation bar on top of the app
export default function Navbar() {

    // state variables
    const { themeStatus } = useSelector(state => state.user);
    const dispatch = useDispatch();

    //  to handle toggle theme 
    const handleToggleTheme = () => {

        // toggle the theme
        if (themeStatus === 'dark') {  // change theme to light
            dispatch(toggleThemeStatus('light'));
        }
        else {  // change theme to dark
            dispatch(toggleThemeStatus('dark'));
        }
    };

    return (
        <>
            <nav className={`navbar navbar-light note-${themeStatus}`}>
                <span className={`note-${themeStatus} navbar mt-3`} style={{ fontSize: "2em", fontFamily: "Georgia", fontWeight: 'bold' }}>Notes</span>
                <ToggleIcon onClick={handleToggleTheme} theme={themeStatus} />
            </nav>
        </>
    );
}
