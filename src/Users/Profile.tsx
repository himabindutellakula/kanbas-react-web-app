import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
    const [message, setMessage] = useState("");
    const [profile, setProfile] = useState({
        _id:"",
        username: "", password: "",
        firstName: "", lastName: "", dob: "", email: "", role: "USER"
    });
    const navigate = useNavigate();
    const fetchProfile = async () => {
        const account = await client.profile();
        console.log(account);
        setProfile(account);
    };
    const save = async () => {
        await client.updateUser(profile);
        setMessage("Saved successfully!");
    };
    const signout = async () => {
        await client.signout();
        navigate("/Kanbas/Account/Signin");
    };


    useEffect(() => {
        fetchProfile();
    }, []);
    return (
        <div className="w-50 container">
            <h1>Account</h1>
            <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning m-2" style={{ width: "100%" }}>
                Users
            </Link>
            {profile && (
                <div>
                    <label>Username:</label>
                    <input
                        className="form-control mb-2"
                        value={profile.username}
                        onChange={(e) =>
                            setProfile({ ...profile, username: e.target.value })
                        }
                    />
                    <label>Password:</label>
                    <input
                        className="form-control mb-2"
                        value={profile.password}
                        onChange={(e) =>
                            setProfile({ ...profile, password: e.target.value })
                        }
                    />
                    <label>First Name:</label>
                    <input
                        className="form-control mb-2"
                        value={profile.firstName}
                        placeholder="Enter First Name"
                        onChange={(e) =>
                            setProfile({ ...profile, firstName: e.target.value })
                        }
                    />
                    <label>Last Name:</label>
                    <input
                        className="form-control mb-2"
                        value={profile.lastName}
                        placeholder="Enter Last Name"
                        onChange={(e) =>
                            setProfile({ ...profile, lastName: e.target.value })
                        }
                    />
                    <label>Date of Birth</label>
                    <input
                        className="form-control mb-2"
                        type="date"
                        value={profile.dob}
                        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                    />
                    <label>Email:</label>
                    <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="Enter Email"
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                    <label>Role:</label>
                    <select
                        className="form-select mb-2"
                        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <button
                        className="btn btn-primary"
                        onClick={save}
                        style={{ marginTop: '3px', width:"48%" }}
                    >
                        Save
                    </button>
                    <button className="btn btn-danger mx-2" onClick={signout} style={{ marginTop: '3px', width:"48%" }}>
                        Signout
                    </button>
                    {message && <div style={{color:"green"}}>{message}</div>}    
                </div>
            )}
        </div>
    );
}
