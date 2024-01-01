import React from 'react';
import audio from '../../assets/media/modern.mp3';
import { playClickAudio } from '../../utility/audio';


export default function CrossIcon({ onClick }) {
    return (
        <>
            <i className="fa-solid fa-plus mr-4 rotate-me" 
                onClick={onClick}
                onTouchEnd={() => {
					playClickAudio(audio);
				}}
            ></i>
        </>
    )
}
