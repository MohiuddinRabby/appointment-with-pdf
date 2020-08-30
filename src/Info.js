import React from "react";
import Pdf from "react-to-pdf";
const Info = (props) => {
  const ref = React.createRef();
  const { name, date, mobile, problem, serial } = props.data;
  return (
    <>
      <div className="card py-5" ref={ref}>
        <div className="card-body">
          <h5 className="card-text">Serial: {serial}</h5>
          <h5 className="card-text">Name: {name}</h5>
          <h5 className="card-text">Mobile: {mobile}</h5>
          <h5 className="card-text">Date: {date}</h5>
          <h5 className="card-text">Problem: {problem}</h5>
        </div>
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
