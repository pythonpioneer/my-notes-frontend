import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useRef } from 'react';
import { Grid } from '@mui/material';
import BackIcon from '../icons/BackIcon';
import NextIcon from '../icons/NextIcon';
import { getCurrentDate, validateForm } from '../../utility';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateNote } from '../../services/notes';


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

    // to store the form fields
    const getTitle = useRef(null);
    const getTag = useRef(null);
    const getDesc = useRef(null);

    // writing all states for addnote modal
    const handleClose = () => props.setOpenEditor(false);

    // to access the user login status
    const { isLoggedIn } = useSelector(state => state.user);
    const dispatch = useDispatch();

    // fetching data from form field
    const handleForm = async () => {

        // fetch the form data and note id
        const formData = { title: getTitle.current.value, desc: getDesc.current.value, category: getTag.current.value, noteId: props.data.id };

        // now, check that, the user updated the data
        let isUpdated = false;

        // checking that user updated fields
        if (formData.title !== props.data.title) isUpdated = true;
        if (formData.desc !== props.data.desc) isUpdated = true;
        if (formData.category !== props.data.category) isUpdated = true;

        // now, validate the form data if user changed something
        if (isUpdated) {

            // validate form fields
            validateForm(formData)
                .then(res => {  // if validation successfull, dispatch the action to update note
                    
                    dispatch(updateNote(formData))
                        .then();
                })
                .catch(err => {  // if we encounter any error
                    toast.info(err);
                })
        }
        else {  // if noting is there to update
            toast.info("Notes not updated");
            handleClose();
        }
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
                            <textarea ref={getTitle} defaultValue={props.data.title} id="title-field" style={{ width: '100%', height: '2em', borderRadius: '6px', paddingTop: '10px', marginLeft: '10px', marginRight: '2%', border: 'none', ...{ fontSize: "1.5em", fontFamily: "Georgia", fontWeight: 'bold' } }} placeholder="Title"></textarea>
                        </Grid>

                        {/* date */}
                        <span style={{ marginLeft: '13px', marginRight: '2%', ...{ fontSize: "0.8em", fontFamily: "Georgia" } }}>{getCurrentDate(props.data.datetime)}</span>

                        {/* tag */}
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{ height: '200%' }}>
                            <input ref={getTag} defaultValue={props.data.category} id="tag-field" style={{ height: '2em', ...{ marginLeft: '10px' }, borderBottom: '1px solid gray', ...{ fontSize: "1.1em", fontFamily: "Georgia", fontStyle: 'italic', fontWeight: '600' } }} placeholder="Category" />
                        </Grid>

                        {/* desc */}
                        <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-center' id="textarea-desc">
                            <textarea ref={getDesc} defaultValue={props.data.desc} id="desc-field" style={{ width: '100%', height: '400px', borderRadius: '6px', border: 'none', paddingTop: '15px', marginLeft: '10px', marginRight: '2%', ...{ fontSize: "1.1em", fontFamily: "Georgia" } }} placeholder="Desc"></textarea>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    )
}
