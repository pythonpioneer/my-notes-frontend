import React from 'react';
import audio from '../../assets/media/classic.wav';
import { playClickAudio } from '../../utility/audio';


export default function AddIcon({ onClick }) {

    return (
        <>
            <i className="fa-solid fa-xmark mr-4 rotate-me-back" onClick={() => {
                onClick();
                playClickAudio(audio);
            }}></i>
        </>
    )
}
