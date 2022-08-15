import React from "react";
import { useWeatherAppContext } from "../../context/Context";
import MovieCardStyles from "../WeatherCard/moviecard.module.scss";

const WeatherCard = () => {
  const { datas } = useWeatherAppContext();

  const {
    id,
    name,
    sys: { country },
    weather: {
      0: { description, icon },
    },

    main: { temp },
  } = datas;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <>
      {datas ? (
        <div className={MovieCardStyles.container}>
          <div key={id} className={MovieCardStyles.card}>
            <h4 className={MovieCardStyles["city-name"]}>
              {name.includes("Province") ? name.replace("Province", " ") : name}
              <span className={MovieCardStyles.orange}>
                <sup>{country}</sup>
              </span>
            </h4>
            <p className={MovieCardStyles.degree}>
              {temp.toFixed()}
              <span>
                <sup>°C</sup>
              </span>
            </p>
            <img src={iconURL} alt="icon" />
            <p className={MovieCardStyles["weather-type"]}>{description}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1>Seaaaa</h1>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
