/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaEdit, FaCaretDown } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { deleteAssignment, setAssignments } from "./assignmentsReducer";
import * as client from "./client";
import { useEffect } from "react";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    const dispatch = useDispatch();

    const handleDeleteAssignment = (assignmentId: string) => {
        client.deleteAssignment(assignmentId).then((status) => {
            dispatch(deleteAssignment(assignmentId));
        });
    };

    useEffect(() => {
        client.findAssignmentsForCourse(courseId)
            .then((assignments) =>
                dispatch(setAssignments(assignments))
            );
    }, [courseId]);


    return (
        <>
            <div className="d-flex">
                <input className="form-control order-0 w-25 mx-2 border"
                    placeholder="Search for Assignment" />
                <div className="ms-auto wd-modules-buttons">
                    <button className="btn btn-secondary mx-2">+ Group</button>
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/Editor`}>
                        <button className="btn btn-danger mx-2" style={{ backgroundColor: '#B22222', color: 'white' }}>+ Assignment</button>
                    </Link>
                    <button type="button" className="btn btn-secondary"><FaEllipsisV /></button>
                </div>
            </div>
            <hr />
            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" />
                        <FaCaretDown className="me-2" />
                        ASSIGNMENTS
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.filter((assignment) => assignment.course === courseId)
                            .map((assignment, index) =>
                            (
                                <li key={index} className="list-group-item">
                                    <FaEllipsisV className="me-2" />
                                    <Link
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ color: 'black', textDecoration: 'none' }}><FaEdit className="me-4" />{assignment.title}</Link>
                                    <span className="float-end">
                                        <button className="btn btn-danger me-2 rounded" style={{ width: '55px' }}
                                            onClick={() => handleDeleteAssignment(assignment._id)}
                                        >Delete</button>
                                        <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span><br />
                                    <span style={{ fontSize: 12 }}><a style={{ color: "red", marginLeft: '65px' }}> Due: {assignment.dueDate}</a> | Available From: {assignment.availableFromDate} |  Available Until: {assignment.availableUntilDate} | {assignment.points} Pts</span>
                                </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;