import './style.scss';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Setting = () => {
    const history = useHistory();
    const [logoutSwitch, setLogoutSwitch] = useState(false);
    return <div className="menu-list-container">
        <li className="menu-list-profile">프로필</li>
        <li className="menu-list-set">설정</li>
        <li onClick={() => {
            if (window.confirm("로그아웃 하겠습니까?")) {
                alert('로그아웃 되었습니다.')
                history.replace('/');
            } else return ;
        }} className="menu-list-logout">로그아웃</li>
    </div>
}

export default Setting;