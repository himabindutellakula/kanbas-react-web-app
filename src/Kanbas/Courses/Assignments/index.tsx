/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaEdit, FaCaretDown } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div className="d-flex">
                <input className="form-control order-0 w-25 mx-2 border"
                    placeholder="Search for Assignment" />
                <div className="ms-auto wd-modules-buttons">
                    <button className="btn btn-secondary mx-2">+ Group</button>
                    <button className="btn btn-danger mx-2" style={{ backgroundColor: '#B22222', color: 'white' }}>+ Assignment</button>
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
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item">
                                <FaEllipsisV className="me-2" />
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ color: 'black' , textDecoration: 'none'}}><FaEdit className="me-4" />{assignment.title}</Link>
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span><br/>
                                    <span style={{fontSize: 12}}><a style={{color:"red", marginLeft: '65px'}}>   {assignment.module}</a> | {assignment.due} | {assignment.points}</span>
                            </li>))}
                    </ul>
                </li>
            </ul>
        </>
    );
}
export default Assignments;