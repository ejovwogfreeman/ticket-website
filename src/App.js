import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ticket from "./pages/Ticket";
import Tickets from "./pages/Tickets";
// import Edit from "./pages/Edit";
import Create from "./pages/Create";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Ticket />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/create" element={<Create />} />
          </Route>
          {/* <Route element={<ProtectedRoutes />}>
            <Route path="/edit/:id" element={<Edit />} />
          </Route> */}
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
