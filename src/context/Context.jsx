import { createContext, useContext, useState } from "react";
import axios from "axios";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/Toastify";

// ? Defining context
export const WeatherAppContext = createContext();

// ! Consume function (Custom hook)
export const useWeatherAppContext = () => {
  return useContext(WeatherAppContext);
};

const Context = ({ children }) => {
  const [country, setCountry] = useState("");

  const [datas, setDatas] = useState([]);

  // const [loaded, setLoaded] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&APPID=${API_KEY}`;
  const getDataFromAPI = async () => {
    if (country === "") {
      toastErrorNotify("Required field cannot left blank");
    } else {
      try {
        const { data } = await axios.get(URL);
        console.log(data);
        const { id, name } = data;

        const checkCity = datas.some((weatherCard) => weatherCard.id === id);
        if (checkCity) {
          toastWarnNotify(
            ` ${name}  Already exist.Please enter another city name..`
          );
        } else {
          newWeatherCard(data);
          toastSuccessNotify("Valid DATA");
        }
      } catch (error) {
        toastWarnNotify(`${country}  not found!`);
      }
    }
  };

  const newWeatherCard = (data) => {
    const {
      id,
      name,
      sys: { country },
      weather: {
        0: { description, icon },
      },

      main: { temp },
    } = data;
    setDatas([{ id, name, country, description, icon, temp }, ...datas]);
  };

  const values = { setCountry, getDataFromAPI, datas };
  return (
    <WeatherAppContext.Provider value={values}>
      {children}
    </WeatherAppContext.Provider>
  );
};

export default Context;
