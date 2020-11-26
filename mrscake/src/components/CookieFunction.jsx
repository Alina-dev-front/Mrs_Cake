import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

function CallCookie(user) {
    const history = useHistory();
    const [cookies, setCookie] = useCookies(['name']);

    if (!user.user) {
        return '';
    }

    let loginStatus =  user.user.loginStatus;
    
    if(loginStatus === "Logged in") {
        setUserRoleAsCookie(user.user, setCookie, history);
    }
    if(cookies.role) {
        return cookies.role;
    } 
    return '';
}

function setUserRoleAsCookie(user, setCookie, history) {
    setCookie('role', user.userRole, { path: '/' }); 
    setCookie('user_id', user.id, { path: '/' }); 
    history.push("/");
    window.location.reload(true);
}

export default CallCookie;
