import WeatherCard from "../WeatherCard/WeatherCard";
import { useWeatherAppContext } from "../../context/Context";
import Mainstyles from "./main.module.scss";

const Main = () => {
  const { datas } = useWeatherAppContext();

  return (
    <div className={Mainstyles.container}>
      {datas?.map((item, index) => (
        <WeatherCard key={index} data={item} />
      ))}
    </div>
  );
};

export default Main;
