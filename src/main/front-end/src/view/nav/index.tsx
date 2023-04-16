import React, {useState} from 'react';
import Setting from "../menu/menuList";

const Nav:React.FC = () => {
    const [settingSwitch, setSettingSwitch] = useState(false);

    return <div className="nav-container">
            <section className="logo-section">
                <img className="nav-logo" src="" alt="" />
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