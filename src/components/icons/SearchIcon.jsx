import React from 'react';
import audio from '../../assets/media/rotate.wav';
import { playClickAudio } from '../../utility/audio';


export default function SearchIcon({ onClick }) {
	return (
		<>
			<i className="fa-solid fa-magnifying-glass mr-4" onClick={() => {
				playClickAudio(audio, .05);
				onClick();
			}}></i>
		</>
	)
}
