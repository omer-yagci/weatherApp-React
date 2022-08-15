import React from "react";
import { useWeatherAppContext } from "../../context/Context";
import WeatherCardStyles from "../WeatherCard/weathercard.module.scss";

const WeatherCard = () => {
  const { datas } = useWeatherAppContext();

  const { id, name, country, description, icon, temp } = datas[0];

  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <>
      {datas ? (
        <div className={WeatherCardStyles.container}>
          <div key={id} className={WeatherCardStyles.card}>
            <h4 className={WeatherCardStyles["city-name"]}>
              {name.includes("Province") ? name.replace("Province", " ") : name}
              <span className={WeatherCardStyles.orange}>
                <sup>{country}</sup>
              </span>
            </h4>
            <p className={WeatherCardStyles.degree}>
              {temp.toFixed()}
              <span>
                <sup>°C</sup>
              </span>
            </p>
            <img src={iconURL} alt="icon" />
            <p className={WeatherCardStyles["weather-type"]}>{description}</p>
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
