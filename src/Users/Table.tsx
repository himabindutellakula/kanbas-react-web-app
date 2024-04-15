import React, { useState, useEffect } from "react";
import * as client from "./client";
import { User } from "./client";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil } from "react-icons/bs";
export default function UserTable() {
    const [users, setUsers] = useState<User[]>([]);
    const [user, setUser] = useState<User>({
        _id: "", username: "", password: "", firstName: "",
        lastName: "", role: "USER"
    });
    const createUser = async () => {
        try {
            user._id = Date.now().toString();
            const newUser = await client.createUser(user);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };
    const deleteUser = async (user: User) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };
    const selectUser = async (user: User) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    };
    const updateUser = async () => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const status = await client.updateUser(user);
            setUsers(users.map((u) =>
                (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };
    const [role, setRole] = useState("USER");
    const fetchUsersByRole = async (role: string) => {
        const users = await client.findUsersByRole(role);
        setRole(role);
        setUsers(users);
    };

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => { fetchUsers(); }, []);
    
    return (
        <div className="container-fluid">
            <select
                onChange={(e) => fetchUsersByRole(e.target.value)}
                value={role || "USER"}
                className="form-control w-25 float-end"
            >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <h1>User Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>&nbsp;</th>
                    </tr>
                    <tr>
                        <td>
                            <input value={user.username} placeholder="Enter username" onChange={(e) =>
                                setUser({ ...user, username: e.target.value })} className="me-2 form-control"/>
                        </td>
                        <td>
                            <input className="form-control" value={user.password} placeholder="Enter password" onChange={(e) =>
                                setUser({ ...user, password: e.target.value })} />
                        </td>
                        <td>
                            <input className="form-control" value={user.firstName} placeholder="Enter first name" onChange={(e) =>
                                setUser({ ...user, firstName: e.target.value })} />
                        </td>
                        <td>
                            <input className="form-control" value={user.lastName} placeholder="Enter last name" onChange={(e) =>
                                setUser({ ...user, lastName: e.target.value })} />
                        </td>
                        <td>
                            <select className="form-control" value={user.role} onChange={(e) =>
                                setUser({ ...user, role: e.target.value })}>
                                <option value="USER">User</option>
                                <option value="ADMIN">Admin</option>
                                <option value="FACULTY">Faculty</option>
                                <option value="STUDENT">Student</option>
                            </select>
                        </td>
                        <td className="text-nowrap">
                            <BsFillCheckCircleFill
                                onClick={updateUser}
                                className="me-2 text-success fs-1 text"
                            />
                            <BsPlusCircleFill onClick={createUser}
                                className="me-2 text-success fs-1 text"
                            />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user._id}>
                            
                                <td>{user.username}</td>
                                <td></td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.role}</td>
                                <td className="text-nowrap">
                                    <button onClick={() => deleteUser(user)} className="btn btn-danger text mx-2">
                                        <BsTrash3Fill />
                                    </button>
                                    <button onClick={() => selectUser(user)} className="btn btn-warning text">
                                        <BsPencil />
                                    </button>
                                </td>
                            
                        </tr>))}
                </tbody>
            </table>
        </div>
    );
}

