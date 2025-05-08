import { useState } from "react";
import "./App.css";

function App() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");

  const calculate = async () => {
    if (val1 === "" || val2 === "") {
      setResult("Please enter both values.");
      return;
    }

    const response = await fetch("/api/calculate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        val1: parseFloat(val1),
        val2: parseFloat(val2),
        operation,
      }),
    });

    const data = await response.json();
    setResult(data.result ?? "Error occurred");
  };

  return (
    <div className="calculator-container">
      <h2>Awesome Calculator!</h2>
  
      <label>Enter Value 1</label>
      <input
        type="number"
        value={val1}
        onChange={(e) => setVal1(e.target.value)}
      />
  
      <label>Enter Value 2</label>
      <input
        type="number"
        value={val2}
        onChange={(e) => setVal2(e.target.value)}
      />
  
      <label>Select Operation</label>
      <select onChange={(e) => setOperation(e.target.value)} value={operation}>
        <option value="add">Add (+)</option>
        <option value="subtract">Subtract (-)</option>
        <option value="multiply">Multiply (*)</option>
        <option value="divide">Divide (/)</option>
      </select>
  
      <button onClick={calculate}>Calculate</button>
  
      <div className="result-container">
        <label>Result: <strong>{result}</strong></label>
      </div>
    </div>
  );
  
}

export default App;
