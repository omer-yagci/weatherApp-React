import { ToastContainer } from "react-toastify";
import Input from "./components/Input/Input";
import "./scss/App.scss";

import Main from "./components/Main/Main";
function App() {
  return (
    <>
      <Input />
      <Main />
      <ToastContainer />
    </>
  );
}

export default App;
