import React, { useState, useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });

    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;

    const [module, setModule] = useState({
        id: 1, title: "NodeJS Module",
        description: "Creating a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const MODULE_URL = `${API_BASE}/a5/module`;
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);

    return (
        <div>
            <h3>Working With Objects</h3>
            <h3>Modifying Properties</h3>
            <input className="me-2" onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })}
                value={assignment.title} type="text" />
            <button onClick={updateTitle} className="btn btn-primary me-2">
                Update Title to: {assignment.title}
            </button>
            <br/>
            <button onClick={fetchAssignment} className="btn btn-primary me-2">
                Fetch Assignment
            </button>
            <br />
            <br />
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`} className="btn btn-primary me-2">
                Update Title
            </a>
            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />
            <h4>Retrieving Objects</h4>
            <a href={`${API_BASE}/a5/assignment`} className="btn btn-primary">
                Get Assignment
            </a>
            <br />
            <a href={`${API_BASE}/a5/module`} className="btn btn-primary mt-2">
                Get Module
            </a>
            <h4>Retrieving Properties</h4>
            <a href={`${API_BASE}/a5/assignment/title`} className="btn btn-primary">
                Get Assignment Title
            </a>
            <br />
            <a href={`${API_BASE}/a5/module/name`} className="btn btn-primary mt-2">
                Get Module Name
            </a>

        </div>
    );
}
export default WorkingWithObjects;