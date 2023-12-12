import React from 'react';


export default function DeleteIcon({ style, onClick }) {
    return (
        <>
            <i className="fa-solid fa-trash" style={style} onClick={onClick}></i>
        </>
    )
}
