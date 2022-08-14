import "./scss/App.scss";
import Context from "./context/Context";
import { ToastContainer } from "react-toastify";
import Input from "./components/Input/Input";
function App() {
  return (
    <div className="App">
      <Context>
        <Input />
        <ToastContainer />
      </Context>
    </div>
  );
}

export default App;
