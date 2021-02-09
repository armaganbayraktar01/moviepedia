import axios from 'axios';

/** Jwt Decode */
import jwt_decode from 'jwt-decode';


export const setAuthorizationToken = token => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else
        delete axios.defaults.headers.common["Authorization"];
}

export const getUserToken = () => {
    
    const token = localStorage.getItem('jwtToken');

    return token ? jwt_decode(token) : ""; 
};