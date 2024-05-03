import { Grid } from '@mui/material';
import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeNote, undoCompletedNote } from '../../services/notes';
import { getCurrentDate } from '../../utility';
import Editnote from '../body/Editnote';
import CompleteIcon from '../icons/CompleteIcon';
import RevertIcon from '../icons/RevertIcon';


function NoteItem(props) {

    // fetch the notetype and theme from props
    const { noteType, themeStatus } = props;

    // to store the modal status
    const [openEditor, setOpenEditor] = useState(false);
    const dispatch = useDispatch();

    // to open the modal
    const displayEditor = () => {
        setOpenEditor(true);
    }

    // to mark the note as completed
    const handleCompleteNote = () => {
        dispatch(completeNote(props.id));
    }

    // to undo the completed note and mark as pending 
    const handleUndoNote = () => {
        dispatch(undoCompletedNote(props.id));
    }

    return (
        <>
            <Grid className={`highlight mb-3 ${themeStatus === 'dark' ? 'dark-note' : 'bg-light'}`} style={{ width: '', marginLeft: '2%', marginRight: '2%', borderRadius: '10px', height: '130px' }}>
                {props.tag && noteType === 'pending' && <CompleteIcon onClick={handleCompleteNote} style={{ float: 'right', width: '50px', height: '50px', paddingLeft: '15px', paddingTop: '15px' }} />}
                {props.tag && noteType === 'completed' && <RevertIcon style={{ float: 'right', margin: '10px' }} onClick={handleUndoNote} />}

                <Grid className="card-body"
                    onClick={displayEditor}
                >

                    <Grid item lg={6} className="mr-5 beautify-notes" style={{ fontFamily: "Georgia", fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold' }}>{props.title}</Grid>
                    <Grid item lg={12} className="">
                        <p className="card-text beautify-notes" style={{ fontSize: '0.8em', color: '#A9A9A9' }}>{props.desc}</p>

                        <p className="card-text d-inline-block" style={{ fontSize: '0.8em', color: '#A9A9A9', marginBottom: '-3px' }}>{getCurrentDate(props.datetime)}</p>
                        {props.tag && <div className="text-center d-inline-block mx-5 beautify-notes" style={{ paddingLeft: '10px', paddingRight: '10px', borderStyle: 'solid', borderRadius: '10px', color: 'white', backgroundColor: '#4B0082', marginBottom: '-3px', float: 'right' }}>{props.tag.length > 8 ? props.tag.slice(0, 8) + '...' : props.tag}</div>}
                    </Grid>

                </Grid>
            </Grid>
            {openEditor && <Editnote openEditor={openEditor} setOpenEditor={setOpenEditor} data={{ title: props.title, desc: props.desc, category: props.tag, id: props.id, datetime: props.datetime }} />}
        </>
    )
}


// memoise the noteitem component to prevent re-rendering when the props doesn't changed
export default memo(NoteItem);