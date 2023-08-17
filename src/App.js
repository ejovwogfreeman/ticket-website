import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ticket from "./pages/Ticket";
import Tickets from "./pages/Tickets";
// import Create from "./pages/Create";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Toastify from "./components/Toastify";

function App() {
  return (
    <div className="App">
      <Toastify />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket/:id" element={<Ticket />} />
          {/* <Route element={<ProtectedRoutes />}>
            <Route path="/create" element={<Create />} />
          </Route> */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/tickets" element={<Tickets />} />
          </Route>
          <Route path="/signin" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
