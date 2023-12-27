import NoteItem from './NoteItem';
import React, { useEffect } from 'react';
import { getCurrentDate } from '../../utility';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMoreNotes, fetchNotes } from '../../services/notes';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadNote from '../loader/skeleton/LoadNote';
import LoadMore from '../loader/spinner/LoadMore';
import { setCurrPage, setTotalNotes } from '../../features/notes/noteSlice';


export default function Notebox() {

	const { isLoggedIn } = useSelector(state => state.user);  // to store the login status
	const { notes, noteType, isLoading, totalNotes, currPage } = useSelector(state => state.notes);
	const dispatch = useDispatch();

	// to fetch all notes automatically
	useEffect(() => {
		dispatch(fetchNotes(noteType))  // fetching notes
			.then(data => {
				dispatch(setTotalNotes(data?.payload?.totalResults));  // here we set the total results
			})
	}, [dispatch, noteType]);

	// to implement pagination and to call fetchMoreUsers
	const fetchMoreData = () => {
		dispatch(fetchMoreNotes({ noteType, page: currPage }))
			.then(data => {

				// only update the page if the currPage fetched the total number of allowed notes, which is 10 in this case.
				if (data.payload.notes.length === 10) dispatch(setCurrPage(currPage + 1));
			})
	};

	return (
		<>
			{/* if data is fetching from server */}
			{isLoading && (notes?.length > 0
				? Array(notes.length).fill(null).map((_, index) => <LoadNote key={index} />)
				: Array(7).fill(null).map((_, index) => <LoadNote key={index} />)
			)}

			{/* if user is not logged in  */}
			{!isLoggedIn && !isLoading && <NoteItem title={"Info"} desc={"You haven't take a note yet, Login to take your First note"} tag={null} datetime={getCurrentDate(Date.now())} />}

			{/* if user is logged in and don't have any notes after fetching notes from server */}
			{isLoggedIn && !isLoading && notes?.length === 0 && <NoteItem title={"Info"} desc={"Reload Your page to fetch more notes!!"} tag={null} datetime={getCurrentDate(Date.now())} />}
			{isLoggedIn && !isLoading && noteType && !notes && <NoteItem title={"Info"} desc={noteType === 'pending' ? 'Congratulate!! No Notes are Pending!' : 'Hurry Up!! Take Your Notes!'} tag={null} datetime={getCurrentDate(Date.now())} />}

			{/* if user is logged in and have notes */}
			{/* {!isLoading && notes?.length > 0 && notes.map((note, index) => {
				return <NoteItem key={note._id} title={note?.title} desc={note?.desc} tag={note?.category || "General"} datetime={note.updatedAt} id={note._id} />
			})} */}

			{/* paginate to fetch more notes */}
			{notes?.length > 0 &&
				<InfiniteScroll
					dataLength={notes?.length}
					next={fetchMoreData}
					hasMore={notes?.length < totalNotes}
					loader={<LoadMore />}
				>
					{!isLoading && notes.map((note, ) => {
						return <NoteItem key={note._id} title={note?.title} desc={note?.desc} tag={note?.category || "General"} datetime={note.updatedAt} id={note._id} />
					})}
			</InfiniteScroll>}
		</>
	)
}
