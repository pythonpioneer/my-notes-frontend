import React from 'react';
import audio from '../../assets/media/modern.mp3';
import { playClickAudio } from '../../utility/audio';


// display this icon in light mode
export default function SunIcon() {
    return (
        <>
            <i className="fa-solid fa-sun" style={{ color: "#ffaa00" }} onTouchStart={() => { playClickAudio(audio); }}></i>
        </>
    )
}
