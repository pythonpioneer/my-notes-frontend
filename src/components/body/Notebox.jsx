import NoteItem from './NoteItem';
import React, { useEffect } from 'react';
import { getCurrentDate } from '../../utility';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotes } from '../../services/notes';


export default function Notebox() {

	const { isLoggedIn } = useSelector(state => state.user);  // to store the login status
	const { notes } = useSelector(state => state.notes);
	const dispatch = useDispatch();

	// to fetch all notes automatically
	useEffect(() => {
		dispatch(fetchNotes());  // fetching notes
	}, [dispatch]);

	return (
		<>
			{/* if user is not logged in  */}
			{!isLoggedIn && <NoteItem title={"Info"} desc={"You haven't take a note yet, Login to take your First note"} tag={null} datetime={getCurrentDate(Date.now())} />}

			{/* if user is logged in and don't have any notes */}
			{isLoggedIn && notes.length === 0 && <NoteItem title={"Info"} desc={"You haven't take a note yet, Take your First note"} tag={null} datetime={getCurrentDate(Date.now())} />}

			{/* if user is logged in and have notes */}
			{notes.length > 0 && notes.map((note, index) => {
				return <NoteItem key={note._id} title={note?.title} desc={note?.desc} tag={note?.category || "General"} datetime={note.updatedAt} />
			})}
		</>
	)
}
