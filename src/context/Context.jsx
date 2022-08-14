import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// import { toastWarnNotify } from "../helpers/Toastify";

// ? Defining context
export const WeatherAppContext = createContext();

// ! Consume function (Custom hook)
export const useWeatherAppContext = () => {
  return useContext(WeatherAppContext);
};

const Context = ({ children }) => {
  const [country, setCountry] = useState();

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&APPID=${API_KEY}`;

  useEffect(() => {}, [country]);
  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get(URL);
      console.log(data);
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { country, setCountry, getDataFromAPI };
  return (
    <WeatherAppContext.Provider value={values}>
      {children}
    </WeatherAppContext.Provider>
  );
};

export default Context;
