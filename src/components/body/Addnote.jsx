import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useRef } from 'react';
import { Grid } from '@mui/material';
import BackIcon from '../icons/BackIcon';
import NextIcon from '../icons/NextIcon';


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

export default function Addnote(props) {
    const getTitle = useRef(null);
    const getTag = useRef(null);
    const getDesc = useRef(null);

    // writing all states for addnote modal
    const handleClose = () => props.setOpenEditor(false);

    /* we used defaultValue in form fields, instead of onChange implementation */
    // fetching data from form field
    const getFormFieldData = () => {
        console.log(getTitle.current.value, getDesc.current.value, getTag.current.value);
    };

    return (
        <>
            <Modal
                open={props.openEditor}
                onClose={handleClose}
            >
                <Box sx={Object.assign(style, {})}>
                    <BackIcon style={{ marginTop: '15px', marginLeft: '15px' }}/>
                    <NextIcon style={{ marginTop: '15px', marginRight: '15px', float: 'right' }}/>

                    <Grid container style={{ marginTop: '10px' }}>

                        {/* title */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' style={{ height: '200%' }}>
                            <textarea ref={getTitle} id="title-field" style={{ width: '100%', height: '2em', borderRadius: '6px', paddingTop: '10px', marginLeft: '10px', marginRight: '2%', border: 'none', ...{ fontSize: "1.5em", fontFamily: "Georgia", fontWeight: 'bold' } }} placeholder="Title"></textarea>
                        </Grid>

                        {/* date */}
                        <span style={{ marginLeft: '13px', marginRight: '2%', ...{ fontSize: "0.8em", fontFamily: "Georgia" } }}>{'date'}</span>

                        {/* tag */}
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{ height: '200%' }}>
                            <input ref={getTag} id="tag-field" style={{ height: '2em', ...{ marginLeft: '10px' }, borderBottom: '1px solid gray', ...{ fontSize: "1.1em", fontFamily: "Georgia", fontStyle: 'italic', fontWeight: '600' } }} placeholder="Tag" />
                        </Grid>

                        {/* desc */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' id="textarea-desc">
                            <textarea ref={getDesc} id="desc-field" style={{ width: '100%', borderRadius: '6px', border: 'none', paddingTop: '15px', marginLeft: '10px', marginRight: '2%', ...{ fontSize: "1.1em", fontFamily: "Georgia" } }} placeholder="Desc"></textarea>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}
