import React from 'react';
import Toggle from './Toggle';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-2 ml-4" style={{fontSize: "2em"}}>Navbar</span>
                <Toggle />
            </nav>
        </>
    );
}
