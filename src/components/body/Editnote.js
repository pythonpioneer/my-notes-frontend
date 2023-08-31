import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import { Grid } from '@mui/material';

// styling for modal structure
const style = {
    position: 'absolute',
    width: '98%',
    height: '90%',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '65px',
};

export default function Editnote(props) {

    // writing all states for editnote modal
    const handleClose = () => props.setOpenEditor(false);

    return (
        <>
            <Modal
                open={props.openEditor}
                onClose={handleClose}
            >
                <Box sx={Object.assign(style, {})}>
                <i onClick={handleClose} className="fa-solid fa-chevron-left" style={{ fontSize: "1.6em", padding:'12px', margin: '5px',  }}></i>
                    <i className="fa-solid fa-ellipsis-vertical" style={{ fontSize: "1.6em", padding:'12px', margin: '8px', float: 'right' }}></i>

                    <Grid container>

                        {/* title */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' style={{height: '200%'}}>
                            <textarea style={{width: '100%', height: '2em', borderRadius: '6px', paddingTop: '10px', paddingLeft: '12px', ...{fontSize: "1.5em", fontFamily: "Georgia", fontWeight: 'bold'}}} placeholder="Title"></textarea>
                        </Grid>

                        {/* date */}
                        <span style={{paddingLeft: '14px', ...{fontSize: "0.8em", fontFamily: "Georgia"}}}>Thu, 31 aug 7:57 am</span>
                        
                        {/* tag */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='' style={{height: '200%'}}>
                            <input style={{height: '2em', ...{width: '94vw', marginLeft: '12px'}, borderBottom: '1px solid gray', ...{fontSize: "1.1em", fontFamily: "Georgia", fontWeight: 'bold'}}} placeholder="Tag" />
                        </Grid>

                        {/* desc */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' style={{height: '200%'}}>
                            <textarea style={{ width: '100%', height: '19em', borderRadius: '6px', paddingTop: '15px', marginLeft: '12px', ...{fontSize: "1.1em", fontFamily: "Georgia", fontWeight: 'bold'}}} placeholder="Desc"></textarea>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}
