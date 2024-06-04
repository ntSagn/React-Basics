// import { memo } from "react";
import { useState } from "react";
import '../assets/calculator.css'
const Calculator = () => {
  const [result, setResult] = useState(0);
  let strInput = "";
  console.log(strInput);
  // strInput = "";
  console.log("child render");
  // Event handler input when enter value by keyboard
  const handleInputChange = (event) => {
    strInput = event.target.value;
  };

  // Event handler input when value changes
  <input type="text" className="inputValue form-control" onChange={handleInputChange} />

  const displayValue = (event) => {
    let value = event.target.value;
    strInput += value;
    console.log(strInput);
    document.querySelector(".inputValue").value = strInput; // display value
  }
  const calculate = () => {
    let inputValue = document.querySelector(".inputValue");
    setResult((result) => eval(inputValue.value));
  }
  console.log(result);

  const refreshForm = () => {
    document.querySelector(".inputValue").value = "";
    strInput = "";
    setResult(0);
  }
  const delValue = () => {
    let inputValue = document.querySelector(".inputValue");
    let str = inputValue.value;
    str = str.slice(0, str.length - 1);
    inputValue.value = str;
    strInput = str;
  }
  return (
    <div className="text-center">
      <h1 className="mb-3">Calculator</h1>
      <div className="container-fluid col-3">
        <div className="row border">
          <input type="text" className="inputValue form-control" onChange={handleInputChange}/>
          <div className="result">{result}</div>
        </div>
        <div className="row button">
          <button className="col-4 border btn btn-secondary" onClick={refreshForm} value="">AC</button>
          <button className="col-4 border btn btn-secondary" onClick={displayValue} value="%">%</button>
          <button className="col-4 border btn btn-secondary" onClick={delValue} value="">DEL</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="1">1</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="2">2</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="3">3</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="4">4</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="5">5</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="6">6</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="7">7</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="8">8</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="9">9</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="0">0</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="+">+</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="-">-</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="*">*</button>
          <button className="col-4 border btn btn-primary" onClick={displayValue} value="/">/</button>
          <button className="col-4 border btn btn-primary" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator
// export default Todos;