import axios from 'axios';

/** Config */
import { API_BASE } from '../../config/apiBase';

/** Alert Actions */
import { alertActions } from './alertAction';

/** Helpers */
import { history } from '../../_helpers/history';
import { setAuthorizationToken } from '../../_helpers/setAuthorizationToken';

/** Jwt Decode */
import jwt_decode from 'jwt-decode';


// Login Type Constans
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_FULFILLED = "LOGIN_FULFILLED";
export const LOGIN_REJECTED = "LOGIN_REJECTED";

// Logout Type Constans
export const LOGOUT = "LOGOUT";

// Register Type Constans
export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_FULFILLED = "REGISTER_FULFILLED";
export const REGISTER_REJECTED = "REGISTER_REJECTED";

/** authAction */
export const authAction = {
    onLogin,
    onLogout,
    onRegister,
    getCurrentToken,
    //getAll,
    //delete: _delete
};


/** Login */
function onLogin(formData){

    return dispatch => 
    {
        dispatch
        (
            {
                type: "LOGIN",
                payload: axios.post(`${API_BASE}/auth`, formData)
                //.then(user => console.log(user))
                
                .then(user => {
                    //eğer kullanıcı bulunursa (user.data.status = true) 

                    const { token, message } = user.data;


                    if (user.data.status) {

                        localStorage.setItem("jwtToken", token);
                        setAuthorizationToken(token);
                        dispatch(alertActions.success(message.toString()));
                        setTimeout(() => 
                        {
                            history.push("/")
                            
                        }, 1000);                                   
                        return jwt_decode(user.data.token);                        

                    } else {

                        dispatch(alertActions.error(message.toString()));
                    }
                    
                    
                })
                .catch(err => console.log(err))
            }
        )            
    }
}

/** Logout */
function onLogout(){

    return dispatch => {
        const value = "good";
        localStorage.setItem('jwtToken', value); // set the item
        localStorage.clear();  // delete the item
       // localStorage.setItem("jwtToken", "");       
        setAuthorizationToken(false);
        dispatch(alertActions.success("Logout successfull. Good Bye"));
        dispatch
        (
            {
                type: "LOGOUT"
            }
        );
        setTimeout(() => 
        {
            history.push("/login")
        }, 2000);  
    
    }
}

/** Register */
function onRegister(formData){

    return dispatch => 
    {
        dispatch
        (
            {
                type: "REGISTER",
                payload: axios.post(`${API_BASE}/register`, formData)
                //.then(user => console.log(user))
                
                .then(user => {
                    
                    const { message } = user.data;

                    /** eğer kayıt başarılı ise (user.data.status = true) */
                    if (user.data.status) {

                        dispatch(alertActions.success(message.toString()));

                        setTimeout(() => 
                        {
                            history.push("/login")
                        }, 2000);                                   
                        //return jwt_decode(user.data.token);                        

                    } else {

                        dispatch(alertActions.error(message.toString()));
                    }
                })
                .catch(err => console.log(err))
            }
        )            
    }
}

/** Get User Data */
function getCurrentToken() {
    const token = localStorage.getItem('jwtToken');
    return jwt_decode(token);
}