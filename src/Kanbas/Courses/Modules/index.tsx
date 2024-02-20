/* eslint-disable jsx-a11y/anchor-is-valid */
import ModuleList from "./List";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";
function Modules() {
    return (
        <div>
            <div className="wd-modules-buttons">
                <button className="btn btn-outline-secondary me-2">Collapse All</button>
                <button className="btn btn-outline-secondary me-2">View Progress</button>
                <select className="me-2" style={{ border: '1px solid black',height: '33px', borderRadius: '5px' }}>
                    <option value="Publish All">Publish All</option>
                    <option value="UnPublish All">Unpublish All</option>
                </select>
                <button className="btn btn-danger me-2" style={{ backgroundColor: '#B22222', color: 'white' }}>+ Module</button>
                <button className="btn btn-outline-secondary"><FaEllipsisV /></button>
            </div>
            <hr style={{ border: '1px solid black' }} />
            <br />
            <ModuleList />
        </div>
    );
}
export default Modules;