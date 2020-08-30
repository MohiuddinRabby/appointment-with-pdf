import React from "react";
import "./App.css";
import { useState } from "react";
import Info from "./Info";
const App = () => {
  const [date, setDate] = useState();
  const [problem, setProblem] = useState("Cardiac");
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = [
      {
        serial: Math.floor(Math.random() * 50) + 1,
        date: date,
        problem: problem,
        name: name,
        mobile: mobile,
      },
    ];
    setData(info);
  };
  return (
    <div className="header">
      <header className="App py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Doctor's appointment</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Problem Type</label>
                  <select
                    className="form-control"
                    onChange={(e) => setProblem(e.target.value)}
                  >
                    <option value="Cardiac">Cardiac</option>
                    <option value="Eye">Eye</option>
                    <option value="Gastro">Gastro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-md-6">
              {data.map((infos) => (
                <Info data={infos}></Info>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
