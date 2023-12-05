import React from 'react';



export default function LogIcon({ token }) {
    return (
        <>
            {token
                ? <i className="fa-solid fa-right-from-bracket mr-1"></i>
                : <i className="fa-solid fa-arrow-right-to-bracket mr-1"></i>
            }
        </>
    )
}
