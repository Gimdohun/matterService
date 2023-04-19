import './style.scss';

const Post = () => {
    return <div className="post-container">
        <div className="map-post-box">
            <section className="post-info">
                <span className="post-title">
                    문제 제목
                </span>
                <div className="post-meta-info">
                    <span className="post-writer">포스트 글쓴이</span>
                    <span className="post-days">날짜</span>
                    <span className="post-level">문제 난이도</span>
                </div>
            </section>
            <section></section>
        </div>
    </div>
}

export default Post;