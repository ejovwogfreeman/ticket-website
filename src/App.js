import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Ticket from "./components/Ticket";
// import Scroll from "./components/Scroll";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Ticket />
        {/* <Scroll /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
