import React from 'react';
import ToggleIcon from '../icons/ToggleIcon';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light">
                <span className="navbar-brand mb-2 mt-3" style={{ fontSize: "2em", fontFamily: "Georgia", fontWeight: 'bold' }}>Notes</span>
                <ToggleIcon/>
            </nav>
        </>
    );
}
