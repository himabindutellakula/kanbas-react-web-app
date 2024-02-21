import "./index.css";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import GradesButtons from "./GradeButtons";

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <div className="container">
            <GradesButtons />
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    {/* <thead>
                        <th>Student Name</th>
                        {as.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead> */}
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            {as.map((assignment) => (
                                <th key={assignment._id}>{assignment.title}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr key={enrollment.user}>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                                        );
                                        return <td key={assignment._id}>{grade?.grade || ""}</td>;
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>


                </table>
            </div>
        </div>
    );
}

export default Grades;