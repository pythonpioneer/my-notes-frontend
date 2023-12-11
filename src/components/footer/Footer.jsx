import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNoteType } from '../../features/notes/noteSlice';


export default function Footer() {

    // now fetch the note type and update it
    const { noteType } = useSelector(state => state.notes);
    const dispatch = useDispatch();

    // to update the note type as pending or completed
    const handleUpdateNote = (type) => {
        dispatch(updateNoteType(type));
    };

    return (
        <>
            <nav className="navbar navbar-light fixed-bottom" style={{ backgroundColor: 'white', height: '70px', fontFamily: 'Georgia', fontWeight: 'bold', borderTop: '1px solid whitesmoke' }}>
                <span onClick={() => { handleUpdateNote('pending'); }} className={`cursor navbar-brand ml-3 ${noteType==='pending' ? 'active' : ''}`} style={{ fontSize: '15px', float: 'left', width: '100px', textAlign: 'center' }}>Pending</span>
                <span onClick={() => { handleUpdateNote('completed'); }} className={`cursor navbar-brand ${noteType==='completed' ? 'active' : ''}`} style={{ fontSize: '15px', float: 'right', width: '100px', textAlign: 'center' }}>Completed</span>
            </nav>
        </>
    )
}
