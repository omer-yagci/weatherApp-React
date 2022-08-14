import WeatherCard from "../WeatherCard/WeatherCard";
import { useWeatherAppContext } from "../../context/Context";

import Mainstyles from "./main.module.scss";

const Main = () => {
  // const { datas } = useWeatherAppContext();
  // console.log(datas);

  return <div className={Mainstyles.container}></div>;
};

export default Main;
