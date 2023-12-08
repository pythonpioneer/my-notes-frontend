import React from 'react';



export default function LogIcon({ token, onClick }) {
    return (
        <>
            {token
                ? <i className="fa-solid fa-right-from-bracket" onClick={onClick}></i>
                : <i className="fa-solid fa-arrow-right-to-bracket" onClick={onClick}></i>
            }
        </>
    )
}
