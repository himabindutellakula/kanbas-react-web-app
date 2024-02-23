/* eslint-disable jsx-a11y/anchor-is-valid */
import ModuleList from "./List";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.bundle.min";
function Modules() {
    return (
        <div className="container">
            <div className="wd-modules-buttons row ms-auto">
                <button className="btn btn-outline-secondary me-2 col-auto ms-auto">Collapse All</button>
                <button className="btn btn-outline-secondary me-2 col-auto">View Progress</button>
                <div className="dropdown col-auto" style={{ marginRight:'7px',height: '30px', borderRadius: '5px' }}>
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ padding: '5px 10px', height: '35px', borderRadius: '4px'}}>
                        Publish All
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Publish All</a></li>
                        <li><a className="dropdown-item" href="#">Unpublish All</a></li>
                    </ul>
                </div>
                <button className="btn btn-danger me-2 col-auto" style={{ backgroundColor: '#B22222', color: 'white' }}>+ Module</button>
                <button className="btn btn-outline-secondary col-auto me-2"><FaEllipsisV /></button>
            </div>
            <hr style={{ border: '1px solid black' }} />
            <br />
            <ModuleList />
        </div>
    );
}
export default Modules;