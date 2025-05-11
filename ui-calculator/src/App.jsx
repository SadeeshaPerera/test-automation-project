import { useState } from "react";
import "./App.css";

function App() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");

  const calculate = async () => {
    const apiResult = await fetch(`/api/${operation}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        val1: parseInt(val1),
        val2: parseInt(val2),
      }),
    });
    const jsonResult = await apiResult.json();
    setResult(jsonResult.result);
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <h2 className="title">Modern Calculator</h2>
        <div className="input-group">
          <input
            type="number"
            data-test="val1"
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
            placeholder="Enter first number"
            className="input-field"
          />
        </div>
        <div className="input-group">
          <select 
            data-test="operation"
            value={operation} 
            onChange={(e) => setOperation(e.target.value)}
            className="select-field"
          >
            <option value="add">Addition (+)</option>
            <option value="subtract">Subtraction (-)</option>
            <option value="multiply">Multiplication (×)</option>
            <option value="divide">Division (÷)</option>
            <option value="power">Power (^)</option>
            <option value="modulo">Modulo (%)</option>
          </select>
        </div>
        <div className="input-group">
          <input
            type="number"
            data-test="val2"
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
            placeholder="Enter second number"
            className="input-field"
          />
        </div>
        <button data-test="calculate" onClick={calculate} className="calc-button">
          Calculate
        </button>
        <div className="result" data-test="result">
          {result && <h3>Result: {result}</h3>}
        </div>
      </div>
    </div>
  );
}

export default App;
