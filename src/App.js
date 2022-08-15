import { ToastContainer } from "react-toastify";
import Input from "./components/Input/Input";
import "./scss/App.scss";

import WeatherCard from "./components/WeatherCard/WeatherCard";
import { useWeatherAppContext } from "./context/Context";
// import Main from "./components/Main/Main";
function App() {
  const { loaded } = useWeatherAppContext();
  return (
    <div>
      <Input />
      {/* <Main /> */}
      {loaded && <WeatherCard />}
      <ToastContainer />
    </div>
  );
}

export default App;
