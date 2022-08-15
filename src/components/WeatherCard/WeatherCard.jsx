import React from "react";
import { useWeatherAppContext } from "../../context/Context";
import MovieCardStyles from "../WeatherCard/moviecard.module.scss";

const WeatherCard = ({ data }) => {
  const { datas } = useWeatherAppContext();
  console.log(datas[0]);
  const { id, name, country, description, icon, temp } = datas[0];

  console.log(id);
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <>
      {datas[0] ? (
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
