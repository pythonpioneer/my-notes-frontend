import NoteItem from './NoteItem';
import Searchbar from './Searchbar';
import React from 'react';
import { useFetchNote } from '../../contexts/FetchNoteContext';
import { DeleteNoteProvider } from '../../contexts/DeleteNoteContext';

export default function Notebox() {

  // add skelton loading bar when loading notes....(todo)

  // getting values using context hook for notes
  const { notes } = useFetchNote();

  return (
    <>
      <Searchbar />
      {notes.length === 0
        ? <DeleteNoteProvider key={"Internal Server Error"}>
          <NoteItem title={"Info"} desc={"You haven't take a note yet, Take your First note"} tag={null} datetime={null} />
        </DeleteNoteProvider>
        : notes?.map((element) => {
          return <DeleteNoteProvider key={element._id}>
            <NoteItem title={element.title} desc={element.description} tag={element.tag} datetime={element.timestamp} _id={element._id} />
          </DeleteNoteProvider>
        })}
    </>
  )
}
