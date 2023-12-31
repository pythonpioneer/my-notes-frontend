import React from 'react';


export default function LoggingUser({ theme }) {
    return (
        <i className="spin-force fa-solid fa-yin-yang" style={{ color: (theme === 'dark') ? 'whitesmoke' : '' }}></i>
    )
}
