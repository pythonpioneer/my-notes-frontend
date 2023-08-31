import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Grid } from '@mui/material';

// styling for modal structure
const style = {
    position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
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
                    <i onClick={handleClose} className="fa-solid fa-xmark" style={{ fontSize: "1.8em", padding:'12px',marginRight: '4px', float: 'right' }}></i>

                    <Grid container>

                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' style={{height: '200%'}}>
                            <textarea style={{width: '100%', height: '2em', borderRadius: '6px', paddingTop: '5px', paddingLeft: '12px', ...{fontSize: "1.5em", fontFamily: "Georgia", fontWeight: 'bold'}}} placeholder="Title"></textarea>
                        </Grid>
                            <span style={{paddingLeft: '14px', ...{fontSize: "0.8em", fontFamily: "Georgia"}}}>Thu, 31 aug 7:57 am</span>
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' style={{height: '200%'}}>
                            <textarea style={{width: '100%', height: '19em', borderRadius: '6px', padding: '12px', ...{fontSize: "1.5em", fontFamily: "Georgia", fontWeight: 'bold'}}} placeholder="Desc"></textarea>
                        </Grid>
                    </Grid>

                    {/* at the end */}
                    <i draggable className="shake fa-solid fa-angles-right" style={{ fontSize: "1.8em", padding: '18px', margin: '2px' }}></i>
                </Box>
            </Modal>
        </>
    )
}
