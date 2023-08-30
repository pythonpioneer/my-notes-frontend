import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import NoteItem from './NoteItem';
import Searchbar from './Searchbar';
import { useNote } from '../../contexts/NoteContext';

export default function Notebox() {

  // getting values using context hook for notes
  const { notes, getNotes } = useNote();

  return (
    <> 
      <Searchbar />
      {console.log('ret', notes)}
      {notes?.map((element, index) => {
          return <NoteItem key={index} title={element.title} desc={element.description} tag={element.tag} /> 
      })}
    </> 
  )
}
