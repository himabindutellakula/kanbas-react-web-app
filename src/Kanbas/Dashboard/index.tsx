//import React, { useState } from "react";
import { Link } from "react-router-dom";
//import * as db from "../Database";
function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void;
    }) {
    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />
            <div className="d-flex align-items-center justify-content-between mb-3">
                <h3>Course</h3>
                <div className="d-flex">
                    <button onClick={addNewCourse} className="btn btn-secondary me-2">
                        Add
                    </button>
                    <button onClick={updateCourse} className="btn btn-secondary">
                        Update
                    </button>
                </div>
            </div>


            <div>
                <input
                    value={course.name}
                    className="form-control mb-2"
                    placeholder="Course Name"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })}
                />
                <input
                    value={course.number}
                    className="form-control mb-2"
                    placeholder="Course Number"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })}
                />
                <input
                    value={course.startDate}
                    className="form-control mb-2"
                    type="date"
                    placeholder="Start Date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                />
                <input
                    value={course.endDate}
                    className="form-control mb-2"
                    type="date"
                    placeholder="End Date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                />
            </div>


            <br />
            <h2>Published Courses (8)</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 150 }} alt="" />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name} </Link>
                                    <p className="card-text">{course.name}</p>
                                    {/* <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                        Go </Link> */}

                                    <div className="d-flex justify-content-end"> {/* This div aligns buttons to the left */}
                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }} className="btn btn-secondary me-2">
                                            Edit
                                        </button>
                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;