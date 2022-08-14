import React from "react";

const Input = () => {
  return (
    <div className="container ">
      <div className="row my-5">
        <form className="d-flex flex-column">
          <div className="mb-3">
            <div className="form-text text-center">
              <h2 className="text-warning">Weather Daily Forecast</h2>
            </div>
            <input type="search" className="form-control" required />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
