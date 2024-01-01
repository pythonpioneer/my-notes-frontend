import React from 'react';
import audio from '../../assets/media/modern.mp3';
import { playClickAudio } from '../../utility/audio';


export default function NextIcon(props) {
	return (
		<>
			<i className={`spin fa-solid fa-chevron-right ${props.theme === 'dark' ? 'placeholder-color' : ''}`} style={{ fontSize: "1.6em", ...props.style }} 
				onClick={props.onClick}
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
