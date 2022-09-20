import { GlobalState } from "./Global/GlobalState";
import { GlobalStyle } from "./Pages/GlobalStyle";
import Router from "./Routes/Router";

function App() {
  return (
    <>
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>

    </>
  );
}

export default App;
