import React from 'react';


export default function OptionIcon({ style, onClick }) {
    return (
        <>
            <div className="dropdown show" style={style}>
                <i className="fa-solid fa-ellipsis-vertical" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                <div className="dropdown-menu" style={{ marginRight: '1vw' }} aria-labelledby="dropdownMenuLink">
                    <span className="dropdown-item" onClick={onClick}>Delete</span>
                </div>
            </div>
        </>
    )
}