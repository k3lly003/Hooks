import { useState } from "react";
import "./App.css";

function App() {
  /*INPUT-TEXT HOOK*/
  const [change, setChange] = useState("");
  function handleChange() {
    setCount();
  }
  /*INPUT-RANGE HOOK*/
  const [range, setRange] = useState(0);
  function handleRange() {
    setRange((prev) => prev + 1);
  }
  return (
    <>
      {/* UI CODES */}
      <div className="container">
        <h2>Estimate price calculator</h2>
        <div className="st-qu">
          <div className="div1">
            <p>Storage quotes</p>
          </div>
          <div className="div2">
            <ul>
              <li>0TB</li>
              <li>50TB</li>
              <li>100TB</li>
            </ul>
          </div>
        </div>
        <div className="st-qu-low">
          <input type="number" className="input" onChange={handleChange} />
          <input type="range" className="range" value="0" />
        </div>
        <div className="st-qu">
          <div className="div1">
            <p>Transfer quota</p>
          </div>
          <div className="div2">
            <ul>
              <li>0TB</li>
              <li>50TB</li>
              <li>100TB</li>
            </ul>
          </div>
        </div>
        <div className="st-qu-low">
          <input type="number" className="input" />
          <input type="range" className="range" value="0" />
        </div>
      </div>
      <div className="low-cont">
        <h2>Total monthly estimate</h2>
        <p>
          Rwf<span></span>
        </p>
        <span>rwf/month</span>
      </div>
    </>
  );
}

export default App;
