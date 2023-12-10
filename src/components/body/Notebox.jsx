import NoteItem from './NoteItem';
import React from 'react';
import { getCurrentDate } from '../../utility';
import { useSelector } from 'react-redux';


export default function Notebox() {

	const { isLoggedIn } = useSelector(state => state.user);  // to store the login status
	const { notes } = useSelector(state => state.notes);

	return (
		<>
			{/* if user is not logged in  */}
			{!isLoggedIn && <NoteItem title={"Info"} desc={"You haven't take a note yet, Login to take your First note"} tag={null} datetime={getCurrentDate(Date.now())} />}

			{/* if user is logged in and don't have any notes */}
			{isLoggedIn && notes.length === 0 && <NoteItem title={"Info"} desc={"You haven't take a note yet, Take your First note"} tag={null} datetime={getCurrentDate(Date.now())} />}
		</>
	)
}
