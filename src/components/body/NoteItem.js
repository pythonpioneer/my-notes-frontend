import { Grid } from '@mui/material';
import React, {useState} from 'react';
import { useDeleteNote } from '../../contexts/DeleteNoteContext';
import Editnote from './Editnote';
import fetchDate from '../../utility/FetchDate';

export default function NoteItem(props) {
    let displayDateFormat = '';

    // getting values using context hook for notes
    const { deleteNote } = useDeleteNote();

    // state variables
    const [openEditor, setOpenEditor] = useState(false);
    const displayEditNote = () => {
        setOpenEditor(true);
    }

    // if there is no note
    if (props.datetime === null) {
        displayDateFormat = fetchDate(Date.now());
    }
    else {

        // converting date.now() into date format
        displayDateFormat = fetchDate(props.datetime);
    }
    return (
        <>
            <Grid container className="mb-3 bg-light" style={{ width: '96%', marginLeft: '2%', marginRight: '2%', borderRadius: '10px', height: '110px' }}>
                <Grid className="card-body">

                    <Grid item lg={6} className="d-inline-block mr-5" style={{ fontFamily: "Georgia", fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold', marginTop: '-12px' }}>{props.title}</Grid>
                    {props.datetime && <i className="fa-solid fa-pen-to-square" onClick={displayEditNote} style={{ fontSize: "1.2em", paddingLeft: '5px', float: 'right' }}></i>}
                    
                    <Grid item lg={12} className="">
                        <p className="card-text" style={{ fontSize: '0.8em', color: '#A9A9A9' }}>{props.desc}</p>

                        <p className="card-text d-inline-block" style={{ fontSize: '0.8em', color: '#A9A9A9', marginBottom: '-3px' }}>{displayDateFormat}</p>
                        {props.datetime && <i onClick={() => { deleteNote(props._id) }} className="fa-solid fa-trash" style={{ fontSize: "1.2em", float: 'right' }}></i>}
                        {props.tag && <div className="text-center d-inline-block mx-5" style={{ paddingLeft: '10px', paddingRight: '10px', borderStyle: 'solid', borderRadius: '10px', color: 'white', backgroundColor: '#4B0082', marginBottom: '-3px', float: 'right' }}>{props.tag}</div>}
                    </Grid>

                </Grid>
            </Grid>
            {openEditor && <Editnote info={{_id: props._id, title: props.title, desc: props.desc, tag: props.tag, datetime: displayDateFormat}} openEditor={openEditor} setOpenEditor={setOpenEditor} />}
        </>
    )
}
