import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "-", "+", "*", "."];

  const updatecalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const declResult = () => {
    setCalc(eval(calc).toString());
    setResult('')
  }

  const deleteCalc = () => {
    setCalc("");
    setResult("");
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updatecalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };
  return (
    <div className="App">
      <div className="calc">
        <div className="display">
          {result ? <span>({result})</span> : ""}
          {/* &nbsp; */}
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updatecalc("/")}>/</button>
          <button onClick={() => updatecalc("*")}>*</button>
          <button onClick={() => updatecalc("+")}>+</button>
          <button onClick={() => updatecalc("-")}>-</button>

          <button onClick={deleteCalc}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updatecalc("0")}>0</button>
          <button onClick={() => updatecalc(".")}>.</button>
          <button onClick={declResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
