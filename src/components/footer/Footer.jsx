import { Grid } from '@mui/material';
import React from 'react';


export default function Footer() {
    return (
        <>
            <nav className="navbar navbar-light fixed-bottom" style={{ backgroundColor: 'white', height: '70px', fontFamily: 'Georgia', fontWeight: 'bold', borderTop: '1px solid whitesmoke' }}>
                <a className="navbar-brand ml-3 active" href="#" style={{ fontSize: '15px', float: 'left', width: '100px', textAlign: 'center' }}>Pending</a>
                <a className="navbar-brand" href="#" style={{ fontSize: '15px', float: 'right', width: '100px', textAlign: 'center' }}>Completed</a>
            </nav>
        </>
    )
}
