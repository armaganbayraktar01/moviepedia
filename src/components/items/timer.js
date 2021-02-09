import React from 'react';

/** Jwt Decode */
import jwt_decode from 'jwt-decode';



export const timer = () => 
{
    
    const token = localStorage.getItem('jwtToken');
    const data = token ? jwt_decode(token) : false;
    const { iat, exp } = data; //timeStamp

    const dateNow = Date.now();
    const dateNowMs = dateNow/1000;

    const timeConverter = (unixTime) => 
    {
        const date = new Date(unixTime * 1000);
        const months_arr = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
        const bracet = ":"

        const y = date.getFullYear(),
            mt = months_arr[date.getMonth()],
            d = date.getDate(),
            h= date.getHours(),
            m= "0" + date.getMinutes(),
            s= "0" + date.getSeconds();
        
        const data =  {

            full: d+' '+mt+' '+y+' '+h + bracet + m.substr(-2) + bracet + s.substr(-2),
            time: h + bracet + m.substr(-2) + bracet + s.substr(-2),
            date: d+' '+mt+' '+y
        }
        
        return data;
    }

    const loginTime = timeConverter(iat)
    const expiredTime = timeConverter(exp);    
    const expired = Math.floor((exp-dateNowMs)/60) + 1;
    const logged = Math.floor((dateNowMs - iat)/60);


    return (


        <div>
            <p> Oturum; { logged } dakika önce başlatıldı, { expired } dakika sonra sonlandırılacaktır.</p>
            <p>{ loginTime.full } - {expiredTime.full} </p>
        </div>
    )
}
