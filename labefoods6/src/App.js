import { ToastContainer } from "react-toastify";
import { GlobalState } from "./Global/GlobalState";
import { GlobalStyle } from "./Pages/GlobalStyle";
import Router from "./Routes/Router";
// import 'react-toastify/dist/ReactToastify.min.css'


function App() {
  return (
    <>
      <GlobalState>
        <GlobalStyle />
        <Router />
        {/* <ToastContainer/> */}
      </GlobalState>

    </>
  );
}

export default App;
