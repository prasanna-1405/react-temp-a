import { useState, useRef } from "react";

export default function App9() {
  const inputRef = useRef();
  const sizeRef = useRef();
  const [color, setColor] = useState("");
  const [fontSize, setFontSize] = useState("16px");

  const handleSubmit = () => {
    const inputColor = inputRef.current.value.trim();
    const sizeValue = parseInt(sizeRef.current.value.trim());

    setColor(inputColor === "blue" || inputColor === "red" ? inputColor : "");
    setFontSize(!isNaN(sizeValue) && sizeValue > 0 ? `${sizeValue}px` : "16px");

    console.log("Color:", inputColor, "Font Size:", sizeValue);
  };

  return (
    <div>
      <input 
        type="text" 
        ref={inputRef} 
        placeholder="Enter color" 
      />
      <input 
        type="number" 
        ref={sizeRef} 
        placeholder="Enter font size" 
      />
      <button onClick={handleSubmit}>Submit</button>
      <h4 style={{ color, fontSize }}>Hello World</h4>
    </div>
  );
}
