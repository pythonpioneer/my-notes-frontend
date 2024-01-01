import React from 'react';
import audio from '../../assets/media/modern.mp3';
import { playClickAudio } from '../../utility/audio';


export default function SortIcon({ onClick }) {
	return (
		<>
			<i className="fa-solid fa-right-left fa-rotate-90" onClick={onClick} onTouchStart={() => { playClickAudio(audio); }}></i>
		</>
	)
}
