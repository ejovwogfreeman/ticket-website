import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ticket from "./pages/Ticket";
import Tickets from "./pages/Tickets";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tickets />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
