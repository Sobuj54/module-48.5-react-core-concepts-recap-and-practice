import logo from "./logo.svg";
import "./App.css";

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
  return (
    <div style={componentStyle}>
      <h2>Name : {props.name}</h2>
      <h3>Specialty : {props.specialty}</h3>
    </div>
  );
}

export default App;
