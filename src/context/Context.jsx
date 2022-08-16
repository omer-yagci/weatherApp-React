import { createContext, useContext, useEffect, useState } from "react";
import { getDataFromAPI } from "../services/Axiosfunction";

// ! Defining context
export const WeatherAppContext = createContext();

// ! Consume function (Custom hook)
export const useWeatherAppContext = () => {
  return useContext(WeatherAppContext);
};

const Context = ({ children }) => {
  const [country, setCountry] = useState("");

  const [datas, setDatas] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&APPID=${API_KEY}`;

  useEffect(() => {
    getDataFromAPI(URL, datas, country, setDatas);
  }, [country]);

  const values = { setCountry, datas };
  return (
    <WeatherAppContext.Provider value={values}>
      {children}
    </WeatherAppContext.Provider>
  );
};

export default Context;
