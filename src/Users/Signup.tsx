import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
    const [error, setError] = useState("");
    const [user, setUser] = useState({ _id: "", username: "", password: "" });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            //setUser({ ...user, _id:Date.now().toString() })
            user._id = Date.now().toString();
            await client.signup(user);
            navigate("/Kanbas/Account/Profile");
        } catch (err: any) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Signup</h1>
            {error && <div style={{color:"red"}}>{error}</div>}
            <div>
                <input
                    className="form-control w-25 my-2"
                    value={user.username}
                    placeholder="Enter Username"
                    onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                    }
                />
                <input
                    className="form-control w-25"
                    value={user.password}
                    placeholder="Enter Password"
                    onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                    }
                />
            </div>
            <button
                className="btn btn-primary my-2"
                onClick={signup}
                style={{width:"25%"}}
            >
                Signup
            </button>
        </div>
    );
}
