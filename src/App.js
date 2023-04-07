import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <District name="Tangail" specialty="misti and shari"></District>
      <District name="Dhaka" specialty="biriyani"></District>
      <District name="Rajshahi" specialty="mango"></District>
    </div>
  );
}

// adding style using object like style
const componentStyle = {
  backgroundColor: "green",
  border: "5px solid aqua",
  padding: "10px",
  borderRadius: "10px",
  color: "white",
  margin: "20px",
};

function District(props) {
  const [power, setPower] = useState(1);

  const boostPower = () => setPower(power * 2);

  const unboostPower = () => setPower(power / 2);

  return (
    <div style={componentStyle}>
      <h2>Name : {props.name}</h2>
      <h3>Specialty : {props.specialty}</h3>
      <h4>Power : {power}</h4>
      <button onClick={boostPower}>Boost Power 2x</button>
      <button onClick={unboostPower}>Unboost Power 2x</button>
    </div>
  );
}

export default App;
