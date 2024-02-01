import React from 'react';
import audio from '../../assets/media/complete.mp3';
import { playClickAudio } from '../../utility/audio';


export default function CompleteIcon({ style, onClick }) {
	return (
		<>
			<i className="fa-solid fa-circle-check"
				style={style} onClick={() => {
					onClick();
				}}
				onTouchEnd={() => {
					playClickAudio(audio);
				}}
			></i>
		</>
	)
}
