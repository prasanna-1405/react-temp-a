import { useState, useEffect } from "react";

export default function App8() {
  const [numbers, setNumbers] = useState([]);
  const [inputNumber, setInputNumber] = useState("");
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    const sum = numbers.reduce((currenttotal, num) => currenttotal + Number(num), 0);
    setTotal(sum);
  }, [numbers]);

  const handleSubmit = () => {
    if (inputNumber.trim() !== "" && !isNaN(inputNumber)) {
      setNumbers([...numbers, inputNumber]);
      setInputNumber("");
    }
  };

  const handleDelete = (numToDelete) => {
    setNumbers(numbers.filter((num) => num !== numToDelete));
  };

  return (
    <div>
      <h3>This is App8</h3>
      <p>
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
          placeholder="Enter a number"
        />
        <button onClick={handleSubmit}>Submit</button>
        <hr />
        <h4></h4>
        <ul>
          {numbers.map((num, index) => (
            <li key={index}>
              {num} - <button onClick={() => handleDelete(num)}>Delete</button>
            </li>
          ))}
        </ul>
        <p>Total:{total}</p>
        <p>
         number of items:{numbers.length}</p>
      </p>
    </div>
  );
}