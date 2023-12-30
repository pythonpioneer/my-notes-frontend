import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useRef } from 'react';
import { Grid } from '@mui/material';
import BackIcon from '../icons/BackIcon';
import NextIcon from '../icons/NextIcon';
import { getCurrentDate, validateForm } from '../../utility';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createNote } from '../../services/notes';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';


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

    // to store the form fields
    const getTitle = useRef(null);
    const getTag = useRef(null);
    const getDesc = useRef(null);

    // to access the user login status
    const { isLoggedIn, themeStatus } = useSelector(state => state.user);
    const { noteType } = useSelector(state => state.notes)
    const dispatch = useDispatch();

    // writing all states for addnote modal
    const handleClose = () => props.setOpenEditor(false);

    // to handle the loading while adding note
    const [progress, setProgress] = useState(-1);

    /* we used defaultValue in form fields, instead of onChange implementation */
    // fetching data from form field
    const handleForm = async () => {

        // set the progress to 0 to display loader
        setProgress(20);

        // fetch the form data
        const formData = { title: getTitle.current.value, desc: getDesc.current.value, category: getTag.current.value };

        // validate form fields
        validateForm(formData)
            .then(res => {  // if validation successfull

                setProgress(75);  // after validating form

                dispatch(createNote(formData))
                    .then(status => {  // if note created successfully
                        setProgress(100);
                        
                        // close the add note editor
                        if (status.type === 'createNote/fulfilled') {
                            
                            setTimeout(() => {  // to close it after some seconds
                                handleClose();
                            }, 400);
                        }
                    });
            })
            .catch(err => {  // if we encounter any error
                toast.info(err);
                setProgress(-1);
            });
    };

    return (
        <>
            <Modal
                open={props.openEditor}
                onClose={handleClose}
            >
                <Box sx={Object.assign(style, { backgroundColor: themeStatus === 'dark' ? '#181818' : 'background.paper' })}>
                <LoadingBar color='#f11946' progress={progress} onLoaderFinished={() => setProgress(0)} />
                    <BackIcon style={{ marginTop: '15px', marginLeft: '15px' }} theme={themeStatus} onClick={handleClose} />
                    {isLoggedIn && noteType === 'pending' && ( progress <= 0 && <NextIcon theme={themeStatus} style={{ marginTop: '15px', marginRight: '15px', float: 'right' }} onClick={handleForm} />)}

                    <Grid container style={{ marginTop: '20px' }}>

                        {/* title */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' style={{ height: '200%' }}>
                            <textarea ref={getTitle} id="title-field" className={`form-${themeStatus}`} style={{ width: '100%', height: '2em', borderRadius: '6px', paddingTop: '10px', marginLeft: '10px', marginRight: '2%', border: 'none', ...{ fontSize: "1.5em", fontFamily: "Georgia", fontWeight: 'bold' } }} placeholder="Title" defaultValue={noteType === 'completed' ? 'Info' : (isLoggedIn ? '' : 'Info')}></textarea>
                        </Grid>

                        {/* date */}
                        <span className='placeholder-color' style={{ marginLeft: '13px', marginRight: '2%', ...{ fontSize: "0.8em", fontFamily: "Georgia" } }}>{getCurrentDate(Date.now())}</span>

                        {/* tag */}
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{ height: '200%' }}>
                            <input ref={getTag} id="tag-field" className={`form-${themeStatus}`} style={{ height: '2em', ...{ marginLeft: '10px' }, borderBottom: '1px solid gray', ...{ fontSize: "1.1em", fontFamily: "Georgia", fontStyle: 'italic', fontWeight: '600' } }} placeholder="Category" />
                        </Grid>

                        {/* desc */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' id="textarea-desc">
                            <textarea ref={getDesc} id="desc-field" className={`form-${themeStatus}`} style={{ width: '100%', height: '400px', borderRadius: '6px', border: 'none', paddingTop: '15px', marginLeft: '10px', marginRight: '2%', ...{ fontSize: "1.1em", fontFamily: "Georgia" } }} placeholder="Desc" defaultValue={noteType === 'completed' ? `Move to the Pending Section!!\nYou can't add a Note in the Completed Section.` : (isLoggedIn ? '' : 'Created by PythonPioneer.')}></textarea>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}
