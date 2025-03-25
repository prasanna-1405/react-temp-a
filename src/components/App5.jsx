import { useState } from "react";

export default function App5() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState(""); 
  const handleSubmit = () => {
    if (task.trim() !== "") { 
      setTodos([...todos, task]);
      setTask(""); 
    }
  };

  const handleDelete = (productToDelete) => {
    setProducts(products.filter((product) => product !== productToDelete));
  };


  return (
    <div>
      <h3>This is App5</h3>
      <p>
        <input
          type="text"
          value={task} 
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task"
        />
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <hr />
      <ul>
        {todos.map((value, index) => (
          <li key={index}>
            {value} -{" "}
            <button onClick={() => handleDelete(value)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
}
