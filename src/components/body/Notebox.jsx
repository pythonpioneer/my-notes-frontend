import NoteItem from './NoteItem';
import React from 'react';
import { getCurrentDate } from '../../utility';


export default function Notebox() {

	return (
		<>
			<NoteItem title={"Info"} desc={"You haven't take a note yet, Take your First note"} tag={null} datetime={getCurrentDate(Date.now())} />
		</>
	)
}
