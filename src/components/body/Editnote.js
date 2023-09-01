import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useRef } from 'react';
import { Grid } from '@mui/material';
import './style.css';

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
    const getInfo = useRef({
        title: props.info.title,
        tag: props.info.tag,
        desc: props.info.desc
    });

    // writing all states for editnote modal
    const handleClose = () => props.setOpenEditor(false);

    /* we used defaultValue in form fields, instead of onChange implementation */
    // fetching data from form field
    const getFormFieldData = (e) => {
        e.preventDefault();
        console.log(getInfo.current);
    }

    return (
        <>
            <Modal
                open={props.openEditor}
                onClose={handleClose}
            >
                <Box sx={Object.assign(style, {})}>
                    <i onClick={handleClose} className="spin fa-solid fa-chevron-left" style={{ fontSize: "1.6em", padding:'12px', margin: '5px' }}></i>
                    <i className="fa-solid fa-ellipsis-vertical" style={{ fontSize: "1.6em", padding:'12px', margin: '8px', float: 'right' }}></i>

                    <Grid container>

                        {/* title */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' style={{height: '200%'}}>
                            <textarea ref={getInfo.title} id="title-field" style={{width: '100%', height: '2em', borderRadius: '6px', paddingTop: '10px', paddingLeft: '12px', ...{fontSize: "1.5em", fontFamily: "Georgia", fontWeight: 'bold'}}} placeholder="Title" defaultValue={props.info.title}></textarea>
                        </Grid>

                        {/* date */}
                        <span style={{paddingLeft: '14px', ...{fontSize: "0.8em", fontFamily: "Georgia"}}}>{props.info.datetime}</span>
                        
                        {/* tag */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='' style={{height: '200%'}}>
                            <input ref={getInfo.tag} id="tag-field" style={{height: '2em', ...{width: '94vw', marginLeft: '12px'}, borderBottom: '1px solid gray', ...{fontSize: "1.1em", fontFamily: "Georgia", fontStyle: 'italic', fontWeight: '600'}}} placeholder="Tag" defaultValue={props.info.tag} />
                        </Grid>

                        {/* desc */}
                        <Grid item lg={12} md={12} sm={12} xs={12} id="textarea-desc" className='d-flex justify-content-center'>
                            <textarea ref={getInfo.desc} id="desc-field" style={{ width: '100%', borderRadius: '6px', paddingTop: '15px', marginLeft: '12px', ...{fontSize: "1.1em", fontFamily: "Georgia"}}} placeholder="Desc" defaultValue={props.info.desc}></textarea>
                        </Grid>
                    </Grid>
                    <div className="d-flex justify-content-end">
                        <i onClick={getFormFieldData} className="fa-solid fa-check shake d-flex justify-content-end" style={{ fontSize: "2.1em", borderRadius: '48%', backgroundColor: '', padding: '20px' }}></i>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
