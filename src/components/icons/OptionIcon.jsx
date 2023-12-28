import React from 'react';


export default function OptionIcon({ style, onClick, theme }) {
    return (
        <>
            <div className="dropdown show" style={style}>
                <i className={`fa-solid fa-ellipsis-vertical ${theme === 'dark' ? 'placeholder-color' : '' }`} id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                <div className={`${theme === 'dark' ? 'dark-note' : '' } dropdown-menu`} style={{ marginRight: '1vw' }} aria-labelledby="dropdownMenuLink">
                    <span className={`${theme === 'dark' ? 'dark-note' : '' } dropdown-item`} onClick={onClick}>Delete</span>
                </div>
            </div>
        </>
    )
}
