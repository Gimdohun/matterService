import './style.scss';
import Nav from '../../nav';

const Profile = () => {
    return <div className="profile-container">
        <Nav />
        <div className="profile-box">
            <section className="profile-info">
                <img className="profile-image" src="#" alt="#" />
                <div className="profile-meta-info">
                    <span className="profile-name">이름</span>
                    <span className="profile-email">이메일</span>
                    <span className="profile-intro">자기소개 글</span>
                </div>
            </section>
            <div className="empty-box"></div>
        </div>
        <section className="profile-post-list">
            <span>문제 리스트</span>

        </section>
    </div>
}

export default Profile;