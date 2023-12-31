import React from 'react';
import audio from '../../assets/media/classic.wav';
import { playClickAudio } from '../../utility/audio';


export default function LogInIcon({ onClick }) {

    return (
        <>
            <i className="fa-solid fa-arrow-right-to-bracket" onClick={() => {
                onClick();
                playClickAudio(audio);
            }}></i>
        </>
    )
}
