import React from 'react';


// to display the spinner while fetching more data (pagination)
export default function LoadMore({ theme }) {
    return (
        <>
            <i className="fa-solid fa-spinner spin-force" style={{ fontSize: '2.4rem', justifyContent: 'center', display: 'flex', marginBottom: '75px', color: (theme === 'dark') ? 'whitesmoke' : '' }}></i>
        </>
    )
}
