import { Grid } from '@mui/material';
import React, { useState } from 'react';
import Editnote from '../body/Editnote';
import CompleteIcon from '../icons/CompleteIcon';


export default function NoteItem(props) {

    // to store the modal status
    const [openEditor, setOpenEditor] = useState(false);

    // to open the modal
    const displayEditor = () => {
        setOpenEditor(true);
    }

    return (
        <>
            <Grid className="mb-3 bg-light" style={{ width: '', marginLeft: '2%', marginRight: '2%', borderRadius: '10px', height: '110px' }} onClick={ displayEditor }>
                <Grid className="card-body">

                    <Grid item lg={6} className="d-inline-block mr-5" style={{ fontFamily: "Georgia", fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold', marginTop: '-12px' }}>{props.title}</Grid>
                    <Grid item lg={12} className="">
                        <p className="card-text" style={{ fontSize: '0.8em', color: '#A9A9A9' }}>{props.desc}</p>

                        <p className="card-text d-inline-block" style={{ fontSize: '0.8em', color: '#A9A9A9', marginBottom: '-3px' }}>{props.datetime}</p>
                        {props.tag && <div className="text-center d-inline-block mx-5" style={{ paddingLeft: '10px', paddingRight: '10px', borderStyle: 'solid', borderRadius: '10px', color: 'white', backgroundColor: '#4B0082', marginBottom: '-3px', float: 'right' }}>{props.tag}</div>}
                    </Grid>
                </Grid>
            </Grid>
            {openEditor && <Editnote openEditor={openEditor} setOpenEditor={setOpenEditor} data={{ title: props.title, desc: props.desc, category: props.tag, id: props.id, datetime: props.datetime }} />}
        </>
    )
}
