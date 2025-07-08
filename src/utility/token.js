import { jwtDecode } from 'jwt-decode';


// to decode jwt token and get user details
export const decodeToken = () => {
    const token = localStorage.getItem('auth-token');
    if (token) {
        return jwtDecode(token);
    }
    return null;
}