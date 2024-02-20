import Modules from "../Modules";
import "./index.css";
import Status from "./status";

function Home() {
    return (
        <div className="d-flex" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="flex-fill" style={{ overflowY: 'auto' }}>
                <ul className="list-group wd-modules">
                    <Modules />
                </ul>
            </div>
            <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "300px" }}>
                <Status />
            </div>
        </div>
    );
}
export default Home;
