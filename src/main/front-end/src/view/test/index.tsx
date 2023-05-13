import './style.scss';
import Nav from "../nav";
// 해당 문제 보여주는 컴포넌트.
/*
* 받아야 할 데이터.
* 1. 문제번호
* 2. 제목
* 3. 문제 카테고리
* 4. 문제내용
* */
const Test = () => {
    return <div className="test-container">
        <Nav />
        <div className="test-box">
            <header className="test-header">
                <p className="test-number">문제번호</p>
                <div className="empty-box"></div>
            </header>
            <section className="test-info">
                <div className="test-meta-info">
                <p className="test-titles">제목</p>
                <span className="test-category">문제분류</span>
                </div>
                <div className="empty-box"></div>
            </section>
            <section className="test-contents">
                <p>문제내용</p>
            </section>
            <section className="test-answer-box">
                <div className="test-answer-info">
                    <span className="test-answer-titles">정답</span>
                    <div className="empty-box"></div>
                </div>
                <input
                    className="test-answer-input"
                    type="text"
                    placeholder="정답작성"
                />
                <button type="button" className="test-answer-button">제출</button>
            </section>
        </div>
    </div>
}

export default Test;