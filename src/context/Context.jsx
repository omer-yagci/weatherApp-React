import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toastWarnNotify } from "../helpers/Toastify";

// ? Defining context
export const WeatherAppContext = createContext();

// ! Consume function (Custom hook)
export const useWeatherAppContext = () => {
  return useContext(WeatherAppContext);
};

const Context = ({ children }) => {
  const [data, setData] = useState();

  const values = { data, setData };
  return (
    <WeatherAppContext.Provider value={values}>
      {children}
    </WeatherAppContext.Provider>
  );
};

export default Context;
