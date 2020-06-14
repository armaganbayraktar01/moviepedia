import axios from 'axios';
import { API_BASE } from '../config/apiBase';

// LOGIN USER
export const LOGIN_USER_PENDING = "LOGIN_USER_PENDING";
export const LOGIN_USER_FULFILLED = "LOGIN_USER_FULFILLED";
export const LOGIN_USER_REJECTED = "LOGIN_USER_REJECTED";

// LOGOUT_USER
export const LOGOUT_USER_PENDING = "LOGOUT_USER_PENDING";
export const LOGOUT_USER_FULFILLED = "LOGOUT_USER_FULFILLED";
export const LOGOUT_USER_REJECTED = "LOGOUT_USER_REJECTED";


// LOGIN USER
export function onLoginUserSubmit({ 
        user_name, user_password
})
{
    return dispatch => 
    {
        dispatch
        (
            {
                type: "LOGIN_USER",
                payload: axios.post(`${API_BASE}/auth`,
                {
                    user_name, user_password

                })/*
                .then(user => {
                    //eğer kullanıcı bulunursa (user.data.status = true) 
                    if (user.data.status) {
                        const { token } = user.data;
                        localStorage.setItem("jwtToken", token);
                        setAuthorizationToken(token);
                    }
                    return user.data;
                })
                .catch(err => console.log(err))*/
            }
        )            
    }
}

// LOGOUT USER
export function onLogoutUser(){
    /*
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);*/
    return dispatch => {
        dispatch
        (
            {
                type: "LOGOUT_USER",
            }
        )
    }
}