import axios from 'axios';
import { setAuthorizationToken } from '../config/setAuthorizationToken';

/** API BASE */
import { API_BASE } from '../config/apiBase';

const login = (user_name, user_password) => {
    return axios.post(`${API_BASE}/auth`, { user_name, user_password })
        .then(user => {
            //eğer kullanıcı bulunursa (user.data.status = true) 
            if (user.data.status) {
                const { token } = user.data;
                localStorage.setItem("jwtToken", token);
                setAuthorizationToken(token);
            }
            return user.data;
        })
        .catch(err => console.log(err));
}

const logout = () => {
    localStorage.removeItem("jwtToken");
    setAuthorizationToken(false);
}

export default { login, logout };