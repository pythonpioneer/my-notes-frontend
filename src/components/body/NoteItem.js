import { Grid } from '@mui/material';
import React from 'react';

export default function NoteItem(props) {
    return (
        <>

            <Grid container className="mb-3 bg-light" style={{ width: '96%', marginLeft: '2%', marginRight: '2%', borderRadius: '10px' }}>
                <Grid className="card-body">

                    <Grid item lg={6} className="d-inline-block mr-5" style={{ fontFamily: "Georgia", fontSize: '1em', fontStyle: 'italic', fontWeight: 'bold', marginTop: '-12px' }}>{props.title}</Grid>
                    <i className="fa-solid fa-pen-to-square mx-4" style={{fontSize: "1.3em", paddingLeft: '5px'}}></i>
                    
                    
                    
                    
                    <Grid item lg={12} className="">
                        <p className="card-text" style={{ fontSize: '0.8em', color: '#A9A9A9' }}>{props.desc}</p>

                        <p className="card-text d-inline-block" style={{ fontSize: '0.8em', color: '#A9A9A9', marginBottom: '-3px' }}>Aug 30, 3:29 AM</p>
                        <div className="text-center d-inline-block mx-5" style={{ paddingLeft: '10px', paddingRight: '10px', borderStyle: 'solid', borderRadius: '10px', color: 'white', backgroundColor: '#4B0082', marginBottom: '-3px' }}>{props.tag}</div>
                        <i className="fa-solid fa-trash mx-4" style={{ fontSize: "1.2em" }}></i>
                    </Grid>



                </Grid>
            </Grid>
        </>
    )
}
