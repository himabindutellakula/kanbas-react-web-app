
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { setQuiz } from "../quizReducer";
import { useEffect } from "react";
import { FaCheckCircle, FaEllipsisV, FaPencilAlt } from "react-icons/fa";

function QuizViewer() {
    const { quizId } = useParams();
    const { courseId } = useParams();

    const quizzesList = useSelector((state: KanbasState) =>
        state.quizReducer.quizzes);
    const quiz = useSelector((state: KanbasState) =>
        state.quizReducer.quiz);
    const dispatch = useDispatch();

    useEffect(() => {
        if (quizId !== undefined) {
            if (quizId.localeCompare("Editor")) {
                const q = quizzesList.find(
                    (quiz: { _id: string; }) => quiz._id === quizId
                );
                dispatch(setQuiz(q));
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const navigate = useNavigate();
    const handleClick = () => {
        const path = `/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Editor`;
        navigate(path);
    };

    return (
        <div className="container">
            <div className="wd-modules-buttons row ms-auto">
                <button className="btn btn-success me-2 col-auto ms-auto"><FaCheckCircle /> Published</button>
                <button className="btn btn-secondary me-2 col-auto">Preview</button>
                <button className="btn btn-secondary me-2 col-auto" onClick={handleClick}><FaPencilAlt /> Edit</button>
                <button className="btn btn-outline-secondary col-auto me-2"><FaEllipsisV /></button>
            </div>
            <hr></hr>
            <h3>{quiz.title}</h3>
            <br />
            <div style={{ width: '50%' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>Quiz Type</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.quizType}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>Points</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.points}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>Assignment Group</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.assignmentGroup}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>Shuffle Answers</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.shuffleAnswers ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>Time Limit</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.timeLimit} Minutes</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>Multiple Attempts</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.multipleAttempts ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>View Responses</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.viewResponses}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>Show Correct Answers</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.showCorrectAnswers}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>One Question at a Time</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.oneQuestionAtATime ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>Require Respondus LockDown Browser</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.requireRespondousLockDownBrowser ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>Require to View Quiz Results</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.requiredToViewQuizResults ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>Webcam Required</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.webcamRequired ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: 'end' }}><b>Lock Questions After Answering</b></td>
                            <td style={{ paddingLeft: '14px', textAlign: 'left' }}>{quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <div style={{ width: '80%' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid black' }}>
                            <th style={{ textAlign: 'left', paddingTop: '10px', paddingBottom: '10px' }}>Due</th>
                            <th style={{ textAlign: 'left' }}>For</th>
                            <th style={{ textAlign: 'left' }}>Available From</th>
                            <th style={{ textAlign: 'left' }}>Until</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ borderBottom: '1px solid black' }}>
                            <td style={{ textAlign: 'left', paddingTop: '10px', paddingBottom: '10px' }}>{quiz.dueDate}</td>
                            <td style={{ textAlign: 'left' }}>{quiz.quizFor}</td>
                            <td style={{ textAlign: 'left' }}>{quiz.availableFromDate}</td>
                            <td style={{ textAlign: 'left' }}>{quiz.availableUntilDate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default QuizViewer;