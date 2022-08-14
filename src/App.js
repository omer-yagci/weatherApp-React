import "./scss/App.scss";
import Context from "./context/Context";
import { ToastContainer } from "react-toastify";
import Input from "./components/Input/Input";
import Main from "./components/Main/Main";
function App() {
  return (
    <div className="App">
      <Context>
        <Input />
        <Main />
        <ToastContainer />
      </Context>
    </div>
  );
}

export default App;
