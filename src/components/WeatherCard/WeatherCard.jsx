import React from "react";
import { useWeatherAppContext } from "../../context/Context";
import MovieCardStyles from "../WeatherCard/moviecard.module.scss";

const WeatherCard = () => {
  const { datas } = useWeatherAppContext();

  const {
    id,
    name,
    sys: { country },
    weather: { description, icon },

    main: { temp },
  } = datas;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className={MovieCardStyles.container}>
      <div key={id} className={MovieCardStyles.card}>
        <h4 className={MovieCardStyles["city-name"]}>
          {name}
          <span className={MovieCardStyles.orange}>
            <sup>{country}</sup>
          </span>
        </h4>
        <p className={MovieCardStyles.degree}>{temp}</p>
        <img src={iconURL} alt="icon" />
        <p className={MovieCardStyles["weather-type"]}>
          {description.toLowerCase().charAt(0).toUpperCase() +
            description.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
