import React from 'react';
import audio from '../../assets/media/classic.wav';
import { playClickAudio } from '../../utility/audio';


export default function BackIcon(props) {
	return (
		<>
			<i onClick={() => {
				props.onClick();
				playClickAudio(audio);
			}} className={`spin fa-solid fa-chevron-left ${props.theme === 'dark' ? 'placeholder-color' : ''}`} style={{ fontSize: "1.6em", ...props.style }}></i>
		</>
	)
}
