import React from 'react';
import audio from '../../assets/media/complete.wav';
import { playClickAudio } from '../../utility/audio';


export default function RevertIcon({ style, onClick }) {
    return (
        <>
            <i className="fa-solid fa-arrows-rotate" style={style} onClick={() => {
					onClick();
					playClickAudio(audio);
				}}
			></i>
        </>
    )
}
