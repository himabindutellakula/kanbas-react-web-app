
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { addQuiz, setQuiz, updateQuiz } from '../quizReducer';
import { useEffect } from "react";

function QuizEditor() {
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
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link
                        to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/editor`}
                        className="nav-link" style={{color:"red"}}
                    >
                        Details
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/questions`}
                        className="nav-link" style={{color:"red"}}
                    >
                        Questions
                    </Link>
                </li>
            </ul>
            <h3>Quiz Name</h3>
            <input type="text" value={quiz.title}
                className="form-control mb-2"
                onChange={(e) =>
                    dispatch(setQuiz({ ...quiz, title: e.target.value }))
                }
            />
            <p>Quiz Instructions</p>
            <p>&nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;&nbsp;View&nbsp;&nbsp;&nbsp;&nbsp;Insert&nbsp;&nbsp;&nbsp;&nbsp;Format&nbsp;&nbsp;&nbsp;&nbsp;Tools&nbsp;&nbsp;&nbsp;&nbsp;Table</p>
            <div className="form-group">
                <textarea className="form-control" id="quizDescription" rows={3} value={quiz.description}
                    onChange={(e) =>
                        dispatch(setQuiz({ ...quiz, description: e.target.value }))
                    }>
                </textarea>
            </div>
            <br />
            <div className="row my-2">
                <div className="col-md-4 text-end">
                    <label>Quiz Type</label>
                </div>
                <div className="col-md-8">
                    <select className="form-select" style={{ width: "50%" }} value={quiz.quizType}
                        onChange={(e) =>
                            dispatch(setQuiz({ ...quiz, quizType: e.target.value }))
                        }>
                        <option value="gradedQuiz">Graded Quiz</option>
                        <option value="practiceQuiz">Practice Quiz</option>
                        <option value="gradedSurvey">Graded Survey</option>
                        <option value="ungradedSurvey">Ungraded Survey</option>
                    </select>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-md-4 text-end">
                    <label>Points</label>
                </div>
                <div className="col-md-8">
                    <input type="number" className="form-control" value={quiz.points} style={{ width: "50%" }}
                        onChange={(e) =>
                            dispatch(setQuiz({ ...quiz, points: e.target.value }))
                        } />
                </div>
            </div>
            <div className="row my-2">
                <div className="col-md-4 text-end">
                    <label>Assignment Group</label>
                </div>
                <div className="col-md-8">
                    <select className="form-select" style={{ width: "50%" }} value={quiz.assignmentGroup}
                        onChange={(e) =>
                            dispatch(setQuiz({ ...quiz, assignmentGroup: e.target.value }))
                        }>
                        <option value="quizzes" selected>Quizzes</option>
                        <option value="exams">Exams</option>
                        <option value="assignments">Assignments</option>
                        <option value="project">Project</option>
                    </select>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-md-4 text-end">
                </div>
                <div className="col-md-8">
                    <p><b>Options</b></p>
                    <div>
                        <label>
                            <input type="checkbox" className="me-2" checked={quiz.shuffleAnswers}
                                onChange={(e) =>
                                    dispatch(setQuiz({ ...quiz, shuffleAnswers: e.target.checked }))
                                } />
                            Shuffle Answers
                        </label>
                    </div>
                    <div style={{ display: "flex" }}>
                        <label>
                            <input type="checkbox" className="my-3 me-2" />
                            Time Limit
                        </label>
                        <input type="number" className="form-control ms-5 me-2 my-2" value={quiz.timeLimit} style={{ width: "12%" }}
                            onChange={(e) =>
                                dispatch(setQuiz({ ...quiz, timeLimit: e.target.value }))
                            } />
                        <label className="my-3">Minutes</label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" className="me-2 mb-2" checked={quiz.multipleAttempts}
                                onChange={(e) =>
                                    dispatch(setQuiz({ ...quiz, multipleAttempts: e.target.checked }))
                                } />
                            Allow Multiple Attempts
                        </label>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-4 text-end">
                        <label>Show Correct Answers</label>
                    </div>
                    <div className="col-md-8">
                        <select className="form-select" style={{ width: "50%" }} value={quiz.showCorrectAnswers}
                            onChange={(e) =>
                                dispatch(setQuiz({ ...quiz, showCorrectAnswers: e.target.value }))
                            }>
                            <option value="immediately" selected>Immediately</option>
                            <option value="notImmediately">Not Immediately</option>
                        </select>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-4 text-end">
                        <label>Access Code</label>
                    </div>
                    <div className="col-md-8">
                        <input type="text" className="form-control" value={quiz.accessCode} style={{ width: "50%" }}
                            onChange={(e) =>
                                dispatch(setQuiz({ ...quiz, accessCode: e.target.value }))
                            } />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-md-4 text-end">
                    </div>
                    <div className="col-md-8">
                        <div>
                            <label>
                                <input type="checkbox" className="mx-2" checked={quiz.oneQuestionAtATime}
                                    onChange={(e) =>
                                        dispatch(setQuiz({ ...quiz, oneQuestionAtATime: e.target.checked }))
                                    } />
                                One Question at a Time
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" className="mx-2" checked={quiz.webcamRequired}
                                    onChange={(e) =>
                                        dispatch(setQuiz({ ...quiz, webcamRequired: e.target.checked }))
                                    } />
                                Webcam Required
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" className="mx-2" checked={quiz.lockQuestionsAfterAnswering}
                                    onChange={(e) =>
                                        dispatch(setQuiz({ ...quiz, lockQuestionsAfterAnswering: e.target.checked }))
                                    } />
                                Lock Questions After Answering
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-2">
                <div className="col-md-4 text-end">
                    <label>Assign</label>
                </div>
                <div className="col-md-8" style={{ width: "50%" }}>
                    <div className="border p-2 rounded">
                        <label><b>Assign to</b></label>
                        <br />
                        <input className="form-control mt-1" value="Everyone" />

                        <label className="mt-2"><b>Due</b></label>
                        <input className="form-control mt-1" type="date" value={quiz.dueDate}
                            onChange={(e) =>
                                dispatch(setQuiz({ ...quiz, dueDate: e.target.value }))
                            } />
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <label><b>Available from</b></label>
                                <input className="form-control w-30 mt-1" type="date" value={quiz.availableFromDate}
                                    onChange={(e) =>
                                        dispatch(setQuiz({ ...quiz, availableFromDate: e.target.value }))
                                    } />
                            </div>
                            <div className="col-md-6">
                                <label><b>Until</b></label>
                                <input className="form-control w-30 mt-1" type="date" value={quiz.availableUntilDate}
                                    onChange={(e) =>
                                        dispatch(setQuiz({ ...quiz, availableUntilDate: e.target.value }))
                                    } />
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <div>
                    <input type="checkbox" id="notify_users" className="me-2 my-3" />
                    <label> Notify users that this quiz has changed</label>
                    <br />
                </div>
                <div>
                    <Link to={`/Kanbas/Courses/${courseId}/Quizzes`} className="btn btn-secondary me-2">
                        Cancel
                    </Link>
                    <button onClick={handleSaveAndPublish} className="btn btn-secondary me-2">
                        Save & Publish
                    </button>
                    <button onClick={handleSave} className="btn btn-danger me-2">
                        Save
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
}
export default QuizEditor;