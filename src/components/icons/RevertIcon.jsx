import React from 'react';
import audio from '../../assets/media/complete.mp3';
import { playClickAudio } from '../../utility/audio';


export default function RevertIcon({ style, onClick }) {
    return (
        <>
            <i className="fa-solid fa-arrows-rotate" 
                style={style} 
                onClick={onClick}
                onTouchStart={() => {
					playClickAudio(audio);
				}}
				onMouseDown={() => {
					playClickAudio(audio);
				}}
			></i>
        </>
    )
}
