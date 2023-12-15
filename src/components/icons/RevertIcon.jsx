import React from 'react';


export default function RevertIcon({ style, onClick }) {
    return (
        <>
            <i className="fa-solid fa-arrows-rotate" style={style} onClick={onClick}></i>
        </>
    )
}
