import React from 'react';


export default function OptionIcon({ style }) {
    return (
        <>
            <div className="dropdown show" style={style}>
                <i className="fa-solid fa-ellipsis-vertical" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <span className="dropdown-item">Delete</span>
                </div>
            </div>
        </>
    )
}
