import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaEllipsisV, FaPlusCircle, FaCaretDown, FaRocket } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { KanbasState } from '../../store';
import { deleteQuiz } from './quizReducer';

function Quizzes() {
    const { courseId } = useParams();
    const quizzesList = useSelector((state: KanbasState) =>
        state.quizReducer.quizzes);
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);
    const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);
    const [showQuestionsForIds, setShowQuestionsForIds] = useState<string[]>([]); // Track the IDs of the quizzes for which questions should be displayed

    const toggleCompletion = (quizId: string) => {
        if (completedQuizzes.includes(quizId)) {
            setCompletedQuizzes(completedQuizzes.filter(id => id !== quizId));
        } else {
            setCompletedQuizzes([...completedQuizzes, quizId]);
        }

        if (showQuestionsForIds.includes(quizId)) {
            setShowQuestionsForIds(showQuestionsForIds.filter(id => id !== quizId));
        } else {
            setShowQuestionsForIds([...showQuestionsForIds, quizId]);
        }
    };

    const isCompleted = (quizId: string) => {
        return completedQuizzes.includes(quizId);
    };

    const handleDeleteQuiz = (quizId: string) => {
        const confirmed = window.confirm('Do you want to delete?');
        if (confirmed) {
            dispatch(deleteQuiz(quizId));
        }
    };

    const handleContextMenuClick = () => {
        setShowDropdown(!showDropdown);
    };

    const getStatus = (quiz: any) => {
        const currentDate = new Date();
        const availableDate = new Date(quiz.availableFromDate);
        const untilDate = new Date(quiz.availableUntilDate);
        const dueDate = new Date(quiz.dueDate);

        if (currentDate > untilDate) {
            return 'Closed';
        } else if (currentDate >= availableDate && currentDate <= untilDate) {
            return 'Available';
        } else {
            return `Not available until ${availableDate.toLocaleDateString()}`;
        }
    };

    return (
        <>
            <div className="d-flex">
                <input className="form-control order-0 w-25 mx-2 border" placeholder="Search for Quiz" />
                <div className="ms-auto wd-modules-buttons dropdown">
                    <Link to={`/Kanbas/Courses/${courseId}/Quizzes/Editor`}>
                        <button className="btn btn-danger mx-2" style={{ backgroundColor: '#B22222', color: 'white' }}>+ Quiz</button>
                    </Link>
                    <button type="button" className="btn btn-secondary dropdown-toggle" onClick={handleContextMenuClick}>
                        <FaEllipsisV />
                    </button>
                    <div className={showDropdown ? "dropdown-menu show" : "dropdown-menu"}>
                        <button className="dropdown-item" onClick={() => console.log("Edit clicked")}>Edit</button>
                        <button className="dropdown-item" onClick={() => console.log("Delete clicked")}>Delete</button>
                        <button className="dropdown-item" onClick={() => console.log("Publish clicked")}>Publish</button>
                    </div>
                </div>
            </div>
            <hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" />
                        <FaCaretDown className="me-2" />
                        Assignment Quizzes
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {quizzesList.filter((quiz) => quiz.course === courseId)
                            .map((quiz, index) => (
                                <li key={index} className="list-group-item">
                                    <Link
                                        to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`} style={{ color: 'black', textDecoration: 'none' }}>
                                        <FaRocket className="mx-2" style={{color: "green"}}/>
                                        {quiz.title}
                                    </Link>
                                    <span className="float-end">
                                        {isCompleted(quiz._id) ? 
                                            <FaCheckCircle className="text-success" onClick={() => toggleCompletion(quiz._id)} /> :
                                            <FaTimesCircle className="text-danger" onClick={() => toggleCompletion(quiz._id)} />
                                        }
                                        <FaEllipsisV className="ms-2" />
                                    </span>
                                    <br />
                                    <span className="me-2" style={{paddingLeft:'30px'}}>Availability: {getStatus(quiz)} | </span>
                                    <span className="me-2">Due date: {quiz.dueDate} | </span>
                                    <span className="me-2">Points: {quiz.points} Pts | </span>
                                    {showQuestionsForIds.includes(quiz._id) && <span>{quiz.numberOfQuestions} Questions</span>}
                                </li>
                            ))}
                    </ul>
                </li>
            </ul>
        </>
    );
}

export default Quizzes;
