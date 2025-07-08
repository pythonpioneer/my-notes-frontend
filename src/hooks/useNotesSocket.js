import { useEffect } from 'react';
import socket from '../sockets/socket';
import {
    noteAddedInSectionRealtime,
    noteAddedRealtime,
    noteCompletedRealtime,
    noteDeletedRealtime,
    noteUndoCompletedRealtime,
    noteUpdatedRealtime,
} from '../features/notes/noteSlice';
import { useDispatch } from 'react-redux';

/**
 * Keeps the socket room in sync with the logged-in user and
 * dispatches Redux actions when events arrive.
 */
const useNotesSocket = (userId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userId) return;

        // open connection (idempotent if already open)
        socket.connect();

        // join that user’s private room
        socket.emit('join', userId);

        // wire listeners → Redux
        socket.on('note:added', (note) => dispatch(noteAddedRealtime(note)));
        socket.on('note:deleted', (noteId) => dispatch(noteDeletedRealtime(noteId)));
        socket.on('note:updated', (updated) => dispatch(noteUpdatedRealtime(updated)));
        socket.on('note:completed', (note) => dispatch(noteCompletedRealtime(note)));
        socket.on('note:undo-completed', (note) => dispatch(noteUndoCompletedRealtime(note)));
        socket.on('note:section-added', (note) => dispatch(noteAddedInSectionRealtime(note)));
        
        // cleanup
        return () => {
            socket.off('note:added');
            socket.off('note:deleted');
            socket.off('note:updated');
            socket.off('note:completed');
            socket.off('note:undo-completed');
            socket.off('note:section-added');
            socket.disconnect();  // optional: keep open if your UX benefits
        };
    }, [userId, dispatch]);
};

export default useNotesSocket;
