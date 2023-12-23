import NoteItem from './NoteItem';
import React, { useEffect } from 'react';
import { getCurrentDate } from '../../utility';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotes } from '../../services/notes';
import LoadNote from '../loader/skeleton/LoadNote';


export default function Notebox() {

	const { isLoggedIn } = useSelector(state => state.user);  // to store the login status
	const { notes, noteType, isLoading } = useSelector(state => state.notes);
	const dispatch = useDispatch();

	// to fetch all notes automatically
	useEffect(() => {
		dispatch(fetchNotes(noteType));  // fetching notes
	}, [dispatch, noteType]);

	return (
		<>
			{/* if data is fetching from server */}
			{isLoading && Array(7).fill(null).map(( _, index) => <LoadNote key={index} /> )}

			{/* if user is not logged in  */}
			{!isLoggedIn && !isLoading && <NoteItem title={"Info"} desc={"You haven't take a note yet, Login to take your First note"} tag={null} datetime={getCurrentDate(Date.now())} />}

			{/* if user is logged in and don't have any notes after fetching notes from server */}
			{isLoggedIn && !isLoading && notes.length === 0 && <NoteItem title={"Info"} desc={"You haven't take a note yet, Take your First note"} tag={null} datetime={getCurrentDate(Date.now())} />}

			{/* if user is logged in and have notes */}
			{!isLoading && notes.length > 0 && notes.map((note, index) => {
				return <NoteItem key={note._id} title={note?.title} desc={note?.desc} tag={note?.category || "General"} datetime={note.updatedAt} id={note._id} />
			})}
		</>
	)
}
