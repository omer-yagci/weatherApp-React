import { ToastContainer } from "react-toastify";
import Input from "./components/Input/Input";
import "./scss/App.scss";

import Main from "./components/Main/Main";
function App() {
  return (
    <div className="App">
      <Input />
      <Main />
      <ToastContainer />
    </div>
  );
}

export default App;
