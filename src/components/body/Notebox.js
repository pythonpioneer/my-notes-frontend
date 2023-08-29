import { Grid } from '@mui/material';
import React from 'react';
import NoteItem from './NoteItem';
import Searchbar from './Searchbar';

export default function Notebox() {
  return (
    <>
      <Searchbar />
      <Grid lg={4} xs={12} sm={6} md={4}>
        <NoteItem />
      </Grid>
      <Grid lg={4} xs={12} sm={6} md={4}>
        <NoteItem />
      </Grid>
      <Grid lg={4} xs={12} sm={6} md={4}>
        <NoteItem />
      </Grid>
    </>
  )
}
