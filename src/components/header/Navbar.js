import React from 'react';
import Toggle from './Toggle';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light">
                <span className="navbar-brand mb-2 ml-2 mt-3" style={{fontSize: "2em", fontFamily: "Georgia"}}>Navbar</span>
                <Toggle />
            </nav>
        </>
    );
}
