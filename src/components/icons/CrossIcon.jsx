import React from 'react';
import audio from '../../assets/media/rotate.wav';
import { playClickAudio } from '../../utility/audio';


export default function CrossIcon({ onClick }) {
    return (
        <>
            <i className="fa-solid fa-plus mr-4 rotate-me" onClick={() => {
                playClickAudio(audio, .05);
                onClick();
            }}></i>
        </>
    )
}
