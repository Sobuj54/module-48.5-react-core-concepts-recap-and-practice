import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <District name="Tangail" specialty="misti and shari"></District>
      <District name="Dhaka" specialty="biriyani"></District>
      <District name="Rajshahi" specialty="mango"></District>
      <LoadPosts></LoadPosts>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </div>
  );
}

function Post(props) {
  const { name, email, body } = props.post;
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        border: "5px solid aqua",
        borderRadius: "20px",
        margin: "20px",
      }}>
      <h2>Name: {name}</h2>
      <h3>Email : {email}</h3>
      <h4>Body : {body}</h4>
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
