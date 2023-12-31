import React from 'react';
import audio from '../../assets/media/classic.wav';
import { playClickAudio } from '../../utility/audio';


export default function LogOutIcon({ onClick }) {
	return (
		<>
			<i className="fa-solid fa-right-from-bracket" onClick={() => {
				playClickAudio(audio);
				onClick();
			}}></i>
		</>
	)
}
