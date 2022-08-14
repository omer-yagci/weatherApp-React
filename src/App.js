import "./scss/App.scss";
import Context from "./context/Context";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <Context>
        <ToastContainer />
      </Context>
    </div>
  );
}

export default App;
