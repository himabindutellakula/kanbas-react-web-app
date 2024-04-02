import "./index.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../store";
import { addAssignment, setAssignment, updateAssignment } from "../assignmentsReducer";
import { useEffect } from "react";
import * as client from "../client";

function AssignmentEditor() {
    const { assignmentId } = useParams();

    const assignmentList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    const assignment = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignment);

    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddAssignment = () => {
        client.createAssignment(courseId, assignment).then((assignment) => {
            dispatch(addAssignment(assignment));
        });
    };

    const handleUpdateAssignment = async () => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    const handleSave = () => {
        if (assignmentId !== undefined) {
            if (!assignmentId.localeCompare("Editor")) {
                //dispatch(addAssignment({ ...assignment, course: courseId }));
                handleAddAssignment()
            } else {
                //dispatch(updateAssignment(assignment));
                handleUpdateAssignment()
            }
        }
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    useEffect(() => {
        if (assignmentId !== undefined) {
            if (assignmentId.localeCompare("Editor")) {
                const a = assignmentList.find(
                    (assignment) => assignment._id === assignmentId
                );
                dispatch(setAssignment(a));
            }
        }
    }, []);

    return (
        <div className="container">
            <h3>Assignment Name</h3>
            <input type="text" value={assignment?.title}
                className="form-control mb-2"
                onChange={(e) =>
                    dispatch(
                        setAssignment({
                            ...assignment,
                            title: e.target.value,
                        })
                    )
                }
            />
            <br />
            <div className="form-group">
                <textarea className="form-control" id="assignmentDescription" rows={3} value={assignment?.description}
                    onChange={(e) =>
                        dispatch(setAssignment({ ...assignment, description: e.target.value }))
                    }>
                </textarea>
            </div>
            <br />
            <div className="row">
                <div className="col-md-4 text-end">
                    <label className="mx-3">Points</label>
                </div>
                <div className="col-md-8">
                    <input type="number" className="form-control" value={assignment?.points}
                        onChange={(e) =>
                            dispatch(setAssignment({ ...assignment, points: e.target.value }))
                        } />
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-md-4 text-end">
                    <label>Assign</label>
                </div>
                <div className="col-md-8">
                    <div className="border p-2">
                        <label><b>Due</b></label>
                        <input className="form-control" type="date" value={assignment?.dueDate}
                            onChange={(e) =>
                                dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
                            } />
                        <br />
                        <div className="row">
                            <div className="col-md-6">
                                <label><b>Available from</b></label>
                                <input className="form-control w-30" type="date" value={assignment?.availableFromDate}
                                    onChange={(e) =>
                                        dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))
                                    } />
                            </div>
                            <div className="col-md-6">
                                <label><b>Until</b></label>
                                <input className="form-control w-30" type="date" value={assignment?.availableUntilDate}
                                    onChange={(e) =>
                                        dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))
                                    } />
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-secondary me-2 float-end">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger me-2">
                    Save
                </button>
            </div>
            <hr />
        </div>
    );
}
export default AssignmentEditor;

function dispatch(arg0: { payload: any; type: "assignments/updateAssignment"; }) {
    throw new Error("Function not implemented.");
}
