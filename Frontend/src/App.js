import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    axios
      .get(`http://127.0.0.1:5000/`, { params: { text: text } })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  return (
    <div className="App">
      <h1>Clothing Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter text here"
          style={{ width: "300px", height: "30px", borderRadius: "5px", fontSize: "20px", marginRight: "10px" }}
          required
        />
        <input type="submit" value="Submit" style={{borderRadius: "10px", border: 0, padding: "10px"}} />
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data &&
        data.matches &&
        data.matches.map((item, index) => {
          return (
            <p key={item.id}>
              <a href={item.id} target="_blank" rel="noreferrer">
                {item.id}
              </a>
            </p>
          );
        })}
    </div>
  );
}

export default App;
