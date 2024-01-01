import React from 'react';
import audio from '../../assets/media/modern.mp3';
import { playClickAudio } from '../../utility/audio';


export default function LogInIcon({ onClick }) {

    return (
        <>
            <i className="fa-solid fa-arrow-right-to-bracket" 
                onClick={onClick}
                onTouchEnd={() => {
					playClickAudio(audio);
				}}  
            ></i>
        </>
    )
}
