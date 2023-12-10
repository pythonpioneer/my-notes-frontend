import React from 'react';
import ToggleIcon from '../icons/ToggleIcon';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light">
                <span className="navbar-brand mt-3" style={{ fontSize: "2em", fontFamily: "Georgia", fontWeight: 'bold', marginLeft: '1%'  }}>Notes</span>
                <ToggleIcon/>
            </nav>
        </>
    );
}
