import React from 'react';
import { useCookies } from 'react-cookie';

function CallCookie(user) {
    const [cookies, setCookie] = useCookies(['name']);

    let userRole = user.user.userRole;
    setCookieLocal();

    function setCookieLocal() {
            if(userRole === "BakeryOwner") {
                setCookie('role', "BakeryOwner", { path: '/' });
            } else if(userRole === "Admin") {
                setCookie('role', "Admin", { path: '/' });
            } else if(userRole === "Customer") {
                setCookie('role', "Customer", { path: '/' });
            }
        return '';
    }
    if(cookies.role) {
        return cookies.role;
    } 
    return '';
}

export default CallCookie;
