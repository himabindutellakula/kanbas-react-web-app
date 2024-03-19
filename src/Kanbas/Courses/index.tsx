//import { courses } from "../../Kanbas/Database";
import { useParams, Navigate, Route, Routes, Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "./index.css";

function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb" >
                    <li className="breadcrumb-item"><Link to=""><HiMiniBars3 style={{color: 'red', marginRight: '5px'}}/>{course?.number} {'-'} {course?.name}</Link></li>
                    <Routes>
                        <Route path="Home" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Home</Link></li>} />
                        <Route path="Modules" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Modules</Link></li>} />
                        <Route path="Piazza" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Piazza</Link></li>} />
                        <Route path="Zoom Meetings" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Zoom Meetings</Link></li>} />
                        <Route path="Assignments" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Assignments</Link></li>} />
                        <Route path="Assignments/:assignmentId" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Assignment Editor</Link></li>} />
                        <Route path="Quizzes" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Quizzes</Link></li>} />
                        <Route path="Grades" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Grades</Link></li>} />
                        <Route path="People" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">People</Link></li>} />
                        <Route path="Panapto Video" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Panapto Video</Link></li>} />
                        <Route path="Discussions" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Discussions</Link></li>} />
                        <Route path="Announcements" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Announcements</Link></li>} />
                        <Route path="Pages" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Pages</Link></li>} />
                        <Route path="Files" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Files</Link></li>} />
                        <Route path="Rubrics" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Rubrics</Link></li>} />
                        <Route path="Outcomes" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Outcomes</Link></li>} />
                        <Route path="Collaborations" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Collaborations</Link></li>} />
                        <Route path="Syllabus" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Syllabus</Link></li>} />
                        <Route path="Settings" element={<li className="breadcrumb-item active" aria-current="page"><Link to="">Settings</Link></li>} />
                    </Routes>
                </ol>
            </nav>
            <hr/>
            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="People" element={<h1>People</h1>} />
                        <Route path="ZoomMeetings" element={<h1>Zoom Meetings</h1>} />
                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                        <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
                        <Route path="Discussions" element={<h1>Discussions</h1>} />
                        <Route path="Announcements" element={<h1>Announcements</h1>} />
                        <Route path="Pages" element={<h1>Pages</h1>} />
                        <Route path="Files" element={<h1>Files</h1>} />
                        <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                        <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                        <Route path="Collaborations" element={<h1>Collaborations</h1>} />
                        <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;