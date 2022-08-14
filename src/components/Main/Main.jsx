import { useWeatherAppContext } from "../../context/Context";
import WeatherCard from "../WeatherCard/WeatherCard";

import Mainstyles from "./main.module.scss";

const Main = () => {
  const { data } = useWeatherAppContext();

  return (
    <div className={Mainstyles.container}>
      {data?.map((item, index) => {
        return <WeatherCard key={index} item={item} />;
      })}
    </div>
  );
};

export default Main;
