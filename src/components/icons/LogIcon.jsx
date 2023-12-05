import React from 'react';



export default function LogIcon({ token }) {
    return (
        <>
            {token
                ? <i className="fa-solid fa-right-from-bracket"></i>
                : <i className="fa-solid fa-arrow-right-to-bracket"></i>
            }
        </>
    )
}
