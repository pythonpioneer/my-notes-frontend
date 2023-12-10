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
    const { isLoggedIn } = useSelector(state => state.user);
    const dispatch = useDispatch();

    // writing all states for addnote modal
    const handleClose = () => props.setOpenEditor(false);

    /* we used defaultValue in form fields, instead of onChange implementation */
    // fetching data from form field
    const handleForm = async () => {

        // fetch the form data
        const formData = { title: getTitle.current.value, desc: getDesc.current.value, category: getTag.current.value };

        // validate form fields
        validateForm(formData)
            .then(res => {  // if validation successfull

                dispatch(createNote(formData))
                    .then(status => {  // if note created successfully
                        
                        // close the add note editor
                        if (status.type === 'createNote/fulfilled') handleClose();
                    });
            })
            .catch(err => {  // if we encounter any error
                toast.info(err);
            })
    };

    return (
        <>
            <Modal
                open={props.openEditor}
                onClose={handleClose}
            >
                <Box sx={Object.assign(style, {})}>
                    <BackIcon style={{ marginTop: '15px', marginLeft: '15px' }} onClick={handleClose} />
                    {isLoggedIn && <NextIcon style={{ marginTop: '15px', marginRight: '15px', float: 'right' }} onClick={handleForm} />}

                    <Grid container style={{ marginTop: '20px' }}>

                        {/* title */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' style={{ height: '200%' }}>
                            <textarea ref={getTitle} id="title-field" style={{ width: '100%', height: '2em', borderRadius: '6px', paddingTop: '10px', marginLeft: '10px', marginRight: '2%', border: 'none', ...{ fontSize: "1.5em", fontFamily: "Georgia", fontWeight: 'bold' } }} placeholder="Title"></textarea>
                        </Grid>

                        {/* date */}
                        <span style={{ marginLeft: '13px', marginRight: '2%', ...{ fontSize: "0.8em", fontFamily: "Georgia" } }}>{getCurrentDate(Date.now())}</span>

                        {/* tag */}
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{ height: '200%' }}>
                            <input ref={getTag} id="tag-field" style={{ height: '2em', ...{ marginLeft: '10px' }, borderBottom: '1px solid gray', ...{ fontSize: "1.1em", fontFamily: "Georgia", fontStyle: 'italic', fontWeight: '600' } }} placeholder="Category" />
                        </Grid>

                        {/* desc */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' id="textarea-desc">
                            <textarea ref={getDesc} id="desc-field" style={{ width: '100%', height: '400px', borderRadius: '6px', border: 'none', paddingTop: '15px', marginLeft: '10px', marginRight: '2%', ...{ fontSize: "1.1em", fontFamily: "Georgia" } }} placeholder="Desc"></textarea>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}
