import React from 'react';
import audio from '../../assets/media/classic.wav';
import { playClickAudio } from '../../utility/audio';


export default function NextIcon(props) {
	return (
		<>
			<i className={`spin fa-solid fa-chevron-right ${props.theme === 'dark' ? 'placeholder-color' : ''}`} style={{ fontSize: "1.6em", ...props.style }} onClick={() => {
				props.onClick();
				playClickAudio(audio);
			}}></i>
		</>
	)
}
