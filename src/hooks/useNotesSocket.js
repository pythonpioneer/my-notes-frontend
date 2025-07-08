import { useEffect } from 'react';
import socket from '../sockets/socket';
import {
    noteAddedRealtime,
    noteCompletedRealtime,
    noteDeletedRealtime,
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

        // 1 ▪ open connection (idempotent if already open)
        socket.connect();

        // 2 ▪ join that user’s private room
        socket.emit('join', userId);

        // 3 ▪ wire listeners → Redux
        socket.on('note:added', (note) => dispatch(noteAddedRealtime(note)));
        socket.on('note:deleted', (noteId) => dispatch(noteDeletedRealtime(noteId)));
        socket.on('note:updated', (updated) => dispatch(noteUpdatedRealtime(updated)));
        socket.on('note:completed', (noteId) => dispatch(noteCompletedRealtime(noteId)));

        // 4 ▪ cleanup
        return () => {
            socket.off('note:added');
            socket.off('note:deleted');
            socket.off('note:updated');
            socket.off('note:completed');
            socket.disconnect();   // optional: keep open if your UX benefits
        };
    }, [userId, dispatch]);
};

export default useNotesSocket;
