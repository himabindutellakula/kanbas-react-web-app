import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);
    const API = `${API_BASE}/a5/todos`;
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    // const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const [todos, setTodos] = useState<{ id: number; title: string; description: string; due: string; completed: boolean; }[]>([]);

    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    const createTodo = async () => {
        const response = await axios.post(API);
        setTodos([...todos, response.data]);
    };

    const removeTodo = async (todo: { id: any; }) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };

    const deleteTodo = async (todo: { id: number; }) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        }
        catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    const updateTodo = async () => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div>
            <h3>Working with Arrays</h3>
            <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: parseInt(e.target.value)
                })} style={{ width: '250px' }} />
            <br />
            <input className="my-2" type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} style={{ width: '250px' }} />
            <br />
            <textarea value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })} style={{ width: '250px' }} />
            <br />
            <input value={todo.due} type="date"
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })} style={{ width: '250px' }} />
            <br />
            <label>
                <input className="my-2 me-2" value={todo.completed.toString()} type="checkbox"
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })} />
                Completed
            </label>
            <br />
            <button onClick={postTodo} className="btn btn-warning" style={{ width: '250px' }}> Post Todo </button>
            <br />
            <button onClick={updateTodo} className="btn btn-secondary mt-2" style={{ width: '250px' }}> Update Todo </button>
            <br />
            <button onClick={createTodo} className="btn btn-primary my-2" style={{ width: '250px' }}>
                Create Todo
            </button>
            <br />
            <button onClick={updateTitle} className="btn btn-success my-2" style={{ width: '250px' }}>
                Update Title
            </button>

            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}

            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <input checked={todo.completed}
                            type="checkbox" readOnly className="me-2" />
                        {todo.title} {todo.description} {todo.due}
                        <button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning mx-2">
                            Edit
                        </button>
                        <button onClick={() => deleteTodo(todo)} className="btn btn-danger me-2">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <br />
            <h3>Updating an Item in an Array</h3>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary">
                Update Title to {todo.title}
            </a>

            <h4>Retrieving Arrays</h4>
            <a href={API} className="btn btn-primary">
                Get Todos
            </a>

            <h4>Retrieving an Item from an Array by ID</h4>
            <input className="me-2" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />
            <a href={`${API}/${todo.id}`} className="btn btn-primary ml-2">
                Get Todo by ID
            </a>

            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`} className="btn btn-primary">
                Get Completed Todos
            </a>

            <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`} className="btn btn-primary">
                Create Todo
            </a>

            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`} className="btn btn-primary">
                Delete Todo with ID = {todo.id}
            </a>

            
            <h3>Updating an Item in an Array</h3>
            <label>
                <input className="my-2 me-2" value={todo.completed.toString()} type="checkbox"
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })} />
                Completed  
            </label>
            <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary mx-2 my-2">
                Update Status Completed to {todo.completed}
            </a>
            
            <br/>
            <input type="text" value={todo.description}
                onChange={(e) => setTodo({
                    ...todo, description : e.target.value
                })} />
            <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary mx-2">
                Update description to {todo.description}
            </a>
        </div>
    );
}
export default WorkingWithArrays;

