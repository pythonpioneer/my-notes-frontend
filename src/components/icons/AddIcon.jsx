import React from 'react';
import audio from '../../assets/media/modern.mp3';
import { playClickAudio } from '../../utility/audio';


export default function AddIcon({ onClick }) {

    return (
        <>
            <i className="fa-solid fa-xmark mr-4 rotate-me-back" 
                onClick={onClick}
                onTouchEnd={() => {
					playClickAudio(audio);
				}}
            ></i>
        </>
    )
}
