import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState<User>({
        _id: "",
        username: "", password: "", firstName: "", lastName: "", role: "USER"
    });
    const navigate = useNavigate();
    const signin = async () => {
        try {
            await client.signin(credentials);
            navigate("/Kanbas/Account/Profile");
        } catch (err: any) {
            setError(err.response.data.message);
        }
    };
    const signup = () => {
        navigate("/Kanbas/Account/Signup");
    }
    return (
        <div className="container">
            <h1>Signin</h1>
            {error && <div style={{color:"red"}}>{error}</div>}
            <div>
                <input
                    className="form-control w-25 my-2"
                    value={credentials.username}
                    placeholder="Enter Username"
                    onChange={(e) =>
                        setCredentials({ ...credentials, username: e.target.value })
                    }
                />
                <input
                    className="form-control w-25"
                    value={credentials.password}
                    placeholder="Enter Password"
                    onChange={(e) =>
                        setCredentials({ ...credentials, password: e.target.value })
                    }
                />
            </div>
            <button
                className="btn btn-primary my-2"
                onClick={signin}
                style={{ width: "25%" }}
            >
                Signin
            </button>
            <br />
            <button
                className="btn btn-secondary my-2"
                onClick={signup}
                style={{ width: "25%" }}
            >
                Don't have an account? Signup
            </button>
        </div>
    );
}
