import React, { useState } from "react";
import { useWeatherAppContext } from "../../context/Context";

const Input = () => {
  const [value, setValue] = useState();

  const { setCountry, getDataFromAPI } = useWeatherAppContext();

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    getDataFromAPI();
    setCountry(value);
    setValue("");
  };

  return (
    <div className="container ">
      <div className="row my-5">
        <form className="d-flex flex-column" onSubmit={formSubmitHandler}>
          <div className="mb-3">
            <div className="form-text text-center">
              <h2 className="text-warning">Weather Daily Forecast</h2>
            </div>
            <input
              type="search"
              onChange={inputChangeHandler}
              className="form-control"
              value={value}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
