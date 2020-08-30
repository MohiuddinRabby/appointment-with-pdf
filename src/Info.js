import React from "react";
import Pdf from "react-to-pdf";
const Info = (props) => {
  const ref = React.createRef();
  const { name, date, mobile, problem, serial } = props.data;
  return (
    <>
      <h5>Download the receipt:</h5>
      <div className="card py-5" ref={ref}>
        <div className="card-body">
          <h4>Doctor's Chamber</h4>
          <h5 className="card-text">Serial: {serial}</h5>
          <h5 className="card-text">Name: {name}</h5>
          <h5 className="card-text">Problem: {problem}</h5>
          <h5 className="card-text">Mobile: {mobile}</h5>
          <h5 className="card-text">Date: {date}</h5>
        </div>
        <p className="text-danger">* must show the receipt in chamber</p>
      </div>
      <br />
      <Pdf targetRef={ref} filename={`${name}_receipt.pdf`}>
        {({ toPdf }) => (
          <button onClick={toPdf} className="btn btn-info btn-sm">
            Download receipt
          </button>
        )}
      </Pdf>
    </>
  );
};

export default Info;
