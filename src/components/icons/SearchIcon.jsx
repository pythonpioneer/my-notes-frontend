import React from 'react';
import audio from '../../assets/media/modern.mp3';
import { playClickAudio } from '../../utility/audio';


export default function SearchIcon({ onClick }) {
	return (
		<>
			<i className="fa-solid fa-magnifying-glass mr-4" 
				onClick={onClick}
				onTouchStart={() => {
					playClickAudio(audio);
				}}
			></i>
		</>
	)
}
