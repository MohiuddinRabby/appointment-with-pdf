import React from "react";
import "./App.css";
import { useState } from "react";
import Info from "./Info";
import { useForm } from "react-hook-form";
const App = () => {
  //useForm to handle values of input
  const { handleSubmit, register, errors } = useForm();
  const [date, setDate] = useState("");
  const [problem, setProblem] = useState("Cardiac");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [data, setData] = useState([]);
  const handleOnSubmit = () => {
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
    setName("");
    setDate("");
    setMobile("");
  };
  return (
    <div className="header">
      <header className="App py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Doctor's appointment</h2>
              <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="form-group">
                  <label>Date</label>
                  <input
                    value={date}
                    type="date"
                    name="date"
                    className="form-control"
                    ref={register({
                      required: "Date Required",
                    })}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  {
                    <p className="text-danger">
                      {errors.date && errors.date.message}
                    </p>
                  }
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
                    name="name"
                    value={name}
                    className="form-control"
                    ref={register({
                      required: "Name Required",
                    })}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p className="text-danger">
                    {errors.name && errors.name.message}
                  </p>
                </div>
                <div className="form-group">
                  <label>Mobile</label>
                  <input
                    type="number"
                    name="phone_number"
                    value={mobile}
                    className="form-control"
                    ref={register({
                      required: "phone number Required",
                    })}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <p className="text-danger">
                    {errors.phone_number && errors.phone_number.message}
                  </p>
                </div>
                <button type="submit" className="btn btn-info">
                  Get Serial
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
