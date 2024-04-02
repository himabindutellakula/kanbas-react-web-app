import React, { useState, useEffect } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules
} from "./reducer";
import { KanbasState } from "../../store";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(moduleList)
        findModulesForCourse(courseId)
            .then((modules) => {  console.log(modules);
                dispatch(setModules(modules))}
            );
    }, [courseId]);

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId: string) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };


    return (
        <>
            {/* <!-- Add buttons here --> */}
            <ul className="list-group wd-modules">
                <li className="list-group-item d-flex justify-content-between">
                    <div className="d-flex flex-column" style={{ width: '60%' }}>
                        <input
                            value={module.name}
                            onChange={(e) =>
                                dispatch(setModule({ ...module, name: e.target.value }))
                            }
                            className="form-control mb-2 rounded"
                        />
                        <textarea
                            value={module.description}
                            onChange={(e) =>
                                dispatch(setModule({ ...module, description: e.target.value }))
                            }
                            className="form-control rounded"
                        />
                    </div>
                    <div className="d-flex justify-content-between" style={{ width: '30%', borderLeft: 'none' }}>
                        <button className="btn btn-success mb-2 rounded" style={{ width: '48%', height: '35%' }} onClick={() => handleAddModule()}>
                            Add
                        </button>
                        <button className="btn btn-secondary rounded" style={{ width: '48%', height: '35%' }} onClick={() => handleUpdateModule()}>
                            Update
                        </button>
                    </div>
                </li>


                {moduleList.filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}
                            className="list-group-item">
                            <div>
                                <FaEllipsisV className="me-2" />
                                <FaCaretDown className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <button className="btn btn-danger me-2 rounded" style={{ width: '70px' }}
                                        onClick={() => handleDeleteModule(module._id)}>
                                        Delete
                                    </button>

                                    <button className="btn btn-success me-2 rounded" style={{ width: '60px' }}
                                        onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>

                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                                <p style={{ marginLeft: '47px' }}>{module.description}</p>
                                <p style={{ marginLeft: '47px' }}>{module._id}</p>

                            </div>
                        </li>
                    ))}
            </ul>
        </>
    );
}
export default ModuleList;