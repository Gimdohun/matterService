import './style.scss';
import {useState} from 'react';
import Nav from "../../nav";

const Setting = () => {
    const [settingSwitch, setSettingSwitch] = useState(false);
    return <div className="setting-container">
        <Nav />
        <section className="setting-box">
            <section className="setting-info">
                <img className="setting-image" src="#" alt="#" />

                {
                    settingSwitch ?
                        <div className="setting-meta-info">
                            <input className="setting-input-name" type="text" placeholder="이름" />
                            <input className="setting-input-email" type="email" placeholder="이메일 수정" />
                            <input className="setting-input-intro" type="text" placeholder="자기소개 글 수정" />
                            <button onClick={() => {
                                alert('프로필 수정 테스트');
                            }
                            } className="setting-botton">완료</button>
                        </div>
                        :
                <div className="setting-meta-info">
                        <span className="setting-name">이름</span>
                        <span className="psetting-email">이메일</span>
                        <span className="setting-intro">자기소개 글</span>
                </div>
                }
            </section>
            <div onClick={() => setSettingSwitch(!settingSwitch)} className="setting-bottom">
                {
                    settingSwitch ? <span>취소</span> : <span>수정</span>
                }
            </div>
        </section>
    </div>
}

export default Setting;