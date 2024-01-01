import React from 'react';
import audio from '../../assets/media/modern.mp3';
import { playClickAudio } from '../../utility/audio';


// display this icon in dark modes/themes
export default function MoonIcon() {
    return (
        <>
            <i className="fa-solid fa-cloud-moon"
                onTouchStart={() => {
					playClickAudio(audio);
				}}
            ></i>
        </>
    )
}
