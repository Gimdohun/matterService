import './style.scss';
import Nav from "../../nav";

const Qna = () => {
    return <div className="qna-container">
        <Nav />
        <section className="qna-form">
            <input className="qna-title-input"
                   type="text"
                   placeholder="질문 제목"
            />
            <textarea
                name="textInput"
                className="qna-contents-input"
                placeholder="자유롭게 작성해주세요."
            />
            <button type="button">등록</button>

        </section>
        <section className="qna-list">
            <span className="qna-logo">질문 리스트</span>
            <div className="qna-list-form">
                <span className="qna-list-form-titles">질문등록이 안돼요</span>
                <span className="qna-list-form-writer">재홍</span>
            </div>
            <div className="qna-list-form">
                <span className="qna-list-form-titles">제목</span>
                <span className="qna-list-form-writer">이름</span>
            </div>
            <div className="qna-list-form">
                <span className="qna-list-form-titles">제목</span>
                <span className="qna-list-form-writer">이름</span>
            </div>
            <div className="qna-list-form">
                <span className="qna-list-form-titles">제목</span>
                <span className="qna-list-form-writer">이름</span>
            </div>
        </section>
    </div>
}

export default Qna;