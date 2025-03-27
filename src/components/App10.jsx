import { useState, useRef } from "react";

export default function App9() {
  const [number, setNumber] = useState("");
  const [color, setColor] = useState("black");
  const prevNumber = useRef("");

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={(e) => {
          const newNumber = e.target.value;

          if (prevNumber.current) {
            setColor(newNumber > prevNumber.current ? "green" : "red");
          }

          setNumber(prevNumber.current ? `${prevNumber.current}-${newNumber}` : newNumber);
          prevNumber.current = newNumber;
        }}
      />
      <h4 style={{ color }}>{number}</h4>
    </div>
  );
}
