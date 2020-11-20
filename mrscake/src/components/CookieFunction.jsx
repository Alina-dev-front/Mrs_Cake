import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

function CallCookie(user) {
    const history = useHistory();
    const [cookies, setCookie] = useCookies(['name']);

    let loginStatus = user.user.loginStatus;

    let userRole = user.user.userRole;
    setCookieLocal();

    function setUserRoleAsCookie() {
        if(userRole === "BakeryOwner") {
            setCookie('role', "BakeryOwner", { path: '/' });
            history.push("/");
            window.location.reload(true);
        } else if(userRole === "Admin") {
            setCookie('role', "Admin", { path: '/' });
            history.push("/");
            window.location.reload(true);
        } else if(userRole === "Customer") {
            setCookie('role', "Customer", { path: '/' });
            history.push("/");
            window.location.reload(true);
        }
    }

    function setCookieLocal() {
        if(loginStatus === "Logged in") {
            setUserRoleAsCookie();
        }
        return '';
    }
    if(cookies.role) {
        return cookies.role;
    } 
    return '';
}

export default CallCookie;
