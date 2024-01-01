import React from 'react';
import audio from '../../assets/media/modern.mp3';
import { playClickAudio } from '../../utility/audio';


export default function BackIcon(props) {
	return (
		<>
			<i onClick={props.onClick}
				onTouchStart={() => {
					playClickAudio(audio);
				}}
				onMouseDown={() => {
					playClickAudio(audio);
				}}
				className={`spin fa-solid fa-chevron-left ${props.theme === 'dark' ? 'placeholder-color' : ''}`}
				style={{ fontSize: "1.6em", ...props.style }}
			></i>
		</>
	)
}
