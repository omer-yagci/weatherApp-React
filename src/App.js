import { ToastContainer } from "react-toastify";
import Input from "./components/Input/Input";
import "./scss/App.scss";

import WeatherCard from "./components/WeatherCard/WeatherCard";
import { useWeatherAppContext } from "./context/Context";
function App() {
  const { loaded } = useWeatherAppContext();
  return (
    <div>
      <Input />
      {loaded && <WeatherCard />}
      <ToastContainer />
    </div>
  );
}

export default App;
