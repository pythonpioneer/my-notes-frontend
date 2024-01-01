import React from 'react';
import audio from '../../assets/media/modern.mp3';
import { playClickAudio } from '../../utility/audio';


export default function LogOutIcon({ onClick }) {
	return (
		<>
			<i className="fa-solid fa-right-from-bracket" 
				onClick={onClick}
				onTouchEnd={() => {
					playClickAudio(audio);
				}}
			></i>
		</>
	)
}
