import { Grid } from '@mui/material';
import React from 'react';

export default function NoteItem() {
    return (
        <>
            
            <Grid item className="mb-3 bg-light" style={{width: '96%', marginLeft:'2%', marginRight:'2%', borderRadius: '10px'}}>
                <Grid item lg={12} className="card-body">
                    <div className="card-title" style={{fontFamily: "Georgia", fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold', marginTop: '-12px'}}>Special title treatment</div>
                    <p className="card-text" style={{fontSize: '0.8em', color: '#A9A9A9'}}>With supporting text below as a natural lead-in t</p>

                    <p className="card-text d-inline-block mr-5" style={{fontSize: '0.8em', color: '#A9A9A9', marginBottom: '-3px'}}>Aug 30, 3:29 AM</p>
                    <div className="text-center d-inline-block" style={{paddingLeft: '10px', paddingRight: '10px', borderStyle: 'solid', borderRadius: '10px', color: 'white', backgroundColor: '#4B0082', marginBottom: '-3px'}}>tag</div>
                </Grid>
            </Grid>
        </>
    )
}
