import { useState } from "react";

export default function App5() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask(""); // Clear input after submission
    }
  };

  const handleDelete = (taskToDelete) => {
    const index = todos.findIndex((task) => task === taskToDelete);
    if (index !== -1) {
      setTodos(todos.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      <h3>This is App5</h3>
      <p>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleSubmit}>Submit</button>
        <hr />
        <ul>
          {todos.map((value, index) => (
            <li key={index}>
              {value} - <button onClick={() => handleDelete(value)}>Delete</button>
            </li>
          ))}
        </ul>
      </p>
    </div>
  );
}