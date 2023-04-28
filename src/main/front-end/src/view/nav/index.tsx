import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Setting from "../menu/menuList";
import './style.scss';

const Nav:React.FC = () => {
    const history = useHistory();
    const [settingSwitch, setSettingSwitch] = useState(false);

    return <div className="nav-container">
            <section className="logo-section">
                <img onClick={() => history.push('/main')} className="nav-logo" src="" alt="" />
            </section>
            <section className="search-section">
                <input className="search-input" name="search" type="text" placeholder="입력해주세요." />
            </section>
            <section className="setting-section">
                <span onClick={() => setSettingSwitch(!settingSwitch)}>메뉴</span>
            </section>
        { settingSwitch ? <Setting /> : null }
    </div>
}

export default Nav;