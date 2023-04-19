import './style.scss';
import {useHistory} from "react-router-dom";

const Category = () => {
    const history = useHistory();
    return <div className="category-container">
        <li onClick={() => history.push('/main/korean-view')}>국어</li>
        <li onClick={() => history.push('/main/math-view')}>수학</li>
        <li onClick={() => history.push('/main/english-view')}>영어</li>
    </div>
}

export default Category;