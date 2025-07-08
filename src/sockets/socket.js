import { io } from 'socket.io-client';


const BACKEND_URL = process.env.REACT_APP_URL;

const socket = io(BACKEND_URL, {
  transports: ['websocket'],  // forces webSocket transport
  autoConnect: false,  // manual control
});

export default socket;