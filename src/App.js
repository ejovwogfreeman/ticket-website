import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Ticket from "./components/Ticket";
import Tickets from "./components/Tickets";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Ticket />
      </BrowserRouter>
    </div>
  );
}

export default App;
