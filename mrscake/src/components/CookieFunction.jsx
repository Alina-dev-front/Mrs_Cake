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
        let userRole = user.user.userRole;
        setUserRoleAsCookie(userRole, setCookie, history);
    }
    if(cookies.role) {
        return cookies.role;
    } 
    return '';
}

function setUserRoleAsCookie(userRole, setCookie, history) {
    if(userRole) {
        setCookie('role', userRole, { path: '/' }); 
        history.push("/");
        window.location.reload(true);
    } 
}

export default CallCookie;
