/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index.css";
import { AiOutlineStop, AiOutlineCloudDownload } from "react-icons/ai";
import { FaCheckCircle, FaRegBell, FaCalendarAlt } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { CiBullhorn } from "react-icons/ci";


function Status() {
    return (


        <div className=" wd-modules-container cust-subcol-right flex-grow-0 me-2 d-none d-lg-block wd-publish">
            <h5>Course Status</h5>
            <div>
                <button type="button" className="btn btn-outline-secondary unpublished"  style={{ marginRight: '5px' }}><AiOutlineStop style={{ marginRight: '5px' }}/>Unpublish</button>
                <button type="button" className="btn btn-success published"><FaCheckCircle style={{ marginRight: '5px' }}/>Published</button>
            </div>
            <ul>
                <li><a href=""><button type="button" className="btn btn-outline-secondary" style={{ marginTop: '2px' }}><CiImport style={{ marginRight: '5px' }}/>Import Existing Content</button></a></li>
                <li><a href=""><button type="button" className="btn btn-outline-secondary" style={{ marginTop: '2px' }}><AiOutlineCloudDownload style={{ marginRight: '5px' }}/>Import From Commons</button></a></li>
                <li><a href=""><button type="button" className="btn btn-outline-secondary" style={{ marginTop: '2px' }}><FaHome style={{ marginRight: '5px' }}/>Choose Home Page</button></a></li>
                <li><a href=""><button type="button" className="btn btn-outline-secondary" style={{ marginTop: '2px' }}><IoBarChartSharp style={{ marginRight: '5px' }}/>View Course Stream</button></a></li>
                <li><a href=""><button type="button" className="btn btn-outline-secondary" style={{ marginTop: '2px' }}><CiBullhorn style={{ marginRight: '5px' }}/>New Announcement</button></a></li>
                <li><a href=""><button type="button" className="btn btn-outline-secondary" style={{ marginTop: '2px' }}><IoBarChartSharp style={{ marginRight: '5px' }}/>New Analytics</button></a></li>
                <li><a href=""><button type="button" className="btn btn-outline-secondary" style={{ marginTop: '2px' }}><FaRegBell style={{ marginRight: '5px' }}/>View Course Notifications</button></a></li>
            </ul>
            <div className="upcoming">
                <span className="coming-up">Coming Up</span>
                <span className="view-calendar"><FaCalendarAlt /><a href="#">View Calendar</a></span>
            </div>
            <hr />
            <ul>
                <li><FaCalendarAlt /><span><a href="#">Lecture </a><br />CS4550.12631.202410<br /> Sep 7 at 11:45am</span></li>
                <li><FaCalendarAlt /><span><a href="#">Lecture </a><br />CS4550.12631.202410<br /> Sep 11 at 11:45am</span></li>
                <li><FaCalendarAlt /><span><a href="#">Lecture </a><br />CS5610.06 SP23<br /> Sep 11 at 6pm</span></li>

            </ul>

        </div>

    );
}
export default Status