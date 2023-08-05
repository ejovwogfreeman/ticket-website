import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ticket from "./components/Ticket";
import Tickets from "./components/Tickets";
import Edit from "./components/Edit";
import Create from "./components/Create";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ticket />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
