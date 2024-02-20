import ModuleList from "./List";
import "./index.css";
function Modules() {
    return (
        <div>
            <div className="wd-modules-buttons">
                <button type="button" className="btn btn-primary me-2">Collapse All</button>
                <button type="button" className="btn btn-primary me-2">View Progress</button>
                <select className="me-2">
                    <option value="Publish All">Publish All</option>
                </select>
                <button type="button" className="btn btn-danger module" style={{ backgroundColor: '#B22222', color: 'white' }}>+ Module</button>
            </div>
            <ModuleList />
        </div>
    );
}
export default Modules;