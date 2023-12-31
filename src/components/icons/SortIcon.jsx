import React from 'react';
import audio from '../../assets/media/classic.wav';
import { playClickAudio } from '../../utility/audio';


export default function SortIcon({ onClick }) {
	return (
		<>
			<i className="fa-solid fa-right-left fa-rotate-90" onClick={() => {
				onClick();
				playClickAudio(audio);
			}}></i>
		</>
	)
}
