
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { addQuiz, setQuiz, updateQuiz } from '../quizReducer';
import { FaPlus, FaSearch, FaTimes, FaBan, FaEllipsisV } from 'react-icons/fa';
import { useEffect } from "react";

function QuestionEditor() {
    const { quizId } = useParams();

    const quizzesList = useSelector((state: KanbasState) =>
        state.quizReducer.quizzes);
    const quiz = useSelector((state: KanbasState) =>
        state.quizReducer.quiz);
    const dispatch = useDispatch();

    const { courseId } = useParams();
    const navigate = useNavigate();

    const handleSave = () => {
        if (quizId !== undefined) {
            if (!quizId.localeCompare("Editor")) {
                dispatch(addQuiz({ ...quiz, course: courseId }));
                console.log("In if line 25")
            } else {
                dispatch(updateQuiz(quiz));
                console.log("In else line 28")
            }
        }
        navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}`);
    };

    const handleSaveAndPublish = () => {
        navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
    }

    useEffect(() => {
        if (quizId !== undefined) {
            if (quizId.localeCompare("Editor")) {
                const a = quizzesList.find(
                    (quiz) => quiz._id === quizId
                );
                dispatch(setQuiz(a));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <div className="d-flex" style={{ justifyContent: "end", alignItems:"center"}}>
                <strong style={{marginRight:'10px', marginBottom:'8px'}}>Points: 0</strong>
                <p style={{ color: 'lightgray', marginRight:'10px', marginBottom:'10px'}}><FaBan /> Not Published</p>
                <button className="btn btn-secondary me-2" style={{ backgroundColor: 'lightgrey', color: 'black', marginRight:'10px'}}> <FaEllipsisV /> </button>
            </div>
            <hr />
            <ul className="nav nav-tabs" style={{ marginBottom: '200px' }}>
                <li className="nav-item">
                    <Link
                        to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/editor`}
                        className="nav-link" style={{ color: "red" }}
                    >
                        Details
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/questions`}
                        className="nav-link" style={{ color: "red" }}
                    >
                        Questions
                    </Link>
                </li>
            </ul>

            <div className="buttons" style={{ marginTop: '100px' }}>
                <div className="d-flex" style={{ marginBottom: '50px', justifyContent: 'center' }}>
                    <Link to = {`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/questions/questionAddition`} className="btn btn-secondary me-4" style={{ backgroundColor: 'lightgray', color: "black" }}>

                        <FaPlus /> New Question

                    </Link>
                    <button className="btn btn-secondary me-4" style={{ backgroundColor: 'lightgray', color: "black" }}>
                        <FaPlus /> New Question Group
                    </button>
                    <button className="btn btn-danger me-4" style={{ backgroundColor: 'lightgray', color: "black" }}>
                        <FaSearch /> Find Questions
                    </button>

                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <div>
                        <input type="checkbox" id="notify_users" className="me-2 my-3" />
                        <label> Notify users that this quiz has changed</label>
                        <br />
                    </div>
                    <div>
                        <Link to={`/Kanbas/Courses/${courseId}/Quizzes`} className="btn btn-secondary me-2" style={{ backgroundColor: 'lightgray', color: 'black' }}>
                            Cancel
                        </Link>
                        <button onClick={handleSaveAndPublish} className="btn btn-secondary me-2" style={{ backgroundColor: 'lightgray', color: 'black' }}>
                            Save & Publish
                        </button>
                        <button onClick={handleSave} className="btn btn-danger me-2">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}
export default QuestionEditor;